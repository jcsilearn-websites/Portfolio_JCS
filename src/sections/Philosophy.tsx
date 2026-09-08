import { motion } from 'framer-motion'
import philosophyImage from '../assets/front-page/ChatGPT Image Sep 8, 2026, 03_52_11 PM.png'
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
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <img
          src={philosophyImage}
          alt={`Photo collage of learners collaborating in class, with a quote card that reads: "A learner who builds skills today creates opportunities for tomorrow."`}
          className="w-full rounded-3xl shadow-sm"
        />

        <div>
          <span className="inline-flex flex-col items-start">
            <span className="text-sm font-semibold tracking-wide text-navy uppercase">
              {philosophy.label}
            </span>
            <span className="mt-1 h-0.5 w-10 rounded-full bg-gold" />
          </span>

          <h2 className="mt-6 text-3xl font-bold text-navy sm:text-4xl">
            {philosophy.headline.lead}
            <em className="font-normal italic">{philosophy.headline.emphasis}</em>
            {philosophy.headline.trail}
          </h2>

          {philosophy.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`text-lg text-navy/70 ${index === 0 ? 'mt-6' : 'mt-4'}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <p className="text-center text-2xl text-navy italic sm:text-3xl lg:col-span-2 lg:mt-4">
          “{philosophy.pullQuote}”
        </p>
      </Container>
    </motion.section>
  )
}
