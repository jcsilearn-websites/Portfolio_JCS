import { motion } from 'framer-motion'
import philosophyImage from '../assets/front-page/philosophy-photo-collage.png'
import { philosophy } from '../data/content'
import Container from '../components/Container'

export default function Philosophy() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white py-20"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <img
          src={philosophyImage}
          alt={`Photo collage of learners collaborating in class, with a quote card that reads: "A learner who builds skills today creates opportunities for tomorrow."`}
          className="w-full"
        />

        <div>
          <span className="inline-flex flex-col items-start">
            <span className="text-lg font-bold tracking-wide text-black uppercase sm:text-xl">
              {philosophy.label}
            </span>
            <span className="mt-1 h-0.5 w-10 rounded-full bg-gold" />
          </span>

          <h2 className="mt-6 text-4xl font-bold text-black sm:text-5xl">
            {philosophy.headline.lead}
            <em className="font-normal italic">{philosophy.headline.emphasis}</em>
            {philosophy.headline.trail}
          </h2>

          {philosophy.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`text-xl text-black/70 ${index === 0 ? 'mt-6' : 'mt-4'}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </motion.section>
  )
}
