import CityPageTemplate from '../[city]/page'

export default function JupiterPage() {
  return <CityPageTemplate params={{ city: 'jupiter' }} />
}

export { generateMetadata } from '../[city]/page'
