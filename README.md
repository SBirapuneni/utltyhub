# UtltyHub - Main Landing Page

A modern, SEO-optimized landing page hub for UtltyHub.com that showcases all utility app subdomains.

## 🚀 Features

- **Modern Next.js 14** with App Router and TypeScript
- **Dark Mode Support** with system preference detection
- **SEO Optimized** with meta tags, sitemap, and robots.txt
- **Responsive Design** works on all devices
- **Fast Performance** with optimized components
- **Zero Data Collection** - Privacy-first approach
- **Subdomain Navigation** - Easy access to all utility apps
- **Google Analytics** integration for tracking
- **Google AdSense** ready for monetization

## 📦 Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons

## � Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Google Analytics account (optional, for tracking)
- Google AdSense account (optional, for monetization)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd utltyhub
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your IDs:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
utltyhub/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   ├── robots.ts          # Robots.txt configuration
│   └── sitemap.ts         # Sitemap configuration
├── components/            # React components
│   ├── AdUnit.tsx         # AdSense ad unit component
│   ├── CallToAction.tsx   # CTA section
│   ├── Features.tsx       # Features section
│   ├── Footer.tsx         # Site footer
│   ├── GoogleAdsense.tsx  # AdSense integration
│   ├── GoogleAnalytics.tsx # GA4 integration
│   ├── Header.tsx         # Site header
│   ├── Hero.tsx           # Hero section
│   ├── ThemeProvider.tsx  # Dark mode provider
│   └── UtilityCategories.tsx # Utility categories grid
├── public/                # Static files
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Git ignore rules
├── next.config.mjs       # Next.js configuration
├── package.json          # Dependencies
├── postcss.config.mjs    # PostCSS configuration
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🌐 Subdomain Structure

The main hub at `utltyhub.com` links to various utility subdomains:

- **calculators.utltyhub.com** - Financial, health, and scientific calculators (Live)
- **converters.utltyhub.com** - Unit, currency, and format converters (Coming Soon)
- **generators.utltyhub.com** - Password, UUID, QR code generators (Coming Soon)
- **devtools.utltyhub.com** - Developer utilities (Coming Soon)
- And more...

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional)
   - `NEXT_PUBLIC_ADSENSE_ID` (optional)
4. Configure the custom domain `utltyhub.com`
5. Deploy!

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## 💰 Monetization Setup

See [ADSENSE_ANALYTICS_SETUP.md](ADSENSE_ANALYTICS_SETUP.md) for complete instructions on:
- Setting up Google Analytics
- Configuring Google AdSense
- Adding ad units to pages
- Best practices for ad placement

### Other Platforms

```bash
# Build the production version
npm run build

# Start the production server
npm start
```

## 🎨 Customization

### Colors

Edit the color scheme in [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  primary: {
    // Customize these values
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  },
}
```

### Adding New Utility Categories

Edit [components/UtilityCategories.tsx](components/UtilityCategories.tsx):

```typescript
const categories = [
  {
    name: 'Your Category',
    description: 'Description here',
    icon: YourIcon,
    link: 'https://subdomain.utltyhub.com',
    color: 'from-blue-500 to-cyan-500',
    available: true,
  },
  // ...
];
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔒 Privacy

All tools run entirely in the user's browser. No data is sent to servers or stored anywhere. This ensures complete privacy and security for all users.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

- Email: contact@utltyhub.com
- Feedback: feedback@utltyhub.com

## 🗺️ Roadmap

- [x] Main landing page
- [x] Dark mode support
- [x] SEO optimization
- [x] Calculators subdomain
- [ ] Converters subdomain
- [ ] Generators subdomain
- [ ] Developer tools subdomain
- [ ] Design tools subdomain
- [ ] Text tools subdomain
- [ ] Data tools subdomain
- [ ] Security tools subdomain

---

Built with ❤️ by the UtltyHub Team
