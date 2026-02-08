# 1 Fathom Sportfishing Charters Website

A world-class SEO-optimized fishing charter website built with Next.js 14, featuring:

- ⚡ Next.js 14 App Router for optimal performance
- 🎨 Clean, minimalist design inspired by Dunkel Bros
- 📱 Fully responsive (mobile, tablet, desktop)
- 🔍 **Extreme SEO optimization** with structured data, Open Graph, and Twitter cards
- 🌍 **Programmatic city pages** for 10+ locations (Stuart, Jensen Beach, Jupiter, Vero Beach, etc.)
- 📊 Google Analytics 4 integration
- 🗺️ Dynamic sitemap.xml and robots.txt
- ♿ Accessible markup with semantic HTML5
- 🎯 Optimized for LLMs (AEO/AIO ready)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /fishing-charters/[city]  # Dynamic city pages
  layout.tsx                # Root layout with SEO
  page.tsx                  # Home page
  globals.css               # Design system
  sitemap.ts                # Dynamic sitemap
  robots.ts                 # Robots.txt

/components
  Header.tsx                # Sticky navigation
  Hero.tsx                  # Hero section
  About.tsx                 # About Captain CJ
  Stats.tsx                 # Statistics section
  Trips.tsx                 # Charter packages
  WhatsIncluded.tsx         # What's included
  Boat.tsx                  # Boat details
  WhatToBring.tsx           # What to bring
  Policies.tsx              # Policies
  BookingCTA.tsx            # Booking call-to-action
  Footer.tsx                # Footer
  GoogleAnalytics.tsx       # GA4 integration

/data
  cities.ts                 # City data for programmatic SEO
```

## SEO Features

### ✅ Structured Data (JSON-LD)
- LocalBusiness schema
- Service schema with offers
- GeoCoordinates for each location
- Optimized for Google Search & Google Maps

### ✅ Programmatic City Pages
10+ location-specific pages with:
- Unique title tags and meta descriptions
- Location-specific content
- Target species and best seasons
- Local attractions
- FAQ sections
- Internal linking structure

### ✅ Technical SEO
- Sitemap.xml (auto-generated)
- Robots.txt
- Canonical URLs
- Open Graph tags
- Twitter Card tags
- Semantic HTML5
- Mobile-responsive
- Fast loading times

### ✅ Google Search Console Ready
1. Add your verification code in `app/layout.tsx` (line 34)
2. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### ✅ Google Analytics Setup
1. Get your GA4 Measurement ID
2. Update `components/GoogleAnalytics.tsx` (line 6)
3. Replace `G-XXXXXXXXXX` with your ID

## City Pages

The site includes programmatic pages for these cities:
- Stuart, FL (home port)
- Jensen Beach, FL
- Jupiter, FL
- Vero Beach, FL
- Port St. Lucie, FL
- Fort Pierce, FL
- Palm City, FL
- Hobe Sound, FL
- Sebastian, FL
- Tequesta, FL

Access via: `/fishing-charters/[city-slug]`

Example: `/fishing-charters/jensen-beach`

## Design System

### Colors
- White: #FFFFFF (primary background)
- Cream: #F5F3ED (alternate background)
- Black: #000000 (contrast sections)
- Charcoal: #2B2B2B (text)
- Cyan: #00D4FF (accent/CTA)

### Typography
- Display Font: Bebas Neue (Google Fonts)
- Body Font: System UI stack

### Spacing Scale
8, 16, 24, 32, 48, 64, 80, 120px

## Customization

### Update Contact Info
Replace placeholder contact information:
- Phone: `(555) 123-4567` → Your number
- Email: `captain@1fathom.com` → Your email
- Domain: `https://1fathom.com` → Your domain

Files to update:
- `app/layout.tsx`
- `components/BookingCTA.tsx`
- `components/Footer.tsx`
- All city page files

### Add More Cities
Edit `data/cities.ts` to add more locations with:
- Slug (URL-friendly)
- Name, state
- Description
- Coordinates
- Fish species
- Best season
- Local attractions

### Replace Images
Update Unsplash placeholder images with your own:
- Hero image
- Captain photo
- Boat photo
- Action shots

## Performance

- Lazy loading for images
- Optimized Next.js Image component
- CSS modules for scoped styling
- Minimal external dependencies
- Server-side rendering
- Static generation for city pages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
Build the static site:
```bash
npm run build
```

Deploy the `.next` folder and `public` directory.

## TODO Before Launch

- [ ] Replace Google Analytics ID
- [ ] Add Google Search Console verification
- [ ] Update all contact information
- [ ] Replace placeholder images
- [ ] Update domain in all files
- [ ] Test on mobile devices
- [ ] Check all links
- [ ] Verify structured data with Google Rich Results Test
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile
- [ ] Add social media links

## License

© 2026 1 Fathom Sportfishing Charters
