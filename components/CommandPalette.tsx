'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Fuse from 'fuse.js'
import { searchIndex, fuseOptions, type SearchEntry } from '@/data/searchIndex'

const fuse = new Fuse(searchIndex, fuseOptions)

const RECENT_KEY = 'anchor-recent-searches'
const MAX_RECENT = 5
const MAX_RESULTS = 8

// Category quick filters shown when query is empty
const categories = [
  { label: 'Daily Baseline', href: '/baseline', icon: '○' },
  { label: 'Quick Reset', href: '/when-off', icon: '○' },
  { label: 'Mind & Calm', href: '/mind', icon: '○' },
  { label: 'Movement', href: '/movement', icon: '○' },
  { label: 'Crisis Help', href: '/crisis', icon: '○' },
]

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Search results
  const results: SearchEntry[] = query.length >= 2
    ? fuse.search(query).slice(0, MAX_RESULTS).map(r => r.item)
    : []

  // Load recent searches
  useEffect(() => {
    try {
      const stored = localStorage.getItem(RECENT_KEY)
      if (stored) setRecentSearches(JSON.parse(stored))
    } catch {}
  }, [])

  // Save recent search
  const saveRecent = useCallback((term: string) => {
    if (term.length < 2) return
    const updated = [term, ...recentSearches.filter(r => r !== term)].slice(0, MAX_RECENT)
    setRecentSearches(updated)
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(updated)) } catch {}
  }, [recentSearches])

  // Open/close
  const open = useCallback(() => {
    setIsOpen(true)
    setQuery('')
    setSelectedIndex(0)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    setQuery('')
    setSelectedIndex(0)
  }, [])

  // Navigate to result
  const navigate = useCallback((entry: SearchEntry) => {
    saveRecent(entry.title)
    close()
    const url = entry.hash ? `${entry.href}#${entry.hash}` : entry.href
    router.push(url)
  }, [close, router, saveRecent])

  // Navigate to category
  const navigateCategory = useCallback((href: string) => {
    close()
    router.push(href)
  }, [close, router])

  // Keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) close()
        else open()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, open, close])

  // Custom event from nav toggle button
  useEffect(() => {
    const handler = () => open()
    window.addEventListener('open-command-palette', handler)
    return () => window.removeEventListener('open-command-palette', handler)
  }, [open])

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [isOpen])

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = '' }
    }
  }, [isOpen])

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  // Keyboard navigation inside palette
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const itemCount = results.length > 0 ? results.length : (query.length < 2 ? categories.length : 0)

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => (prev + 1) % Math.max(itemCount, 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => (prev - 1 + Math.max(itemCount, 1)) % Math.max(itemCount, 1))
        break
      case 'Enter':
        e.preventDefault()
        if (results.length > 0) {
          navigate(results[selectedIndex])
        } else if (query.length < 2 && categories[selectedIndex]) {
          navigateCategory(categories[selectedIndex].href)
        }
        break
      case 'Escape':
        e.preventDefault()
        close()
        break
    }
  }

  // Scroll selected item into view
  useEffect(() => {
    if (!listRef.current) return
    const selected = listRef.current.querySelector('[data-selected="true"]')
    selected?.scrollIntoView({ block: 'nearest' })
  }, [selectedIndex])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-bark/30 dark:bg-black/50 backdrop-blur-sm palette-backdrop"
        onClick={close}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh] md:pt-[20vh] px-4 pointer-events-none"
        role="dialog"
        aria-modal="true"
        aria-label="Search"
      >
        <div
          className="
            w-full max-w-lg pointer-events-auto
            bg-cream dark:bg-night-800
            border border-stone-200/50 dark:border-night-600/50
            rounded-xl
            shadow-elevated dark:shadow-none
            overflow-hidden
            palette-panel
            max-h-[70vh] md:max-h-[60vh]
            flex flex-col
          "
          onKeyDown={handleKeyDown}
        >
          {/* Search Input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-stone-200/50 dark:border-night-600/50">
            <SearchIcon className="w-5 h-5 text-clay/50 dark:text-ash/50 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search for anything..."
              className="
                flex-1 bg-transparent
                text-bark dark:text-parchment
                placeholder:text-dust dark:placeholder:text-coal
                text-base
                focus:outline-none
              "
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
            />
            <kbd className="
              hidden md:inline-flex items-center justify-center
              h-6 px-1.5
              text-[11px] font-medium
              bg-stone-100 dark:bg-night-700
              border border-stone-200/50 dark:border-night-600/50
              rounded
              text-clay/60 dark:text-ash/60
            ">
              ESC
            </kbd>
          </div>

          {/* Results / Categories */}
          <div ref={listRef} className="overflow-y-auto flex-1" role="listbox">
            {/* Search Results */}
            {query.length >= 2 && results.length > 0 && (
              <div className="py-2">
                {results.map((entry, i) => (
                  <button
                    key={entry.id}
                    role="option"
                    aria-selected={i === selectedIndex}
                    data-selected={i === selectedIndex}
                    onClick={() => navigate(entry)}
                    onMouseEnter={() => setSelectedIndex(i)}
                    className={`
                      w-full px-5 py-3 flex items-start gap-4 text-left
                      transition-colors duration-100
                      ${i === selectedIndex ? 'bg-sage-muted dark:bg-sage-muted-dark' : ''}
                    `}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="
                          inline-block px-2 py-0.5
                          text-[10px] font-medium uppercase tracking-wider
                          text-sage
                          bg-sage/10 dark:bg-sage/20
                          rounded-full
                        ">
                          {entry.category}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-bark dark:text-parchment truncate">
                        {entry.title}
                      </p>
                      <p className="text-xs text-clay dark:text-ash truncate mt-0.5">
                        {entry.description}
                      </p>
                    </div>
                    {i === selectedIndex && (
                      <span className="flex-shrink-0 mt-2">
                        <ReturnIcon className="w-4 h-4 text-clay/40 dark:text-ash/40" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* No Results */}
            {query.length >= 2 && results.length === 0 && (
              <div className="px-5 py-12 text-center">
                <p className="text-sm text-clay dark:text-ash">No results for "{query}"</p>
                <p className="text-xs text-dust dark:text-coal mt-1">Try different words or browse by category</p>
              </div>
            )}

            {/* Empty State: Categories + Recent */}
            {query.length < 2 && (
              <div className="py-2">
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div className="mb-2">
                    <div className="px-5 py-2 flex items-center justify-between">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-dust dark:text-coal">
                        Recent
                      </span>
                      <button
                        onClick={() => {
                          setRecentSearches([])
                          try { localStorage.removeItem(RECENT_KEY) } catch {}
                        }}
                        className="text-[10px] text-dust dark:text-coal hover:text-clay dark:hover:text-ash transition-colors"
                      >
                        Clear
                      </button>
                    </div>
                    {recentSearches.map(term => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="w-full px-5 py-2 flex items-center gap-3 text-left hover:bg-sage-muted dark:hover:bg-sage-muted-dark transition-colors duration-100"
                      >
                        <ClockIcon className="w-3.5 h-3.5 text-dust dark:text-coal flex-shrink-0" />
                        <span className="text-sm text-clay dark:text-ash">{term}</span>
                      </button>
                    ))}
                    <div className="mx-5 my-2 h-px bg-stone-200/50 dark:bg-night-600/50" />
                  </div>
                )}

                {/* Browse Categories */}
                <div className="px-5 py-2">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-dust dark:text-coal">
                    Browse
                  </span>
                </div>
                {categories.map((cat, i) => (
                  <button
                    key={cat.href}
                    role="option"
                    aria-selected={i === selectedIndex}
                    data-selected={i === selectedIndex}
                    onClick={() => navigateCategory(cat.href)}
                    onMouseEnter={() => setSelectedIndex(i)}
                    className={`
                      w-full px-5 py-2.5 flex items-center gap-3 text-left
                      transition-colors duration-100
                      ${i === selectedIndex ? 'bg-sage-muted dark:bg-sage-muted-dark' : ''}
                    `}
                  >
                    <span className="w-5 h-5 flex items-center justify-center rounded-md bg-sage/10 dark:bg-sage/20 text-sage text-xs">
                      {cat.icon}
                    </span>
                    <span className="text-sm font-medium text-bark dark:text-parchment">{cat.label}</span>
                    {i === selectedIndex && (
                      <span className="ml-auto">
                        <ReturnIcon className="w-4 h-4 text-clay/40 dark:text-ash/40" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer with keyboard hints */}
          <div className="hidden md:flex items-center gap-4 px-5 py-2.5 border-t border-stone-200/50 dark:border-night-600/50 text-[11px] text-dust dark:text-coal">
            <span className="flex items-center gap-1.5">
              <kbd className="inline-flex items-center justify-center min-w-[20px] h-5 px-1 bg-stone-100 dark:bg-night-700 border border-stone-200/50 dark:border-night-600/50 rounded text-[10px]">↑</kbd>
              <kbd className="inline-flex items-center justify-center min-w-[20px] h-5 px-1 bg-stone-100 dark:bg-night-700 border border-stone-200/50 dark:border-night-600/50 rounded text-[10px]">↓</kbd>
              navigate
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="inline-flex items-center justify-center min-w-[20px] h-5 px-1 bg-stone-100 dark:bg-night-700 border border-stone-200/50 dark:border-night-600/50 rounded text-[10px]">↵</kbd>
              select
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="inline-flex items-center justify-center min-w-[20px] h-5 px-1 bg-stone-100 dark:bg-night-700 border border-stone-200/50 dark:border-night-600/50 rounded text-[10px]">esc</kbd>
              close
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

// Icons
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

function ReturnIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17l-5-5 5-5M4 12h16" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
    </svg>
  )
}
