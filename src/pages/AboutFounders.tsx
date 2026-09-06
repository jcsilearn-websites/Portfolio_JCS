import { useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { HiFlag, HiLightBulb, HiHandRaised, HiStar } from 'react-icons/hi2'
import Drawer from '../components/Drawer'
import { founders, leadershipValues, type Founder } from '../data/content'

const leadershipIcons = [HiFlag, HiLightBulb, HiHandRaised, HiStar]

export default function AboutFounders() {
  const [activeFounder, setActiveFounder] = useState<Founder | null>(null)

  return (
    <main>
      <section className="bg-navy px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Our Founders
        </h1>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
          {founders.map((founder) => (
            <button
              key={founder.id}
              type="button"
              onClick={() => setActiveFounder(founder)}
              className="group flex flex-col items-center rounded-2xl bg-pale-blue-bg p-8 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
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
      </section>

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

      <section className="bg-pale-blue-bg px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Our Leadership Values
          </h2>

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
