import { useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import indiaMap from '@svg-maps/india'
import { whoWeServe, collegeLogos, type CollegeLogo } from '../data/content'

// @svg-maps/india ships an unresolvable internal type reference (svg-maps__common), which
// skipLibCheck leaves untyped — annotate the shape we actually use instead of casting to any.
interface IndiaMapLocation {
  id: string
  name: string
  path: string
}

interface BadgeSlot {
  top: string
  left: string
  size: number
  duration: number
  delay: number
  hideOnMobile?: boolean
}

// Loose, decorative scatter around/above the India outline — not pinned to real geography.
const logoBadgeSlots: BadgeSlot[] = [
  { top: '4%', left: '18%', size: 64, duration: 3.4, delay: 0 },
  { top: '0%', left: '48%', size: 56, duration: 3.8, delay: 0.6, hideOnMobile: true },
  { top: '8%', left: '78%', size: 60, duration: 3.2, delay: 1.1 },
  { top: '26%', left: '4%', size: 56, duration: 4, delay: 0.3, hideOnMobile: true },
  { top: '30%', left: '90%', size: 64, duration: 3.6, delay: 1.4 },
  { top: '46%', left: '12%', size: 72, duration: 3.3, delay: 0.8 },
  { top: '54%', left: '84%', size: 56, duration: 3.9, delay: 0.2, hideOnMobile: true },
  { top: '74%', left: '30%', size: 60, duration: 3.5, delay: 1.2 },
  { top: '78%', left: '68%', size: 56, duration: 3.7, delay: 0.5, hideOnMobile: true },
]

const dotSlots: (BadgeSlot & { color: 'gold' | 'navy' })[] = [
  { top: '16%', left: '34%', size: 16, duration: 3.2, delay: 0.4, color: 'gold' },
  { top: '38%', left: '62%', size: 14, duration: 3.6, delay: 1, color: 'navy' },
  { top: '62%', left: '6%', size: 18, duration: 3.4, delay: 0.7, color: 'gold', hideOnMobile: true },
  { top: '90%', left: '52%', size: 14, duration: 3.9, delay: 0.2, color: 'navy' },
]

// Decorative dashed connectors, in the same 0-100 percentage space as the badge slots above,
// loosely toward the outline — not meant to be geographically precise.
const connectorLines = [
  { x1: 18, y1: 4, x2: 40, y2: 42 },
  { x1: 78, y1: 8, x2: 58, y2: 38 },
  { x1: 12, y1: 46, x2: 34, y2: 52 },
  { x1: 68, y1: 78, x2: 54, y2: 64 },
]

function pickRandomLogos(count: number): CollegeLogo[] {
  const shuffled = [...collegeLogos].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

function FloatingBadge({
  slot,
  className = '',
  children,
}: {
  slot: BadgeSlot
  className?: string
  children?: ReactNode
}) {
  return (
    <motion.div
      className={`absolute flex items-center justify-center rounded-full ${
        slot.hideOnMobile ? 'hidden sm:flex' : ''
      } ${className}`}
      style={{
        top: slot.top,
        left: slot.left,
        width: slot.size,
        height: slot.size,
        marginTop: -slot.size / 2,
        marginLeft: -slot.size / 2,
      }}
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: slot.duration,
        delay: slot.delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

function WhoWeServeGraphic() {
  const [logos] = useState(() => pickRandomLogos(logoBadgeSlots.length))

  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm sm:max-w-md lg:mx-0 lg:max-w-none">
      <svg
        viewBox={indiaMap.viewBox}
        aria-hidden="true"
        className="absolute inset-0 m-auto h-auto w-3/5"
      >
        <g fill="#0A0B68" fillOpacity="0.1" stroke="none">
          {(indiaMap.locations as IndiaMapLocation[]).map((location) => (
            <path key={location.id} d={location.path} />
          ))}
        </g>
      </svg>

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full sm:block"
      >
        {connectorLines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#0A0B68"
            strokeOpacity="0.2"
            strokeWidth="0.3"
            strokeDasharray="2 2"
          />
        ))}
      </svg>

      {logoBadgeSlots.map((slot, i) => {
        const logo = logos[i]
        if (!logo) return null
        return (
          <FloatingBadge
            key={logo.name}
            slot={slot}
            className="bg-white p-2 shadow-md ring-1 ring-navy/5"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-full w-full object-contain"
            />
          </FloatingBadge>
        )
      })}

      {dotSlots.map((dot, i) => (
        <FloatingBadge
          key={i}
          slot={dot}
          className={dot.color === 'gold' ? 'bg-gold' : 'bg-navy'}
        />
      ))}
    </div>
  )
}

export default function WhoWeServe() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white px-6 py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex flex-col items-start">
            <span className="text-sm font-semibold tracking-wide text-gold uppercase">
              {whoWeServe.label}
            </span>
            <span className="mt-1 h-0.5 w-10 rounded-full bg-gold" />
          </span>

          <h2 className="mt-6 text-3xl font-bold text-navy sm:text-4xl">
            {whoWeServe.headline.lead}
            <em className="font-normal italic">{whoWeServe.headline.emphasis}</em>
            {whoWeServe.headline.trail}
          </h2>

          <p className="mt-6 text-left text-lg text-navy/70">
            {whoWeServe.paragraph}
          </p>

          <p className="mt-6 text-base font-light text-navy/60 italic">
            {whoWeServe.closingLine}
          </p>
        </div>

        <WhoWeServeGraphic />
      </div>
    </motion.section>
  )
}
