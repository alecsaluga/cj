import CityPageTemplate from '../[city]/page'

export default function VeroBeachPage() {
  return <CityPageTemplate params={{ city: 'vero-beach' }} />
}

export { generateMetadata } from '../[city]/page'
