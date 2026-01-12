'use client'

import { useState, useRef, ReactNode, useId } from 'react'

interface CollapsibleProps {
  title: string
  defaultOpen?: boolean
  icon?: ReactNode
  children: ReactNode
  variant?: 'featured' | 'glass' | 'standard'
}

export function Collapsible({ title, defaultOpen = false, icon, children, variant = 'glass' }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const contentRef = useRef<HTMLDivElement>(null)
  const contentId = useId()

  // Variant-specific container classes
  const variantClasses = {
    featured: `
      relative overflow-hidden
      bg-gradient-to-br from-sand to-stone-100/50
      dark:from-night-800 dark:to-night-700/50
      rounded-2xl
      shadow-medium dark:shadow-medium-dark
      card-interactive card-shine
      border-y border-r border-stone-100/50 dark:border-night-600/50
      border-l-[4px] border-l-terracotta
      ${isOpen ? 'shadow-elevated dark:shadow-elevated-dark' : ''}
    `,
    glass: `
      relative overflow-hidden
      card-glass card-interactive card-shine
      dark:bg-night-800/70 dark:border-night-600/50
      rounded-2xl
      ${isOpen ? 'shadow-soft dark:shadow-soft-dark' : ''}
    `,
    standard: `
      bg-sand dark:bg-night-800 rounded-xl
      shadow-soft dark:shadow-soft-dark hover:shadow-medium dark:hover:shadow-medium-dark
      border border-stone-100/50 dark:border-night-600/50
      ${isOpen ? 'shadow-medium dark:shadow-medium-dark' : ''}
    `,
  }

  return (
    <div
      className={`
        group
        transition-all duration-normal ease-out
        ${variantClasses[variant]}
      `}
    >
      {/* Featured variant decorative glow */}
      {variant === 'featured' && (
        <div className="absolute top-0 left-0 w-32 h-32 bg-terracotta/5 blur-2xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      )}
      {/* Header Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative z-10
          w-full px-6 py-5
          flex items-center gap-4
          text-left
          transition-colors duration-fast
          rounded-2xl
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-inset
        `}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        {/* Optional Icon */}
        {icon && (
          <span className={`
            flex-shrink-0 w-10 h-10
            flex items-center justify-center
            rounded-xl
            ${variant === 'featured'
              ? 'bg-gradient-to-br from-sage-muted to-sage/20 dark:from-sage-muted-dark dark:to-sage/10 shadow-sm'
              : 'bg-sage-muted dark:bg-sage-muted-dark'
            }
            text-sage
            transition-all duration-normal
            group-hover:scale-105
          `}>
            {icon}
          </span>
        )}

        {/* Title */}
        <span className={`
          flex-1
          ${variant === 'featured' ? 'text-lg font-semibold' : 'text-lg font-medium'}
          text-bark dark:text-parchment
          transition-colors duration-fast
          group-hover:text-sage
        `}>
          {title}
        </span>

        {/* Chevron with bounce effect */}
        <span className={`
          flex-shrink-0 w-8 h-8
          flex items-center justify-center
          rounded-full
          bg-stone-100/50 dark:bg-night-600/50
          text-clay dark:text-ash
          transition-all duration-slow
          group-hover:bg-stone-100 dark:group-hover:bg-night-600
          group-hover:scale-110
          ${isOpen ? 'rotate-180 bg-sage-muted dark:bg-sage-muted-dark text-sage' : ''}
        `}
        style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      {/* Content with smooth height animation */}
      <div
        id={contentId}
        role="region"
        aria-hidden={!isOpen}
        className="collapse-content relative z-10"
        data-open={isOpen}
        ref={contentRef}
      >
        <div>
          <div className={`
            px-6 pb-6
            ${icon ? 'pl-20' : ''}
          `}>
            {/* Subtle top border */}
            <div className={`
              h-px mb-5 -mx-6 opacity-50
              ${variant === 'featured'
                ? 'bg-gradient-to-r from-terracotta/20 via-terracotta/40 to-terracotta/20'
                : 'bg-gradient-to-r from-stone-100 via-stone-200 to-stone-100 dark:from-night-600 dark:via-night-500 dark:to-night-600'
              }
            `} />

            {/* Content */}
            <div className="prose-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
