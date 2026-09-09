import { AnimatePresence, motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { HiCheckCircle, HiPhoto } from 'react-icons/hi2'
import { programImages, programTopics, type ProgramDescriptionSegment } from '../data/content'
import Container from '../components/Container'

function ProgramDescription({ segments }: { segments: ProgramDescriptionSegment[] }) {
  return (
    <p className="mt-6 text-left text-lg text-black/70">
      {segments.map((segment, index) => {
        if (segment.emphasis === 'bold') {
          return (
            <strong key={index} className="font-semibold text-black">
              {segment.text}
            </strong>
          )
        }
        if (segment.emphasis === 'italic') {
          return (
            <em key={index} className="italic">
              {segment.text}
            </em>
          )
        }
        return <span key={index}>{segment.text}</span>
      })}
    </p>
  )
}

export default function Programs() {
  const { slug } = useParams<{ slug: string }>()
  const activeIndex = Math.max(
    0,
    programTopics.findIndex((topic) => topic.slug === slug)
  )
  const active = programTopics[activeIndex]
  const isTextFirst = activeIndex % 2 === 0
  const activeImage = programImages[active.slug]

  return (
    <main>
      <div className="bg-white pt-16 pb-8 sm:pt-20">
        <Container>
          <div className="flex gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {programTopics.map((topic) => {
              const isActive = topic.slug === active.slug
              return (
                <Link
                  key={topic.slug}
                  to={`/programs/${topic.slug}`}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    isActive
                      ? 'bg-navy text-white'
                      : 'bg-pale-blue-bg text-navy hover:bg-pale-blue-bg/70'
                  }`}
                >
                  {topic.label}
                </Link>
              )
            })}
          </div>
        </Container>
      </div>

      <AnimatePresence mode="wait">
        <motion.section
          key={active.slug}
          id={active.slug}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={`scroll-mt-24 py-16 sm:py-20 ${
            activeIndex % 2 === 0 ? 'bg-white' : 'bg-pale-blue-bg/30'
          }`}
        >
          <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className={isTextFirst ? 'md:order-1' : 'md:order-2'}>
              <h2 className="text-3xl font-bold text-black sm:text-4xl">
                {active.label}
              </h2>
              <span className="mt-3 block h-0.5 w-10 rounded-full bg-gold" />

              <ProgramDescription segments={active.description} />

              <blockquote className="mt-6 border-l-4 border-gold pl-4 text-xl text-black italic">
                “{active.quote}”
              </blockquote>

              <ul className="mt-6 space-y-2">
                {active.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-base text-black/70"
                  >
                    <HiCheckCircle className="mt-0.5 shrink-0 text-black" size={20} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {activeImage ? (
              <img
                src={activeImage}
                alt={active.label}
                className={`w-full h-auto object-contain rounded-3xl ${
                  isTextFirst ? 'md:order-2' : 'md:order-1'
                }`}
              />
            ) : (
              // TODO: replace with real program image
              <div
                className={`flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-3xl bg-pale-blue-bg p-8 text-center ${
                  isTextFirst ? 'md:order-2' : 'md:order-1'
                }`}
              >
                <HiPhoto className="text-navy/30" size={64} />
                <span className="text-sm text-navy/50">Image coming soon</span>
              </div>
            )}
          </Container>
        </motion.section>
      </AnimatePresence>
    </main>
  )
}
