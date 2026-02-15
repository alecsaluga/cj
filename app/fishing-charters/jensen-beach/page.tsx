import CityPageTemplate from '../[city]/page'

export default function JensenBeachPage() {
  return <CityPageTemplate params={{ city: 'jensen-beach' }} />
}

export { generateMetadata } from '../[city]/page'
