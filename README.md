# Fingenie - AI-Powered Finance Assistant

A pixel-perfect landing page for Fingenie, an AI-powered finance and budgeting application. Built with React, TypeScript, and Vite.

## Features

- 🎨 Dark, modern UI inspired by premium finance apps
- 📱 Responsive design (desktop, tablet, mobile)
- ✨ AI-focused branding and messaging
- 🖼️ Interactive phone mockup showcase with hover effects
- 🎯 Smooth animations and transitions
- 🚀 Fast performance with Vite

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features (gradients, backdrop-filter, animations)

## Project Structure

```
src/
├── components/
│   ├── HeaderNav.tsx       # Top navigation with logo
│   ├── HeaderNav.css
│   ├── Hero.tsx            # Main hero section with content
│   ├── Hero.css
│   ├── PhoneStack.tsx      # Phone mockups showcase
│   └── PhoneStack.css
├── App.tsx                 # Main app component
├── App.css                 # App-level styles
├── index.css               # Global styles and CSS variables
└── main.tsx                # Entry point

public/
└── images/                 # Phone mockup images
    ├── image1.jpeg
    ├── image2.jpeg
    └── image3.jpeg
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This site is designed to be deployed at `fingenie.vurlex.in`. You can deploy the `dist/` folder to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any other static hosting provider

## Design Highlights

### Color Palette
- Background: Dark gradients (#0a0a0f → #13131a → #1a1a2e)
- Accent: Purple to Blue gradient (#8b5cf6 → #3b82f6)
- Text: White primary, gray secondary

### Key Components

1. **HeaderNav**: Fixed navigation with Fingenie logo and links
2. **Hero**: Two-column layout with marketing copy and CTAs
3. **PhoneStack**: Three overlapping phone mockups with hover animations and AI insight card

### Responsive Breakpoints
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## Customization

### Update Content
Edit `src/components/Hero.tsx` to change:
- Tagline and subtitle
- CTA button text
- Platform links
- Footer links

### Update Styling
- Global colors: `src/index.css` (CSS variables)
- Component styles: Individual `.css` files in `src/components/`

### Replace Images
Place new phone mockup images in `public/images/` and update references in `src/components/PhoneStack.tsx`

## License

Private project for Fingenie.

## Contact

For questions about this project, please contact the development team.
