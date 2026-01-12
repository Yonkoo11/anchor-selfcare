import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      {/* Decorative icon */}
      <div className="
        w-20 h-20 mb-8
        flex items-center justify-center
        rounded-2xl
        bg-gradient-to-br from-sage-muted to-sage/20
        dark:from-sage-muted-dark dark:to-sage/10
        text-sage
      ">
        <CompassIcon />
      </div>

      {/* Message */}
      <h1 className="font-serif text-3xl md:text-4xl font-semibold text-bark dark:text-parchment mb-4">
        Page not found
      </h1>

      <p className="text-lg text-clay dark:text-ash max-w-md mb-8">
        That's okay. Sometimes we wander off the path.
        Let's get you back to somewhere familiar.
      </p>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="
            px-6 py-3
            bg-sage hover:bg-sage-dark
            text-cream font-medium
            rounded-xl
            shadow-soft hover:shadow-medium
            transition-all duration-normal
          "
        >
          Go Home
        </Link>

        <Link
          href="/baseline"
          className="
            px-6 py-3
            bg-sand dark:bg-night-800
            hover:bg-stone-100 dark:hover:bg-night-700
            text-bark dark:text-parchment font-medium
            rounded-xl
            border border-stone-200 dark:border-night-600
            transition-all duration-normal
          "
        >
          Daily Baseline
        </Link>
      </div>

      {/* Gentle reminder */}
      <p className="mt-12 text-sm text-dust dark:text-coal italic">
        Getting lost is just another way of exploring.
      </p>
    </div>
  )
}

function CompassIcon() {
  return (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" opacity="0.2" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}
