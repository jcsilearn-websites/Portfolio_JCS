import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import jcsLogo from '../assets/logos/jcs-ilearn-logo.svg'
import Button from './Button'
import Container from './Container'
import { useHideOnScroll } from '../hooks/useHideOnScroll'

const navLinks = [
  { key: '/about', label: 'About Us', to: '/about' },
  { key: '/programs', label: 'Our Programs', to: '/programs' },
  { key: '/services', label: 'Our Services', to: '/services' },
  { key: '/trainers', label: 'Trainers', to: '/trainers' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hoveredKey, setHoveredKey] = useState<string | null>(null)
  const location = useLocation()
  const scrollHidden = useHideOnScroll()
  const hidden = scrollHidden && !mobileOpen

  const activeKey =
    location.pathname === '/'
      ? 'home'
      : (navLinks.find((link) => location.pathname === link.to)?.key ?? null)
  const highlightedKey = hoveredKey ?? activeKey

  return (
    <header
      className={`sticky top-0 z-50 border-b border-navy/10 bg-white transition-transform duration-300 ease-out ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="shrink-0"
        >
          <img src={jcsLogo} alt="JCS iLearn" className="h-10 w-auto sm:h-12" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
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

          {navLinks.map((link) => (
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
          ))}

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
            <div className="flex flex-col gap-1 px-6 pb-6">
              <NavLink
                to="/"
                end
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive ? 'text-gold' : 'text-navy/70 hover:text-navy'
                  }`
                }
              >
                Home
              </NavLink>

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
                variant="primary"
                size="sm"
                className="mt-3"
                onClick={() => setMobileOpen(false)}
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
