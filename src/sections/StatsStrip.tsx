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

  return (
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        className="mx-auto mt-16 max-w-6xl border-t border-navy/10 pt-12"
      >
        <p className="text-center text-xs font-semibold tracking-wide text-pale-blue-text/70 uppercase">
          Trusted By
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {collegeLogos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-10 w-auto object-contain opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
