import { MetadataRoute } from 'next'
import { getAllCitySlugs } from '@/data/cities'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://onefathomfishingcharter.com'

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]

  // City pages
  const citySlugs = getAllCitySlugs()
  const cityPages = citySlugs.map((slug) => ({
    url: `${baseUrl}/fishing-charters/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...mainPages, ...cityPages]
}
