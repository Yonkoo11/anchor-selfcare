'use client'

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react'

// ═══════════════════════════════════════════════════════════════════════════════
// THEME CONTEXT
// Manages dark/light mode with localStorage persistence and system preference
// ═══════════════════════════════════════════════════════════════════════════════

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  resolvedTheme: 'light' | 'dark'
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// ─────────────────────────────────────────────────────────────────────────────
// HELPER FUNCTIONS (outside component to avoid recreation)
// ─────────────────────────────────────────────────────────────────────────────

const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const applyThemeToDOM = (resolved: 'light' | 'dark') => {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(resolved)
  root.style.colorScheme = resolved
}

// ─────────────────────────────────────────────────────────────────────────────
// PROVIDER COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'anchor-theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  // ─────────────────────────────────────────────────────────────────────────
  // APPLY THEME TO DOM
  // ─────────────────────────────────────────────────────────────────────────
  const applyTheme = useCallback((newTheme: Theme) => {
    const resolved = newTheme === 'system' ? getSystemTheme() : newTheme
    setResolvedTheme(resolved)
    applyThemeToDOM(resolved)
  }, [])

  // ─────────────────────────────────────────────────────────────────────────
  // SET THEME (with localStorage)
  // ─────────────────────────────────────────────────────────────────────────
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem(storageKey, newTheme)
    applyTheme(newTheme)
  }, [storageKey, applyTheme])

  // ─────────────────────────────────────────────────────────────────────────
  // TOGGLE BETWEEN LIGHT AND DARK
  // ─────────────────────────────────────────────────────────────────────────
  const toggleTheme = useCallback(() => {
    setThemeState(prev => {
      const resolved = prev === 'system' ? getSystemTheme() : prev
      const newTheme = resolved === 'light' ? 'dark' : 'light'
      localStorage.setItem(storageKey, newTheme)
      applyTheme(newTheme)
      return newTheme
    })
  }, [storageKey, applyTheme])

  // ─────────────────────────────────────────────────────────────────────────
  // INITIALIZE ON MOUNT
  // ─────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Theme | null
    const initialTheme = stored || defaultTheme

    setThemeState(initialTheme)
    applyTheme(initialTheme)
    setMounted(true)

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      setThemeState(current => {
        if (current === 'system') {
          applyTheme('system')
        }
        return current
      })
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [storageKey, defaultTheme, applyTheme])

  // Re-apply when theme changes
  useEffect(() => {
    if (mounted) {
      applyTheme(theme)
    }
  }, [theme, mounted, applyTheme])

  // ─────────────────────────────────────────────────────────────────────────
  // PREVENT FLASH OF WRONG THEME
  // ─────────────────────────────────────────────────────────────────────────
  // Before mounting, we don't render children to prevent flash
  // The initial theme is set by the script in layout.tsx

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// HOOK TO USE THEME
// ─────────────────────────────────────────────────────────────────────────────
export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
