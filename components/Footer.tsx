import Link from 'next/link'

interface FooterProps {
  children: React.ReactNode
  nextPage?: {
    href: string
    label: string
  }
}

export function Footer({ children, nextPage }: FooterProps) {
  return (
    <footer className="mt-12">
      {/* Simple divider - V1 style */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px w-12 bg-stone-200 dark:bg-night-600" />
        <span className="text-sage/40 text-xs">*</span>
        <div className="h-px w-12 bg-stone-200 dark:bg-night-600" />
      </div>

      {/* Footer message */}
      <p className="text-clay dark:text-ash text-center leading-relaxed max-w-md mx-auto">
        {children}
      </p>

      {/* Optional Next Steps CTA */}
      {nextPage && (
        <div className="mt-8 text-center">
          <Link
            href={nextPage.href}
            className="
              inline-flex items-center gap-2
              px-5 py-2.5
              text-sm font-medium
              text-sage hover:text-sage-dark
              bg-sage-muted/50 hover:bg-sage-muted
              dark:bg-sage-muted-dark/50 dark:hover:bg-sage-muted-dark
              rounded-full
              transition-all duration-fast
              group
            "
          >
            <span>{nextPage.label}</span>
            <svg
              className="w-4 h-4 transition-transform duration-fast group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </footer>
  )
}
