import { motion } from 'framer-motion'
import { whoWeServe } from '../data/content'
import WhoWeServeMap from './WhoWeServeMap'

export default function WhoWeServe() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white px-6 py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex flex-col items-start">
            <span className="text-sm font-semibold tracking-wide text-gold uppercase">
              {whoWeServe.label}
            </span>
            <span className="mt-1 h-0.5 w-10 rounded-full bg-gold" />
          </span>

          <h2 className="mt-6 text-3xl font-bold text-navy sm:text-4xl">
            {whoWeServe.headline.lead}
            <em className="font-normal italic">{whoWeServe.headline.emphasis}</em>
            {whoWeServe.headline.trail}
          </h2>

          <p className="mt-6 text-left text-lg text-navy/70">
            {whoWeServe.paragraph}
          </p>

          <p className="mt-6 text-base font-light text-navy/60 italic">
            {whoWeServe.closingLine}
          </p>
        </div>

        <WhoWeServeMap />
      </div>
    </motion.section>
  )
}
