import { motion, type Variants } from 'framer-motion'
import { serviceCategories } from '../data/content'
import Button from '../components/Button'
import Container from '../components/Container'

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// Loose zigzag: cards alternate between sitting flush and dropped down a bit, only once the
// 5-column desktop layout is active — collapsed to a flat row below `lg` where columns wrap.
const STAGGER = ['lg:mt-0', 'lg:mt-10', 'lg:mt-0', 'lg:mt-10', 'lg:mt-0']

// Connector path for the 5-column desktop layout. It has to actually be visible, which means
// staying out of the space each card occupies rather than running through it — measured off
// the real rendered grid (5 equal columns each ~18.4% wide with a ~2% gap; flush cards occupy
// the top ~77% leaving open space below, dropped cards (lg:mt-10) occupy the bottom ~77%
// leaving open space above). So the path runs flat through a flush card's open margin below
// it, steps steeply up through the narrow gap, runs flat through the next (dropped) card's
// open margin above it, and repeats — tracing the same up/down rhythm as the card stagger
// entirely in the empty space around the cards instead of under them.
const CONNECTOR_POINTS =
  '0,85 18.4,85 20.4,15 38.8,15 40.8,85 59.2,85 61.2,15 79.6,15 81.6,85 100,85'

export default function ServicesCards() {
  return (
    <section className="bg-white py-20">
      <Container>
        <h2 className="text-center text-lg font-bold tracking-wide text-black uppercase sm:text-xl">
          Our Services
        </h2>
        <span className="mx-auto mt-1 block h-0.5 w-10 rounded-full bg-gold" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative isolate mt-12 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {/* Animated dotted connector — desktop only, where the zigzag geometry it traces is
              actually visible. Negative z-index (on the `relative` grid above) keeps it behind
              the opaque cards, so it reads as a thread running through them rather than over. */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full lg:block"
          >
            <polyline
              points={CONNECTOR_POINTS}
              fill="none"
              stroke="var(--color-gold)"
              strokeWidth="0.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1 3"
              className="animate-[dash-flow_1.2s_linear_infinite]"
            />
          </svg>

          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
              className={`flex flex-col rounded-2xl bg-gray-100 p-6 shadow-sm transition-shadow duration-300 ease-out hover:shadow-xl ${STAGGER[index % STAGGER.length]}`}
            >
              <h3 className="text-lg font-semibold text-black">
                {category.label}
              </h3>
              <Button
                to={`/services#${category.id}`}
                variant="primary"
                size="sm"
                className="mt-4 self-start"
              >
                Explore
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
