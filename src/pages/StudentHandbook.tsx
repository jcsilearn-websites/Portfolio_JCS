import { motion } from 'framer-motion'
import { HiEnvelope, HiGlobeAlt } from 'react-icons/hi2'
import LegalPageLayout, {
  LegalSection,
  LegalSubheading,
  LegalParagraph,
  LegalList,
} from '../components/LegalPageLayout'
import handbookPdf from '../assets/JCS-iLearn-Student-Handbook.pdf'

export default function StudentHandbook() {
  return (
    <LegalPageLayout eyebrow="Resources" title="Student Handbook">
      {/* Welcome section — styled as a distinct callout box per the handbook's own
          personal-note framing on its cover section, not the standard numbered layout below. */}
      <div className="rounded-xl bg-pale-blue-bg p-6">
        <p className="text-base leading-relaxed text-black">Dear Learners,</p>
        <p className="mt-4 text-base leading-relaxed text-black">
          Welcome to <strong className="font-semibold">JCS iLEARN</strong>! We
          are delighted to have you as part of our learning community. At
          iLEARN, our mission is simple yet powerful: &ldquo;I Learn, I
          Earn.&rdquo;
        </p>
        <p className="mt-4 text-base leading-relaxed text-black">
          We believe that every learner has the potential to succeed when
          guided with the right skills, mindset, and opportunities. This
          handbook is designed to help you understand our programs,
          expectations, and the resources available to support your growth.
        </p>
        <p className="mt-4 text-base leading-relaxed text-black">
          We look forward to walking with you on this journey of learning and
          career success.
        </p>
        <p className="mt-4 text-base leading-relaxed text-black italic">
          — Team JCS iLEARN
        </p>
      </div>

      <LegalSection title="1. Policies & Expectations">
        <LegalParagraph>
          Understanding and adhering to policies ensures a positive learning
          environment for all.
        </LegalParagraph>

        <LegalSubheading>Key Policies</LegalSubheading>
        <LegalList
          items={[
            <>
              <strong className="font-semibold text-black">
                Academic Integrity
              </strong>{' '}
              — Uphold honesty and avoid plagiarism in all academic work.
            </>,
            <>
              <strong className="font-semibold text-black">
                Code of Conduct
              </strong>{' '}
              — Respectful behavior is expected from everyone in JCS iLEARN.
            </>,
            <>
              <strong className="font-semibold text-black">
                Attendance Policy
              </strong>{' '}
              — Regular class participation is crucial for your success.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="2. Programs Available">
        <LegalSubheading>Your Learning Journey</LegalSubheading>
        <LegalParagraph>
          Our training follows a practical, interactive, and learner-focused
          model.
        </LegalParagraph>
        <LegalList
          items={[
            <>
              <strong className="font-semibold text-black">
                Soft Skills
              </strong>
              : Communication, public speaking, team building, leadership.
            </>,
            <>
              <strong className="font-semibold text-black">
                Technical Skills
              </strong>
              : Programming languages, project-based learning.
            </>,
            <>
              <strong className="font-semibold text-black">Aptitude</strong>:
              Quantitative, logical, and verbal reasoning practice.
            </>,
            <>
              <strong className="font-semibold text-black">
                Recruitment Readiness
              </strong>
              : Resume, LinkedIn, GD &amp; interview training.
            </>,
          ]}
        />
        <LegalParagraph>
          We have certificate programs. These programs will help you to
          achieve career goals. Explore our website for more program details
          — it&rsquo;s easy!
        </LegalParagraph>
      </LegalSection>

      <LegalSection title="3. Student Resources">
        <LegalParagraph>
          We provide resources to support your academic and personal growth.
        </LegalParagraph>

        <LegalSubheading>Support Systems</LegalSubheading>
        <LegalList
          items={[
            <>
              <strong className="font-semibold text-black">
                Academic Advising
              </strong>{' '}
              — Get help with course selection and planning, it&rsquo;s easy!
            </>,
            <>
              <strong className="font-semibold text-black">
                Tutoring Services
              </strong>{' '}
              — Peer and professional tutoring is offered for our students.
            </>,
            <>
              <strong className="font-semibold text-black">
                Career Services
              </strong>{' '}
              — Plan career goals, find internships, and get help with your
              resume.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Final Thoughts">
        <LegalParagraph>
          Okay, you&rsquo;ve reached the end! This handbook is your guide,
          not the whole story.
        </LegalParagraph>
        <LegalParagraph>
          Explore everything JCS iLEARN offers. Remember, support is always
          available if you need it.
        </LegalParagraph>
      </LegalSection>

      {/* Contact box — gradient treatment matching the site's palette, per the reference
          screenshot's closing contact block. */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-10 rounded-xl bg-gradient-to-r from-pale-blue-text to-navy p-6 text-white"
      >
        <div className="space-y-3">
          <a
            href="mailto:instituteoflearn@gmail.com"
            className="flex items-center gap-3 transition-colors duration-200 hover:text-gold"
          >
            <HiEnvelope className="shrink-0" size={20} />
            <span>instituteoflearn@gmail.com</span>
          </a>
          <a
            href="https://www.jcsilearn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-colors duration-200 hover:text-gold"
          >
            <HiGlobeAlt className="shrink-0" size={20} />
            <span>www.jcsilearn.com</span>
          </a>
        </div>
      </motion.div>

      <div className="mt-10 flex justify-center">
        <a
          href={handbookPdf}
          download
          className="rounded-lg bg-navy px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-navy/90"
        >
          Download Handbook (PDF)
        </a>
      </div>
    </LegalPageLayout>
  )
}
