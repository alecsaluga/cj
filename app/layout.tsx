import type { Metadata } from 'next'
import './globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '1 Fathom Sportfishing Charters | Best Fishing in Stuart, FL',
  description: 'Affordable fishing charters in Stuart, FL with Captain CJ. Small group trips (up to 2 guests) on a 20\' NauticStar. Inshore, nearshore, and offshore fishing.',
  keywords: 'fishing charters Stuart FL, Jensen Beach fishing, Jupiter fishing charters, Vero Beach fishing, Captain CJ, sportfishing, inshore fishing Florida, offshore fishing Florida, bay boat charters',
  authors: [{ name: '1 Fathom Sportfishing Charters' }],
  openGraph: {
    title: '1 Fathom Sportfishing Charters | Stuart, FL',
    description: 'Experience South Florida\'s best fishing with intimate charters in Stuart, FL',
    url: 'https://1fathom.com',
    siteName: '1 Fathom Sportfishing Charters',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=630',
        width: 1200,
        height: 630,
        alt: '1 Fathom Sportfishing Charters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '1 Fathom Sportfishing Charters | Stuart, FL',
    description: 'Affordable fishing charters with Captain CJ. Book your South Florida fishing adventure today.',
    images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=630'],
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
              telephone: '+1-555-123-4567',
              priceRange: '$$',
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
                  name: '4 Hour Inshore Fishing',
                  price: '400',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  name: '4 Hour Near Shore Fishing',
                  price: '450',
                  priceCurrency: 'USD',
                },
                {
                  '@type': 'Offer',
                  name: '6 Hour Offshore Fishing',
                  price: '600',
                  priceCurrency: 'USD',
                },
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
