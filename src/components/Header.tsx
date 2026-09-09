import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi'
import jcsLogo from '../assets/logos/jcs-ilearn-logo.svg'
import Button from './Button'

const aboutLinks = [
  { label: 'About', to: '/about' },
  { label: 'Journey', to: '/about/journey' },
  { label: 'Founders', to: '/about/founders' },
  { label: 'Vision', to: '/about/vision' },
]

const navLinks = [
  { key: '/programs', label: 'Our Programs', to: '/programs' },
  { key: '/services', label: 'Our Services', to: '/services' },
  { key: '/trainers', label: 'Trainers', to: '/trainers' },
]

export default function Header() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hoveredKey, setHoveredKey] = useState<string | null>(null)
  const location = useLocation()

  const aboutActive = location.pathname.startsWith('/about')
  const activeKey = aboutActive
    ? 'about'
    : (navLinks.find((link) => location.pathname === link.to)?.key ?? null)
  const highlightedKey = hoveredKey ?? activeKey

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="shrink-0"
        >
          <img src={jcsLogo} alt="JCS iLearn" className="h-10 w-auto sm:h-12" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => {
              setAboutOpen(true)
              setHoveredKey('about')
            }}
            onMouseLeave={() => {
              setAboutOpen(false)
              setHoveredKey(null)
            }}
          >
            <button
              type="button"
              className={`relative flex items-center gap-1 pb-1.5 text-sm font-medium transition-colors duration-200 ${
                aboutActive || aboutOpen
                  ? 'text-navy'
                  : 'text-navy/70 hover:text-navy'
              }`}
              onClick={() => setAboutOpen((open) => !open)}
              aria-expanded={aboutOpen}
            >
              About Us
              <HiChevronDown
                className={`transition-transform duration-200 ${
                  aboutOpen ? 'rotate-180' : ''
                }`}
              />
              {highlightedKey === 'about' && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gold"
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                />
              )}
            </button>

            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full left-0 mt-3 w-56 overflow-hidden rounded-2xl bg-white py-2 shadow-xl ring-1 ring-navy/5"
                >
                  {aboutLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      end
                      onClick={() => setAboutOpen(false)}
                      className={({ isActive }) =>
                        `block px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                          isActive
                            ? 'bg-pale-blue-bg text-gold'
                            : 'text-navy hover:bg-pale-blue-bg hover:text-gold'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.key}
              to={link.to}
              onMouseEnter={() => setHoveredKey(link.key)}
              onMouseLeave={() => setHoveredKey(null)}
              className={`relative pb-1.5 text-sm font-medium transition-colors duration-200 ${
                highlightedKey === link.key
                  ? 'text-navy'
                  : 'text-navy/70 hover:text-navy'
              }`}
            >
              {link.label}
              {highlightedKey === link.key && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gold"
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                />
              )}
            </Link>
          ))}

          <Button to="/contact" variant="secondary" size="sm">
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
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden border-t border-navy/10 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6">
              <p className="mt-2 text-xs font-semibold tracking-wide text-navy/40 uppercase">
                About Us
              </p>
              {aboutLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-medium ${
                      isActive ? 'text-gold' : 'text-navy/70 hover:text-navy'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="my-2 h-px bg-navy/10" />

              {navLinks.map((link) => (
                <NavLink
                  key={link.key}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-medium ${
                      isActive ? 'text-gold' : 'text-navy/70 hover:text-navy'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <Button
                to="/contact"
                variant="secondary"
                size="sm"
                onClick={() => setMobileOpen(false)}
                className="mt-3"
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
