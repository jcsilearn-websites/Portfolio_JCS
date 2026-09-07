import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { homeStats, collegeLogos } from '../data/content'
import { useCountUp } from '../hooks/useCountUp'

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const numberFormatter = new Intl.NumberFormat('en-IN')

function StatValue({
  target,
  suffix,
  inView,
}: {
  target: number
  suffix: string
  inView: boolean
}) {
  const value = useCountUp(target, inView)
  return (
    <span className="text-4xl font-bold text-navy sm:text-5xl">
      {numberFormatter.format(value)}
      {suffix}
    </span>
  )
}

export default function StatsStrip() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  const trustedByRef = useRef<HTMLElement>(null)
  const trustedByInView = useInView(trustedByRef, { once: true, amount: 0.3 })

  return (
    <>
      <section ref={ref} className="bg-pale-blue-bg px-6 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 text-center sm:grid-cols-3 lg:grid-cols-6"
        >
          {homeStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="flex flex-col items-center gap-2"
            >
              <StatValue target={stat.target} suffix={stat.suffix} inView={isInView} />
              <span className="text-sm font-medium text-pale-blue-text sm:text-base">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <motion.section
        ref={trustedByRef}
        initial={{ opacity: 0 }}
        animate={trustedByInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white py-16"
      >
        <p className="px-6 text-center text-lg font-bold tracking-wide text-gold uppercase sm:text-xl">
          Trusted By
        </p>
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
    </>
  )
}
