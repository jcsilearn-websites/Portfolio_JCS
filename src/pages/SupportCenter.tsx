import { motion } from 'framer-motion'
import { HiClock, HiEnvelope, HiChatBubbleLeftRight } from 'react-icons/hi2'
import Container from '../components/Container'
import PageHeader from '../components/PageHeader'
import AccentCardGrid from '../components/AccentCardGrid'
import { contactInfo, supportHighlights } from '../data/content'

export default function SupportCenter() {
  return (
    <main className="bg-white py-20">
      <Container>
        <PageHeader eyebrow="Resources" title="Support Center" />

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mt-8 text-xl font-semibold text-black"
        >
          How We Can Help You
        </motion.h2>

        <div className="mt-6">
          <AccentCardGrid items={supportHighlights} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-12 rounded-xl bg-pale-blue-bg p-6"
        >
          <h2 className="text-xl font-semibold text-black">Contact Support</h2>

          <div className="mt-4 space-y-3">
            <a
              href={`mailto:${contactInfo.emails[1]}`}
              className="flex items-center gap-3 text-black transition-colors duration-200 hover:text-navy"
            >
              <HiEnvelope className="shrink-0 text-navy" size={20} />
              <span>{contactInfo.emails[1]}</span>
            </a>
            <a
              href={`https://wa.me/${contactInfo.phoneHref.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-black transition-colors duration-200 hover:text-navy"
            >
              <HiChatBubbleLeftRight className="shrink-0 text-navy" size={20} />
              <span>WhatsApp Helpline: {contactInfo.phone}</span>
            </a>
            <div className="flex items-start gap-3 text-black">
              <HiClock className="mt-0.5 shrink-0 text-navy" size={20} />
              <span>{contactInfo.hours.join(' · ')}</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </main>
  )
}
