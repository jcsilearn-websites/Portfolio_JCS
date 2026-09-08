import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

// Single source of truth for the site's horizontal content bounds — max-w-screen-2xl
// (1536px). Every section should wrap its content in this instead of inventing its own
// max-w/px combo, so left/right edges stay aligned across sections site-wide. A narrower
// max-w nested inside Container (a hero text column, a reading-width paragraph, a badge
// card) is still fine — that's a deliberate typographic width, not the section's outer
// alignment boundary.
//
// Horizontal gutter scale — widened beyond the original measured px-6 lg:px-8 to give
// desktop noticeably more side breathing room (reference: psiog.com's wider gutters).
// Mobile stays tight at 24px; sm/lg/xl progressively increase from there.
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16 xl:px-24 ${className}`}>
      {children}
    </div>
  )
}
