import type { ReactNode } from 'react'
import Container from './Container'

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="text-lg font-bold tracking-wide text-black uppercase sm:text-xl">
            Legal
          </p>
          <span className="mt-1 block h-0.5 w-10 rounded-full bg-gold" />

          <h1 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-navy/60">Last Updated: {lastUpdated}</p>

          <div className="mt-10">{children}</div>
        </div>
      </Container>
    </main>
  )
}

export function LegalSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="mt-10 space-y-4 first:mt-0">
      <h2 className="text-xl font-semibold text-navy">{title}</h2>
      {children}
    </section>
  )
}

export function LegalSubheading({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-semibold text-navy/90">{children}</h3>
}

export function LegalParagraph({ children }: { children: ReactNode }) {
  return <p className="text-base leading-relaxed text-navy/70">{children}</p>
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 marker:text-gold">
      {items.map((item, index) => (
        <li key={index} className="text-base leading-relaxed text-navy/70">
          {item}
        </li>
      ))}
    </ul>
  )
}

export function LegalCallout({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-4 border-gold bg-pale-blue-bg p-4 text-sm text-navy/70 italic">
      {children}
    </div>
  )
}
