import CityPageTemplate from '../[city]/page'

export default function PalmCityPage() {
  return <CityPageTemplate params={{ city: 'palm-city' }} />
}

export { generateMetadata } from '../[city]/page'
