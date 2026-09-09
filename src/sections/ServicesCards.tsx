import { motion, type Variants } from 'framer-motion'
import { serviceCategories } from '../data/content'
import Button from '../components/Button'

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

export default function ServicesCards() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
          Our Services
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {serviceCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
              className="flex h-full flex-col rounded-2xl bg-pale-blue-bg p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-navy">
                {category.label}
              </h3>
              <p className="mt-2 flex-1 text-sm text-pale-blue-text">
                {category.description}
              </p>
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
      </div>
    </section>
  )
}
