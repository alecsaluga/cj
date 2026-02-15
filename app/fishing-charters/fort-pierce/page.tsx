import CityPageTemplate from '../[city]/page'

export default function FortPiercePage() {
  return <CityPageTemplate params={{ city: 'fort-pierce' }} />
}

export { generateMetadata } from '../[city]/page'
