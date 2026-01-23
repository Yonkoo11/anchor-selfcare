export function SiteFooter() {
  return (
    <footer className="hidden md:block border-t border-stone-100/50 dark:border-night-600/50 mt-16">
      <div className="max-w-reading mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-dust dark:text-coal">
          {/* Left side - Brand */}
          <div className="flex items-center gap-2">
            <span className="
              w-6 h-6
              flex items-center justify-center
              rounded-md
              bg-gradient-to-br from-sage to-moss
              text-cream
              text-[10px] font-bold tracking-tight
            ">
              A
            </span>
            <span className="font-medium tracking-wide">ANCHOR</span>
          </div>

          {/* Right side - Credits */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">No tracking. No accounts. Just help.</span>
            <span className="text-stone-300 dark:text-night-600">|</span>
            <span>Made with calm intention</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
