import { motion } from 'framer-motion'
import { HiPhoto } from 'react-icons/hi2'
import { programTopics } from '../data/content'
import Container from '../components/Container'

export default function Programs() {
  return (
    <main>
      {programTopics.map((topic, index) => {
        const isTextFirst = index % 2 === 0
        const rounded = isTextFirst
          ? 'rounded-tl-3xl rounded-br-3xl'
          : 'rounded-tr-3xl rounded-bl-3xl'

        return (
          <motion.section
            key={topic.slug}
            id={topic.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`scroll-mt-24 py-16 sm:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-pale-blue-bg/30'}`}
          >
            <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
              <div className={isTextFirst ? 'md:order-1' : 'md:order-2'}>
                <h2 className="text-3xl font-bold text-black sm:text-4xl">
                  {topic.label}
                </h2>
                <p className="mt-6 text-left text-lg text-black/70">
                  {topic.description}
                </p>
              </div>

              {/* TODO: replace with real program image */}
              <div
                className={`flex aspect-[4/3] flex-col items-center justify-center gap-3 bg-pale-blue-bg p-8 text-center ${rounded} ${
                  isTextFirst ? 'md:order-2' : 'md:order-1'
                }`}
              >
                <HiPhoto className="text-navy/30" size={64} />
                <span className="text-sm text-navy/50">Image coming soon</span>
              </div>
            </Container>
          </motion.section>
        )
      })}
    </main>
  )
}
