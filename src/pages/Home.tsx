import Hero from '../sections/Hero'
import Recognitions from '../sections/Recognitions'
import StatsStrip from '../sections/StatsStrip'
import WhoWeServe from '../sections/WhoWeServe'
import Philosophy from '../sections/Philosophy'
import ServicesCards from '../sections/ServicesCards'
import Testimonials from '../sections/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Recognitions />
      <StatsStrip />
      <WhoWeServe />
      <Philosophy />
      <ServicesCards />
      <Testimonials />
      {/* Culture section (photo collage — training + team photos) goes here, next pass */}
    </main>
  )
}
