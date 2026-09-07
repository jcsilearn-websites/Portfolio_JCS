import { motion } from 'framer-motion'
import indiaMap from '@svg-maps/india'

// @svg-maps/india ships an unresolvable internal type reference (svg-maps__common), which
// skipLibCheck leaves untyped — annotate the shape we actually use instead of casting to any.
interface IndiaMapLocation {
  id: string
  name: string
  path: string
}

const locations = indiaMap.locations as IndiaMapLocation[]

// Every logo file under college-logos/<institution>/<file>, read directly off disk rather
// than hand-listed — new logos dropped into the folder show up here with no code change.
const logoModules = import.meta.glob<string>(
  '../assets/college-logos/**/*.{png,jpg,jpeg,webp,avif}',
  { eager: true, import: 'default' },
)

interface Logo {
  name: string
  src: string
}

const allLogos: Logo[] = Object.entries(logoModules)
  .map(([path, src]) => {
    const folder = path.match(/college-logos\/([^/]+)\//)?.[1]
    return { name: folder ?? path, src }
  })
  .sort((a, b) => a.name.localeCompare(b.name))

// Evenly-sampled subset for mobile, where 18-20 badges would collide — picks spread-out
// entries rather than just the first N, so the mix of institutions still varies.
function sampleEvenly<T>(items: T[], count: number): T[] {
  if (items.length <= count) return items
  return Array.from({ length: count }, (_, i) =>
    items[Math.round((i * (items.length - 1)) / (count - 1))],
  )
}

const mobileLogos = sampleEvenly(allLogos, 7)

// Deterministic pseudo-random in [0, 1) from an integer seed — scatter pins/sizes/delays
// without Math.random, so layout stays stable across re-renders.
function pseudoRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

interface RingSlot {
  top: number
  left: number
  angleDeg: number
}

// Places `count` slots evenly along an arc that wraps the top and both sides of the map —
// starting lower-left, sweeping over the top, ending lower-right. Left open at the bottom.
function ringLayout(count: number): RingSlot[] {
  const cx = 50
  const cy = 44
  const rx = 46
  const ry = 40
  const startDeg = 208
  const endDeg = -28
  if (count === 1) {
    return [{ top: cy - ry, left: cx, angleDeg: 90 }]
  }
  return Array.from({ length: count }, (_, i) => {
    const angleDeg = startDeg + ((endDeg - startDeg) * i) / (count - 1)
    const rad = (angleDeg * Math.PI) / 180
    return {
      top: cy - ry * Math.sin(rad),
      left: cx + rx * Math.cos(rad),
      angleDeg,
    }
  })
}

// A decorative point inside the map body, roughly in the same direction as the badge —
// not geographically precise, just enough for the connector line to read as "pointing in".
function pinFor(angleDeg: number, seed: number): { top: number; left: number } {
  const rad = (angleDeg * Math.PI) / 180
  const jitter = 0.5 + pseudoRandom(seed) * 0.35
  const cx = 50
  const cy = 46
  const innerRx = 27
  const innerRy = 24
  return {
    left: cx + innerRx * jitter * Math.cos(rad),
    top: cy - innerRy * jitter * Math.sin(rad),
  }
}

function LogoBadge({
  logo,
  slot,
  index,
  sizeClassName,
}: {
  logo: Logo
  slot: RingSlot
  index: number
  sizeClassName: string
}) {
  const duration = 3.2 + pseudoRandom(index + 7) * 1.1
  const delay = pseudoRandom(index + 13) * 1.8

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ top: `${slot.top}%`, left: `${slot.left}%` }}
    >
      <motion.div
        className={`flex items-center justify-center rounded-full bg-white p-1.5 shadow-md ring-1 ring-navy/5 ${sizeClassName}`}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={logo.src}
          alt={logo.name}
          className="h-full w-full rounded-full object-contain"
        />
      </motion.div>
    </div>
  )
}

export default function WhoWeServeMap() {
  const desktopSlots = ringLayout(allLogos.length)
  const mobileSlots = ringLayout(mobileLogos.length)

  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm sm:max-w-md lg:mx-0 lg:max-w-none">
      {/* India map: solid navy fill, thin dashed white state boundaries, subtle perspective tilt */}
      <svg
        viewBox={indiaMap.viewBox}
        aria-hidden="true"
        className="absolute inset-0 m-auto h-auto w-[58%] origin-bottom [transform:perspective(900px)_rotateX(22deg)] [filter:drop-shadow(0_18px_20px_rgba(10,11,104,0.28))]"
      >
        <g fill="#0A0B68" stroke="none">
          {locations.map((location) => (
            <path key={location.id} d={location.path} />
          ))}
        </g>
        <g fill="none" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="1.4" strokeDasharray="4 3">
          {locations.map((location) => (
            <path key={location.id} d={location.path} />
          ))}
        </g>
      </svg>

      {/* Connectors + pins: decorative only, hidden on mobile where badges thin out */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full sm:block"
      >
        {desktopSlots.map((slot, i) => {
          const pin = pinFor(slot.angleDeg, i)
          return (
            <g key={i}>
              <line
                x1={slot.left}
                y1={slot.top}
                x2={pin.left}
                y2={pin.top}
                stroke="#94A3B8"
                strokeOpacity="0.5"
                strokeWidth="0.3"
                strokeDasharray="1.5 1.5"
              />
              <circle
                cx={pin.left}
                cy={pin.top}
                r="0.9"
                fill={i % 2 === 0 ? '#F4B400' : '#0A0B68'}
              />
            </g>
          )
        })}
      </svg>

      {/* Desktop/tablet: full logo set around the ring — sized to stay clear of neighbors
          even at the narrowest (sm, pre-lg) container width. */}
      <div className="hidden sm:contents">
        {allLogos.map((logo, i) => (
          <LogoBadge
            key={logo.name}
            logo={logo}
            slot={desktopSlots[i]}
            index={i}
            sizeClassName="h-8 w-8 sm:h-9 sm:w-9 xl:h-11 xl:w-11"
          />
        ))}
      </div>

      {/* Mobile: thinned-down, evenly-spaced subset, no connector lines */}
      <div className="contents sm:hidden">
        {mobileLogos.map((logo, i) => (
          <LogoBadge
            key={logo.name}
            logo={logo}
            slot={mobileSlots[i]}
            index={i}
            sizeClassName="h-14 w-14"
          />
        ))}
      </div>
    </div>
  )
}
