interface FooterProps {
  children: React.ReactNode
}

export function Footer({ children }: FooterProps) {
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
    </footer>
  )
}
