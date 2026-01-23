'use client'

interface ContentDisclaimerProps {
  className?: string
}

export function ContentDisclaimer({ className = '' }: ContentDisclaimerProps) {
  return (
    <div className={`
      py-3 px-4
      bg-sand/50 dark:bg-night-800/50
      border border-stone-200/30 dark:border-night-600/30
      rounded-lg
      text-sm text-clay dark:text-ash
      ${className}
    `}>
      <p>
        <span className="text-earth dark:text-limestone font-medium">General wellness information.</span>
        {' '}This is not medical advice. If you have health concerns, please consult a healthcare provider.
      </p>
    </div>
  )
}

interface ContraindicationProps {
  warnings: string[]
  className?: string
}

export function Contraindication({ warnings, className = '' }: ContraindicationProps) {
  if (warnings.length === 0) return null

  return (
    <div className={`
      py-2.5 px-4
      bg-terracotta/5 dark:bg-terracotta/10
      border border-terracotta/20 dark:border-terracotta/30
      rounded-lg
      text-sm
      ${className}
    `}>
      <p className="text-terracotta dark:text-terracotta font-medium mb-1">
        Note:
      </p>
      <ul className="text-clay dark:text-ash space-y-0.5">
        {warnings.map((warning, i) => (
          <li key={i}>• {warning}</li>
        ))}
      </ul>
    </div>
  )
}
