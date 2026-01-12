'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

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
  storageKey = 'selfcare-theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  // ─────────────────────────────────────────────────────────────────────────
  // RESOLVE SYSTEM PREFERENCE
  // ─────────────────────────────────────────────────────────────────────────
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  // ─────────────────────────────────────────────────────────────────────────
  // APPLY THEME TO DOM
  // ─────────────────────────────────────────────────────────────────────────
  const applyTheme = (newTheme: Theme) => {
    const resolved = newTheme === 'system' ? getSystemTheme() : newTheme
    setResolvedTheme(resolved)

    // Add/remove 'dark' class on <html>
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(resolved)

    // Update color-scheme for native elements (scrollbars, inputs)
    root.style.colorScheme = resolved
  }

  // ─────────────────────────────────────────────────────────────────────────
  // SET THEME (with localStorage)
  // ─────────────────────────────────────────────────────────────────────────
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem(storageKey, newTheme)
    applyTheme(newTheme)
  }

  // ─────────────────────────────────────────────────────────────────────────
  // TOGGLE BETWEEN LIGHT AND DARK
  // ─────────────────────────────────────────────────────────────────────────
  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  // ─────────────────────────────────────────────────────────────────────────
  // INITIALIZE ON MOUNT
  // ─────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    // Get stored theme or use default
    const stored = localStorage.getItem(storageKey) as Theme | null
    const initialTheme = stored || defaultTheme

    setThemeState(initialTheme)
    applyTheme(initialTheme)
    setMounted(true)

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Re-apply when theme changes
  useEffect(() => {
    if (mounted) {
      applyTheme(theme)
    }
  }, [theme, mounted])

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
