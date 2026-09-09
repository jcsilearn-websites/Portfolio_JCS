import { motion, type Variants } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { homeHero } from '../data/content'
import heroVideo from '../assets/front-page-vid.mp4'
import Button from '../components/Button'

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Mobile/tablet: near-solid overlay so text stays readable over the video */}
      <div className="absolute inset-0 bg-navy/85 lg:hidden" />
      {/* Desktop: solid behind the text column, fading to transparent toward the right
          so the video reads clearly past roughly two-thirds of the width */}
      <div className="absolute inset-0 hidden bg-gradient-to-r from-navy from-0% via-navy via-45% to-transparent to-[68%] lg:block" />

      <div className="relative z-10 flex min-h-[92vh] items-center px-6 py-16 sm:px-10 lg:px-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-xl lg:max-w-2xl"
        >
          <motion.h1
            variants={item}
            className="text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {homeHero.taglineLine1}{' '}
            <span className="text-gold italic">{homeHero.taglineLine2}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-lg text-pale-blue-bg sm:text-xl"
          >
            {homeHero.subheadline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button to="/contact" variant="primary">
              Get Started
            </Button>
            <Button to="/programs" variant="secondary">
              Explore Our Programs
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-white/40 sm:text-sm"
          >
            {homeHero.badges.map((badge, index) => (
              <span key={badge} className="flex items-center gap-3">
                {badge}
                {index < homeHero.badges.length - 1 && (
                  <span aria-hidden className="text-white/20">
                    /
                  </span>
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <HiChevronDown size={28} />
      </motion.div>
    </section>
  )
}
