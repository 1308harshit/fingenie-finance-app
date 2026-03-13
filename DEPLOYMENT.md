# Deployment Guide for Fingenie Landing Page

## Quick Start

1. Build the project:
```bash
npm run build
```

2. The `dist/` folder contains all production files ready for deployment.

## Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

3. Configure custom domain `fingenie.vurlex.in` in Vercel dashboard.

### Option 2: Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod --dir=dist
```

3. Configure custom domain in Netlify dashboard.

### Option 3: GitHub Pages

1. Add to `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/', // or '/repo-name/' if not using custom domain
})
```

2. Build and deploy:
```bash
npm run build
npx gh-pages -d dist
```

3. Configure custom domain in GitHub repository settings.

### Option 4: Traditional Hosting (cPanel, etc.)

1. Build the project:
```bash
npm run build
```

2. Upload contents of `dist/` folder to your web server's public directory.

3. Configure your domain `fingenie.vurlex.in` to point to the hosting server.

## Custom Domain Setup

For `fingenie.vurlex.in`:

1. Add DNS records:
   - Type: A or CNAME
   - Name: fingenie
   - Value: Your hosting provider's IP/domain

2. Wait for DNS propagation (can take up to 48 hours).

3. Configure SSL certificate (most hosting providers offer free Let's Encrypt SSL).

## Environment Variables

This is a static site with no environment variables needed. All configuration is in the source code.

## Performance Optimization

The build is already optimized with:
- Code splitting
- Minification
- Tree shaking
- Asset optimization

For additional performance:
- Enable gzip/brotli compression on your server
- Configure CDN (Cloudflare, etc.)
- Set proper cache headers for static assets

## Troubleshooting

### Images not loading
- Ensure `public/images/` folder is included in deployment
- Check image paths in `PhoneStack.tsx` use `/images/` prefix

### Blank page after deployment
- Check browser console for errors
- Verify `base` path in `vite.config.ts` matches deployment path
- Ensure all files from `dist/` were uploaded

### Routing issues
- This is a single-page app with no routing
- If adding routing later, configure server for SPA (redirect all routes to index.html)
