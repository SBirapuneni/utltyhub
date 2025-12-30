# Deployment Guide

This guide covers deploying the UtltyHub landing page to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Prerequisites
- GitHub, GitLab, or Bitbucket account
- Vercel account (free tier available)

### Steps

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Vercel will auto-detect Next.js settings

3. **Configure Domain**
   - Go to Project Settings > Domains
   - Add `utltyhub.com`
   - Update your DNS records:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Environment Variables
No environment variables are needed for the basic setup.

## 🌊 Netlify

### Steps

1. **Build Command**
   ```bash
   npm run build
   ```

2. **Publish Directory**
   ```
   .next
   ```

3. **Domain Configuration**
   - Add custom domain `utltyhub.com`
   - Update DNS records as provided by Netlify

## 🐳 Docker Deployment

### Dockerfile

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Update `next.config.mjs`:

```javascript
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
};
```

### Build and Run

```bash
# Build the Docker image
docker build -t utltyhub-landing .

# Run the container
docker run -p 3000:3000 utltyhub-landing
```

## ☁️ AWS Amplify

### Steps

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Connect your Git repository

2. **Build Settings**
   Amplify should auto-detect Next.js. Verify:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Domain**
   - Add custom domain in Amplify Console
   - Follow DNS configuration steps

## 🔧 VPS / Custom Server

### Using PM2

1. **Install PM2**
   ```bash
   npm install -g pm2
   ```

2. **Build and Start**
   ```bash
   npm run build
   pm2 start npm --name "utltyhub" -- start
   pm2 save
   pm2 startup
   ```

### Using Nginx as Reverse Proxy

```nginx
server {
    listen 80;
    server_name utltyhub.com www.utltyhub.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 📊 Performance Optimization

### After Deployment

1. **Enable Analytics**
   - Vercel Analytics (if using Vercel)
   - Google Analytics
   - Plausible Analytics (privacy-friendly)

2. **Monitor Performance**
   - Check Lighthouse scores
   - Monitor Core Web Vitals
   - Set up uptime monitoring

3. **CDN Configuration**
   - Most platforms include CDN by default
   - Ensure static assets are cached

## 🔐 SSL/HTTPS

Most modern platforms (Vercel, Netlify, Amplify) provide automatic SSL certificates via Let's Encrypt.

For custom servers:
```bash
# Using Certbot
sudo certbot --nginx -d utltyhub.com -d www.utltyhub.com
```

## 🌍 DNS Configuration

### Recommended DNS Records

```
Type: A
Name: @
Value: [Your server IP or platform IP]

Type: CNAME
Name: www
Value: [Your domain or platform domain]

Type: CNAME
Name: calculators
Value: [Calculator subdomain target]
```

## 📈 Post-Deployment Checklist

- [ ] Domain is accessible via HTTPS
- [ ] www and non-www both work
- [ ] Dark mode works correctly
- [ ] All links are functional
- [ ] Sitemap is accessible at `/sitemap.xml`
- [ ] Robots.txt is accessible at `/robots.txt`
- [ ] Page loads in under 3 seconds
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags are present
- [ ] Analytics tracking is set up

## 🆘 Troubleshooting

### Build Fails

1. Check Node.js version (18+)
2. Clear `.next` folder and `node_modules`
3. Run `npm install` again
4. Check for TypeScript errors

### 404 on Refresh

Next.js handles routing - ensure your platform supports SPA routing:
- Vercel: Works by default
- Netlify: Add `_redirects` file
- Others: Configure server rewrites

### Styles Not Loading

1. Check build output for CSS generation
2. Verify Tailwind configuration
3. Check CSP headers if configured

---

Need help? Contact us at contact@utltyhub.com
