'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle, ThemeToggleCompact } from './ThemeToggle'

const navItems = [
  { href: '/', label: 'Start', icon: HomeIcon },
  { href: '/baseline', label: 'Baseline', icon: CheckCircleIcon },
  { href: '/when-off', label: 'When Off', icon: HelpCircleIcon },
  { href: '/mind', label: 'Mind', icon: MindIcon },
  { href: '/movement', label: 'Movement', icon: HeartIcon },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sage focus:text-cream focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Desktop Navigation - Premium Glassmorphism */}
      <nav aria-label="Main navigation" className="hidden md:block sticky top-0 z-50 transition-colors duration-slow" style={{
        background: 'rgba(250, 248, 245, 0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(232, 228, 222, 0.5)',
      }}>
        <div className="dark:hidden absolute inset-0" style={{
          background: 'rgba(250, 248, 245, 0.7)',
        }} />
        <div className="hidden dark:block absolute inset-0" style={{
          background: 'rgba(33, 31, 29, 0.8)',
          borderBottom: '1px solid rgba(69, 65, 61, 0.5)',
        }} />

        <div className="relative max-w-reading mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with subtle animation */}
            <Link
              href="/"
              className="group flex items-center gap-3 transition-all duration-normal hover:opacity-80"
            >
              <span className="
                w-9 h-9
                flex items-center justify-center
                rounded-xl
                bg-gradient-to-br from-sage to-moss
                text-cream
                font-semibold text-sm
                shadow-soft
                transition-transform duration-normal
                group-hover:scale-105
              ">
                SC
              </span>
              <span className="font-serif text-lg text-bark dark:text-parchment font-medium transition-colors">
                Self-Care Guide
              </span>
            </Link>

            {/* Nav Links + Theme Toggle */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      relative px-4 py-2 rounded-lg
                      text-sm font-medium
                      transition-all duration-fast
                      ${isActive
                        ? 'text-bark dark:text-parchment'
                        : 'text-clay dark:text-ash hover:text-bark dark:hover:text-parchment hover:bg-stone-100/50 dark:hover:bg-night-700/50'
                      }
                    `}
                  >
                    {item.label}
                    {/* Active indicator - terracotta underline */}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-terracotta to-terracotta/50 rounded-full" />
                    )}
                  </Link>
                )
              })}

              {/* Theme Toggle */}
              <div className="ml-4 pl-4 border-l border-stone-200/50 dark:border-night-600/50">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Premium Glassmorphism */}
      <nav aria-label="Main navigation" className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-bottom transition-colors duration-slow" style={{
        background: 'rgba(250, 248, 245, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(232, 228, 222, 0.5)',
      }}>
        <div className="dark:hidden absolute inset-0" style={{
          background: 'rgba(250, 248, 245, 0.85)',
        }} />
        <div className="hidden dark:block absolute inset-0" style={{
          background: 'rgba(33, 31, 29, 0.9)',
          borderTop: '1px solid rgba(69, 65, 61, 0.5)',
        }} />

        <div className="relative flex justify-around py-2 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex flex-col items-center gap-1
                  px-3 py-2 rounded-xl
                  transition-all duration-fast
                  ${isActive
                    ? 'text-sage'
                    : 'text-clay dark:text-ash'
                  }
                `}
              >
                <span className={`
                  w-10 h-10
                  flex items-center justify-center
                  rounded-xl
                  transition-all duration-fast
                  ${isActive
                    ? 'bg-gradient-to-br from-sage-muted to-sage/20 dark:from-sage-muted-dark dark:to-sage/10 shadow-sm'
                    : ''
                  }
                `}>
                  <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                </span>
                <span className={`text-xs font-medium ${isActive ? 'text-sage' : 'text-dust dark:text-coal'}`}>
                  {item.label}
                </span>
                {/* Active dot indicator */}
                {isActive && (
                  <span className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-terracotta" />
                )}
              </Link>
            )
          })}

          {/* Theme Toggle for Mobile */}
          <div className="flex flex-col items-center gap-1 px-3 py-2">
            <ThemeToggleCompact />
            <span className="text-xs font-medium text-dust dark:text-coal">Theme</span>
          </div>
        </div>
      </nav>
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ICONS (inline for simplicity - could be moved to separate file)
// ─────────────────────────────────────────────────────────────────────────────

function HomeIcon({ className, strokeWidth = 2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )
}

function CheckCircleIcon({ className, strokeWidth = 2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function HelpCircleIcon({ className, strokeWidth = 2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function HeartIcon({ className, strokeWidth = 2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

function MindIcon({ className, strokeWidth = 2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
}
