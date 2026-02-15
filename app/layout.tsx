import type { Metadata } from 'next'
import './globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '1 Fathom Sportfishing Charters | Treasure Coast Fishing',
  description: 'Fishing charters on the Treasure Coast with Captain CJ. Inshore, nearshore, and offshore trips launching from Jensen Beach, Vero Beach, Jupiter & more.',
  keywords: 'fishing charters Treasure Coast, Jensen Beach fishing, Jupiter fishing charters, Vero Beach fishing, Captain CJ, sportfishing, inshore fishing Florida, offshore fishing Florida, bay boat charters',
  authors: [{ name: '1 Fathom Sportfishing Charters' }],
  openGraph: {
    title: '1 Fathom Sportfishing | Treasure Coast',
    description: 'Inshore, nearshore & offshore fishing charters with Captain CJ. Launching from Jensen Beach, Vero Beach, Jupiter & more.',
    url: 'https://1fathom.com',
    siteName: '1 Fathom Sportfishing Charters',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '1 Fathom Sportfishing | Treasure Coast',
    description: 'Inshore, nearshore & offshore fishing charters with Captain CJ. Launching from Jensen Beach, Vero Beach, Jupiter & more.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://1fathom.com" />

        {/* Structured Data for SEO */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://1fathom.com',
              name: '1 Fathom Sportfishing Charters',
              image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=630',
              description: 'Affordable fishing charters in Stuart, FL with Captain CJ. Small group trips on a 20\' NauticStar.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '',
                addressLocality: 'Stuart',
                addressRegion: 'FL',
                postalCode: '34994',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 27.1975,
                longitude: -80.2528,
              },
              url: 'https://1fathom.com',
              telephone: '+1-412-979-4505',
              priceRange: '$$',
              aggregateRating: {
                '@type': 'AggregateRating',
                'ratingValue': '5.0',
                'reviewCount': '12',
                'bestRating': '5',
                'worstRating': '1'
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  opens: '08:00',
                  closes: '18:00',
                },
              ],
              sameAs: [
                'https://www.facebook.com/1fathomcharters',
                'https://www.instagram.com/1fathomcharters',
              ],
            }),
          }}
        />

        <Script
          id="structured-data-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Fishing Charter',
              provider: {
                '@type': 'LocalBusiness',
                name: '1 Fathom Sportfishing Charters',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Stuart',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'Florida',
                  },
                },
                {
                  '@type': 'City',
                  name: 'Jensen Beach',
                },
                {
                  '@type': 'City',
                  name: 'Jupiter',
                },
                {
                  '@type': 'City',
                  name: 'Vero Beach',
                },
              ],
              offers: [
                {
                  '@type': 'Offer',
                  'name': '4 Hour Inshore Fishing Charter',
                  'description': 'Perfect for targeting snook, redfish, and tarpon in the flats and backcountry waters of the Indian River Lagoon and Intracoastal Waterway.',
                  'price': '400',
                  'priceCurrency': 'USD',
                  'availability': 'https://schema.org/InStock',
                  'url': 'https://onefathomfishing.com',
                  'category': 'Inshore Fishing'
                },
                {
                  '@type': 'Offer',
                  'name': '6 Hour Inshore Fishing Charter',
                  'description': 'Extended inshore trip for serious anglers targeting trophy snook, redfish, tarpon, and more in South Florida backcountry waters.',
                  'price': '550',
                  'priceCurrency': 'USD',
                  'availability': 'https://schema.org/InStock',
                  'url': 'https://onefathomfishing.com',
                  'category': 'Inshore Fishing'
                },
                {
                  '@type': 'Offer',
                  'name': '4 Hour Nearshore Fishing Charter',
                  'description': 'Venture into nearshore Atlantic waters for kingfish, cobia, Spanish mackerel, and more. Seasonal availability April through September.',
                  'price': '450',
                  'priceCurrency': 'USD',
                  'availability': 'https://schema.org/LimitedAvailability',
                  'availableAtOrFrom': {
                    '@type': 'Place',
                    'name': 'Available April 1 - September 1'
                  },
                  'url': 'https://onefathomfishing.com',
                  'category': 'Nearshore Fishing'
                },
                {
                  '@type': 'Offer',
                  'name': '6 Hour Offshore/Nearshore Fishing Charter',
                  'description': 'Extended offshore trip targeting sailfish, mahi-mahi, wahoo, kingfish, and other pelagic species. Seasonal availability April through September.',
                  'price': '600',
                  'priceCurrency': 'USD',
                  'availability': 'https://schema.org/LimitedAvailability',
                  'availableAtOrFrom': {
                    '@type': 'Place',
                    'name': 'Available April 1 - September 1'
                  },
                  'url': 'https://onefathomfishing.com',
                  'category': 'Offshore Fishing'
                }
              ],
            }),
          }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
