import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Stats } from '@/components/Stats'
import { Trips } from '@/components/Trips'
import { FishingTypes } from '@/components/FishingTypes'
import { Gallery } from '@/components/Gallery'
import { WhatsIncluded } from '@/components/WhatsIncluded'
import { Boat } from '@/components/Boat'
import { LaunchMap } from '@/components/LaunchMap'
import { Policies } from '@/components/Policies'
import { BookingCTA } from '@/components/BookingCTA'
import { BookingModal } from '@/components/BookingModal'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <FishingTypes />
        <Trips />
        <Gallery />
        <WhatsIncluded />
        <Boat />
        <LaunchMap />
        <Policies />
        <BookingCTA />
      </main>
      <Footer />
      <BookingModal />
    </>
  )
}
