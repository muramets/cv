# 🚀 Quick Start Guide - Updated Version

Get your resume website up and running in 5 minutes with **exact Monkeytype styling**!

## ✨ What's New in This Version

- **🎨 Exact Monkeytype Colors**: Pixel-perfect color matching from screenshots
- **📐 Centered Layout**: Content properly centered with empty sides like Monkeytype
- **🔤 Matching Typography**: Same fonts, sizes, and spacing as Monkeytype
- **📱 Perfect Section Headers**: Exact replica of Monkeytype settings sections
- **⚡ Improved Responsiveness**: Better mobile experience

## Method 1: GitHub Pages (Recommended)

### Step 1: Create Repository
```bash
# Create new repository on GitHub named 'resume'
# or fork this repository
```

### Step 2: Upload Files
Create this folder structure in your repository:
```
resume/
├── index.html
├── css/
│   ├── 00_theme_monkeytype.css     ← NEW: Updated with exact Monkeytype colors
│   ├── 01_font_roboto_mono.css
│   ├── 02_core_layout.css          ← UPDATED: Simplified center layout
│   ├── 03_typography.css
│   ├── 04_buttons.css
│   ├── 05_inputs.css
│   ├── 06_navigation.css           ← UPDATED: Monkeytype header style
│   ├── 07_footer_styles.css
│   ├── 08_settings_page.css
│   └── resume.css                  ← COMPLETELY REWRITTEN: Exact Monkeytype styling
├── js/
│   └── resume.js
├── package.json
├── .gitignore
└── README.md
```

### Step 3: Enable GitHub Pages
1. Go to repository **Settings**
2. Scroll to **Pages** section
3. Source: **Deploy from a branch**
4. Branch: **main**
5. Folder: **/ (root)**
6. Click **Save**

### Step 4: Access Your Site
- Your resume will be live at: `https://yourusername.github.io/resume`
- It may take a few minutes to deploy

## Method 2: Local Development

### Prerequisites
- Node.js (optional, for development server)
- Git

### Setup
```bash
# Clone repository
git clone https://github.com/yourusername/resume.git
cd resume

# Install dependencies (optional)
npm install

# Start development server
npm start
# OR
python -m http.server 8000
# OR simply open index.html in browser
```

### Access
- Open `http://localhost:8000` in your browser

## 📝 Customization Checklist

### Essential Updates
- [ ] **Name & Title**: Update hero section in `index.html`
- [ ] **Contact Info**: Email, phone, LinkedIn, location
- [ ] **Experience**: Replace with your work history
- [ ] **Skills**: Update skill categories and items
- [ ] **Education**: Modify education section
- [ ] **Links**: Update LinkedIn and other profile links

### Optional Updates
- [ ] **Colors**: Modify theme in `css/00_theme_gruvbox_dark.css`
- [ ] **Fonts**: Change fonts in `css/01_font_roboto_mono.css`
- [ ] **Icons**: Replace Font Awesome icons
- [ ] **Sections**: Add/remove content sections
- [ ] **Animations**: Adjust timing in `js/resume.js`

## 🎨 Quick Theme Customization

### Exact Monkeytype Colors (Already Applied)
In `css/00_theme_monkeytype.css`:
```css
:root {
  --bg-color: #323437;        /* Dark background */
  --text-color: #d1d0c5;      /* Light text */
  --main-color: #e2b714;      /* Yellow accent */
  --sub-color: #646669;       /* Muted text */
  --hover-color: #3c3e41;     /* Hover backgrounds */
}
```

### Alternative Color Schemes
```css
/* Monkeytype Blue Variant */
--main-color: #7fb3d3;
--caret-color: #7fb3d3;

/* Monkeytype Purple Variant */
--main-color: #c792ea;
--caret-color: #c792ea;

/* Monkeytype Green Variant */
--main-color: #98c379;
--caret-color: #98c379;
```

## 🔧 Troubleshooting

### Common Issues

**Site not loading on GitHub Pages?**
- Check repository is public
- Verify files are in root directory
- Wait 5-10 minutes for deployment
- Check Pages settings

**Styles not applying?**
- Verify CSS file paths in `index.html`
- Check file names match exactly (case-sensitive)
- Clear browser cache

**JavaScript not working?**
- Check console for errors (F12)
- Verify `js/resume.js` path in `index.html`
- Ensure files are UTF-8 encoded

### File Path Issues
Make sure all paths in `index.html` are relative:
```html
<!-- Correct -->
<link rel="stylesheet" href="css/resume.css">
<script src="js/resume.js"></script>

<!-- Incorrect -->
<link rel="stylesheet" href="/css/resume.css">
<script src="/js/resume.js"></script>
```

## 📱 Testing Checklist

Before going live, test:
- [ ] Desktop view (1920x1080)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px)
- [ ] All sections expand/collapse
- [ ] Keyboard shortcuts work
- [ ] Print layout (Ctrl/Cmd + P)
- [ ] All links work correctly

## 🚀 Go Live!

Once everything looks good:
1. Commit all changes to your repository
2. Push to GitHub
3. Share your resume URL: `https://yourusername.github.io/resume`

## 💡 Pro Tips

- **Custom Domain**: Add `CNAME` file for custom domain
- **Analytics**: Add Google Analytics if needed
- **SEO**: Update meta tags in `<head>`
- **Performance**: Images should be optimized (if added)
- **Updates**: Keep content current, update regularly

## 🆘 Need Help?

- **Issues**: Create issue on GitHub repository
- **Questions**: Contact via LinkedIn or email
- **Improvements**: Submit pull request

---

**Your professional resume website awaits! 🎉**
