'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function CrisisButton() {
  const pathname = usePathname()

  if (pathname === '/crisis') return null

  return (
    <Link
      href="/crisis"
      className="
        fixed z-40
        bottom-20 right-4
        md:bottom-6 md:right-6
        w-12 h-12
        flex items-center justify-center
        rounded-full
        bg-bark dark:bg-parchment
        text-cream dark:text-bark
        shadow-medium dark:shadow-medium-dark
        hover:shadow-elevated dark:hover:shadow-elevated-dark
        hover:-translate-y-0.5
        transition-all duration-fast
        animate-pulse-soft
      "
      aria-label="Crisis help"
      title="Need help right now?"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    </Link>
  )
}
