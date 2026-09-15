import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import PageHeader from '../components/PageHeader'
import FaqAccordion, { type FaqAccordionItem } from '../components/FaqAccordion'
import { faqItems } from '../data/content'

// A handful of answers need an inline mailto:/route link — the underlying text lives in
// content.ts as plain data (consistent with that file's no-JSX convention); the link
// markup is layered on here, keyed by question so it stays matched even if faqItems is
// reordered.
const ANSWER_OVERRIDES: Record<string, () => ReactNode> = {
  'How can I register for a program?': () => (
    <>
      You can register by contacting us directly via{' '}
      <a
        href="mailto:support@jcsilearn.com"
        className="font-semibold text-navy underline hover:text-gold"
      >
        📧 support@jcsilearn.com
      </a>{' '}
      or through our online inquiry form on the website.
    </>
  ),
  'Do you offer refunds?': () => (
    <>
      Refunds are subject to our{' '}
      <Link
        to="/refund-policy"
        className="font-semibold text-navy underline hover:text-gold"
      >
        Refund Policy
      </Link>
      , available on the website. Please review it before registering for a
      program.
    </>
  ),
  'Can colleges/companies collaborate with you?': () => (
    <>
      Yes. We conduct customized workshops for institutions and corporates.
      Placement officers, HR teams or management can reach us at{' '}
      <a
        href="mailto:jcsilearn@gmail.com"
        className="font-semibold text-navy underline hover:text-gold"
      >
        jcsilearn@gmail.com
      </a>
      .
    </>
  ),
  'How can I contact support?': () => (
    <>
      For any queries or issues, you can reach us at{' '}
      <a
        href="mailto:support@jcsilearn.com"
        className="font-semibold text-navy underline hover:text-gold"
      >
        📧 support@jcsilearn.com
      </a>
      . We&rsquo;ll get back to you within 24–48 hours.
    </>
  ),
}

const accordionItems: FaqAccordionItem[] = faqItems.map((item) => {
  const override = ANSWER_OVERRIDES[item.question]
  if (override) {
    return { question: item.question, answer: override() }
  }

  if (item.bullets) {
    return {
      question: item.question,
      answer: (
        <>
          {item.intro && <p>{item.intro}</p>}
          <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-black">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </>
      ),
    }
  }

  return { question: item.question, answer: item.answer }
})

export default function FAQ() {
  return (
    <main className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <PageHeader eyebrow="Resources" title="FAQ" />
        </div>

        <div className="mt-10">
          <FaqAccordion items={accordionItems} />
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base text-black">
          Still have a question? Reach out via our{' '}
          <Link
            to="/support-center"
            className="font-semibold text-navy underline hover:text-gold"
          >
            Support Center
          </Link>{' '}
          and we&rsquo;ll be glad to help.
        </p>
      </Container>
    </main>
  )
}
