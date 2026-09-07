import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/**
 * Corner geometry ported from src/assets/cards-svg/button-pill.svg and
 * arrow-icon.svg: both shapes round only the top-right + bottom-left corners
 * (radius = 30 of a 200x200 / 500x160 viewBox — ~15% and ~18.75% of the
 * shape's height respectively) and leave top-left + bottom-right sharp.
 * Recreated here with per-corner Tailwind radii instead of rounded-full/xl
 * so the flag/tag silhouette is preserved exactly at each button size.
 */

type ButtonVariant = 'primary' | 'secondary'
type ButtonSize = 'sm' | 'md'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  to?: string
  href?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
}

const sizeStyles: Record<
  ButtonSize,
  {
    button: string
    icon: string
    inset: string
    travel: string
    arrow: number
  }
> = {
  sm: {
    button:
      'h-11 pl-5 pr-12 text-sm rounded-tr-[8px] rounded-bl-[8px] rounded-tl-none rounded-br-none',
    icon: 'h-7 w-7 rounded-tr-[4px] rounded-bl-[4px] rounded-tl-none rounded-br-none',
    inset: 'top-1.5 right-1.5',
    travel: 'group-hover:translate-x-1.5 group-hover:-translate-y-1.5',
    arrow: 18,
  },
  md: {
    button:
      'h-14 pl-6 pr-16 text-base rounded-tr-[10px] rounded-bl-[10px] rounded-tl-none rounded-br-none',
    icon: 'h-10 w-10 rounded-tr-[6px] rounded-bl-[6px] rounded-tl-none rounded-br-none',
    inset: 'top-2 right-2',
    travel: 'group-hover:translate-x-2 group-hover:-translate-y-2',
    arrow: 26,
  },
}

// Single source of truth for hover timing so the root button and the arrow
// icon (two separate elements, each with their own transition-property list)
// can never drift out of sync with each other.
const HOVER_TRANSITION = 'duration-[380ms] ease-out'

// Tailwind v4's translate-* utilities animate the CSS `translate` property,
// not `transform` — listing `transform` in transition-property is a no-op
// for them, so the hover lift/travel would snap instead of easing.

const variantStyles: Record<ButtonVariant, { button: string; icon: string }> = {
  primary: {
    button: 'bg-gold text-navy hover:bg-navy hover:text-white',
    icon: 'bg-navy text-gold group-hover:bg-gold group-hover:text-navy',
  },
  secondary: {
    button:
      'bg-navy text-white border border-white/25 hover:bg-gold hover:text-navy',
    icon: 'bg-gold text-navy group-hover:bg-navy group-hover:text-gold',
  },
}

// Arrow glyph traced from arrow-icon.svg, with stroke swapped to
// currentColor so it can be recolored per variant via the icon wrapper.
function ArrowGlyph({ size }: { size: number }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
    >
      <line
        x1="56"
        y1="144"
        x2="136"
        y2="64"
        stroke="currentColor"
        strokeWidth="13"
        strokeLinecap="round"
      />
      <path
        d="M 92 64 H 136 V 108"
        stroke="currentColor"
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  href,
  type = 'button',
  onClick,
  disabled,
}: ButtonProps) {
  const s = sizeStyles[size]
  const v = variantStyles[variant]

  const rootClassName = `group relative inline-flex items-center cursor-pointer font-bold shadow-sm transition-[background-color,color,translate,box-shadow] ${HOVER_TRANSITION} hover:-translate-y-0.5 hover:shadow-lg ${s.button} ${v.button} ${className}`

  const content = (
    <>
      {children}
      <span
        className={`absolute ${s.inset} flex items-center justify-center transition-[background-color,color,translate] ${HOVER_TRANSITION} ${s.travel} ${s.icon} ${v.icon}`}
      >
        <ArrowGlyph size={s.arrow} />
      </span>
    </>
  )

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={rootClassName}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} onClick={onClick} className={rootClassName}>
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={rootClassName}
    >
      {content}
    </button>
  )
}
