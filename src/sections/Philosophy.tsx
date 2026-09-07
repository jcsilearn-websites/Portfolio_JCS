import { motion } from 'framer-motion'
import founderPortrait from '../assets/founders/WhatsApp Image 2026-09-06 at 11.11.35 PM.jpeg'
import { philosophy } from '../data/content'
import Container from '../components/Container'

export default function Philosophy() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-pale-blue-bg py-20"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <img
          src={founderPortrait}
          alt=""
          className="w-full rounded-3xl object-cover shadow-sm"
        />
        <div>
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            {philosophy.heading}
          </h2>
          <blockquote className="mt-6 border-l-4 border-gold pl-5 text-xl text-pale-blue-text italic sm:text-2xl">
            “{philosophy.quote}”
          </blockquote>
        </div>
      </Container>
    </motion.section>
  )
}
