'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

// ═══════════════════════════════════════════════════════════════════════════════
// WORLD-CLASS LANDING PAGE
// Target: "Wellness refugees" - people burned out by tracking, streaks, gamification
// Goal: Make them immediately think "Finally, someone gets it"
// ═══════════════════════════════════════════════════════════════════════════════

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION - Emotional Hook
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 gradient-animate">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzAwMCIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiNmZmYiLz4KPC9zdmc+')]" />

        {/* Badge */}
        <div className="mb-8">
          <span className="
            inline-flex items-center gap-2
            px-3 py-1.5
            text-xs font-medium tracking-wide uppercase
            text-sage
            bg-sage/5
            border border-sage/10
            rounded-full
          ">
            <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
            No tracking. No judgment. No pressure.
          </span>
        </div>

        {/* Main Headline - The Hook */}
        <h1 className="
          font-serif
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          font-semibold
          leading-[1.1]
          tracking-tight
          text-bark dark:text-parchment
          mb-6
        ">
          One shower<br />
          <span className="text-sage">is enough.</span>
        </h1>

        {/* Subheadline - Explain the positioning */}
        <p className="
          text-lg sm:text-xl
          text-clay dark:text-ash
          leading-relaxed
          max-w-xl
          mb-10
        ">
          A quiet guide for when everything feels like too much.
          No accounts. No streaks. No guilt trips about missing days.
          <span className="block mt-2 text-dust dark:text-coal italic">
            Just the basics. Just what you need. Just enough.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/baseline"
            className="
              group
              inline-flex items-center gap-3
              px-6 py-3.5
              bg-bark dark:bg-parchment
              text-cream dark:text-bark
              font-medium
              rounded-lg
              shadow-md hover:shadow-lg
              transition-all duration-200
              hover:-translate-y-0.5
            "
          >
            Begin with the basics
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <Link
            href="/quick-reference"
            className="
              inline-flex items-center gap-2
              px-5 py-3.5
              text-clay dark:text-ash
              font-medium
              hover:text-bark dark:hover:text-parchment
              transition-colors
            "
          >
            Browse the guide
          </Link>
        </div>

        {/* Visual Accent */}
        <div className="mt-12 flex items-center gap-3">
          <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-terracotta to-transparent" />
          <span className="text-xs text-dust dark:text-coal tracking-widest uppercase">
            For the overwhelmed
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          ANTI-WELLNESS MANIFESTO
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 -mx-6 px-6 bg-sand/50 dark:bg-night-800/50">
        <div className="max-w-2xl">
          <h2 className="
            font-serif text-2xl sm:text-3xl font-semibold
            text-bark dark:text-parchment
            mb-6
          ">
            This is not a wellness app.
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: '×', text: 'No habit tracking', sub: 'Your worth isn\'t measured in streaks' },
              { icon: '×', text: 'No gamification', sub: 'Self-care isn\'t a competition' },
              { icon: '×', text: 'No accounts', sub: 'We don\'t want your data' },
              { icon: '×', text: 'No notifications', sub: 'You\'ll come when you need to' },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex items-start gap-3
                  p-4
                  bg-cream dark:bg-night-800
                  border border-stone-200/50 dark:border-night-600/50
                  rounded-lg
                "
              >
                <span className="
                  flex-shrink-0 w-6 h-6
                  flex items-center justify-center
                  text-terracotta font-medium
                ">
                  {item.icon}
                </span>
                <div>
                  <div className="font-medium text-bark dark:text-parchment">
                    {item.text}
                  </div>
                  <div className="text-sm text-clay dark:text-ash">
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          THE GUIDE - Navigation
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="
              font-serif text-2xl sm:text-3xl font-semibold
              text-bark dark:text-parchment
              mb-2
            ">
              The guide
            </h2>
            <p className="text-clay dark:text-ash">
              Pick one. Start there. That's the whole system.
            </p>
          </div>
          <span className="hidden sm:block text-xs text-dust dark:text-coal tracking-widest uppercase">
            4 sections
          </span>
        </div>

        <div className="space-y-3">
          {/* Featured: Daily Baseline */}
          <GuideCard
            href="/baseline"
            number="01"
            title="Daily Baseline"
            description="The non-negotiables. Water, food, clean, move. Start here when everything feels impossible."
            featured
          />

          <GuideCard
            href="/when-off"
            number="02"
            title="When You Feel Off"
            description="Something specific is wrong. Tired, stiff, anxious, unfocused. Find the fix."
          />

          <GuideCard
            href="/mind"
            number="03"
            title="Mind & Calm"
            description="Breathing techniques, grounding exercises, and mental resets that actually work."
          />

          <GuideCard
            href="/movement"
            number="04"
            title="Movement & Posture"
            description="Basic body mechanics explained simply. No gym, no equipment, no jargon."
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          QUICK BREATHING - Interactive Element
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16">
        <QuickBreath />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TRUST SECTION
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 -mx-6 px-6 bg-sand/30 dark:bg-night-800/30">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="
            font-serif text-xl sm:text-2xl font-medium
            text-bark dark:text-parchment
            mb-6
          ">
            Built on evidence. Designed for exhaustion.
          </h2>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-clay dark:text-ash">
            {[
              'Neuroscience-backed breathing',
              'Trauma-informed grounding',
              'Physical therapy basics',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-sage" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-stone-200/50 dark:border-night-600/50">
            <div className="flex items-center justify-center gap-6 text-xs text-dust dark:text-coal">
              <div className="flex items-center gap-2">
                <LockIcon className="w-4 h-4" />
                <span>Zero tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartIcon className="w-4 h-4" />
                <span>Free forever</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldIcon className="w-4 h-4" />
                <span>No accounts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FINAL CTA
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 text-center">
        <blockquote className="
          font-serif text-2xl sm:text-3xl md:text-4xl
          text-bark dark:text-parchment
          leading-snug
          max-w-2xl mx-auto
          mb-8
        ">
          "The goal isn't to be productive."<br />
          <span className="text-sage">"The goal is to still be here tomorrow."</span>
        </blockquote>

        <Link
          href="/baseline"
          className="
            group
            inline-flex items-center gap-3
            px-8 py-4
            bg-sage text-cream
            font-medium text-lg
            rounded-lg
            shadow-md hover:shadow-lg
            transition-all duration-200
            hover:-translate-y-0.5
          "
        >
          Start with one thing
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        <p className="mt-6 text-sm text-dust dark:text-coal italic">
          That's enough. Tomorrow is another day.
        </p>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════════════════════════════════ */}
      <footer className="py-8 border-t border-stone-200/50 dark:border-night-600/50">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-dust dark:text-coal">
          <div className="flex items-center gap-2">
            <span className="
              w-5 h-5
              flex items-center justify-center
              rounded
              bg-gradient-to-br from-sage to-moss
              text-cream
              text-[9px] font-bold tracking-tight
            ">
              A
            </span>
            <span className="font-medium tracking-wide text-bark dark:text-parchment">
              ANCHOR
            </span>
            <span className="text-stone-300 dark:text-night-600 mx-2">·</span>
            <span>For the overwhelmed</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-bark dark:hover:text-parchment transition-colors">
              About
            </Link>
            <Link href="/quick-reference" className="hover:text-bark dark:hover:text-parchment transition-colors">
              Quick Reference
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

function GuideCard({
  href,
  number,
  title,
  description,
  featured = false,
}: {
  href: string
  number: string
  title: string
  description: string
  featured?: boolean
}) {
  return (
    <Link
      href={href}
      className={`
        group relative
        flex items-start gap-4 sm:gap-6
        p-5 sm:p-6
        rounded-lg
        transition-all duration-200
        card-shine overflow-hidden
        ${featured
          ? 'bg-cream dark:bg-night-800 border-l-[3px] border-l-sage shadow-sm hover:shadow-md'
          : 'bg-cream/60 dark:bg-night-800/40 border border-stone-200/50 dark:border-night-600/50 hover:bg-cream dark:hover:bg-night-800'
        }
      `}
    >
      {/* Number */}
      <span className={`
        flex-shrink-0
        font-mono text-sm
        ${featured ? 'text-sage' : 'text-stone-300 dark:text-night-500'}
      `}>
        {number}
      </span>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className={`
          font-medium mb-1
          group-hover:text-sage transition-colors
          ${featured ? 'text-lg text-bark dark:text-parchment' : 'text-bark dark:text-parchment'}
        `}>
          {title}
          {featured && (
            <span className="
              ml-2 px-2 py-0.5
              text-[10px] font-medium uppercase tracking-wider
              text-sage bg-sage/10
              rounded
            ">
              Start here
            </span>
          )}
        </h3>
        <p className="text-sm text-clay dark:text-ash leading-relaxed">
          {description}
        </p>
      </div>

      {/* Arrow */}
      <span className="
        flex-shrink-0
        text-stone-300 dark:text-night-500
        transition-all duration-200
        group-hover:text-sage group-hover:translate-x-1
      ">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </span>
    </Link>
  )
}

function QuickBreath() {
  const [phase, setPhase] = useState<'idle' | 'inhale' | 'hold' | 'exhale'>('idle')
  const [isActive, setIsActive] = useState(false)
  const [countdown, setCountdown] = useState(4)

  useEffect(() => {
    if (!isActive) return

    let timer: NodeJS.Timeout

    if (phase === 'inhale') {
      timer = setInterval(() => {
        setCountdown(c => {
          if (c <= 1) {
            setPhase('hold')
            return 4
          }
          return c - 1
        })
      }, 1000)
    } else if (phase === 'hold') {
      timer = setInterval(() => {
        setCountdown(c => {
          if (c <= 1) {
            setPhase('exhale')
            return 4
          }
          return c - 1
        })
      }, 1000)
    } else if (phase === 'exhale') {
      timer = setInterval(() => {
        setCountdown(c => {
          if (c <= 1) {
            setPhase('idle')
            setIsActive(false)
            return 4
          }
          return c - 1
        })
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [phase, isActive])

  const start = () => {
    setIsActive(true)
    setPhase('inhale')
    setCountdown(4)
  }

  return (
    <div className="
      relative overflow-hidden
      p-8 sm:p-10
      bg-cream dark:bg-night-800
      border border-stone-200/50 dark:border-night-600/50
      rounded-xl
      text-center
    ">
      {/* Background pulse when active */}
      {isActive && (
        <div
          className="absolute inset-0 bg-sage/5 transition-opacity duration-1000"
          style={{
            opacity: phase === 'inhale' ? 1 : phase === 'exhale' ? 0 : 0.5
          }}
        />
      )}

      <div className="relative">
        <h3 className="font-serif text-xl font-medium text-bark dark:text-parchment mb-2">
          Need a moment?
        </h3>
        <p className="text-sm text-clay dark:text-ash mb-8">
          One breath cycle. That's all it takes to reset.
        </p>

        {/* Breathing circle */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div
            className={`
              absolute inset-0
              rounded-full
              border-2
              transition-all duration-1000 ease-in-out
              ${isActive
                ? 'border-sage bg-sage/10'
                : 'border-stone-200 dark:border-night-600'
              }
            `}
            style={{
              transform: phase === 'inhale'
                ? 'scale(1.2)'
                : phase === 'exhale'
                  ? 'scale(0.8)'
                  : 'scale(1)',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`
              text-lg font-medium
              ${isActive ? 'text-sage' : 'text-clay dark:text-ash'}
            `}>
              {phase === 'idle' && 'Ready'}
              {phase === 'inhale' && `In... ${countdown}`}
              {phase === 'hold' && `Hold... ${countdown}`}
              {phase === 'exhale' && `Out... ${countdown}`}
            </span>
          </div>
        </div>

        {!isActive && (
          <button
            onClick={start}
            className="
              px-6 py-2.5
              bg-sage/10 text-sage
              font-medium
              rounded-lg
              border border-sage/20
              hover:bg-sage/20
              transition-colors
            "
          >
            Take a breath
          </button>
        )}

        {isActive && (
          <p className="text-xs text-dust dark:text-coal">
            Follow the circle. You're doing great.
          </p>
        )}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// ICONS
// ═══════════════════════════════════════════════════════════════════════════════

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  )
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  )
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}
