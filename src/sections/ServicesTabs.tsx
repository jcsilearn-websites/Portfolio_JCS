import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  HiAcademicCap,
  HiBuildingOffice2,
  HiRocketLaunch,
  HiBookOpen,
  HiUserGroup,
} from 'react-icons/hi2'
import { serviceCategories } from '../data/content'
import Container from '../components/Container'
import corporatesPanel from '../assets/our-services/Corperate.png'
import schoolsPanel from '../assets/our-services/schools.png'
import professionalsPanel from '../assets/our-services/proffesionals.png'
import universitiesPanel from '../assets/our-services/universities.png'
import startupsPanel from '../assets/our-services/startup.png'

const panelImages: Record<string, string> = {
  universities: universitiesPanel,
  corporates: corporatesPanel,
  startups: startupsPanel,
  schools: schoolsPanel,
  professionals: professionalsPanel,
}

const icons = {
  universities: HiAcademicCap,
  corporates: HiBuildingOffice2,
  startups: HiRocketLaunch,
  schools: HiBookOpen,
  professionals: HiUserGroup,
} as const

export default function ServicesTabs() {
  const location = useLocation()
  const initialId =
    serviceCategories.find((category) => category.id === location.hash.slice(1))
      ?.id ?? serviceCategories[0].id
  const [activeId, setActiveId] = useState(initialId)
  const active = serviceCategories.find((category) => category.id === activeId)!

  return (
    <section className="py-20">
      <Container>
        <div className="flex gap-2 overflow-x-auto border-b border-navy/10 pb-px sm:justify-center">
          {serviceCategories.map((category) => {
            const Icon = icons[category.id as keyof typeof icons]
            const isActive = category.id === activeId
            return (
              <button
                key={category.id}
                id={category.id}
                type="button"
                onClick={() => setActiveId(category.id)}
                className={`relative flex shrink-0 items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  isActive ? 'text-navy' : 'text-navy/40 hover:text-navy/70'
                }`}
              >
                <Icon className={isActive ? 'text-gold' : ''} />
                {category.label}
                {isActive && (
                  <motion.span
                    layoutId="services-tab-underline"
                    className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-gold"
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                )}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="pt-10"
          >
            <img
              src={panelImages[active.id]}
              alt={`${active.label} — ${active.description}`}
              className="h-auto w-full rounded-2xl sm:rounded-3xl"
            />
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
