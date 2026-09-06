import { motion } from 'framer-motion'
import { whoWeServe } from '../data/content'

export default function WhoWeServe() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-navy sm:text-4xl">
          {whoWeServe.heading}
        </h2>
        <p className="mt-6 text-lg text-navy/70">{whoWeServe.paragraph}</p>
      </div>
    </motion.section>
  )
}
