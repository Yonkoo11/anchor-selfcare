'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

// Sixty seconds, four steps, no choices. The breathing block is two rounds of
// 4 in, 2 hold, 6 out (24s), then three twelve-second actions.
const BEATS = [
  { step: 1, label: 'Breathe in', sub: 'Through your nose if you can.', seconds: 4, scale: 1 },
  { step: 1, label: 'Hold', sub: 'Not too tight.', seconds: 2, scale: 1 },
  { step: 1, label: 'Breathe out', sub: 'Slowly. Let it go.', seconds: 6, scale: 0.55 },
  { step: 1, label: 'Breathe in', sub: 'Once more.', seconds: 4, scale: 1 },
  { step: 1, label: 'Hold', sub: 'Not too tight.', seconds: 2, scale: 1 },
  { step: 1, label: 'Breathe out', sub: 'Slower than the first one.', seconds: 6, scale: 0.55 },
  { step: 2, label: 'Stand up', sub: 'Just stand. Stretch if you feel like it.', seconds: 12, scale: 0.85 },
  { step: 3, label: 'Drink some water', sub: 'A sip counts.', seconds: 12, scale: 0.85 },
  { step: 4, label: 'Look far away', sub: 'Out a window if there is one. Let your eyes rest.', seconds: 12, scale: 0.85 },
]

const TOTAL = BEATS.reduce((sum, b) => sum + b.seconds, 0)
const STEPS = 4

function beatAt(elapsed: number) {
  let start = 0
  for (const beat of BEATS) {
    if (elapsed < start + beat.seconds) {
      return { beat, remaining: Math.ceil(start + beat.seconds - elapsed) }
    }
    start += beat.seconds
  }
  const last = BEATS[BEATS.length - 1]
  return { beat: last, remaining: 0 }
}

export function SixtySeconds() {
  const [status, setStatus] = useState<'idle' | 'running' | 'done'>('idle')
  const [elapsed, setElapsed] = useState(0)
  const startedAt = useRef(0)

  const stop = useCallback(() => {
    setStatus('idle')
    setElapsed(0)
  }, [])

  const start = useCallback(() => {
    startedAt.current = Date.now()
    setElapsed(0)
    setStatus('running')
  }, [])

  useEffect(() => {
    if (status !== 'running') return

    const tick = setInterval(() => {
      const seconds = (Date.now() - startedAt.current) / 1000
      if (seconds >= TOTAL) {
        setElapsed(TOTAL)
        setStatus('done')
      } else {
        setElapsed(seconds)
      }
    }, 200)

    return () => clearInterval(tick)
  }, [status])

  useEffect(() => {
    if (status !== 'running') return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') stop()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [status, stop])

  const { beat, remaining } = beatAt(elapsed)
  const progress = Math.min(100, (elapsed / TOTAL) * 100)

  return (
    <div className="card-glass p-8 sm:p-12 text-center">
      {/* The circle stays in place across all three states so nothing jumps */}
      <div className="relative mx-auto mb-8 h-52 w-52 sm:h-60 sm:w-60 flex items-center justify-center">
        <div
          className="
            absolute inset-0 rounded-full
            bg-gradient-to-br from-sage/25 to-moss/15
            border border-sage/20
            transition-transform ease-in-out
            motion-reduce:transition-none
          "
          style={{
            transform: `scale(${status === 'running' ? beat.scale : 0.8})`,
            transitionDuration: status === 'running' ? `${beat.seconds}s` : '0.6s',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10">
          {status === 'running' && (
            <span className="font-serif text-5xl sm:text-6xl text-bark dark:text-parchment tabular-nums">
              {remaining}
            </span>
          )}
          {status === 'idle' && (
            <span className="font-serif text-4xl sm:text-5xl text-clay dark:text-ash">60</span>
          )}
          {status === 'done' && (
            <svg className="w-14 h-14 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          )}
        </div>
      </div>

      {/* Instruction */}
      <div aria-live="polite" className="min-h-[5.5rem]">
        {status === 'idle' && (
          <>
            <p className="font-serif text-2xl sm:text-3xl text-bark dark:text-parchment mb-2">
              You do not have to choose anything
            </p>
            <p className="text-clay dark:text-ash">
              Press start. It runs by itself. Follow along or do not.
            </p>
          </>
        )}

        {status === 'running' && (
          <>
            <p className="font-serif text-2xl sm:text-3xl text-bark dark:text-parchment mb-2">
              {beat.label}
            </p>
            <p className="text-clay dark:text-ash">{beat.sub}</p>
          </>
        )}

        {status === 'done' && (
          <>
            <p className="font-serif text-2xl sm:text-3xl text-bark dark:text-parchment mb-2">
              That is it. That is enough.
            </p>
            <p className="text-clay dark:text-ash">
              Nothing is tracked. Nothing is counted. Come back whenever.
            </p>
          </>
        )}
      </div>

      {/* Step dots */}
      <div className="mt-8 flex items-center justify-center gap-2.5" aria-hidden="true">
        {Array.from({ length: STEPS }, (_, i) => {
          const n = i + 1
          const reached = status === 'done' || (status === 'running' && beat.step >= n)
          return (
            <span
              key={n}
              className={`
                h-2 w-2 rounded-full transition-colors duration-normal
                ${reached ? 'bg-sage' : 'bg-stone-200 dark:bg-night-600'}
              `}
            />
          )
        })}
      </div>

      {/* Progress line */}
      <div className="mt-5 h-px w-full max-w-xs mx-auto bg-stone-200/70 dark:bg-night-600/70 overflow-hidden">
        <div
          className="h-full bg-sage transition-[width] duration-normal ease-linear motion-reduce:transition-none"
          style={{ width: `${status === 'idle' ? 0 : progress}%` }}
          aria-hidden="true"
        />
      </div>

      {/* Controls */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {status === 'idle' && (
          <button
            onClick={start}
            className="
              px-8 py-3.5
              bg-sage text-cream
              font-medium
              rounded-lg
              shadow-md hover:shadow-lg
              hover:-translate-y-0.5
              active:scale-[0.97] active:translate-y-0
              transition-all duration-slow ease-spring
            "
          >
            Start
          </button>
        )}

        {status === 'running' && (
          <button
            onClick={stop}
            className="
              px-6 py-3
              text-clay dark:text-ash
              hover:text-bark dark:hover:text-parchment
              rounded-lg
              border border-stone-200 dark:border-night-600
              transition-colors duration-fast
            "
          >
            Stop
          </button>
        )}

        {status === 'done' && (
          <>
            <button
              onClick={start}
              className="
                px-6 py-3
                text-sage hover:text-sage-dark
                bg-sage-muted/50 hover:bg-sage-muted
                dark:bg-sage-muted-dark/50 dark:hover:bg-sage-muted-dark
                font-medium
                rounded-lg
                transition-colors duration-fast
              "
            >
              Again
            </button>
            <Link
              href="/baseline"
              className="
                px-6 py-3
                text-clay dark:text-ash
                hover:text-bark dark:hover:text-parchment
                rounded-lg
                border border-stone-200 dark:border-night-600
                transition-colors duration-fast
              "
            >
              One more thing
            </Link>
          </>
        )}
      </div>

      {status === 'running' && (
        <p className="mt-4 text-xs text-dust dark:text-coal">Press Escape to stop.</p>
      )}
    </div>
  )
}
