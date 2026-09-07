import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import { HiFlag, HiLightBulb, HiHandRaised, HiStar } from 'react-icons/hi2'
import Drawer from '../components/Drawer'
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

export default function About() {
  const [activeFounder, setActiveFounder] = useState<Founder | null>(null)

  return (
    <main>
      <section
        id="positioning"
        className="scroll-mt-24 bg-navy bg-cover bg-center bg-no-repeat px-6 py-16 text-center sm:py-20"
        style={{ backgroundImage: `url(${aboutHeroImage})` }}
      >
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
      </section>

      <section className="bg-white px-6 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-32"
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

          <img
            src={ourStoryImage}
            alt={`Gear-and-checkmark graphic beside a quote card that reads: "${ourStory.quoteCardText}"`}
            className="mx-auto w-full max-w-xl lg:max-w-none"
          />
        </motion.div>
      </section>

      <section
        id="our-model"
        className="scroll-mt-24 bg-white px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
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
        </div>
      </section>

      <section
        id="leadership"
        className="scroll-mt-24 bg-pale-blue-bg px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Leadership
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {founders.map((founder) => (
              <button
                key={founder.id}
                type="button"
                onClick={() => setActiveFounder(founder)}
                className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={founder.photo}
                  alt={founder.name}
                  className="h-40 w-40 rounded-full object-cover object-top shadow-sm"
                />
                <p className="mt-5 text-lg font-semibold text-navy">
                  {founder.name}
                </p>
                <p className="mt-1 text-sm text-pale-blue-text">
                  {founder.title}
                </p>
              </button>
            ))}
          </div>
        </div>

        <Drawer open={activeFounder !== null} onClose={() => setActiveFounder(null)}>
          {activeFounder && (
            <div className="px-8 py-16">
              <img
                src={activeFounder.photo}
                alt={activeFounder.name}
                className="h-32 w-32 rounded-full object-cover object-top shadow-sm"
              />
              <h2 className="mt-5 text-2xl font-bold text-navy">
                {activeFounder.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-pale-blue-text">
                {activeFounder.title}
              </p>
              <p className="mt-1 text-xs text-navy/50">
                {activeFounder.credentials}
              </p>

              <a
                href={activeFounder.linkedIn}
                target="_blank"
                rel="noreferrer"
                aria-label={`${activeFounder.name} on LinkedIn`}
                className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white transition-colors duration-200 hover:bg-gold hover:text-navy"
              >
                <FaLinkedin size={18} />
              </a>

              <p className="mt-8 text-base leading-relaxed text-navy/80">
                {activeFounder.bio}
              </p>
              <p className="mt-4 text-right text-sm font-medium text-navy/50 italic">
                {activeFounder.signOff}
              </p>
            </div>
          )}
        </Drawer>

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
      </section>
    </main>
  )
}
