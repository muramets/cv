// ===== FILE: resume.js =====
// Description: Interactive functionality for the resume page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize collapsible sections
    initCollapsibleSections();
    
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize keyboard shortcuts
    initKeyboardShortcuts();
    
    // Add loading animation
    initLoadingAnimation();
});

function initCollapsibleSections() {
    const sectionTitles = document.querySelectorAll('.sectionGroupTitle');
    
    sectionTitles.forEach(title => {
        const targetId = title.getAttribute('data-section');
        const targetContent = document.getElementById(targetId);
        
        if (!targetContent) return;
        
        // Check if section should be expanded by default
        const isDefaultExpanded = title.classList.contains('expanded');
        
        if (!isDefaultExpanded) {
            // Set initial state (collapsed)
            targetContent.classList.remove('expanded');
            title.classList.remove('expanded');
        }
        
        // Add click event listener
        title.addEventListener('click', function() {
            const isExpanded = targetContent.classList.contains('expanded');
            
            if (isExpanded) {
                // Collapse
                targetContent.classList.remove('expanded');
                title.classList.remove('expanded');
                
                // Add subtle animation feedback
                addClickFeedback(title);
            } else {
                // Expand
                targetContent.classList.add('expanded');
                title.classList.add('expanded');
                
                // Add subtle animation feedback
                addClickFeedback(title);
                
                // Smooth scroll to section after expansion
                setTimeout(() => {
                    title.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }, 100);
            }
        });
        
        // Add keyboard support
        title.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                title.click();
            }
        });
        
        // Make focusable
        if (!title.hasAttribute('tabindex')) {
            title.setAttribute('tabindex', '0');
        }
    });
}

function addClickFeedback(element) {
    element.style.transform = 'scale(0.98)';
    setTimeout(() => {
        element.style.transform = '';
    }, 100);
}

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    // Available themes (could be extended)
    const themes = [
        { name: 'gruvbox-dark', displayName: 'Gruvbox Dark' },
        { name: 'monkeytype-default', displayName: 'Monkeytype' },
        { name: 'high-contrast', displayName: 'High Contrast' }
    ];
    
    let currentThemeIndex = 0;
    
    // Load saved theme or default
    const savedTheme = localStorage.getItem('resume-theme') || 'gruvbox-dark';
    const savedIndex = themes.findIndex(theme => theme.name === savedTheme);
    if (savedIndex !== -1) {
        currentThemeIndex = savedIndex;
    }
    
    // Apply theme (for now just cycle through class names on body)
    function applyTheme(themeIndex) {
        const theme = themes[themeIndex];
        document.body.className = theme.name;
        localStorage.setItem('resume-theme', theme.name);
        
        // Update button text
        const themeText = themeToggle.querySelector('.theme-name');
        if (themeText) {
            themeText.textContent = theme.displayName;
        }
    }
    
    // Add theme name display
    const themeNameSpan = document.createElement('span');
    themeNameSpan.className = 'theme-name';
    themeToggle.appendChild(themeNameSpan);
    
    // Apply initial theme
    applyTheme(currentThemeIndex);
    
    // Toggle theme on click
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        applyTheme(currentThemeIndex);
        
        // Add visual feedback
        addClickFeedback(themeToggle);
    });
}

function initSmoothScrolling() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Only activate shortcuts when not in form fields
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        switch(e.key.toLowerCase()) {
            case 'e':
                // Toggle Executive Summary
                toggleSection('executive');
                break;
            case 'b':
                // Toggle Background
                toggleSection('background');
                break;
            case 'm':
                // Toggle Motivation
                toggleSection('motivation');
                break;
            case 't':
                // Toggle theme
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    document.getElementById('themeToggle')?.click();
                }
                break;
            case 'h':
                // Show help
                showKeyboardHelp();
                break;
            case 'escape':
                // Close any open modals or help
                closeHelp();
                break;
        }
    });
}

function toggleSection(sectionId) {
    const button = document.querySelector(`[data-section="${sectionId}"]`);
    if (button) {
        button.click();
    }
}

function showKeyboardHelp() {
    // Create or show help modal
    let helpModal = document.getElementById('keyboard-help');
    
    if (!helpModal) {
        helpModal = document.createElement('div');
        helpModal.id = 'keyboard-help';
        helpModal.className = 'help-modal';
        helpModal.innerHTML = `
            <div class="help-content">
                <div class="help-header">
                    <h3><i class="fas fa-keyboard"></i> Keyboard Shortcuts</h3>
                    <button class="close-help" aria-label="Close help">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="help-body">
                    <div class="shortcut-group">
                        <h4>Sections</h4>
                        <div class="shortcut"><kbd>E</kbd> Toggle Executive Summary</div>
                        <div class="shortcut"><kbd>B</kbd> Toggle Background</div>
                        <div class="shortcut"><kbd>M</kbd> Toggle Motivation</div>
                    </div>
                    <div class="shortcut-group">
                        <h4>Interface</h4>
                        <div class="shortcut"><kbd>Ctrl</kbd> + <kbd>T</kbd> Change Theme</div>
                        <div class="shortcut"><kbd>H</kbd> Show/Hide Help</div>
                        <div class="shortcut"><kbd>Esc</kbd> Close Help</div>
                    </div>
                </div>
            </div>
        `;
        
        // Add styles for help modal
        const helpStyles = document.createElement('style');
        helpStyles.textContent = `
            .help-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.3s ease, visibility 0.3s ease;
            }
            
            .help-modal.visible {
                opacity: 1;
                visibility: visible;
            }
            
            .help-content {
                background-color: var(--sub-alt-color);
                border: 2px solid var(--main-color);
                border-radius: 0.5rem;
                padding: 2rem;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
            }
            
            .help-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 1.5rem;
                border-bottom: 1px solid var(--sub-color);
                padding-bottom: 1rem;
            }
            
            .help-header h3 {
                color: var(--main-color);
                margin: 0;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .close-help {
                background: none;
                border: none;
                color: var(--sub-color);
                font-size: 1.2rem;
                cursor: pointer;
                padding: 0.25rem;
                transition: color 0.125s ease;
            }
            
            .close-help:hover {
                color: var(--main-color);
            }
            
            .shortcut-group {
                margin-bottom: 1.5rem;
            }
            
            .shortcut-group h4 {
                color: var(--text-color);
                margin-bottom: 0.75rem;
                font-size: 1rem;
            }
            
            .shortcut {
                display: flex;
                align-items: center;
                gap: 1rem;
                margin-bottom: 0.5rem;
                color: var(--text-color);
                font-size: 0.9rem;
            }
            
            .shortcut kbd {
                background-color: var(--bg-color);
                color: var(--main-color);
                padding: 0.25rem 0.5rem;
                border-radius: 0.25rem;
                border: 1px solid var(--sub-color);
                font-family: 'Roboto Mono', monospace;
                font-size: 0.8rem;
                min-width: 2rem;
                text-align: center;
            }
        `;
        
        document.head.appendChild(helpStyles);
        document.body.appendChild(helpModal);
        
        // Add event listeners
        helpModal.querySelector('.close-help').addEventListener('click', closeHelp);
        helpModal.addEventListener('click', function(e) {
            if (e.target === helpModal) {
                closeHelp();
            }
        });
    }
    
    helpModal.classList.add('visible');
}

function closeHelp() {
    const helpModal = document.getElementById('keyboard-help');
    if (helpModal) {
        helpModal.classList.remove('visible');
    }
}

function initLoadingAnimation() {
    // Add staggered animation to sections on load
    const sections = document.querySelectorAll('.settingsGroup');
    
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 150);
    });
    
    // Animate hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(-20px)';
        heroSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add scroll indicator for long sections
function initScrollIndicator() {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.innerHTML = '<div class="scroll-progress"></div>';
    
    const styles = document.createElement('style');
    styles.textContent = `
        .scroll-indicator {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: var(--sub-alt-color);
            z-index: 999;
        }
        
        .scroll-progress {
            height: 100%;
            background-color: var(--main-color);
            width: 0%;
            transition: width 0.1s ease;
        }
    `;
    
    document.head.appendChild(styles);
    document.body.appendChild(scrollIndicator);
    
    const updateScrollProgress = debounce(() => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        scrollIndicator.querySelector('.scroll-progress').style.width = scrolled + '%';
    }, 10);
    
    window.addEventListener('scroll', updateScrollProgress);
}

// Initialize scroll indicator
initScrollIndicator();

// Add konami code easter egg
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    // Fun animation when konami code is entered
    const hero = document.querySelector('.hero-section');
    if (hero) {
        hero.style.transform = 'rotateY(360deg)';
        hero.style.transition = 'transform 1s ease';
        
        setTimeout(() => {
            hero.style.transform = '';
        }, 1000);
    }
    
    // Show secret message
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--main-color);
        color: var(--bg-color);
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        z-index: 1001;
        font-family: 'Roboto Mono', monospace;
        text-align: center;
        opacity: 0;
        transition: opacity 0.5s ease;
    `;
    message.innerHTML = `
        <div style="font-size: 1.2rem; margin-bottom: 0.5rem;">🎉 Easter Egg Found!</div>
        <div style="font-size: 0.9rem;">Thanks for exploring! This resume was built with love for clean code and systems thinking.</div>
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 500);
    }, 3000);
}
