# Quick Start Guide

## Run the Development Server

```bash
npm run dev
```

Then open your browser to `http://localhost:5173`

## What You'll See

A dark-themed landing page with:
- Fixed navigation header with Fingenie logo
- Hero section with AI-focused marketing copy
- Three overlapping phone mockups showcasing your app screens
- Floating AI insight card
- Call-to-action buttons
- Platform download icons
- Footer links

## Making Changes

### Update Text Content
Edit `src/components/Hero.tsx`:
- Line 10: AI badge text
- Line 12-14: Main headline
- Line 16-19: Subtitle/description
- Line 22-23: Button text

### Update Colors
Edit `src/index.css` CSS variables:
```css
--bg-primary: #0a0a0f;        /* Main background */
--accent-purple: #8b5cf6;     /* Primary accent */
--accent-blue: #3b82f6;       /* Secondary accent */
```

### Replace Phone Images
1. Add new images to `public/images/`
2. Update paths in `src/components/PhoneStack.tsx` (lines 7-15)

### Adjust Layout
- Hero layout: `src/components/Hero.css`
- Phone positioning: `src/components/PhoneStack.css`
- Navigation: `src/components/HeaderNav.css`

## Hot Reload

The dev server supports hot module replacement (HMR). Changes to code will automatically refresh in the browser.

## Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## Common Tasks

### Add a new section
1. Create component in `src/components/`
2. Import and add to `src/App.tsx`

### Change fonts
Update font-family in `src/index.css` body selector

### Add animations
Use CSS transitions/animations in component `.css` files

### Optimize images
Replace images in `public/images/` with optimized versions (WebP recommended)

## Need Help?

- Check browser console for errors
- Run `npm run lint` to check for code issues
- See README.md for full documentation
- See DEPLOYMENT.md for deployment instructions
