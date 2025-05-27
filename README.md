# Ilya Blinov - Resume Website

A modern, interactive resume website built in the style of [Monkeytype](https://monkeytype.com/), featuring a clean design, collapsible sections, and smooth animations.

## 🚀 Live Demo

[View Live Resume](https://yourusername.github.io/resume) *(Update with your GitHub Pages URL)*

## ✨ Features

- **Monkeytype-inspired Design**: Clean, minimal interface with Gruvbox Dark theme
- **Interactive Sections**: Collapsible content areas with smooth animations
- **Keyboard Navigation**: Full keyboard support with shortcuts
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Subtle transitions and loading effects
- **Theme Support**: Built-in theme switching capability
- **Print Friendly**: Optimized styles for printing
- **Easter Eggs**: Hidden interactions for curious visitors
- **Accessibility**: Full keyboard navigation and screen reader support

## 📁 Project Structure

```
resume/
├── index.html              # Main HTML file
├── css/                    # Stylesheets
│   ├── 00_theme_gruvbox_dark.css
│   ├── 01_font_roboto_mono.css
│   ├── 02_core_layout.css
│   ├── 03_typography.css
│   ├── 04_buttons.css
│   ├── 05_inputs.css
│   ├── 06_navigation.css
│   ├── 07_footer_styles.css
│   ├── 08_settings_page.css
│   └── resume.css          # Resume-specific styles
├── js/
│   └── resume.js           # Interactive functionality
└── README.md               # This file
```

## 🛠️ Setup Instructions

### Option 1: GitHub Pages (Recommended)

1. **Fork or create a new repository**
   ```bash
   git clone https://github.com/yourusername/resume.git
   cd resume
   ```

2. **Copy all files to your repository**
   - Copy `index.html` to the root
   - Create `css/` folder and copy all CSS files
   - Create `js/` folder and copy `resume.js`

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save and wait for deployment

4. **Access your resume**
   - Your resume will be available at: `https://yourusername.github.io/resume`

### Option 2: Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/resume.git
   cd resume
   ```

2. **Serve locally**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   - Navigate to `http://localhost:8000`

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `E` | Toggle Executive Summary |
| `B` | Toggle Background section |
| `M` | Toggle Motivation section |
| `Ctrl/Cmd + T` | Change theme |
| `H` | Show/hide keyboard help |
| `Esc` | Close help modal |

**Easter Egg**: Try the Konami Code! ↑↑↓↓←→←→BA

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit the hero section in `index.html`
2. **Experience**: Modify the Background sections
3. **Skills**: Update the skills grids in each experience section
4. **Contact Info**: Change contact details in the hero section

### Styling

1. **Colors**: Modify variables in `css/00_theme_gruvbox_dark.css`
2. **Fonts**: Update font imports in `css/01_font_roboto_mono.css`
3. **Layout**: Adjust spacing and layout in `css/resume.css`

### Adding New Themes

1. Create a new theme file (e.g., `css/00_theme_custom.css`)
2. Define color variables following the existing pattern
3. Add theme to the themes array in `js/resume.js`

## 🔧 Technical Details

### Dependencies

- **Font Awesome 6.4.0**: For icons
- **Google Fonts**: Roboto Mono font family
- **No JavaScript frameworks**: Pure vanilla JS for maximum performance

### Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

### Performance

- Lightweight: < 50KB total
- Fast loading with optimized CSS
- Smooth 60fps animations
- Print-optimized styles

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🚀 Deployment Tips

### GitHub Pages

1. Ensure all file paths are relative
2. Use lowercase filenames
3. Test locally before pushing
4. Check the GitHub Pages build status

### Custom Domain

1. Add a `CNAME` file with your domain
2. Configure DNS settings at your domain provider
3. Enable HTTPS in repository settings

### CDN Optimization

For faster global loading:
1. Consider using a CDN for CSS/JS files
2. Optimize images (if you add any)
3. Enable Gzip compression

## 🤝 Contributing

Found a bug or want to improve something?

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from [Monkeytype](https://monkeytype.com/)
- Color scheme based on Gruvbox theme
- Icons provided by Font Awesome
- Typography using Roboto Mono

## 📞 Contact

**Ilya Blinov**
- Email: murametsoo7@gmail.com
- LinkedIn: [linkedin.com/in/iliablinov](https://linkedin.com/in/iliablinov)
- Location: Cyprus

---

Built with ❤️ and attention to detail. Perfect for developers, product managers, and anyone who appreciates clean, functional design.
