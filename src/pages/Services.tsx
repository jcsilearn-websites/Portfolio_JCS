import { motion } from 'framer-motion'
import ServicesTabs from '../sections/ServicesTabs'
import Container from '../components/Container'
import { servicesHero } from '../data/content'
import servicesHeroImage from '../assets/Our-service/ChatGPT Image Sep 10, 2026, 01_44_19 AM.png'

export default function Services() {
  return (
    <main>
      <section
        className="bg-navy bg-cover bg-center bg-no-repeat py-16 text-center sm:py-20"
        style={{ backgroundImage: `url(${servicesHeroImage})` }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mx-auto max-w-3xl"
          >
            <span className="inline-flex flex-col items-center">
              <span className="text-sm font-semibold tracking-wide text-white uppercase">
                {servicesHero.label}
              </span>
              <span className="mt-1 h-0.5 w-10 rounded-full bg-gold" />
            </span>

            <h1 className="mt-4 text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              {servicesHero.headline}
            </h1>
            <p className="mt-2 text-lg text-white italic sm:text-xl">
              {servicesHero.subheading}
            </p>
          </motion.div>
        </Container>
      </section>
      <ServicesTabs />
    </main>
  )
}
