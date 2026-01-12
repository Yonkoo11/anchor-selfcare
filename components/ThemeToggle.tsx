'use client'

import { useTheme } from './ThemeProvider'

// ═══════════════════════════════════════════════════════════════════════════════
// THEME TOGGLE COMPONENT
// A beautiful animated toggle switch for light/dark mode
// ═══════════════════════════════════════════════════════════════════════════════

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative
        w-14 h-8
        rounded-full
        transition-colors duration-slow ease-out
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2
        ${isDark
          ? 'bg-night-700 focus-visible:ring-offset-night-900'
          : 'bg-stone-200 focus-visible:ring-offset-cream'
        }
      `}
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Track highlight */}
      <span className={`
        absolute inset-0.5
        rounded-full
        transition-opacity duration-slow
        ${isDark ? 'bg-night-600 opacity-100' : 'bg-stone-100 opacity-100'}
      `} />

      {/* Sliding knob */}
      <span
        className={`
          absolute top-1 left-1
          w-6 h-6
          rounded-full
          shadow-md
          transition-all duration-slow ease-out
          flex items-center justify-center
          ${isDark
            ? 'translate-x-6 bg-night-800'
            : 'translate-x-0 bg-cream'
          }
        `}
      >
        {/* Sun icon (light mode) */}
        <SunIcon
          className={`
            w-4 h-4 text-terracotta
            absolute
            transition-all duration-slow
            ${isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}
          `}
        />

        {/* Moon icon (dark mode) */}
        <MoonIcon
          className={`
            w-4 h-4 text-sage-light
            absolute
            transition-all duration-slow
            ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}
          `}
        />
      </span>
    </button>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPACT TOGGLE (for mobile nav)
// ─────────────────────────────────────────────────────────────────────────────

export function ThemeToggleCompact() {
  const { resolvedTheme, toggleTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className={`
        w-10 h-10
        flex items-center justify-center
        rounded-xl
        transition-colors duration-fast
        ${isDark
          ? 'bg-night-700 text-sage-light hover:bg-night-600'
          : 'bg-stone-100 text-terracotta hover:bg-stone-200'
        }
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Sun icon (shown in dark mode to switch to light) */}
      <SunIcon
        className={`
          w-5 h-5
          absolute
          transition-all duration-normal
          ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}
        `}
      />

      {/* Moon icon (shown in light mode to switch to dark) */}
      <MoonIcon
        className={`
          w-5 h-5
          absolute
          transition-all duration-normal
          ${isDark ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}
        `}
      />
    </button>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  )
}
