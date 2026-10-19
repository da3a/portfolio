# Project Summary: Jenny Raphael Therapies Portfolio

This is a **professional multi-page static website** for Jenny Raphael Therapies, a holistic therapy practice in Abergavenny, Monmouthshire. The site showcases complementary therapy services including massage, aromatherapy, reflexology, and Hopi ear candles.

## Frameworks & Technologies

### Core Stack
- **HTML5** - 7 semantic pages (home, about, massage, aromatherapy, reflexology, candles, contact)
- **SCSS/Sass** - Modern CSS preprocessing with modular architecture
- **Vanilla JavaScript (ES6+)** - Interactive menu functionality

### Build Tools
- **Webpack 5** - Module bundler and build system
- **Babel** - ES6+ transpilation for browser compatibility
- **PostCSS/Autoprefixer** - CSS vendor prefixing
- **cssnano** - CSS minification

### External Dependencies
- **Google Fonts** (Solway, Courier Prime, Black Han Sans)
- **Font Awesome 5.7.0** - Social media icons
- **gh-pages** - GitHub Pages deployment

## Architecture

### File Structure
```
src/              → Source files (HTML, JS, images)
scss/             → Modular SCSS (_config, _menu, _mobile, main)
dist/             → Production build output
webpack.config.js → Build configuration
```

### SCSS Architecture
Partial-based system with:
- `_config.scss` - Variables, mixins, functions, media query helpers
- `_menu.scss` - Navigation styles
- `_mobile.scss` - Responsive breakpoints (500px, 768px, 1170px)
- `main.scss` - Main entry importing all partials

## Main Features

### Interactive Elements
- **Animated hamburger menu** - Transforms to X with click
- **Full-screen slide-in navigation** - Overlay with staggered item animations
- **Responsive design** - 4 breakpoints for mobile-first layout
- **Current page highlighting** - Active nav state

### Design Features
- Hero background image with opacity overlay
- CSS Grid layouts for content sections
- Circular portrait branding in menu
- Professional footer with therapy membership badge
- Hardware-accelerated CSS animations (translate3d)

### Advanced SCSS Features
- Dynamic text color functions based on background lightness (scss/_config.scss)
- Mixins for transitions and responsive breakpoints
- Sass for-loops for automated animation delays
- Modern `@use` syntax (replacing deprecated `@import`)

## Build & Deployment

### Build Process
1. Webpack bundles JavaScript → `dist/bundle.js`
2. SCSS compiled & extracted → `dist/bundle.css`
3. HTML processed through HtmlWebPackPlugin
4. Images copied to `dist/images/`

### NPM Scripts
- `npm run build` - Production build
- `npm run sass` - Watch SCSS changes
- `npm run proddeploy` - Deploy to GitHub Pages
- `npm run devdeploy` - Deploy development version

### Pages
1. **index.html** - Homepage with hero section
2. **about.html** - About Jenny, appointments, location, testimonials
3. **massage.html** - Therapeutic massage and Indian head massage
4. **aroma.html** - Aromatherapy services
5. **reflex.html** - Reflexology information
6. **candles.html** - Hopi ear candles treatment
7. **contact.html** - Contact information (email, phone, address)

## Technical Highlights

This is a well-architected modern static site using industry-standard tooling and following best practices for:
- Modular CSS architecture
- Responsive design
- Progressive enhancement
- Build optimization
- Automated deployment

**Repository:** github.com/da3a/portfolio.git
**Deployment:** GitHub Pages
