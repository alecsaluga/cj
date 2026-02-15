import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCityBySlug, getAllCitySlugs } from '@/data/cities'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import styles from './CityPage.module.css'
import Script from 'next/script'

interface CityPageProps {
  params: {
    city: string
  }
}

// Force static generation for all city pages
export const dynamic = 'force-static'
export const dynamicParams = false

export async function generateStaticParams() {
  const slugs = getAllCitySlugs()
  return slugs.map((slug) => ({
    city: slug,
  }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city)

  if (!city) {
    return {
      title: 'City Not Found',
    }
  }

  const title = `Fishing Charters in ${city.name}, ${city.state} | 1 Fathom Sportfishing`
  const description = `Book an affordable fishing charter in ${city.name}, FL with Captain CJ. ${city.description} Call (412) 979-4505 to book your trip today!`

  return {
    title,
    description,
    keywords: `${city.name} fishing charters, fishing trips ${city.name} FL, ${city.name} fishing guide, inshore fishing ${city.name}, offshore fishing ${city.name}, Captain CJ, 1 Fathom Sportfishing`,
    openGraph: {
      title,
      description,
      url: `https://onefathomfishingcharter.com/fishing-charters/${city.slug}`,
      siteName: '1 Fathom Sportfishing Charters',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=630',
          width: 1200,
          height: 630,
          alt: `Fishing Charters in ${city.name}, FL`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=630'],
    },
    alternates: {
      canonical: `https://onefathomfishingcharter.com/fishing-charters/${city.slug}`,
    },
  }
}

export default function CityPage({ params }: CityPageProps) {
  const city = getCityBySlug(params.city)

  if (!city) {
    notFound()
  }

  return (
    <>
      <Script
        id={`structured-data-${city.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Fishing Charter',
            name: `Fishing Charters in ${city.name}, FL`,
            description: city.description,
            provider: {
              '@type': 'LocalBusiness',
              name: '1 Fathom Sportfishing Charters',
              telephone: '+1-412-979-4505',
            },
            areaServed: {
              '@type': 'City',
              name: city.name,
              containedInPlace: {
                '@type': 'State',
                name: 'Florida',
              },
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: city.latitude,
              longitude: city.longitude,
            },
            offers: [
              {
                '@type': 'Offer',
                name: '4 Hour Inshore Fishing Charter',
                price: '400',
                priceCurrency: 'USD',
              },
            ],
          }),
        }}
      />

      <Script
        id={`faq-schema-${city.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': `What kind of fish can I catch in ${city.name}?`,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': `In ${city.name}, you can target ${city.fishSpecies.slice(0, 3).join(', ')}, and many other species depending on the season and location.`
                }
              },
              {
                '@type': 'Question',
                'name': `How much does a fishing charter cost in ${city.name}?`,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': `Our ${city.name} fishing charters start at $400 for a 4-hour inshore trip. We offer affordable rates with all equipment, bait, and licenses included.`
                }
              },
              {
                '@type': 'Question',
                'name': `What's the best time of year to fish in ${city.name}?`,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': city.bestSeason
                }
              },
              {
                '@type': 'Question',
                'name': 'How many people can go on a charter?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Our charters accommodate 1-3 guests for a personalized fishing experience. Small groups mean more attention from Captain CJ and better fishing opportunities.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What\'s included in the charter price?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'All charters include rods, reels, tackle, live bait (when available), fishing license, water, ice, and catch cleaning/filleting. You just need to bring yourself!'
                }
              },
              {
                '@type': 'Question',
                'name': `Do you pick up from ${city.name}?`,
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': `Pickup locations may vary based on the trip and location. ${city.distanceFromStuart === 'Home port' ? `We're based in ${city.name}.` : `We're located ${city.distanceFromStuart} of ${city.name}.`} Contact us to discuss pickup options.`
                }
              }
            ]
          }),
        }}
      />

      <Header />
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <div className="eyebrow">{city.distanceFromStuart.toUpperCase()}</div>
              <h1 className={styles.headline}>
                FISHING CHARTERS IN<br />
                {city.name.toUpperCase()}, {city.state}
              </h1>
              <p className={styles.subheadline}>
                Experience world-class fishing with Captain CJ.<br />
                Affordable charters for up to 3 guests.
              </p>
              <a href="#booking" className="btn btn-primary btn-large">
                BOOK YOUR TRIP
              </a>
            </div>
          </div>
        </section>

        {/* About Location Section */}
        <section className="section bg-white">
          <div className="container">
            <div className={styles.locationGrid}>
              <div>
                <h2>FISHING IN {city.name.toUpperCase()}</h2>
                <p className={styles.description}>{city.description}</p>

                <div className={styles.infoBox}>
                  <h3>TARGET SPECIES</h3>
                  <ul className={styles.speciesList}>
                    {city.fishSpecies.map((species, index) => (
                      <li key={index}>{species}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.infoBox}>
                  <h3>BEST FISHING SEASON</h3>
                  <p>{city.bestSeason}</p>
                </div>
              </div>

              <div>
                <div className={`card ${styles.quickFacts}`}>
                  <h3>QUICK FACTS</h3>
                  <div className={styles.factItem}>
                    <strong>Location:</strong> {city.name}, {city.state}
                  </div>
                  <div className={styles.factItem}>
                    <strong>Distance from Stuart:</strong> {city.distanceFromStuart}
                  </div>
                  <div className={styles.factItem}>
                    <strong>Trip Duration:</strong> 4-6 hours
                  </div>
                  <div className={styles.factItem}>
                    <strong>Max Guests:</strong> 3 people
                  </div>
                  <div className={styles.factItem}>
                    <strong>Starting Price:</strong> $400
                  </div>
                </div>

                <div className={`card ${styles.attractions}`}>
                  <h3>LOCAL ATTRACTIONS</h3>
                  <ul>
                    {city.localAttractions.map((attraction, index) => (
                      <li key={index}>{attraction}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trip Options */}
        <section className="section bg-cream">
          <div className="container">
            <div className="text-center mb-xl">
              <h2>AVAILABLE TRIPS FROM {city.name.toUpperCase()}</h2>
              <p className={styles.subtitle}>
                All charters include rods, reels, bait, license, and cleaning
              </p>
            </div>

            <div className={styles.tripsGrid}>
              <div className="card">
                <h4>4 HOUR INSHORE FISHING</h4>
                <div className={styles.price}>$400</div>
                <p>Perfect for targeting snook, redfish, and tarpon in the flats and backcountry waters.</p>
                <a href="#booking" className="btn btn-primary" style={{ width: '100%', marginTop: '24px' }}>
                  BOOK NOW
                </a>
              </div>

              <div className="card">
                <h4>4 HOUR NEAR SHORE FISHING</h4>
                <div className={styles.price}>$450</div>
                <p className={styles.seasonal}>Seasonal: April 1 - September 1</p>
                <p>Venture into nearshore waters for kingfish, cobia, and more.</p>
                <a href="#booking" className="btn btn-primary" style={{ width: '100%', marginTop: '24px' }}>
                  BOOK NOW
                </a>
              </div>

              <div className="card">
                <h4>6 HOUR OFFSHORE TRIP</h4>
                <div className={styles.price}>$600</div>
                <p className={styles.seasonal}>Seasonal: April 1 - September 1</p>
                <p>Extended trip for serious anglers chasing sailfish, mahi, and wahoo.</p>
                <a href="#booking" className="btn btn-primary" style={{ width: '100%', marginTop: '24px' }}>
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section bg-white">
          <div className="container">
            <h2 className="text-center mb-xl">
              WHY CHOOSE 1 FATHOM FOR {city.name.toUpperCase()} CHARTERS?
            </h2>

            <div className={styles.benefitsGrid}>
              <div className={`card ${styles.benefit}`}>
                <div className={styles.benefitIcon}>🎣</div>
                <h4>EXPERT LOCAL KNOWLEDGE</h4>
                <p>Captain CJ knows the best fishing spots in and around {city.name}.</p>
              </div>

              <div className={`card ${styles.benefit}`}>
                <div className={styles.benefitIcon}>💰</div>
                <h4>AFFORDABLE PRICING</h4>
                <p>Small group charters at a fraction of the cost of larger operations.</p>
              </div>

              <div className={`card ${styles.benefit}`}>
                <div className={styles.benefitIcon}>⚓</div>
                <h4>MODERN EQUIPMENT</h4>
                <p>20' NauticStar bay boat with GPS, fishfinder, and all necessary gear.</p>
              </div>

              <div className={`card ${styles.benefit}`}>
                <div className={styles.benefitIcon}>🌟</div>
                <h4>PERSONALIZED EXPERIENCE</h4>
                <p>With only 1-3 guests per trip, you get Captain CJ's full attention.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section id="booking" className="section bg-black">
          <div className="container text-center">
            <h2 style={{ color: 'white', marginBottom: '24px' }}>
              READY TO FISH {city.name.toUpperCase()}?
            </h2>
            <p style={{ fontSize: '20px', color: 'white', opacity: 0.8, marginBottom: '48px' }}>
              Book your charter today and experience the best fishing {city.name} has to offer.
            </p>
            <a href="tel:4129794505" className="btn btn-primary btn-large">
              CALL (412) 979-4505 TO BOOK
            </a>
            <p style={{ fontSize: '16px', color: 'white', opacity: 0.7, marginTop: '32px' }}>
              Or email: <a href="mailto:salugac@gmail.com" style={{ color: 'var(--cyan)' }}>salugac@gmail.com</a>
            </p>
          </div>
        </section>

        {/* FAQ Section for SEO */}
        <section className="section bg-cream">
          <div className="container">
            <h2 className="text-center mb-xl">
              FREQUENTLY ASKED QUESTIONS ABOUT {city.name.toUpperCase()} FISHING CHARTERS
            </h2>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h4>What kind of fish can I catch in {city.name}?</h4>
                <p>
                  In {city.name}, you can target {city.fishSpecies.slice(0, 3).join(', ')}, and many other species depending on the season and location.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>How much does a fishing charter cost in {city.name}?</h4>
                <p>
                  Our {city.name} fishing charters start at $400 for a 4-hour inshore trip. We offer affordable rates with all equipment, bait, and licenses included.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>What's the best time of year to fish in {city.name}?</h4>
                <p>{city.bestSeason}</p>
              </div>

              <div className={styles.faqItem}>
<h4>How many people can go on a charter?</h4>
                <p>
                  Our charters accommodate 1-3 guests for a personalized fishing experience. Small groups mean more attention from Captain CJ and better fishing opportunities.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>What's included in the charter price?</h4>
                <p>
                  All charters include rods, reels, tackle, live bait (when available), fishing license, water, ice, and catch cleaning/filleting. You just need to bring yourself!
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>Do you pick up from {city.name}?</h4>
                <p>
                  Pickup locations may vary based on the trip and location. {city.distanceFromStuart === 'Home port' ? `We're based in ${city.name}.` : `We're located ${city.distanceFromStuart} of ${city.name}.`} Contact us to discuss pickup options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Cities */}
        <section className="section bg-white">
          <div className="container">
            <h2 className="text-center mb-xl">
              WE ALSO SERVE THESE NEARBY AREAS
            </h2>
            <div className={styles.citiesGrid}>
              {getAllCitySlugs()
                .filter((slug) => slug !== city.slug)
                .slice(0, 6)
                .map((slug) => {
                  const otherCity = getCityBySlug(slug)
                  if (!otherCity) return null
                  return (
                    <a
                      key={slug}
                      href={`/fishing-charters/${slug}`}
                      className={`card ${styles.cityCard}`}
                    >
                      <h4>{otherCity.name}, {otherCity.state}</h4>
                      <p>{otherCity.distanceFromStuart}</p>
                    </a>
                  )
                })}
            </div>
            <div className="text-center mt-xl">
              <a href="/" className="btn btn-primary">
                VIEW ALL LOCATIONS
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
