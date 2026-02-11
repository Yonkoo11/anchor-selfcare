'use client'

import { useState } from 'react'

type FeatureOption = 'tracking' | 'community' | 'personalization' | 'simple'

const FEATURE_OPTIONS = [
  {
    value: 'tracking' as FeatureOption,
    label: 'Track my sleep, mood, or habits over time',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    )
  },
  {
    value: 'community' as FeatureOption,
    label: 'Connect with others on similar journeys',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    )
  },
  {
    value: 'personalization' as FeatureOption,
    label: 'Get personalized recommendations',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    )
  },
  {
    value: 'simple' as FeatureOption,
    label: 'Keep it simple - I like it as is',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
]

export function FeatureInterestForm() {
  const [selected, setSelected] = useState<Set<FeatureOption>>(new Set())
  const [otherText, setOtherText] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const toggleOption = (option: FeatureOption) => {
    const newSelected = new Set(selected)
    if (newSelected.has(option)) {
      newSelected.delete(option)
    } else {
      newSelected.add(option)
    }
    setSelected(newSelected)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (selected.size === 0 && !otherText.trim()) {
      setError('Please select at least one option or share your thoughts')
      return
    }

    setIsSubmitting(true)
    setError(null)

    const selectedLabels = Array.from(selected).map(
      value => FEATURE_OPTIONS.find(o => o.value === value)?.label
    )

    const title = encodeURIComponent('Feature Interest')
    const body = encodeURIComponent(
      `**Interested in:**\n${selectedLabels.map(l => `- ${l}`).join('\n')}\n\n**Additional thoughts:**\n${otherText || '(none)'}\n\n---\n*Sent from ANCHOR feature interest form*`
    )

    window.open(
      `https://github.com/Yonkoo11/anchor-selfcare/discussions/new?category=feedback&title=${title}&body=${body}`,
      '_blank',
      'noopener'
    )

    setSubmitted(true)
    setIsSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-sage-muted dark:bg-sage-muted-dark flex items-center justify-center">
          <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-sm text-earth dark:text-limestone">
          Thanks for sharing. Your input shapes what comes next.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-earth dark:text-ash">
        What would make ANCHOR more useful for you?
      </p>

      {/* Feature options */}
      <div className="space-y-2">
        {FEATURE_OPTIONS.map((option) => (
          <label
            key={option.value}
            className={`
              flex items-center gap-3 p-3 rounded-lg cursor-pointer
              transition-all duration-fast
              ${selected.has(option.value)
                ? 'bg-sage-muted dark:bg-sage-muted-dark border border-sage/30'
                : 'bg-sand/50 dark:bg-night-700/50 border border-transparent hover:bg-sand dark:hover:bg-night-700'
              }
            `}
          >
            <input
              type="checkbox"
              checked={selected.has(option.value)}
              onChange={() => toggleOption(option.value)}
              className="sr-only"
            />
            <span className={`
              flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center
              transition-all duration-fast
              ${selected.has(option.value)
                ? 'bg-sage border-sage text-cream'
                : 'border-stone-300 dark:border-night-500'
              }
            `}>
              {selected.has(option.value) && (
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </span>
            <span className={`text-clay dark:text-ash ${selected.has(option.value) ? 'text-bark dark:text-parchment' : ''}`}>
              {option.icon}
            </span>
            <span className={`text-sm ${selected.has(option.value) ? 'text-bark dark:text-parchment' : 'text-earth dark:text-limestone'}`}>
              {option.label}
            </span>
          </label>
        ))}
      </div>

      {/* Something else field */}
      <div>
        <label htmlFor="other-feedback" className="block text-sm text-dust dark:text-coal mb-2">
          Something else?
        </label>
        <textarea
          id="other-feedback"
          value={otherText}
          onChange={(e) => setOtherText(e.target.value)}
          placeholder="Share your thoughts..."
          rows={2}
          className="
            w-full px-3 py-2 rounded-lg text-sm
            bg-sand/50 dark:bg-night-700/50
            text-bark dark:text-parchment
            placeholder:text-stone-300 dark:placeholder:text-night-500
            border border-stone-100 dark:border-night-600
            focus:border-sage dark:focus:border-sage
            focus:ring-1 focus:ring-sage/20
            transition-all duration-fast
            resize-none
          "
        />
      </div>

      {/* Error message */}
      {error && (
        <p className="text-sm text-terracotta">{error}</p>
      )}

      {/* Submit */}
      <div className="flex items-center justify-between pt-2">
        <p className="text-xs text-dust dark:text-coal">
          Opens GitHub Discussions
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="
            px-4 py-2 rounded-lg text-sm
            bg-sage text-cream font-medium
            hover:bg-sage-dark
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-fast
          "
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  )
}
