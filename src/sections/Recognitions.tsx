import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import {
  HiAcademicCap,
  HiBookOpen,
  HiBriefcase,
  HiBuildingOffice2,
  HiCalendarDays,
  HiStar,
  HiTrophy,
  HiUserGroup,
} from 'react-icons/hi2'
import {
  bentoTiles,
  collegeLogos,
  homeStats,
  recognitions,
  type BentoIcon,
  type StatItem,
} from '../data/content'
import { useCountUp } from '../hooks/useCountUp'

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const HOVER = 'transition-all duration-300 ease-out hover:shadow-xl'
const HOVER_LIFT = { scale: 1.05 }
const HOVER_TRANSITION = { duration: 0.3, ease: 'easeOut' as const }

const numberFormatter = new Intl.NumberFormat('en-IN')

const ICONS: Record<BentoIcon, typeof HiAcademicCap> = {
  'academic-cap': HiAcademicCap,
  building: HiBuildingOffice2,
  briefcase: HiBriefcase,
  'user-group': HiUserGroup,
  calendar: HiCalendarDays,
  book: HiBookOpen,
  star: HiStar,
}

const ROUNDED: Record<'tl-br' | 'tr-bl', string> = {
  'tl-br': 'rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none',
  'tr-bl': 'rounded-tr-3xl rounded-bl-3xl rounded-tl-none rounded-br-none',
}

// Bottom-row tiles are now wide rectangles — give their corner icon a bit more presence.
const WIDE_ICON_TILES = new Set(['trainers', 'courses', 'satisfaction'])

function StatNumber({
  stat,
  inView,
  className,
}: {
  stat: StatItem
  inView: boolean
  className: string
}) {
  const value = useCountUp(stat.target, inView)
  return (
    <span className={className}>
      {numberFormatter.format(value)}
      {stat.suffix}
    </span>
  )
}

// Real Tamil Nadu state outline: unioned from the 38 district polygons in
// udit-001/india-maps-data (geojson/india.geojson, st_nm "Tamil Nadu"), simplified
// with turf.simplify and projected to this viewBox — not a hand-drawn approximation.
function TamilNaduOutline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 260"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinejoin="round"
    >
      <path d="M 19.8 99.4 L 33.6 106.7 L 29.0 113.7 L 40.6 112.0 L 42.6 119.1 L 38.3 125.2 L 49.3 132.1 L 45.3 147.8 L 48.7 155.0 L 52.6 156.8 L 61.4 150.7 L 66.1 156.2 L 60.8 183.4 L 71.1 187.2 L 59.9 209.8 L 64.6 215.6 L 60.9 221.6 L 65.2 228.8 L 57.7 241.3 L 73.0 250.0 L 88.3 247.0 L 103.6 232.1 L 104.8 215.4 L 114.2 206.1 L 135.6 199.0 L 154.5 199.5 L 155.9 196.6 L 144.0 197.2 L 136.8 189.7 L 152.2 164.2 L 152.9 156.3 L 158.2 152.5 L 178.9 154.0 L 178.4 130.1 L 172.9 125.6 L 174.0 122.7 L 178.5 123.2 L 174.5 95.2 L 176.6 85.5 L 171.3 83.9 L 178.0 80.6 L 191.1 60.6 L 200.2 22.7 L 196.8 10.0 L 194.5 13.3 L 186.7 11.1 L 176.0 24.2 L 159.0 20.1 L 160.4 26.5 L 151.2 27.9 L 148.3 33.9 L 136.4 30.6 L 124.6 35.2 L 123.3 44.3 L 115.4 51.1 L 99.8 41.2 L 89.9 40.6 L 85.8 49.1 L 79.8 49.3 L 80.4 62.5 L 74.1 68.0 L 86.2 71.8 L 83.1 80.8 L 75.1 81.1 L 72.2 88.8 L 49.4 87.6 L 46.7 96.4 L 34.1 95.2 L 32.0 91.6 L 19.8 99.4 Z" />
    </svg>
  )
}

export default function Recognitions() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const statsById = Object.fromEntries(homeStats.map((stat) => [stat.id, stat]))
  const award = recognitions[0]
  const partnerLogos = collegeLogos.slice(0, 3)

  return (
    <section ref={ref} className="bg-white px-6 pt-20 pb-20 sm:pb-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-navy sm:text-4xl">
          Recognized for Excellence
        </h2>

        {/* Award badge card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileHover={HOVER_LIFT}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`relative mx-auto mt-12 mb-16 w-full max-w-[300px] rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none bg-pale-blue-bg p-5 pl-8 text-left shadow-sm ${HOVER}`}
        >
          <span className="absolute -top-5 -left-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold text-navy shadow-md">
            <HiTrophy size={28} />
          </span>
          <p className="mt-3 text-base font-semibold text-navy">{award.title}</p>
          <p className="mt-1 text-sm text-pale-blue-text">
            {award.organization} · {award.period}
          </p>
        </motion.div>

        {/* Stats bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="bento-grid mx-auto grid grid-cols-2 gap-2 md:gap-3"
        >
          {bentoTiles.map((tile) => {
            const stat = tile.statId ? statsById[tile.statId] : undefined
            const Icon = tile.icon ? ICONS[tile.icon] : null
            const iconSize = WIDE_ICON_TILES.has(tile.id) ? 52 : 44

            if (tile.id === 'map') {
              return (
                <motion.div
                  key={tile.id}
                  variants={item}
                  whileHover={HOVER_LIFT}
                  transition={HOVER_TRANSITION}
                  style={{ gridArea: tile.area }}
                  className={`relative flex min-h-[140px] flex-col justify-end overflow-hidden p-6 text-left ${tile.bg} ${ROUNDED[tile.rounded]} ${HOVER}`}
                >
                  <TamilNaduOutline className="absolute inset-0 m-auto h-[80%] w-auto text-navy/30" />
                  {stat && (
                    <StatNumber
                      stat={stat}
                      inView={isInView}
                      className={`relative text-3xl font-bold sm:text-4xl ${tile.numberColor}`}
                    />
                  )}
                  <span className={`relative ${tile.labelColor}`}>{stat?.label}</span>
                </motion.div>
              )
            }

            if (tile.id === 'partners') {
              return (
                <motion.div
                  key={tile.id}
                  variants={item}
                  whileHover={HOVER_LIFT}
                  transition={HOVER_TRANSITION}
                  style={{ gridArea: tile.area }}
                  className={`flex min-h-[140px] flex-col gap-3 p-6 text-left ${tile.bg} ${ROUNDED[tile.rounded]} ${HOVER}`}
                >
                  <span className="text-sm font-semibold tracking-wide text-white/80 uppercase">
                    {tile.label}
                  </span>
                  <div className="flex flex-1 flex-col justify-between gap-3">
                    {partnerLogos.map((logo) => (
                      <span
                        key={logo.name}
                        className="mx-auto flex h-16 w-4/5 items-center justify-center rounded-lg bg-white p-1.5"
                      >
                        <img
                          src={logo.src}
                          alt={logo.name}
                          className="h-full w-full object-contain"
                        />
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            }

            return (
              <motion.div
                key={tile.id}
                variants={item}
                whileHover={HOVER_LIFT}
                transition={HOVER_TRANSITION}
                style={{ gridArea: tile.area }}
                className={`relative flex min-h-[140px] flex-col justify-end overflow-hidden p-6 text-left ${tile.bg} ${ROUNDED[tile.rounded]} ${HOVER}`}
              >
                {Icon && tile.iconTreatment === 'watermark' && (
                  <Icon className="absolute -right-4 -bottom-4 text-white/10" size={140} />
                )}
                {Icon && tile.iconTreatment === 'corner' && (
                  <Icon
                    className={`absolute top-5 right-5 ${tile.numberColor}/70`}
                    size={iconSize}
                  />
                )}
                {stat && (
                  <StatNumber
                    stat={stat}
                    inView={isInView}
                    className={`relative text-3xl font-bold sm:text-4xl ${tile.numberColor}`}
                  />
                )}
                <span className={`relative ${tile.labelColor}`}>{stat?.label}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .bento-grid {
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: repeat(3, minmax(150px, auto));
            grid-template-areas:
              "trained trained trained trained map map map map map partners partners partners"
              "inst inst corp corp map map map map map partners partners partners"
              "courses courses courses year year satisfaction satisfaction satisfaction trainers trainers trainers trainers";
          }
        }
      `}</style>
    </section>
  )
}
