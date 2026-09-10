import { Link } from 'react-router-dom'
import {
  HiEnvelope,
  HiMapPin,
  HiPhone,
} from 'react-icons/hi2'
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'
import gearIcon from '../assets/About-page/gear.png'
import { contactInfo, homeHero } from '../data/content'
import Container from './Container'

const programLinks = [
  { to: '/programs', label: 'All Programs' },
  { to: '/services', label: 'Our Services' },
  { to: '/trainers', label: 'Our Trainers' },
  { to: '/about', label: 'About Us' },
]

const companyLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/', label: 'Home' },
]

// Refund Policy has no page/content yet — kept as a placeholder link until it exists.
const legalLinks = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-conditions', label: 'Terms & Conditions' },
  { to: '/cookie-policy', label: 'Cookie Policy' },
  { to: null, label: 'Refund Policy' },
]

const socialLinks = [
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/jcs-institute-of-lifeskills-education-and-recruitment-network/',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/jcs_ilearn?igsh=N3hpZmQ1c2k3Njdq',
  },
  { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/@JCSiLearn' },
]

const linkClass = 'text-pale-blue-bg/80 transition-colors duration-200 hover:text-gold'
const headingClass = 'text-sm font-bold tracking-wide text-gold uppercase'

export default function Footer() {
  return (
    <footer className="bg-navy">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <img src={gearIcon} alt="JCS iLearn" className="h-10 w-10 brightness-0 invert" />
            <p className="mt-4 max-w-xs text-sm text-pale-blue-bg/80 italic">
              {homeHero.supportingLine}
            </p>

            <div className="mt-6 space-y-3 text-sm text-pale-blue-bg/80">
              <div className="flex items-start gap-3">
                <HiMapPin className="mt-0.5 shrink-0 text-gold" size={18} />
                <span>{contactInfo.address}</span>
              </div>
              <a
                href={`tel:${contactInfo.phoneHref}`}
                className="flex items-center gap-3 hover:text-gold transition-colors duration-200"
              >
                <HiPhone className="shrink-0 text-gold" size={18} />
                <span>{contactInfo.phone}</span>
              </a>
              <a
                href={`mailto:${contactInfo.emails[0]}`}
                className="flex items-center gap-3 hover:text-gold transition-colors duration-200"
              >
                <HiEnvelope className="shrink-0 text-gold" size={18} />
                <span>{contactInfo.emails[0]}</span>
              </a>
            </div>
          </div>

          {/* Our Programs */}
          <div className="lg:col-span-2">
            <h3 className={headingClass}>Our Programs</h3>
            <ul className="mt-4 space-y-3">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className={headingClass}>Company</h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h3 className={headingClass}>Legal</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map(({ to, label }) => (
                <li key={label}>
                  {to ? (
                    <Link to={to} className={linkClass}>
                      {label}
                    </Link>
                  ) : (
                    <a href="#" className={linkClass}>
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="lg:col-span-2">
            <h3 className={headingClass}>Connect With Us</h3>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy transition-colors duration-200 hover:bg-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-sm text-pale-blue-bg/60 justify-center sm:flex-row">
          <p>&copy; {new Date().getFullYear()} JCS iLearn. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
