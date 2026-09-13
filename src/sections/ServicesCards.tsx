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
          className="mt-12 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
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
