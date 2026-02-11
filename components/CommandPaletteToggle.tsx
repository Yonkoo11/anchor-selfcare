'use client'

export function CommandPaletteToggle() {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('open-command-palette'))
  }

  return (
    <button
      onClick={handleClick}
      className="
        flex items-center gap-2 px-3 py-1.5
        text-clay/60 dark:text-ash/60
        hover:text-bark dark:hover:text-parchment
        transition-colors duration-fast
        rounded-lg
        hover:bg-stone-100/50 dark:hover:bg-night-700/50
      "
      aria-label="Search (Cmd+K)"
      title="Search (Cmd+K)"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <span className="hidden lg:inline text-[13px] tracking-wide uppercase">Search</span>
      <kbd className="hidden lg:inline-flex items-center justify-center h-5 px-1.5 ml-1 text-[10px] font-medium bg-stone-100/80 dark:bg-night-700/80 border border-stone-200/50 dark:border-night-600/50 rounded text-clay/50 dark:text-ash/50">
        ⌘K
      </kbd>
    </button>
  )
}
