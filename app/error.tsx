'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6">
      <div className="mb-6">
        <span className="
          inline-block w-16 h-16
          rounded-full
          bg-terracotta/10 dark:bg-terracotta/20
          flex items-center justify-center
          text-terracotta
        ">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </span>
      </div>

      <h1 className="font-display text-2xl text-bark dark:text-cream mb-3">
        Something went wrong
      </h1>

      <p className="text-clay dark:text-ash mb-8 max-w-sm">
        Take a breath. These things happen. You can try again or head back to the start.
      </p>

      <div className="flex gap-4">
        <button
          onClick={reset}
          className="
            px-5 py-2.5 rounded-lg
            bg-sage text-cream
            hover:bg-moss
            transition-colors duration-fast
            font-medium
          "
        >
          Try again
        </button>

        <a
          href="/"
          className="
            px-5 py-2.5 rounded-lg
            bg-sand dark:bg-night-700
            text-earth dark:text-limestone
            hover:bg-stone-200 dark:hover:bg-night-600
            transition-colors duration-fast
            font-medium
          "
        >
          Go home
        </a>
      </div>
    </div>
  )
}
