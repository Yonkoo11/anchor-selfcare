interface FooterProps {
  children: React.ReactNode
}

export function Footer({ children }: FooterProps) {
  return (
    <footer className="mt-12">
      {/* Decorative divider */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-200 dark:via-night-600 to-transparent" />
        <LeafIcon className="w-4 h-4 text-sage/50" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-stone-200 dark:via-night-600 to-transparent" />
      </div>

      {/* Footer message */}
      <p className="text-clay dark:text-ash text-center leading-relaxed max-w-md mx-auto">
        {children}
      </p>
    </footer>
  )
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4-4-8-7.5-8-12a8 8 0 0116 0c0 4.5-4 8-8 12z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 13c2 0 4-2 4-4" />
    </svg>
  )
}
