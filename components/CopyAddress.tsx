'use client'

import { useState } from 'react'

interface CopyAddressProps {
  address: string
}

export function CopyAddress({ address }: CopyAddressProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <code className="
        flex-1 min-w-0
        px-4 py-3
        rounded-lg
        bg-sand/60 dark:bg-night-800/60
        border border-stone-200/60 dark:border-night-600/60
        text-[11px] sm:text-xs
        text-bark dark:text-parchment
        font-mono
        break-all
      ">
        {address}
      </code>

      <button
        onClick={copy}
        className="
          flex-shrink-0
          inline-flex items-center justify-center gap-2
          px-4 py-3
          text-sm font-medium
          text-sage hover:text-sage-dark
          bg-sage-muted/50 hover:bg-sage-muted
          dark:bg-sage-muted-dark/50 dark:hover:bg-sage-muted-dark
          rounded-lg
          transition-colors duration-fast
        "
        aria-live="polite"
      >
        {copied ? (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
            </svg>
            Copy address
          </>
        )}
      </button>
    </div>
  )
}
