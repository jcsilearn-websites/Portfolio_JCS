import { motion } from 'framer-motion'
import Container from '../components/Container'
import PageHeader from '../components/PageHeader'
import AccentCardGrid from '../components/AccentCardGrid'
import { careerGuides } from '../data/content'

export default function CareerGuides() {
  return (
    <main className="bg-white py-20">
      <Container>
        <PageHeader eyebrow="Resources" title="Career Guides" />

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-black">
          Kickstart your journey with our practical career guides, designed to
          help you at every stage of your professional path. Each guide
          offers step-by-step strategies, real-world examples and expert tips
          to help you grow with confidence.
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mt-12 text-xl font-semibold text-black"
        >
          Available Guides
        </motion.h2>

        <div className="mt-6">
          <AccentCardGrid items={careerGuides} />
        </div>
      </Container>
    </main>
  )
}
