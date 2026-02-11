import Link from 'next/link'

const guidePages = [
  { href: '/baseline', title: 'Daily Baseline', short: 'The Basics' },
  { href: '/when-off', title: 'When You Feel Off', short: 'Quick Reset' },
  { href: '/mind', title: 'Mind & Calm', short: 'Mind & Calm' },
  { href: '/movement', title: 'Movement & Posture', short: 'Movement' },
]

interface GuideNavProps {
  currentIndex: number
}

export function GuideNav({ currentIndex }: GuideNavProps) {
  const prev = currentIndex > 0 ? guidePages[currentIndex - 1] : null
  const next = currentIndex < guidePages.length - 1 ? guidePages[currentIndex + 1] : null
  const total = guidePages.length

  return (
    <nav aria-label="Guide navigation" className="mt-12 pt-8 border-t border-stone-200/50 dark:border-night-600/50">
      {/* Progress */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="text-xs text-dust dark:text-coal tracking-wide uppercase">
          {currentIndex + 1} of {total}
        </span>
        <div className="flex gap-1.5">
          {guidePages.map((_, i) => (
            <div
              key={i}
              className={`
                w-1.5 h-1.5 rounded-full transition-colors
                ${i === currentIndex
                  ? 'bg-sage'
                  : i < currentIndex
                    ? 'bg-sage/30'
                    : 'bg-stone-200 dark:bg-night-600'
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Prev / Next */}
      <div className={`grid gap-3 ${prev && next ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {prev && (
          <Link
            href={prev.href}
            className="
              group flex items-center gap-3
              p-4
              bg-cream dark:bg-night-800
              border border-stone-200/50 dark:border-night-600/50
              rounded-lg
              transition-all duration-fast
              hover:border-sage/30 hover:shadow-sm
            "
          >
            <svg
              className="w-4 h-4 flex-shrink-0 text-clay dark:text-ash transition-transform duration-fast group-hover:-translate-x-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <div className="min-w-0">
              <span className="block text-[10px] text-dust dark:text-coal uppercase tracking-wider">Previous</span>
              <span className="block text-sm font-medium text-bark dark:text-parchment truncate">{prev.short}</span>
            </div>
          </Link>
        )}
        {next && (
          <Link
            href={next.href}
            className={`
              group flex items-center justify-end gap-3
              p-4
              bg-cream dark:bg-night-800
              border border-stone-200/50 dark:border-night-600/50
              rounded-lg
              transition-all duration-fast
              hover:border-sage/30 hover:shadow-sm
              text-right
              ${!prev ? 'col-start-1' : ''}
            `}
          >
            <div className="min-w-0">
              <span className="block text-[10px] text-dust dark:text-coal uppercase tracking-wider">Next</span>
              <span className="block text-sm font-medium text-bark dark:text-parchment truncate">{next.short}</span>
            </div>
            <svg
              className="w-4 h-4 flex-shrink-0 text-clay dark:text-ash transition-transform duration-fast group-hover:translate-x-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </nav>
  )
}
