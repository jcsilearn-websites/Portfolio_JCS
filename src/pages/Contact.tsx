import { HiMapPin, HiPhone, HiEnvelope } from 'react-icons/hi2'
import ContactForm from '../sections/ContactForm'
import { contactInfo } from '../data/content'
import Button from '../components/Button'

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  contactInfo.address,
)}&output=embed`

export default function Contact() {
  return (
    <main>
      <section className="bg-navy px-6 py-20">
        <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Get In Touch
            </h1>
            <p className="mt-4 max-w-md text-base text-pale-blue-bg sm:text-lg">
              Have a question about our programs, or want to bring JCS iLearn
              to your students or team? Send us a message and we&rsquo;ll get
              back to you.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-pale-blue-bg px-6 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-navy sm:text-2xl">
              Looking to train your students or team?
            </h2>
            <p className="mt-2 text-pale-blue-text">
              Let&rsquo;s design a program that fits your institution or
              organization.
            </p>
          </div>
          <Button href="#contact-form" variant="primary" size="md" className="shrink-0">
            Get In Touch
          </Button>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <iframe
              title="JCS iLearn location"
              src={mapSrc}
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                <HiMapPin size={22} />
              </span>
              <p className="mt-4 text-sm font-semibold text-navy">
                Office Address
              </p>
              <p className="mt-1 text-sm text-navy/70">
                {contactInfo.address}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                <HiPhone size={22} />
              </span>
              <p className="mt-4 text-sm font-semibold text-navy">Call Us</p>
              <a
                href={`tel:${contactInfo.phoneHref}`}
                className="mt-1 text-sm text-navy/70 transition-colors duration-200 hover:text-gold"
              >
                {contactInfo.phone}
              </a>
              <p className="mt-2 text-xs text-navy/50">
                {contactInfo.hours.join(' · ')}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                <HiEnvelope size={22} />
              </span>
              <p className="mt-4 text-sm font-semibold text-navy">Email Us</p>
              {contactInfo.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="mt-1 text-sm text-navy/70 transition-colors duration-200 hover:text-gold"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
