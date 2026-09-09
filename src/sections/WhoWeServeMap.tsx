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

// Real viewBox + per-state bounds, obtained by rendering the actual @svg-maps/india paths in
// a headless browser and reading path.getBBox() — not eyeballed. Logged once during
// development (console.log(indiaMap.viewBox) + one getBBox() per location):
//   viewBox: "0 0 612 696" (612 wide x 696 tall, y grows downward/south)
//   tn (Tamil Nadu):     x 168.29–254.52, y 551.22–667.77
//   ka (Karnataka):      x 123.69–217.52, y 443.99–593.37
//   pb (Punjab):         x 119.01–182.98, y 114.53–188.77
//   ap (Andhra Pradesh): x 179.48–346.96, y 428.42–571.13
//
// Every pin coordinate below was derived from these real bounds: take the city's real
// latitude/longitude, express it as a fraction of that state's real-world lat/long bounding
// box, then apply the same fraction to the state's SVG bounding box above. Colleges that
// share a city get a small (<10 unit) deterministic offset purely so their pins don't fully
// overlap — that offset is a decorative nudge, not a claim about the exact campus address.
interface PinLocation {
  x: number
  y: number
  /** Set when the source data didn't name a city/state and the position is our best guess. */
  unconfirmed?: string
}

const PIN_LOCATIONS: Record<string, PinLocation> = {
  'Dayanand Sagar University, Bangalore': { x: 194.97, y: 561.46 },
  'Dhanalakshmi Srinivasan University, Trichy': { x: 220.08, y: 609.49 },
  'Ganadipathy Tulsi’s Jain Engineering College, Vellore': { x: 229.04, y: 563.76 },
  'JAIN University, Bangalore': { x: 198.97, y: 565.46 },
  'Lovely Profesional University, Punjab': {
    x: 159.61,
    y: 141.48,
    unconfirmed: 'Source only gives the state (Punjab); pin uses Phagwara, LPU’s well-known campus city, as a best guess.',
  },
  'Mahendra Engineering College, Salem': { x: 206.39, y: 588.7 },
  'Muthayammal Engineering College, Salem': { x: 212.39, y: 594.7 },
  'PARK College of Engineering and Technology, Coimbatore': { x: 186.48, y: 598.62 },
  'PSG, Coimbatore': { x: 189.48, y: 603.62 },
  'PSNA College of Engineering and Technology, Dindugal': { x: 204.69, y: 618.69 },
  'Rathinam Technical Campus, Coimbatore': { x: 183.48, y: 610.62 },
  'Shri Nehru Maha Vidyalaya College of Arts and Science': {
    x: 180.48,
    y: 609.62,
    unconfirmed: 'Source names no city or state at all; pin guesses Coimbatore, TN from general recollection — needs client confirmation.',
  },
  'Sree Saraswathi Thiyagaraja College, Pollachi': { x: 184.59, y: 612.32 },
  'Sri Ramakrishna Engineering College, Coimbatore': { x: 181.48, y: 605.62 },
  'SRM University, Andhra Pradesh': {
    x: 257.49,
    y: 495.24,
    unconfirmed: 'Source only gives the state (Andhra Pradesh); pin uses the Guntur/Mangalagiri area, where SRM AP’s actual campus is, as a best guess.',
  },
  'St. Joseph’s College of Engineering, Chennai': { x: 250.85, y: 564.2 },
  'Takshashila University, Tindivanam': { x: 239.87, y: 578.46 },
  'Tamil Nadu College of Engineering, Coimbatore': { x: 185.48, y: 601.62 },
  'VELS University, Chennai': { x: 248.85, y: 558.2 },
  'VSB College of Engineering, Coimbatore': { x: 190.48, y: 608.62 },
}

// Solid teardrop/map-pin silhouette (Google-Maps style), authored tip-first: the anchor point
// (0,0) is the pointed tip, the rounded body extends upward (negative y) from there. Placing a
// pin is just `translate(x,y) scale(s)` with the real coordinates above — no offset math.
const PIN_PATH =
  'M0,-20 C-3.87,-20 -7,-16.86 -7,-13 C-7,-7.75 0,0 0,0 C0,0 7,-7.75 7,-13 C7,-16.86 3.87,-20 0,-20 Z'
const PIN_SCALE = 0.55
const PIN_COLOR = '#D4E157'

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

// Deterministic pseudo-random in [0, 1) from an integer seed — staggers badge float timing
// without Math.random, so layout stays stable across re-renders.
function pseudoRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

interface RingSlot {
  top: number
  left: number
}

// Places `count` slots evenly along an arc that wraps the top and both sides of the map —
// starting lower-left, sweeping over the top, ending lower-right. Left open at the bottom.
// This is purely for badge layout (decorative, not geographic) — pins use real coordinates.
function ringLayout(count: number): RingSlot[] {
  const cx = 50
  const cy = 44
  const rx = 46
  const ry = 40
  const startDeg = 208
  const endDeg = -28
  if (count === 1) {
    return [{ top: cy - ry, left: cx }]
  }
  return Array.from({ length: count }, (_, i) => {
    const angleDeg = startDeg + ((endDeg - startDeg) * i) / (count - 1)
    const rad = (angleDeg * Math.PI) / 180
    return {
      top: cy - ry * Math.sin(rad),
      left: cx + rx * Math.cos(rad),
    }
  })
}

// Converts a real map coordinate (in the India SVG's own 612x696 viewBox units) into the
// outer container's flat 0-100 percentage space, matching how the map <svg> is actually
// sized/centered (w-[58%] h-auto, centered via inset-0 m-auto). Used only so the connector
// lines' map-side endpoint lands close to each pin — the pins themselves are drawn as native
// shapes inside the (tilted) map svg, so they always land exactly right regardless of tilt.
const MAP_WIDTH_PCT = 58
const MAP_HEIGHT_PCT = MAP_WIDTH_PCT * (696 / 612)
const MAP_OFFSET_X_PCT = (100 - MAP_WIDTH_PCT) / 2
const MAP_OFFSET_Y_PCT = (100 - MAP_HEIGHT_PCT) / 2

// The map itself renders with `perspective(900px) rotateX(22deg)` from the bottom edge (see
// the map <svg>'s className below) — a point's flat, pre-tilt position isn't where it actually
// paints on screen. Points near the bottom (most colleges, being in south India) barely move,
// but a state like Punjab near the top visibly shifts down/inward — measured ~48px off at a
// typical desktop size before this correction. This replicates that exact 3D transform math
// (rotateX around the bottom pivot, then perspective division) so the connector line's
// map-side end lines up with where the pin actually renders instead of its flat position.
const TILT_DEG = 22
const PERSPECTIVE_PX = 900
// Reference container width used to calibrate the correction (this component's typical
// rendered size on the tablet/desktop widths where these lines are actually visible — they're
// hidden below `sm`). The correction is approximate at very different container widths, but
// the error stays small there too since the affected (far-from-pivot) pins are few.
const REFERENCE_CONTAINER_PX = 544
const REFERENCE_MAP_HEIGHT_PX = (MAP_WIDTH_PCT / 100) * REFERENCE_CONTAINER_PX * (696 / 612)
const PERSPECTIVE_D_NORM = PERSPECTIVE_PX / REFERENCE_MAP_HEIGHT_PX
const TILT_RAD = (TILT_DEG * Math.PI) / 180
const SIN_TILT = Math.sin(TILT_RAD)
const COS_TILT = Math.cos(TILT_RAD)

function toTiltedFlatPercent(x: number, y: number): { left: number; top: number } {
  const fx = x / 612
  const fy = y / 696
  const rx = fx - 0.5 // relative to the pivot's horizontal center
  const ry = fy - 1 // relative to the pivot at the bottom edge (<= 0)
  const w = 1 - (ry * SIN_TILT) / PERSPECTIVE_D_NORM
  const screenXNorm = 0.5 + rx / w
  const screenYNorm = 1 + (ry * COS_TILT) / w
  return {
    left: MAP_OFFSET_X_PCT + screenXNorm * MAP_WIDTH_PCT,
    top: MAP_OFFSET_Y_PCT + screenYNorm * MAP_HEIGHT_PCT,
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
      {/* India map: solid navy fill, thin dashed white state boundaries, subtle perspective
          tilt, and the real college pins — all in the same transformed svg so pins always
          land exactly on the (tilted) landmass with no separate coordinate conversion. */}
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
        {/* Static pins — no float/bob animation, only the logo badges keep that. */}
        <g fill={PIN_COLOR} stroke="none">
          {allLogos.map((logo) => {
            const pin = PIN_LOCATIONS[logo.name]
            if (!pin) return null
            return (
              <path
                key={logo.name}
                d={PIN_PATH}
                transform={`translate(${pin.x} ${pin.y}) scale(${PIN_SCALE})`}
              />
            )
          })}
        </g>
      </svg>

      {/* Connector lines only: decorative, hidden on mobile where badges thin out. Each
          line's map-side end is the flat-space projection of that college's real pin. */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full sm:block"
      >
        {allLogos.map((logo, i) => {
          const pin = PIN_LOCATIONS[logo.name]
          const slot = desktopSlots[i]
          if (!pin || !slot) return null
          const target = toTiltedFlatPercent(pin.x, pin.y)
          return (
            <line
              key={logo.name}
              x1={slot.left}
              y1={slot.top}
              x2={target.left}
              y2={target.top}
              stroke="#94A3B8"
              strokeOpacity="0.5"
              strokeWidth="0.3"
              strokeDasharray="1.5 1.5"
            />
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
