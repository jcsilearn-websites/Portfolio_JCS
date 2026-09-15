import { motion, type Variants } from 'framer-motion'
import type { AccentCardItem } from '../data/content'

// Rotating accent set for card grids like Career Guides / Support Center — navy, gold,
// and pale-blue-text from the locked palette, plus 2 muted complementary tones (used only
// as a title/border accent, never as a background fill) so a 5-card grid reads as varied
// rather than monochrome.
const ACCENTS = [
  { border: 'border-navy', text: 'text-navy' },
  { border: 'border-gold', text: 'text-gold' },
  { border: 'border-pale-blue-text', text: 'text-pale-blue-text' },
  { border: 'border-emerald-600', text: 'text-emerald-600' },
  { border: 'border-rose-600', text: 'text-rose-600' },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function AccentCardGrid({ items }: { items: AccentCardItem[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((card, index) => {
        const accent = ACCENTS[index % ACCENTS.length]
        return (
          <motion.div
            key={card.title}
            variants={item}
            className={`rounded-2xl border-l-4 bg-pale-blue-bg/40 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${accent.border}`}
          >
            <h3 className={`text-lg font-semibold ${accent.text}`}>{card.title}</h3>
            <p className="mt-2 text-sm text-black">{card.description}</p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
