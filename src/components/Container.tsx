import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

// Single source of truth for the site's horizontal content bounds — max-w-screen-2xl
// (1536px), matching Psiog's measured margin (confirmed against real 100%-zoom screenshots
// across multiple section types). Every section should wrap its content in this instead of
// inventing its own max-w/px combo, so left/right edges stay aligned across sections
// site-wide. A narrower max-w nested inside Container (a hero text column, a reading-width
// paragraph, a badge card) is still fine — that's a deliberate typographic width, not the
// section's outer alignment boundary.
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-screen-2xl px-6 lg:px-8 ${className}`}>{children}</div>
  )
}
