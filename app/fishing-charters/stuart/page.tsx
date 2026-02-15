import CityPageTemplate from '../[city]/page'

export default function StuartPage() {
  return <CityPageTemplate params={{ city: 'stuart' }} />
}

export { generateMetadata } from '../[city]/page'
