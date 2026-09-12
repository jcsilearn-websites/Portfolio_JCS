import { useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { HiChevronDown } from 'react-icons/hi2'
import jcsLogo from '../assets/logos/jcs-ilearn-logo.svg'
import { programTopics } from '../data/content'
import Button from './Button'
import Container from './Container'

const navLinks = [
  { key: '/about', label: 'About Us', to: '/about' },
  { key: '/programs', label: 'Our Programs', to: '/programs' },
  { key: '/services', label: 'Our Services', to: '/services' },
  { key: '/trainers', label: 'Footprints', to: '/trainers' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [hoveredKey, setHoveredKey] = useState<string | null>(null)
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location = useLocation()

  const activeKey =
    location.pathname === '/'
      ? 'home'
      : (navLinks.find((link) => location.pathname === link.to)?.key ?? null)
  const highlightedKey = hoveredKey ?? activeKey

  const closeMobileMenu = () => {
    setMobileOpen(false)
    setMobileProgramsOpen(false)
  }

  const openProgramsDropdown = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setProgramsOpen(true)
    setHoveredKey('/programs')
  }

  const scheduleCloseProgramsDropdown = () => {
    setHoveredKey(null)
    closeTimeout.current = setTimeout(() => setProgramsOpen(false), 150)
  }

  return (
    <header className="border-b border-navy/10 bg-white">
      <Container className="flex items-center justify-between py-4">
        <Link to="/" onClick={closeMobileMenu} className="shrink-0">
          <img src={jcsLogo} alt="JCS iLearn" className="h-10 w-auto sm:h-12" />
        </Link>

        <nav className="hidden items-center gap-5 md:flex lg:gap-8">
          <Link
            to="/"
            onMouseEnter={() => setHoveredKey('home')}
            onMouseLeave={() => setHoveredKey(null)}
            className={`relative pb-1.5 text-base font-medium tracking-normal transition-colors duration-200 ${
              highlightedKey === 'home'
                ? 'text-gold'
                : 'text-navy hover:text-gold'
            }`}
          >
            Home
            {highlightedKey === 'home' && (
              <motion.span
                layoutId="nav-underline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gold"
                transition={{ duration: 0.25, ease: 'easeOut' }}
              />
            )}
          </Link>

          {navLinks.map((link) => {
            if (link.key === '/programs') {
              return (
                <div
                  key={link.key}
                  className="relative"
                  onMouseEnter={openProgramsDropdown}
                  onMouseLeave={scheduleCloseProgramsDropdown}
                >
                  <Link
                    to={link.to}
                    className={`relative flex items-center gap-1 pb-1.5 text-base font-medium tracking-normal transition-colors duration-200 ${
                      highlightedKey === link.key
                        ? 'text-gold'
                        : 'text-navy hover:text-gold'
                    }`}
                  >
                    {link.label}
                    <HiChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${programsOpen ? 'rotate-180' : ''}`}
                    />
                    {highlightedKey === link.key && (
                      <motion.span
                        layoutId="nav-underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gold"
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {programsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute top-full left-0 z-20 mt-2 w-64 rounded-xl border border-navy/10 bg-white py-2 shadow-lg"
                      >
                        {programTopics.map((topic) => (
                          <Link
                            key={topic.slug}
                            to={`/programs/${topic.slug}`}
                            onClick={() => setProgramsOpen(false)}
                            className="block px-4 py-2.5 text-sm font-medium text-navy transition-colors duration-200 hover:bg-pale-blue-bg hover:text-gold"
                          >
                            {topic.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <Link
                key={link.key}
                to={link.to}
                onMouseEnter={() => setHoveredKey(link.key)}
                onMouseLeave={() => setHoveredKey(null)}
                className={`relative pb-1.5 text-base font-medium tracking-normal transition-colors duration-200 ${
                  highlightedKey === link.key
                    ? 'text-gold'
                    : 'text-navy hover:text-gold'
                }`}
              >
                {link.label}
                {highlightedKey === link.key && (
                  <motion.span
                    layoutId="nav-underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gold"
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  />
                )}
              </Link>
            )
          })}

          <Button to="/contact" variant="primary" size="sm">
            Get Started
          </Button>
        </nav>

        <button
          type="button"
          className="text-navy md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden border-t border-navy/10 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 sm:px-10">
              <NavLink
                to="/"
                end
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive ? 'text-gold' : 'text-navy/70 hover:text-navy'
                  }`
                }
              >
                Home
              </NavLink>

              {navLinks.map((link) => {
                if (link.key === '/programs') {
                  return (
                    <div key={link.key}>
                      <button
                        type="button"
                        onClick={() => setMobileProgramsOpen((open) => !open)}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-navy/70 hover:text-navy"
                      >
                        <span>{link.label}</span>
                        <HiChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${mobileProgramsOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileProgramsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 py-1 pl-6">
                              {programTopics.map((topic) => (
                                <Link
                                  key={topic.slug}
                                  to={`/programs/${topic.slug}`}
                                  onClick={closeMobileMenu}
                                  className="rounded-lg px-3 py-2 text-sm text-navy/60 hover:text-navy"
                                >
                                  {topic.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <NavLink
                    key={link.key}
                    to={link.to}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-2 text-sm font-medium ${
                        isActive ? 'text-gold' : 'text-navy/70 hover:text-navy'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              })}

              <Button
                to="/contact"
                variant="primary"
                size="sm"
                className="mt-3"
                onClick={closeMobileMenu}
              >
                Get Started
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
