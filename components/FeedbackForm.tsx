'use client'

import { useState } from 'react'

type FeedbackType = 'helpful' | 'suggestion' | 'issue' | null

export function FeedbackForm() {
  const [type, setType] = useState<FeedbackType>(null)
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!type) return

    setIsSubmitting(true)

    const title = encodeURIComponent(`Feedback: ${type}`)
    const body = encodeURIComponent(
      `**Type:** ${type}\n\n**Message:**\n${message || '(No additional message)'}\n\n---\n*Sent from ANCHOR feedback form*`
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
      <div className="card-glass p-6 text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sage-muted dark:bg-sage-muted-dark flex items-center justify-center">
          <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-lg text-bark dark:text-parchment mb-2">Thank you</h3>
        <p className="text-sm text-clay dark:text-ash">
          Your feedback helps make this better for everyone.
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
            setType(null)
            setMessage('')
          }}
          className="mt-4 text-sm text-sage hover:text-sage-dark transition-colors"
        >
          Send more feedback
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Feedback type selection */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-earth dark:text-ash">
          What kind of feedback?
        </label>
        <div className="flex flex-wrap gap-2">
          {[
            { value: 'helpful', label: 'This helped me', icon: '💚' },
            { value: 'suggestion', label: 'I have a suggestion', icon: '💡' },
            { value: 'issue', label: 'Something is wrong', icon: '🔧' },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setType(option.value as FeedbackType)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium
                transition-all duration-fast
                ${type === option.value
                  ? 'bg-sage text-cream shadow-soft'
                  : 'bg-sand dark:bg-night-700 text-earth dark:text-ash hover:bg-stone-100 dark:hover:bg-night-600'
                }
              `}
            >
              <span className="mr-2">{option.icon}</span>
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Optional message */}
      {type && (
        <div className="space-y-2 animate-fadeIn">
          <label htmlFor="feedback-message" className="block text-sm font-medium text-earth dark:text-ash">
            Anything else? <span className="text-dust dark:text-coal">(optional)</span>
          </label>
          <textarea
            id="feedback-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your thoughts..."
            rows={3}
            className="
              w-full px-4 py-3 rounded-lg
              bg-sand dark:bg-night-700
              text-bark dark:text-parchment
              placeholder:text-stone-300 dark:placeholder:text-night-500
              border border-stone-100 dark:border-night-600
              focus:border-sage dark:focus:border-sage
              focus:ring-2 focus:ring-sage/20
              transition-all duration-fast
              resize-none
            "
          />
        </div>
      )}

      {/* Submit */}
      {type && (
        <div className="flex items-center justify-between animate-fadeIn">
          <p className="text-xs text-dust dark:text-coal">
            Opens GitHub Discussions. No data stored on our end.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              px-6 py-2 rounded-lg
              bg-sage text-cream font-medium
              hover:bg-sage-dark
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-fast
              shadow-soft hover:shadow-medium
            "
          >
            {isSubmitting ? 'Opening...' : 'Send Feedback'}
          </button>
        </div>
      )}

      {/* Privacy note */}
      <p className="text-xs text-dust dark:text-coal text-center pt-2">
        We don't track or store anything. Your feedback goes to GitHub Discussions.
      </p>
    </form>
  )
}
