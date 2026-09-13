import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  HiChevronLeft,
  HiChevronRight,
  HiStar,
} from 'react-icons/hi2'
import { testimonials, type Testimonial } from '../data/content'
import Container from '../components/Container'

const bottomStats = [
  { value: '10K+', label: 'Learners Impacted' },
  { value: '200+', label: 'Partner Institutions' },
  { value: '500+', label: 'Corporate Collaborations' },
]

const TRANSITION = { duration: 0.6, ease: 'easeInOut' } as const

// Per-offset visual treatment for the 5 visible slots (center ± 2). Anything beyond
// this (offset ±3) simply isn't rendered.
const SLOT_STYLE: Record<
  number,
  { x: number; scale: number; opacity: number; zIndex: number }
> = {
  [-2]: { x: -480, scale: 0.7, opacity: 0.25, zIndex: 10 },
  [-1]: { x: -260, scale: 0.85, opacity: 0.5, zIndex: 20 },
  0: { x: 0, scale: 1, opacity: 1, zIndex: 30 },
  1: { x: 260, scale: 0.85, opacity: 0.5, zIndex: 20 },
  2: { x: 480, scale: 0.7, opacity: 0.25, zIndex: 10 },
}

// Coverflow only makes sense once there's room for the side peeks (md+) — below that,
// a single centered card with a simple fade/slide is used instead.
function useIsDesktop(query: string) {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const update = () => setIsDesktop(mediaQuery.matches)
    update()
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [query])

  return isDesktop
}

function TestimonialCardBody({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col">
      <span className="font-serif text-5xl leading-none text-gold">
        &ldquo;
      </span>

      {/* Fixed-height clamp so every card is the same box size regardless of
          how long a given testimonial's quote is — content never resizes the card. */}
      <p className="mt-2 line-clamp-4 text-base text-black">
        {testimonial.quote}
      </p>

      <div className="mt-4 flex gap-0.5 text-gold">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <HiStar key={i} size={16} />
        ))}
      </div>

      <div className="mt-6 flex flex-1 items-end gap-3">
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          className="h-12 w-12 shrink-0 rounded-full object-cover sm:h-14 sm:w-14"
        />
        <div>
          <p className="font-bold text-navy">{testimonial.name}</p>
          {(testimonial.role || testimonial.organization) && (
            <p className="text-sm text-navy/60">
              {testimonial.role && testimonial.organization
                ? `${testimonial.role} — ${testimonial.organization}`
                : testimonial.role || testimonial.organization}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const count = testimonials.length
  const [centerIndex, setCenterIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const isDesktop = useIsDesktop('(min-width: 768px)')
  const releaseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (releaseTimer.current) clearTimeout(releaseTimer.current)
    }
  }, [])

  const startTransition = (next: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCenterIndex(next)
    releaseTimer.current = setTimeout(() => {
      setIsAnimating(false)
    }, 600)
  }

  const goPrev = () => startTransition((centerIndex - 1 + count) % count)
  const goNext = () => startTransition((centerIndex + 1) % count)
  const goToDot = (dot: number) => startTransition(dot % count)

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative overflow-hidden bg-white py-20"
    >
      <Container>
        <div className="flex flex-col items-center">
          <p className="text-center text-lg font-bold tracking-wide text-black uppercase sm:text-xl">
            Testimonials
          </p>
          <span className="mt-1 h-0.5 w-10 rounded-full bg-gold" />

          <h2 className="mt-4 text-center text-3xl font-bold sm:text-4xl">
            <span className="text-navy">Voices That </span>
            <span className="text-gold">Inspire Us</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-center text-navy/70 italic">
            Hear from the learners, educators, and organizations who have
            experienced the JCS iLearn difference.
          </p>
        </div>

        <div className="relative mt-14">
          <button
            type="button"
            onClick={goPrev}
            disabled={isAnimating}
            aria-label="Previous testimonial"
            className="absolute top-1/2 left-4 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md transition-colors duration-200 hover:bg-pale-blue-bg disabled:cursor-not-allowed disabled:opacity-50"
          >
            <HiChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={isAnimating}
            aria-label="Next testimonial"
            className="absolute top-1/2 right-4 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md transition-colors duration-200 hover:bg-pale-blue-bg disabled:cursor-not-allowed disabled:opacity-50"
          >
            <HiChevronRight size={20} />
          </button>

          {isDesktop ? (
            <div className="relative min-h-[420px] w-full overflow-hidden">
              {testimonials.map((testimonial, index) => {
                const raw = ((index - centerIndex) % count + count) % count
                const offset = raw > count / 2 ? raw - count : raw

                if (Math.abs(offset) > 2) return null

                const style = SLOT_STYLE[offset]
                const isCenter = offset === 0

                return (
                  <div
                    key={testimonial.id}
                    className="pointer-events-none absolute inset-0 flex items-center justify-center"
                  >
                    <motion.div
                      animate={{
                        x: style.x,
                        scale: style.scale,
                        opacity: style.opacity,
                        zIndex: style.zIndex,
                      }}
                      transition={TRANSITION}
                      style={{ width: 340, height: 380 }}
                      className={`pointer-events-auto relative rounded-2xl bg-white p-6 sm:p-8 ${
                        isCenter
                          ? 'border-2 border-navy shadow-xl'
                          : 'shadow-sm'
                      }`}
                    >
                      {!isCenter && (
                        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-navy/30" />
                      )}
                      <TestimonialCardBody testimonial={testimonial} />
                    </motion.div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="relative min-h-[380px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[centerIndex].id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={TRANSITION}
                  className="h-[380px] rounded-2xl border-2 border-navy bg-white p-6 shadow-xl sm:p-8"
                >
                  <TestimonialCardBody testimonial={testimonials[centerIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {testimonials.map((testimonial, dot) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => goToDot(dot)}
                aria-label={`Go to testimonial ${dot + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
                  dot === centerIndex ? 'bg-gold' : 'bg-pale-blue-bg'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-8 sm:gap-0">
          {bottomStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-6 first:pl-0 ${
                index > 0 ? 'border-navy/10 sm:border-l' : ''
              }`}
            >
              <p className="text-2xl font-bold text-navy sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-navy/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </motion.section>
  )
}
