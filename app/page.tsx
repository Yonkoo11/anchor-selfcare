'use client'

import Link from 'next/link'
import { RandomSuggestion, ScrollReveal, TextReveal, TextFadeIn } from '@/components'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section - V1 Earthy Cabin Style */}
      <header className="relative pt-8 pb-4">
        {/* Decorative icon - clean, grounded */}
        <ScrollReveal direction="none" delay={0}>
          <div className="
            w-14 h-14 mb-6
            flex items-center justify-center
            rounded-xl
            bg-sage-muted dark:bg-sage-muted-dark
            border border-sage/10 dark:border-sage/5
            text-sage
          ">
            <WelcomeIcon />
          </div>
        </ScrollReveal>

        {/* Main headline - Text Reveal Animation */}
        <TextReveal
          text="Start Here"
          as="h1"
          className="heading-hero mb-4"
          splitBy="word"
          staggerDelay={150}
        />

        {/* Tagline */}
        <TextFadeIn delay={400} className="prose-lead max-w-lg">
          Simple instructions for taking care of your body and presence.
          No accounts. No tracking. No pressure.
        </TextFadeIn>

        {/* Accent line */}
        <ScrollReveal delay={600} direction="left" distance={20}>
          <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-terracotta to-terracotta/50" />
        </ScrollReveal>
      </header>

      {/* Navigation Cards - With Hierarchy */}
      <ScrollReveal delay={200}>
        <section>
          <h2 className="heading-section mb-6">How to Use This Site</h2>

          <div className="space-y-4">
            {/* Featured Card - Daily Baseline (Most Important) */}
            <ScrollReveal delay={100}>
              <GuideCard
                title="Daily Baseline"
                description="Start here if you're unsure what to do. The non-negotiables."
                href="/baseline"
                icon={<CheckIcon />}
                variant="featured"
                badge="Start Here"
              />
            </ScrollReveal>

            {/* Standard Cards */}
            <ScrollReveal delay={200}>
              <GuideCard
                title="When You Feel Off"
                description="Go here if something specific is wrong. Tired, stiff, unconfident."
                href="/when-off"
                icon={<HelpIcon />}
                variant="glass"
              />
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <GuideCard
                title="Mind & Calm"
                description="Breathing techniques, grounding exercises, and mental resets."
                href="/mind"
                icon={<MindIcon />}
                variant="glass"
              />
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <GuideCard
                title="Movement & Posture"
                description="Basic body mechanics explained simply. No jargon."
                href="/movement"
                icon={<HeartIcon />}
                variant="glass"
              />
            </ScrollReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* Random Suggestion */}
      <ScrollReveal delay={100}>
        <section>
          <h2 className="heading-section mb-5">Not Sure Where to Start?</h2>
          <RandomSuggestion />
        </section>
      </ScrollReveal>

      {/* What This Is Not - V1 Paper Style */}
      <ScrollReveal delay={100}>
        <section>
          <h2 className="heading-section mb-5">What This Is Not</h2>

          <div className="
            bg-cream dark:bg-night-800
            border border-stone-200/50 dark:border-night-600/50
            rounded-lg p-6
          ">
            <ul className="space-y-3">
              {[
                'Not a wellness app',
                'Not productivity advice',
                'Not here to judge you',
                'Not tracking anything about you',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-clay dark:text-ash">
                  <span className="text-terracotta/60">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* Closing Statement - V1 Clean Footer */}
      <ScrollReveal delay={200}>
        <footer className="text-center pb-8">
          {/* Simple divider line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-stone-200 dark:bg-night-600" />
            <span className="text-sage/40 text-xs">*</span>
            <div className="h-px w-12 bg-stone-200 dark:bg-night-600" />
          </div>
          <TextFadeIn delay={100}>
            <p className="font-serif text-lg text-dust dark:text-coal italic">
              Pick one thing. Start there. That's enough.
            </p>
          </TextFadeIn>
        </footer>
      </ScrollReveal>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Guide Card Component - With Variants
// ─────────────────────────────────────────────────────────────────────────────

function GuideCard({
  title,
  description,
  href,
  icon,
  variant = 'standard',
  badge,
}: {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  variant?: 'featured' | 'glass' | 'standard'
  badge?: string
}) {
  const cardClasses = {
    featured: `
      bg-cream dark:bg-night-800
      border-l-[3px] border-l-sage
      rounded-lg p-6
      shadow-sm hover:shadow-md
      transition-shadow duration-200
    `,
    glass: `
      bg-cream/80 dark:bg-night-800/60
      border border-stone-200/50 dark:border-night-600/50
      rounded-lg p-5
      hover:bg-cream dark:hover:bg-night-800
      transition-colors duration-200
    `,
    standard: `
      bg-cream dark:bg-night-800
      border border-stone-200 dark:border-night-600
      rounded-lg p-5
      shadow-sm hover:shadow-md
      transition-shadow duration-200
    `,
  }

  return (
    <Link
      href={href}
      className={`
        group relative overflow-hidden
        flex items-center gap-4
        transition-all duration-normal ease-out
        ${cardClasses[variant]}
      `}
    >
      {/* Badge for featured - subtle pill */}
      {badge && (
        <span className="
          absolute -top-2 left-6
          px-2 py-0.5
          text-[10px] font-medium uppercase tracking-wider
          bg-sage/10 text-sage
          border border-sage/20
          rounded-full
        ">
          {badge}
        </span>
      )}

      {/* Icon - clean, grounded */}
      <span className={`
        flex-shrink-0
        ${variant === 'featured' ? 'w-12 h-12' : 'w-10 h-10'}
        flex items-center justify-center
        rounded-lg
        bg-sage-muted dark:bg-sage-muted-dark
        text-sage
        transition-transform duration-200
        group-hover:scale-105
      `}>
        {icon}
      </span>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className={`
          font-medium
          ${variant === 'featured' ? 'text-lg text-bark dark:text-parchment' : 'text-bark dark:text-parchment'}
          group-hover:text-sage
          transition-colors duration-fast
        `}>
          {title}
        </div>
        <div className="text-sm text-clay dark:text-ash mt-0.5">
          {description}
        </div>
      </div>

      {/* Arrow */}
      <span className="
        flex-shrink-0 w-8 h-8
        flex items-center justify-center
        rounded-full
        text-stone-300 dark:text-night-500
        transition-all duration-normal
        group-hover:text-sage group-hover:translate-x-1
        group-hover:bg-sage-muted dark:group-hover:bg-sage-muted-dark
      ">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────────────────────────────────────

function WelcomeIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function HelpIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

function MindIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
}

