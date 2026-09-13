import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import {
  HiAcademicCap,
  HiBookOpen,
  HiBriefcase,
  HiBuildingOffice2,
  HiCalendarDays,
  HiMapPin,
  HiStar,
  HiUserGroup,
} from 'react-icons/hi2'
import { BadgeCheck, Headset } from 'lucide-react'
import indiaMap from '@svg-maps/india'
import {
  bentoTiles,
  homeStats,
  recognitions,
  whyChooseUsHighlights,
  type BentoIcon,
  type StatItem,
  type WhyChooseUsHighlight,
} from '../data/content'
import { useCountUp } from '../hooks/useCountUp'
import Container from '../components/Container'
import allianceUniversityIcon from '../assets/front-page/Alliance_University_Icon.svg'

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

const WHY_CHOOSE_US_ICONS: Record<WhyChooseUsHighlight['icon'], typeof BadgeCheck> = {
  certifications: BadgeCheck,
  support: Headset,
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

// @svg-maps/india ships an unresolvable internal type reference (svg-maps__common), which
// skipLibCheck leaves untyped — annotate the shape we actually use instead of casting to any.
interface IndiaMapLocation {
  id: string
  name: string
  path: string
}

const indiaLocations = indiaMap.locations as IndiaMapLocation[]

// Tile-relative percentages, derived by rendering the real IndiaOutline svg and converting
// each city's true @svg-maps/india coordinate (Chennai/Coimbatore from WhoWeServeMap.tsx's
// PIN_LOCATIONS, Madurai estimated the same way) through the svg's actual on-screen box —
// not eyeballed. At full-India zoom these three sit close together in the south-east, so
// labels are nudged outward in whichever direction has clear space rather than a fixed offset.
const CITY_PINS = [
  {
    name: 'Chennai',
    pin: { x: 45.3, y: 74.0 },
    label: { x: 50, y: 70 },
    labelAlign: 'left' as const,
  },
  {
    name: 'Coimbatore',
    pin: { x: 39.8, y: 78.0 },
    label: { x: 32, y: 78 },
    labelAlign: 'right' as const,
  },
  {
    name: 'Madurai',
    pin: { x: 40.9, y: 81.7 },
    label: { x: 36, y: 89 },
    labelAlign: 'left' as const,
  },
]

function IndiaOutline({ className }: { className?: string }) {
  return (
    <svg
      viewBox={indiaMap.viewBox}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinejoin="round"
    >
      {indiaLocations.map((location) => (
        <path key={location.id} d={location.path} />
      ))}
    </svg>
  )
}

export default function Recognitions() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const statsById = Object.fromEntries(homeStats.map((stat) => [stat.id, stat]))
  const award = recognitions[0]

  return (
    <section ref={ref} className="bg-white pt-20 pb-20 sm:pb-24">
      <Container className="text-center">
        <h2 className="text-center text-lg font-bold tracking-wide text-black uppercase sm:text-xl">
          Recognized for Excellence
        </h2>
        <span className="mx-auto mt-1 block h-0.5 w-10 rounded-full bg-gold" />

        {/* Award badge card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileHover={HOVER_LIFT}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`relative mx-auto mt-12 mb-16 w-full max-w-[300px] rounded-tl-3xl rounded-br-3xl rounded-tr-none rounded-bl-none bg-gray-100 p-5 pl-14 text-left shadow-sm ${HOVER}`}
        >
          <span className="absolute -top-8 -left-8 flex h-20 w-20 items-center justify-center rounded-full shadow-md">
            <img
              src={allianceUniversityIcon}
              alt="Alliance University"
              className="h-full w-full rounded-full object-contain"
            />
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
                  data-tile={tile.id}
                  className={`relative flex min-h-[140px] flex-col justify-end overflow-hidden p-6 text-left ${tile.bg} ${ROUNDED[tile.rounded]} ${HOVER}`}
                >
                  <IndiaOutline className="absolute inset-0 m-auto h-[80%] w-auto text-navy/30" />

                  {CITY_PINS.map((city) => (
                    <span key={city.name}>
                      <HiMapPin
                        className="absolute h-4 w-4 -translate-x-1/2 -translate-y-full text-navy drop-shadow-sm sm:h-5 sm:w-5"
                        style={{ top: `${city.pin.y}%`, left: `${city.pin.x}%` }}
                        aria-hidden="true"
                      />
                      <span
                        className={`absolute -translate-y-1/2 text-xs font-semibold whitespace-nowrap text-navy ${
                          city.labelAlign === 'right'
                            ? '-translate-x-full'
                            : ''
                        }`}
                        style={{ top: `${city.label.y}%`, left: `${city.label.x}%` }}
                      >
                        {city.name}
                      </span>
                    </span>
                  ))}
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
                  data-tile={tile.id}
                  className={`flex min-h-[140px] flex-col gap-3 p-6 text-left ${tile.bg} ${ROUNDED[tile.rounded]} ${HOVER}`}
                >
                  <span className="text-sm font-semibold tracking-wide text-white/80 uppercase">
                    {tile.label}
                  </span>
                  <div className="flex flex-1 flex-col justify-between gap-3">
                    {whyChooseUsHighlights.map((highlight) => {
                      const HighlightIcon = WHY_CHOOSE_US_ICONS[highlight.icon]
                      return (
                        <span
                          key={highlight.stat}
                          className="flex flex-1 items-center gap-3 rounded-lg bg-white px-4 py-4"
                        >
                          <HighlightIcon
                            className="h-8 w-8 shrink-0 text-navy"
                            strokeWidth={1.75}
                          />
                          <span className="text-sm leading-snug font-bold text-navy sm:text-base">
                            {highlight.stat}
                          </span>
                        </span>
                      )
                    })}
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
                data-tile={tile.id}
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
      </Container>

      <style>{`
        @media (min-width: 768px) {
          .bento-grid {
            grid-template-columns: repeat(12, 1fr);
            /* Row heights follow the reference sketch's proportions (trained : inst/corp :
               bottom-row β‰ˆ 58 : 68 : 46) instead of three equal rows — same tiles, same
               column widths/spans, just a taller middle band and a slightly shorter bottom
               row rather than a uniform grid. */
            grid-template-rows: minmax(150px, auto) minmax(165px, auto) minmax(135px, auto);
            grid-template-areas:
              "trained trained trained trained map map map map map partners partners partners"
              "inst inst corp corp map map map map map partners partners partners"
              "courses courses courses year year satisfaction satisfaction satisfaction trainers trainers trainers trainers";
          }
          /* grid-area is only assigned at md+, matching the named areas above. Applying it
             unconditionally (e.g. via inline style) breaks the mobile 2-col fallback: per the
             CSS Grid spec, a grid-area name with no matching named area doesn't fall back to
             auto-placement — the browser synthesizes new implicit lines for it instead, which
             collapses every tile into the same overlapping cell below md. */
          ${bentoTiles.map((tile) => `.bento-grid [data-tile="${tile.id}"] { grid-area: ${tile.area}; }`).join('\n          ')}
        }
      `}</style>
    </section>
  )
}
