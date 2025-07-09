# GeoDa Docusaurus Site

This is the new Docusaurus-based website for GeoDa, migrated from the original static HTML site. The site maintains the same visual design and content while providing a modern, maintainable codebase.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- pnpm (recommended) or npm

### Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
newsite/
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx        # Main hero section
│   │   ├── MainContent.tsx # Main content sections
│   │   ├── Slideshow.tsx   # Image slideshow component
│   │   ├── Dependencies.tsx # Dependencies section
│   │   ├── Footer.tsx      # Footer section
│   │   └── *.module.css    # CSS modules for components
│   ├── pages/              # React pages
│   │   ├── index.tsx       # Homepage
│   │   ├── download.tsx    # Download page (redirect)
│   │   ├── support.tsx     # Support page (redirect)
│   │   ├── cheatsheet.tsx  # Cheat sheet page (redirect)
│   │   ├── documentation.tsx # Documentation page (redirect)
│   │   └── index-cn.tsx    # Chinese homepage (redirect)
│   ├── css/
│   │   └── custom.css      # Global styles
│   └── docs/               # Documentation (Markdown)
├── static/                 # Static assets
│   ├── img/               # Images (copied from original)
│   ├── *.js               # JavaScript files
│   └── *.css              # CSS files
├── docusaurus.config.ts   # Docusaurus configuration
├── sidebars.ts           # Documentation sidebar
└── package.json          # Dependencies and scripts
```

## 🎨 Design System

The site maintains the original GeoDa design with:

- **Color Scheme**: Green gradient (#155799 to #159957)
- **Typography**: Open Sans font family
- **Layout**: Responsive design with mobile-first approach
- **Components**: Modular React components with CSS modules

### Key Components

1. **Hero Section** (`Hero.tsx`)
   - Main title and tagline
   - Navigation buttons
   - Responsive design

2. **Main Content** (`MainContent.tsx`)
   - Feature sections
   - Image galleries
   - Embedded videos

3. **Slideshow** (`Slideshow.tsx`)
   - Interactive image slideshow
   - Uses better-simple-slideshow library
   - Responsive image display

4. **Footer** (`Footer.tsx`)
   - Acknowledgments
   - Support information
   - Contact details
   - Donation links

## 🔧 Development

### Available Scripts

- `pnpm start` - Start development server
- `pnpm build` - Build for production
- `pnpm serve` - Serve production build locally
- `pnpm deploy` - Deploy to GitHub Pages
- `pnpm typecheck` - Run TypeScript type checking

### Adding New Pages

1. Create a new `.tsx` file in `src/pages/`
2. Export a default React component
3. Use the `Layout` component for consistent styling

Example:
```tsx
import React from 'react';
import Layout from '@theme/Layout';

export default function NewPage(): React.JSX.Element {
  return (
    <Layout
      title="Page Title"
      description="Page description"
    >
      <div>
        {/* Your content here */}
      </div>
    </Layout>
  );
}
```

### Adding New Components

1. Create a new `.tsx` file in `src/components/`
2. Create a corresponding `.module.css` file for styles
3. Import and use in pages as needed

### Styling

- Use CSS modules for component-specific styles
- Global styles go in `src/css/custom.css`
- Follow the existing color scheme and typography
- Ensure responsive design for all components

## 📦 Migration Details

### What Was Migrated

- ✅ All images and static assets
- ✅ CSS styles and layouts
- ✅ Main content and text
- ✅ Navigation structure
- ✅ Google Analytics integration
- ✅ Responsive design

### What Was Improved

- 🔄 Modular React components
- 🔄 TypeScript support
- 🔄 Better development experience
- 🔄 Improved maintainability
- 🔄 Modern build system
- 🔄 Better SEO optimization

### Temporary Redirects

Some pages currently redirect to the original HTML versions:
- `/download` → `/download.html`
- `/support` → `/support.html`
- `/cheatsheet` → `/cheatsheet.html`
- `/documentation` → `/documentation.html`
- `/index-cn` → `/index-cn.html`

These will be migrated to full Docusaurus pages in future updates.

## 🚀 Deployment

The site is configured for GitHub Pages deployment:

1. Build the site:
   ```bash
   pnpm build
   ```

2. Deploy to GitHub Pages:
   ```bash
   pnpm deploy
   ```

The site will be available at: `https://geodacenter.github.io/newsite/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `pnpm start`
5. Submit a pull request

## 📄 License

This project is part of the GeoDa project and follows the same licensing terms.

## 🆘 Support

For issues related to this Docusaurus site:
- Check the [Docusaurus documentation](https://docusaurus.io/)
- Review the component structure and styling
- Ensure all dependencies are properly installed

For GeoDa software support:
- Visit the [original support page](https://geodacenter.github.io/support.html)
- Contact: spatial@uchicago.edu
