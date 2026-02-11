'use client'

import { useState, useRef, useEffect, ReactNode, useId } from 'react'

interface CollapsibleProps {
  title: string
  defaultOpen?: boolean
  icon?: ReactNode
  children: ReactNode
  variant?: 'featured' | 'glass' | 'standard'
  id?: string
}

export function Collapsible({ title, defaultOpen = false, icon, children, variant = 'glass', id }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  // Auto-open when navigated to via hash link
  useEffect(() => {
    if (!id) return
    const hash = window.location.hash.slice(1)
    if (hash === id) {
      setIsOpen(true)
      // Scroll to the element after a short delay for render
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [id])
  const contentRef = useRef<HTMLDivElement>(null)
  const contentId = useId()

  // Variant-specific container classes - V1 Earthy Cabin style
  const variantClasses = {
    featured: `
      relative overflow-hidden
      bg-cream dark:bg-night-800
      rounded-lg
      border-l-[3px] border-l-sage
      border-y border-r border-stone-200/50 dark:border-night-600/50
      shadow-sm hover:shadow-md
      transition-shadow duration-200
      card-gradient-border
    `,
    glass: `
      relative overflow-hidden
      bg-cream/80 dark:bg-night-800/60
      border border-stone-200/50 dark:border-night-600/50
      rounded-lg
      hover:bg-cream dark:hover:bg-night-800
      transition-colors duration-200
    `,
    standard: `
      bg-cream dark:bg-night-800
      border border-stone-200 dark:border-night-600
      rounded-lg
      shadow-sm hover:shadow-md
      transition-shadow duration-200
    `,
  }

  return (
    <div
      id={id}
      className={`
        group
        transition-all duration-normal ease-out
        ${variantClasses[variant]}
      `}
    >
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
        {/* Optional Icon - V1 clean style with bounce */}
        {icon && (
          <span className={`
            flex-shrink-0 w-9 h-9
            flex items-center justify-center
            rounded-lg
            bg-sage-muted dark:bg-sage-muted-dark
            text-sage
            icon-bounce
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
          ${isOpen ? 'rotate-180 scale-105 bg-sage-muted dark:bg-sage-muted-dark text-sage' : ''}
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
            {/* Subtle top border - V1 simple style */}
            <div className="h-px mb-5 -mx-6 bg-stone-200/50 dark:bg-night-600/50" />

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
