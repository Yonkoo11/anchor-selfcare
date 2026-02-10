'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle, ThemeToggleCompact } from './ThemeToggle'
import { CommandPaletteToggle } from './CommandPaletteToggle'

// ─────────────────────────────────────────────────────────────────────────────
// ICONS (must be defined before navItems)
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

function InfoIcon({ className, strokeWidth = 2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// NAV ITEMS
// ─────────────────────────────────────────────────────────────────────────────

function AnchorIcon({ className, strokeWidth = 2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a2 2 0 100 4 2 2 0 000-4zM12 6v14m0 0l-4-2m4 2l4-2M5 12a7 7 0 1114 0" />
    </svg>
  )
}

const navItems = [
  { href: '/baseline', label: 'The Basics', icon: CheckCircleIcon },
  { href: '/when-off', label: 'Quick Reset', icon: HelpCircleIcon },
  { href: '/mind', label: 'Mind & Calm', icon: MindIcon },
  { href: '/movement', label: 'Movement', icon: HeartIcon },
  { href: '/crisis', label: 'Crisis Help', icon: AnchorIcon },
  { href: '/about', label: 'About', icon: InfoIcon },
]

// ─────────────────────────────────────────────────────────────────────────────
// NAVIGATION COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sage focus:text-cream focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Desktop Navigation - Editorial Style */}
      <nav aria-label="Main navigation" className="hidden md:block sticky top-0 z-50">
        <div className="bg-cream/95 dark:bg-night-900/95 backdrop-blur-md border-b border-stone-200/60 dark:border-night-700/60">
          <div className="w-full px-8 lg:px-12">
            <div className="flex items-center justify-between h-16">
              {/* Wordmark - Editorial Typography */}
              <Link
                href="/"
                className="group flex items-baseline gap-1.5 transition-opacity duration-200 hover:opacity-70"
              >
                <span className="font-bold text-xl tracking-wider text-bark dark:text-parchment">
                  ANCHOR
                </span>
              </Link>

              {/* Nav Links - Clean Editorial */}
              <div className="flex items-center">
                <div className="flex items-center gap-1">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`
                          relative px-3.5 py-2
                          text-[13px] tracking-wide uppercase
                          transition-colors duration-200
                          ${isActive
                            ? 'text-bark dark:text-parchment font-medium'
                            : 'text-clay/70 dark:text-ash/70 hover:text-bark dark:hover:text-parchment nav-link-hover'
                          }
                        `}
                      >
                        {item.label}
                        {isActive && (
                          <span className="absolute bottom-1 left-3.5 right-3.5 h-px bg-sage" />
                        )}
                      </Link>
                    )
                  })}
                </div>

                {/* Search + Theme Toggle */}
                <div className="ml-6 pl-6 border-l border-stone-200/60 dark:border-night-700/60 flex items-center gap-2">
                  <CommandPaletteToggle />
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Clean Bottom Bar */}
      <nav aria-label="Main navigation" className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-bottom">
        <div className="bg-cream/95 dark:bg-night-900/95 backdrop-blur-md border-t border-stone-200/60 dark:border-night-700/60">
          <div className="flex justify-around py-2 px-1">
            {/* Home link for mobile */}
            <Link
              href="/"
              className={`
                flex flex-col items-center gap-0.5 px-2 py-1.5 min-w-[48px]
                transition-colors duration-200
                ${isHome ? 'text-sage' : 'text-clay/60 dark:text-ash/60'}
              `}
            >
              <HomeIcon className="w-5 h-5" strokeWidth={isHome ? 2 : 1.5} />
              <span className="text-[9px] tracking-wide uppercase font-medium">Home</span>
            </Link>

            {navItems.slice(0, 5).map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              // Shorten labels for mobile
              const mobileLabel = {
                'The Basics': 'Basics',
                'Quick Reset': 'Reset',
                'Mind & Calm': 'Mind',
                'Movement': 'Move',
                'Crisis Help': 'Crisis',
              }[item.label] || item.label
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex flex-col items-center gap-0.5 px-2 py-1.5 min-w-[48px]
                    transition-colors duration-200
                    ${isActive ? 'text-sage' : 'text-clay/60 dark:text-ash/60'}
                  `}
                >
                  <Icon className="w-5 h-5" strokeWidth={isActive ? 2 : 1.5} />
                  <span className="text-[9px] tracking-wide uppercase font-medium whitespace-nowrap">
                    {mobileLabel}
                  </span>
                </Link>
              )
            })}

          </div>
        </div>
      </nav>
    </>
  )
}
