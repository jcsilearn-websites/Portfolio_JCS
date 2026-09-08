import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import { HiPlus, HiXMark } from 'react-icons/hi2'
import Container from '../components/Container'
import Modal from '../components/Modal'
import aboutHeroImage from '../assets/About-page/header.png'
import ourStoryImage from '../assets/About-page/ChatGPT Image Sep 7, 2026, 11_12_22 PM.png'
import visionImage from '../assets/About-page/vision.png'
import {
  positioning,
  ourStory,
  vision,
  ourModel,
  founders,
  founderStatCallout,
  technicalSupportTeamHeading,
  technicalSupportTeam,
  type Founder,
  type TeamMember,
} from '../data/content'

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

interface FounderCardProps {
  founder: Founder
  isOpen: boolean
  onToggle: () => void
}

function FounderCard({ founder, isOpen, onToggle }: FounderCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src={founder.photo}
        alt={`${founder.name}, ${founder.title}`}
        className="block w-full"
      />
      <button
        type="button"
        onClick={onToggle}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={`View ${founder.name}'s bio`}
        className={`absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 ${
          isOpen ? 'bg-gold text-navy' : 'bg-navy text-white'
        }`}
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="flex"
        >
          <HiPlus size={18} />
        </motion.span>
      </button>
    </div>
  )
}

// Static counterpart to FounderCard — same photo/overlay treatment, no "+" icon and no
// click-to-expand modal (Technical Support Team cards have no bio to expand into).
function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src={member.photo}
        alt={`${member.name}, ${member.title}`}
        className="block w-full"
      />
    </div>
  )
}

// Same diagonal-corner "pill" silhouette as src/assets/cards-svg/button-pill.svg (sharp
// top-left/bottom-right corners, arced top-right/bottom-left), re-proportioned for a card's
// taller aspect ratio. preserveAspectRatio="none" so it always fills the card's real box.
const modelCardPillPath =
  'M 24 24 H 336 A 40 40 0 0 1 376 64 V 236 H 64 A 40 40 0 0 1 24 196 Z'

interface OurModelCardProps {
  pillar: (typeof ourModel.pillars)[number]
  isActive: boolean
  onToggle: () => void
}

function OurModelCard({ pillar, isActive, onToggle }: OurModelCardProps) {
  return (
    <motion.button
      type="button"
      variants={item}
      onClick={onToggle}
      aria-pressed={isActive}
      className="group relative isolate flex flex-col text-left transition-transform duration-300 ease-out hover:-translate-y-1"
    >
      <svg
        viewBox="0 0 400 260"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d={modelCardPillPath}
          vectorEffect="non-scaling-stroke"
          strokeWidth={2}
          className={`transition-colors duration-300 ease-out ${
            isActive
              ? 'fill-navy stroke-navy'
              : 'fill-white stroke-black group-hover:stroke-navy'
          }`}
        />
      </svg>

      <div className="relative z-10 flex flex-col px-8 py-9">
        <span
          className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase transition-colors duration-300 ${
            isActive ? 'bg-white/10 text-gold' : 'bg-gold/15 text-gold'
          }`}
        >
          {pillar.stage}
        </span>
        <h3
          className={`mt-4 text-lg font-semibold transition-colors duration-300 ${
            isActive ? 'text-white' : 'text-navy'
          }`}
        >
          {pillar.title}
        </h3>
        <p
          className={`mt-2 text-sm transition-colors duration-300 ${
            isActive ? 'text-white/85' : 'text-pale-blue-text'
          }`}
        >
          {pillar.description}
        </p>
      </div>
    </motion.button>
  )
}

export default function About() {
  const [activeFounderId, setActiveFounderId] = useState<string | null>(null)
  const activeFounder = founders.find((founder) => founder.id === activeFounderId) ?? null
  const [activeModelCards, setActiveModelCards] = useState<Set<number>>(new Set())
  const toggleModelCard = (index: number) => {
    setActiveModelCards((current) => {
      const next = new Set(current)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <main>
      <section
        id="positioning"
        className="scroll-mt-24 bg-navy bg-cover bg-center bg-no-repeat py-16 text-center sm:py-20"
        style={{ backgroundImage: `url(${aboutHeroImage})` }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mx-auto max-w-3xl"
          >
            <span className="inline-flex flex-col items-center">
              <span className="text-sm font-semibold tracking-wide text-white uppercase">
                {positioning.label}
              </span>
              <span className="mt-1 h-0.5 w-10 rounded-full bg-gold" />
            </span>

            <h1 className="mt-4 text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              {positioning.headline}
            </h1>
            <p className="mt-2 text-lg text-white italic sm:text-xl">
              {positioning.subheading}
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-32"
          >
            <div>
              {ourStory.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-xl leading-relaxed text-black/70 ${index === 0 ? '' : 'mt-6'}`}
                >
                  {paragraph}
                </p>
              ))}
              <p className="mt-6 text-2xl leading-relaxed font-semibold text-black">
                {ourStory.closingLine}
              </p>
            </div>

            <div className="aspect-[5/4] w-full overflow-hidden">
              <img
                src={ourStoryImage}
                alt={`Gear-and-checkmark graphic beside a quote card that reads: "${ourStory.quoteCardText}"`}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid items-center gap-12 lg:items-start lg:grid-cols-[620px_1fr] lg:gap-16"
          >
            <div>
              <span className="inline-flex flex-col items-start">
                <span className="text-sm font-semibold tracking-wide text-black uppercase">
                  {vision.label}
                </span>
                <span className="mt-1 h-0.5 w-10 rounded-full bg-gold" />
              </span>

              <h2 className="mt-6 text-4xl font-bold text-black sm:text-5xl">
                {vision.headline.lead}
                <em className="font-normal italic">{vision.headline.emphasis}</em>
                {vision.headline.trail}
              </h2>

              {vision.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-xl leading-relaxed text-black/70 ${index === 0 ? 'mt-6' : 'mt-4'}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="aspect-[6/5] w-full overflow-hidden lg:aspect-auto lg:mt-[207px] lg:h-[254px]">
              <img
                src={visionImage}
                alt="Two circular photo collages, labeled Student Friendly and Skilled Trainers, connected by a decorative ribbon around a central gear-and-checkmark icon"
                className="h-full w-full object-contain"
              />
            </div>
          </motion.div>
        </Container>
      </section>

      <section
        id="our-model"
        className="scroll-mt-24 bg-white py-20 sm:py-24"
      >
        <Container>
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Our Model
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-navy/70">
            {ourModel.intro}
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {ourModel.pillars.map((pillar, index) => (
              <OurModelCard
                key={pillar.title}
                pillar={pillar}
                isActive={activeModelCards.has(index)}
                onToggle={() => toggleModelCard(index)}
              />
            ))}
          </motion.div>
        </Container>
      </section>

      <section
        id="leadership"
        className="scroll-mt-24 bg-white py-20 sm:py-24"
      >
        <Container>
          <span className="mx-auto flex flex-col items-center">
            <span className="text-sm font-semibold tracking-wide text-black uppercase">
              Leadership
            </span>
            <span className="mt-1 h-0.5 w-10 rounded-full bg-gold" />
          </span>

          <h2 className="mt-6 text-center text-4xl font-bold text-black sm:text-5xl">
            Founding Team
          </h2>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
            {founders.map((founder) => (
              <FounderCard
                key={founder.id}
                founder={founder}
                isOpen={activeFounderId === founder.id}
                onToggle={() =>
                  setActiveFounderId((current) =>
                    current === founder.id ? null : founder.id,
                  )
                }
              />
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-2xl text-center">
            <h3 className="text-3xl font-bold text-black sm:text-4xl">
              {founderStatCallout.headline.lead}
              <em className="font-normal italic">{founderStatCallout.headline.emphasis}</em>
              {founderStatCallout.headline.trail}
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-black/70">
              {founderStatCallout.sentence.map((part, index) =>
                part.bold ? (
                  <strong key={index} className="font-semibold text-black">
                    {part.text}
                  </strong>
                ) : (
                  <span key={index}>{part.text}</span>
                ),
              )}
            </p>
          </div>

          <h2 className="mt-20 text-center text-4xl font-bold text-black sm:text-5xl">
            {technicalSupportTeamHeading}
          </h2>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
            {technicalSupportTeam.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>

          <Modal isOpen={!!activeFounder} onClose={() => setActiveFounderId(null)}>
            {activeFounder && (
              <div className="relative bg-navy px-8 py-10 sm:px-12 sm:py-12">
                <button
                  type="button"
                  onClick={() => setActiveFounderId(null)}
                  aria-label="Close"
                  className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-gold hover:text-navy"
                >
                  <HiXMark size={20} />
                </button>

                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[200px_1fr]">
                  <img
                    src={activeFounder.modalPhoto}
                    alt={`${activeFounder.name}, ${activeFounder.title}`}
                    className="mx-auto aspect-square w-40 rounded-2xl object-cover shadow-lg sm:w-48 md:mx-0 md:w-[200px]"
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold text-white">
                        {activeFounder.name}
                      </h3>
                      <a
                        href={activeFounder.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${activeFounder.name} on LinkedIn`}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-gold hover:text-navy"
                      >
                        <FaLinkedin size={16} />
                      </a>
                    </div>
                    <p className="mt-1 text-sm font-medium text-gold">
                      {activeFounder.title}
                    </p>

                    <div className="mt-6 space-y-4">
                      {activeFounder.bio.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-base leading-relaxed text-white/85"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Modal>
        </Container>
      </section>
    </main>
  )
}
