import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Stats } from '@/components/Stats'
import { Trips } from '@/components/Trips'
import { FishingTypes } from '@/components/FishingTypes'
import { WhatsIncluded } from '@/components/WhatsIncluded'
import { Boat } from '@/components/Boat'
import { WhatToBring } from '@/components/WhatToBring'
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
        <Trips />
        <FishingTypes />
        <WhatsIncluded />
        <Boat />
        <WhatToBring />
        <LaunchMap />
        <Policies />
        <BookingCTA />
      </main>
      <Footer />
      <BookingModal />
    </>
  )
}
