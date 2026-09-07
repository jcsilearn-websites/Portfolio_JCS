import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

// Single source of truth for the site's horizontal content bounds — matches Header's own
// max-w-7xl mx-auto px-6 (the one combo already used consistently, on every page, before this
// component existed) rather than introducing a new value. Every section should wrap its
// content in this instead of inventing its own max-w/px-6 combo, so left/right edges stay
// aligned across sections site-wide. A narrower max-w nested inside Container (a hero text
// column, a reading-width paragraph, a badge card) is still fine — that's a deliberate
// typographic width, not the section's outer alignment boundary.
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-7xl px-6 ${className}`}>{children}</div>
  )
}
