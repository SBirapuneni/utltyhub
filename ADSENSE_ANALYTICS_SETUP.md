# Google AdSense & Analytics Setup Guide

This guide will help you set up Google AdSense and Google Analytics on your UtltyHub landing page.

## 📊 Google Analytics Setup

### 1. Create a Google Analytics Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Admin" (gear icon)
3. Click "Create Property"
4. Fill in property details:
   - Property name: "UtltyHub"
   - Select your timezone and currency
5. Click "Next" and complete the setup
6. Under "Data Streams", click "Add stream" → "Web"
7. Enter your website URL: `https://utltyhub.com`
8. Copy your **Measurement ID** (starts with `G-`)

### 2. Add to Your Project

1. Create a `.env.local` file in the project root:
   ```bash
   cp .env.local.example .env.local
   ```

2. Add your Measurement ID:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. Restart your dev server:
   ```bash
   npm run dev
   ```

### 3. Verify Installation

1. Visit your local site: http://localhost:3000
2. Open browser DevTools → Network tab
3. Look for requests to `googletagmanager.com`
4. Or use [Google Tag Assistant](https://tagassistant.google.com/)

---

## 💰 Google AdSense Setup

### 1. Sign Up for Google AdSense

1. Go to [Google AdSense](https://www.google.com/adsense/)
2. Click "Get Started"
3. Sign in with your Google account
4. Fill in your website details
5. Connect your site to AdSense

### 2. Get Your Publisher ID

1. Log in to AdSense dashboard
2. Go to "Account" → "Account information"
3. Copy your **Publisher ID** (starts with `ca-pub-`)

### 3. Add to Your Project

Add to your `.env.local` file:
```env
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
```

### 4. Verify Your Site

1. AdSense will ask you to add a verification code
2. The code is already loaded via `GoogleAdsense` component
3. Go back to AdSense and click "Verify"
4. Wait for approval (can take 1-3 days)

### 5. Create Ad Units

Once approved:

1. In AdSense dashboard, go to "Ads" → "By ad unit"
2. Click "Display ads"
3. Create a new ad unit
4. Choose ad type (Responsive, Fixed size, etc.)
5. Copy the **Ad slot ID** (10-digit number)

### 6. Add Ad Units to Pages

Update the `adSlot` values in your pages:

**Homepage** ([app/page.tsx](app/page.tsx)):
```tsx
<AdUnit 
  adSlot="YOUR_AD_SLOT_ID_1" 
  adFormat="horizontal"
/>
```

**About Page** ([app/about/page.tsx](app/about/page.tsx)):
```tsx
import { AdUnit } from "@/components/AdUnit";

// Add after the main content
<AdUnit 
  adSlot="YOUR_AD_SLOT_ID_2" 
  adFormat="auto"
/>
```

### 7. Ad Placement Best Practices

✅ **Good Placements:**
- Between content sections
- After the hero section
- Before the footer
- Sidebar (on wider screens)

❌ **Avoid:**
- Too many ads on one page (max 3-4)
- Ads above the fold only
- Placing ads too close to navigation

---

## 🎨 Ad Unit Component Props

The `AdUnit` component accepts these props:

```tsx
interface AdUnitProps {
  adSlot: string;              // Required: Your ad slot ID
  adFormat?: string;           // 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal'
  fullWidthResponsive?: boolean; // Default: true
  className?: string;          // Additional CSS classes
}
```

### Example Usage

```tsx
// Responsive auto-sized ad
<AdUnit adSlot="1234567890" />

// Horizontal banner
<AdUnit 
  adSlot="1234567890" 
  adFormat="horizontal"
  className="my-8"
/>

// Fixed size ad
<AdUnit 
  adSlot="1234567890" 
  adFormat="rectangle"
  fullWidthResponsive={false}
/>
```

---

## 🚀 Deployment Configuration

### Vercel

1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_ADSENSE_ID`
4. Redeploy your site

### Netlify

1. Go to Site settings → Build & deploy → Environment
2. Add the same environment variables
3. Trigger a new deploy

### Other Platforms

Add the environment variables according to your platform's documentation.

---

## 📈 Tracking Events (Optional)

To track custom events in Google Analytics:

```tsx
// Track a button click
const handleClick = () => {
  if (window.gtag) {
    window.gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: 'calculator_opened',
    });
  }
};
```

Add this to your TypeScript types:

```tsx
// types/gtag.d.ts
interface Window {
  gtag: (
    command: 'config' | 'event',
    targetId: string,
    config?: Record<string, any>
  ) => void;
}
```

---

## 🔍 Testing

### Test Analytics
1. Visit your site
2. Check Real-time reports in GA dashboard
3. Verify page views are being tracked

### Test AdSense
1. AdSense needs approval first
2. Ads won't show until approved
3. Use test mode if available
4. Verify ad requests in Network tab

---

## ⚠️ Important Notes

### AdSense Policies
- Don't click your own ads
- Maintain quality content
- Follow [AdSense Program Policies](https://support.google.com/adsense/answer/48182)

### Privacy
- Update your Privacy Policy to mention cookies
- Consider adding a cookie consent banner
- Comply with GDPR/CCPA if applicable

### Performance
- Ads are loaded with `strategy="afterInteractive"`
- This ensures they don't block initial page load
- Core Web Vitals should remain good

---

## 🆘 Troubleshooting

### Ads Not Showing
- ✅ AdSense account approved?
- ✅ Site added to AdSense?
- ✅ Environment variable set correctly?
- ✅ Ad slot IDs are correct?
- ✅ Waiting at least 24 hours after setup?

### Analytics Not Tracking
- ✅ Measurement ID correct?
- ✅ Environment variable set?
- ✅ Dev server restarted?
- ✅ Check browser console for errors
- ✅ Ad blockers disabled for testing?

---

## 📚 Resources

- [Google Analytics Documentation](https://developers.google.com/analytics)
- [Google AdSense Help Center](https://support.google.com/adsense)
- [Next.js Script Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/scripts)

---

For questions or issues, contact: contact@utltyhub.com
