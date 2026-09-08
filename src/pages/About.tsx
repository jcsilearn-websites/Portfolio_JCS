import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import { HiFlag, HiLightBulb, HiHandRaised, HiStar, HiPlus, HiXMark } from 'react-icons/hi2'
import Container from '../components/Container'
import Modal from '../components/Modal'
import aboutHeroImage from '../assets/About-page/header.png'
import ourStoryImage from '../assets/About-page/ChatGPT Image Sep 7, 2026, 11_12_22 PM.png'
import {
  positioning,
  ourStory,
  ourModel,
  founders,
  leadershipValues,
  type Founder,
} from '../data/content'

const leadershipIcons = [HiFlag, HiLightBulb, HiHandRaised, HiStar]

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

export default function About() {
  const [activeFounderId, setActiveFounderId] = useState<string | null>(null)
  const activeFounder = founders.find((founder) => founder.id === activeFounderId) ?? null

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
                  className={`text-xl leading-relaxed text-navy/70 ${index === 0 ? '' : 'mt-6'}`}
                >
                  {paragraph}
                </p>
              ))}
              <p className="mt-6 text-2xl leading-relaxed font-semibold text-navy">
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
            {ourModel.pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={item}
                className="flex flex-col rounded-2xl bg-pale-blue-bg p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="inline-flex w-fit items-center rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold tracking-wide text-gold uppercase">
                  {pillar.stage}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-pale-blue-text">
                  {pillar.description}
                </p>
              </motion.div>
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

                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[220px_1fr]">
                  <img
                    src={activeFounder.photo}
                    alt={`${activeFounder.name}, ${activeFounder.title}`}
                    className="mx-auto w-40 rounded-2xl shadow-lg sm:w-48 md:mx-0 md:w-full"
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

          <div className="mx-auto mt-20 max-w-5xl">
            <h3 className="text-center text-2xl font-bold text-navy sm:text-3xl">
              Our Leadership Values
            </h3>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {leadershipValues.map((value, index) => {
                const Icon = leadershipIcons[index]
                return (
                  <div
                    key={value.title}
                    className="flex flex-col items-center text-center"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Icon size={22} />
                    </span>
                    <p className="mt-4 text-base font-semibold text-navy">
                      {value.title}
                    </p>
                    <p className="mt-2 text-sm text-navy/70">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
