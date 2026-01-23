'use client'

import { useState } from 'react'
import Link from 'next/link'

// All suggestions from across the site
const suggestions = [
  // Baseline
  {
    category: 'Daily Baseline',
    title: 'Bathing',
    tip: 'Water resets your body\'s sense of itself. Get in water, use soap anywhere that gets sweaty, rinse, dry off.',
    href: '/baseline',
  },
  {
    category: 'Daily Baseline',
    title: 'Face',
    tip: 'Your face accumulates the day. Wet your face, use cleanser if you have it, rinse thoroughly, pat dry.',
    href: '/baseline',
  },
  {
    category: 'Daily Baseline',
    title: 'Clean Clothes',
    tip: 'Fresh fabric changes how you feel. Change your underwear and shirt. That\'s it. Everything else is optional.',
    href: '/baseline',
  },
  {
    category: 'Daily Baseline',
    title: 'Eating',
    tip: 'Your brain needs fuel. Eat something, anything. Include protein if you can. A snack counts.',
    href: '/baseline',
  },
  {
    category: 'Daily Baseline',
    title: 'Movement',
    tip: 'Stand up. Walk around, even just around the room. Stretch if you feel like it. Five minutes counts.',
    href: '/baseline',
  },
  {
    category: 'Daily Baseline',
    title: 'Sleep',
    tip: 'Get horizontal. Close your eyes. Let go of the day. Rest is not optional. It\'s maintenance.',
    href: '/baseline',
  },
  // When Off
  {
    category: 'When You Feel Off',
    title: 'If you feel tired',
    tip: 'Sit or lie down. Drink water. Close your eyes for two minutes. If still tired, rest more.',
    href: '/when-off',
  },
  {
    category: 'When You Feel Off',
    title: 'If you feel stiff',
    tip: 'Stand up. Roll shoulders back 3x. Bend forward gently. Twist left, then right. Sit back down.',
    href: '/when-off',
  },
  {
    category: 'When You Feel Off',
    title: 'If you feel unconfident',
    tip: 'Stand straight, feet shoulder-width. Pull shoulders back. Three slow breaths. Splash cold water on face.',
    href: '/when-off',
  },
  {
    category: 'When You Feel Off',
    title: 'If you\'ve skipped routines',
    tip: 'Pick ONE thing from Daily Baseline. Do that thing. Tomorrow, pick one thing again. Consistency beats intensity.',
    href: '/when-off',
  },
  // Mind
  {
    category: 'Mind & Calm',
    title: 'Box Breathing',
    tip: 'Breathe in 4 counts, hold 4, out 4, hold 4. Repeat 4 times. Used by Navy SEALs to stay calm under pressure.',
    href: '/mind',
  },
  {
    category: 'Mind & Calm',
    title: '5-4-3-2-1 Grounding',
    tip: 'Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste. Pulls you to the present.',
    href: '/mind',
  },
  {
    category: 'Mind & Calm',
    title: 'The Physiological Sigh',
    tip: 'Deep breath in, then a second quick inhale to fill lungs completely, then slow exhale. One cycle is enough.',
    href: '/mind',
  },
  {
    category: 'Mind & Calm',
    title: 'Cold Water Reset',
    tip: 'Splash cold water on your face. It triggers the dive reflex and physically slows your heart rate.',
    href: '/mind',
  },
  {
    category: 'Mind & Calm',
    title: 'Name the Feeling',
    tip: 'Pause. Name what you\'re feeling: anxious, frustrated, overwhelmed. Say "I notice I\'m feeling [X]." Naming creates distance.',
    href: '/mind',
  },
  // Movement
  {
    category: 'Movement & Posture',
    title: 'Good Posture',
    tip: 'Imagine a string pulling the top of your head upward. Let everything hang from that point. Shoulders drop naturally.',
    href: '/movement',
  },
  {
    category: 'Movement & Posture',
    title: 'Reset Your Posture',
    tip: 'Stand with back against wall. Touch wall with heels, butt, shoulders, head. Step away. Keep that alignment.',
    href: '/movement',
  },
  {
    category: 'Movement & Posture',
    title: 'Balance',
    tip: 'Stand near a wall. Lift one foot slightly. Hold 10 seconds. Switch feet. Do this while waiting for anything.',
    href: '/movement',
  },
  {
    category: 'Movement & Posture',
    title: 'Hip Hinge',
    tip: 'Push butt back like closing a car door with it. Knees bend slightly. Back stays flat. This is how to lift safely.',
    href: '/movement',
  },
]

export function RandomSuggestion() {
  const [current, setCurrent] = useState<typeof suggestions[0] | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const getRandomSuggestion = () => {
    setIsAnimating(true)

    // Get a different suggestion than current
    let newSuggestion
    do {
      newSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)]
    } while (current && newSuggestion.title === current.title && suggestions.length > 1)

    // Small delay for animation effect
    setTimeout(() => {
      setCurrent(newSuggestion)
      setIsAnimating(false)
    }, 150)
  }

  return (
    <div className="space-y-4">
      {/* Button */}
      <button
        onClick={getRandomSuggestion}
        className="
          w-full
          flex items-center justify-center gap-3
          px-6 py-4
          bg-gradient-to-r from-sage to-moss
          hover:from-sage-dark hover:to-sage
          text-cream font-medium
          rounded-2xl
          shadow-medium hover:shadow-elevated
          transition-all duration-normal
          group
        "
      >
        <DiceIcon className="w-5 h-5 transition-transform duration-normal group-hover:rotate-180" />
        <span>{current ? 'Try Another' : 'Pick Something For Me'}</span>
      </button>

      {/* Suggestion Card */}
      {current && (
        <div
          className={`
            card-glass p-6
            transition-all duration-normal
            ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
          `}
        >
          {/* Category badge */}
          <span className="
            inline-block px-3 py-1 mb-3
            text-xs font-medium
            bg-sage-muted dark:bg-sage-muted-dark
            text-sage
            rounded-full
          ">
            {current.category}
          </span>

          {/* Title */}
          <h3 className="font-serif text-xl font-semibold text-bark dark:text-parchment mb-2">
            {current.title}
          </h3>

          {/* Tip */}
          <p className="text-clay dark:text-ash leading-relaxed mb-4">
            {current.tip}
          </p>

          {/* Link to full page */}
          <Link
            href={current.href}
            className="
              inline-flex items-center gap-2
              text-sm font-medium text-sage
              hover:text-sage-dark
              transition-colors duration-fast
            "
          >
            <span>Learn more</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  )
}

function DiceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8" cy="8" r="1.5" fill="currentColor" />
      <circle cx="16" cy="8" r="1.5" fill="currentColor" />
      <circle cx="8" cy="16" r="1.5" fill="currentColor" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  )
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}
