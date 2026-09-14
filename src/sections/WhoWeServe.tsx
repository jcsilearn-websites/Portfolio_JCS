import { motion } from 'framer-motion'
import { whoWeServe } from '../data/content'
import WhoWeServeMap from './WhoWeServeMap'
import Container from '../components/Container'

export default function WhoWeServe() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white py-20"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex flex-col items-start">
            <span className="font-google-sans text-lg text-black">
              {whoWeServe.label}
            </span>
            <span className="mt-1 h-0.5 w-10 rounded-full bg-gold" />
          </span>

          <h2 className="mt-6 text-3xl font-bold text-black sm:text-4xl">
            {whoWeServe.headline.lead}
            <em className="font-normal italic">{whoWeServe.headline.emphasis}</em>
            {whoWeServe.headline.trail}
          </h2>

          <p className="mt-6 text-left text-lg text-black/70">
            {whoWeServe.paragraph}
          </p>
        </div>

        <WhoWeServeMap />
      </Container>

      {/* Full-width centered statement below the two-column block, matching psiog.com's own
          closing-line treatment for this same slot (Google Sans, 20px, bold italic,
          centered — verified via that page's computed styles, not eyeballed). */}
      <Container>
        <p className="font-google-sans -mt-8 text-center text-xl font-bold text-black italic">
          {whoWeServe.closingLine}
        </p>
      </Container>
    </motion.section>
  )
}
