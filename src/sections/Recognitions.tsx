import { motion } from 'framer-motion'
import { HiTrophy } from 'react-icons/hi2'
import { recognitions } from '../data/content'

export default function Recognitions() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white px-6 py-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-navy sm:text-4xl">
          Recognized for Excellence
        </h2>

        <div className="mt-12 flex flex-wrap items-start justify-center gap-8">
          {recognitions.map((recognition) => (
            <div
              key={recognition.title + recognition.period}
              className="flex w-72 flex-col items-center rounded-2xl bg-pale-blue-bg p-8 text-center shadow-sm"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-navy">
                <HiTrophy size={28} />
              </span>
              <p className="mt-5 text-base font-semibold text-navy">
                {recognition.title}
              </p>
              <p className="mt-1 text-sm text-pale-blue-text">
                {recognition.organization} · {recognition.period}
              </p>
              <p className="mt-3 text-sm text-navy/60">
                {recognition.trainerName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
