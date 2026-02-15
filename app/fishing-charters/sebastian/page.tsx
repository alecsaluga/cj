import CityPageTemplate from '../[city]/page'

export default function SebastianPage() {
  return <CityPageTemplate params={{ city: 'sebastian' }} />
}

export { generateMetadata } from '../[city]/page'
