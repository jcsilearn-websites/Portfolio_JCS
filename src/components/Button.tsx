import type { ComponentType, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { HiArrowUpRight } from 'react-icons/hi2'

type IconComponent = ComponentType<{ size?: number; className?: string }>

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  icon?: IconComponent
  size?: 'md' | 'sm'
  to?: string
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  fullWidth?: boolean
  onClick?: () => void
  className?: string
}

const base =
  'group relative inline-flex items-center rounded-full font-semibold transition-colors duration-200 ease-out'

const sizeStyles = {
  md: {
    button: 'py-3.5 pl-8 pr-20 text-base',
    icon: 'right-1.5 top-1.5 bottom-1.5 w-11 rounded-xl',
    iconSize: 16,
  },
  sm: {
    button: 'py-2.5 pl-5 pr-16 text-sm',
    icon: 'right-1 top-1 bottom-1 w-9 rounded-lg',
    iconSize: 14,
  },
}

const variantStyles = {
  primary: {
    button: 'bg-gold text-navy hover:-translate-y-0.5 hover:shadow-xl',
    icon: 'bg-navy text-gold',
  },
  secondary: {
    button:
      'border border-navy/10 bg-white text-navy hover:bg-navy hover:text-white',
    icon: 'bg-gold text-navy group-hover:bg-white group-hover:text-navy',
  },
}

export default function Button({
  children,
  variant = 'primary',
  icon: Icon = HiArrowUpRight,
  size = 'md',
  to,
  href,
  type = 'button',
  disabled,
  fullWidth,
  onClick,
  className = '',
}: ButtonProps) {
  const { button: sizeButton, icon: sizeIcon, iconSize } = sizeStyles[size]
  const { button: variantButton, icon: variantIcon } = variantStyles[variant]

  const classes = [
    base,
    sizeButton,
    variantButton,
    fullWidth ? 'w-full justify-center' : '',
    disabled ? 'cursor-not-allowed opacity-60' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const iconClasses = [
    'absolute flex items-center justify-center transition-colors duration-200 ease-out',
    sizeIcon,
    variantIcon,
  ].join(' ')

  const content = (
    <>
      <span className="truncate">{children}</span>
      <span className={iconClasses}>
        <Icon size={iconSize} />
      </span>
    </>
  )

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
