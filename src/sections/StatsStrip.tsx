import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { collegeLogos } from '../data/content'
import Container from '../components/Container'

export default function StatsStrip() {
  const trustedByRef = useRef<HTMLElement>(null)
  const trustedByInView = useInView(trustedByRef, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={trustedByRef}
      initial={{ opacity: 0 }}
      animate={trustedByInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white py-16"
    >
      <Container className="flex flex-col items-center">
        <p className="text-center text-lg font-bold tracking-wide text-black uppercase sm:text-xl">
          Trusted By
        </p>
        <span className="mt-1 h-0.5 w-10 rounded-full bg-gold" />
      </Container>
      {/* Deliberately full-bleed, outside Container — a marquee ticker reads better running
          edge-to-edge than boxed inside the shared content width. */}
      <div className="mt-10 overflow-hidden">
        <div className="flex w-max items-center gap-x-10 animate-[marquee_50s_linear_infinite] hover:[animation-play-state:paused] sm:gap-x-14">
          {[...collegeLogos, ...collegeLogos].map((logo, index) => (
            <img
              key={`${logo.name}-${index}`}
              src={logo.src}
              alt={logo.name}
              className="h-14 w-auto shrink-0 object-contain drop-shadow-[0_4px_8px_rgba(10,11,104,0.12)] sm:h-16"
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
