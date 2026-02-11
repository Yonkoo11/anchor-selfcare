'use client'

import { useState } from 'react'
import { FeatureInterestForm } from './FeatureInterestForm'

export function SiteFooter() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <footer className="hidden md:block border-t border-stone-100/50 dark:border-night-600/50 mt-16">
      <div className="max-w-reading mx-auto px-6 py-8">
        {/* Feedback Section */}
        <div className="mb-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="
              w-full flex items-center justify-between
              py-3 px-4 rounded-lg
              bg-sand/50 dark:bg-night-800/50
              hover:bg-sand dark:hover:bg-night-800
              border border-stone-100/50 dark:border-night-600/50
              transition-all duration-fast
              group
            "
            aria-expanded={isExpanded}
          >
            <span className="flex items-center gap-2 text-sm text-earth dark:text-limestone">
              <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              Help shape ANCHOR
            </span>
            <span className={`
              flex-shrink-0 w-6 h-6
              flex items-center justify-center
              rounded-full
              text-clay dark:text-ash
              transition-transform duration-normal
              group-hover:text-sage
              ${isExpanded ? 'rotate-180' : ''}
            `}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          {/* Collapsible content */}
          <div
            className={`
              overflow-hidden transition-all duration-normal ease-out
              ${isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="p-4 rounded-lg bg-cream/50 dark:bg-night-800/30 border border-stone-100/50 dark:border-night-600/50">
              <FeatureInterestForm />
            </div>
          </div>
        </div>

        {/* Brand and credits */}
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
