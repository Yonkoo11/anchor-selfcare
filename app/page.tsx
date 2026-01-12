'use client'

import Link from 'next/link'
import { RandomSuggestion, ScrollReveal, TextReveal, TextFadeIn } from '@/components'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section - Premium Impact with Animated Gradient */}
      <header className="relative pt-8 pb-4">
        {/* Ambient gradient background */}
        <div className="absolute inset-0 -z-10 gradient-animate opacity-30 rounded-3xl blur-3xl" />

        {/* Decorative icon with glow */}
        <ScrollReveal direction="none" delay={0}>
          <div className="
            w-16 h-16 mb-6
            flex items-center justify-center
            rounded-2xl
            bg-gradient-to-br from-sage-muted to-sage/20
            dark:from-sage-muted-dark dark:to-sage/10
            text-sage
            animate-glow-pulse
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

      {/* What This Is Not - Glass Card */}
      <ScrollReveal delay={100}>
        <section>
          <h2 className="heading-section mb-5">What This Is Not</h2>

          <div className="card-glass card-shine p-6 dark:bg-night-800/60">
            <ul className="space-y-3">
              {[
                'Not a wellness app',
                'Not productivity advice',
                'Not here to judge you',
                'Not tracking anything about you',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-clay dark:text-ash">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* Closing Statement */}
      <ScrollReveal delay={200}>
        <footer className="text-center pb-8">
          <div className="divider-dot mb-8">
            <LeafIcon className="w-4 h-4 text-sage/40" />
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
      card-accent p-6 card-interactive card-shine
      dark:border-l-terracotta
    `,
    glass: `
      card-glass p-5 card-interactive card-shine
    `,
    standard: `
      card-elevated p-5 card-interactive card-shine
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
      {/* Badge for featured */}
      {badge && (
        <span className="
          absolute -top-2 left-6
          px-3 py-1
          text-xs font-medium
          bg-terracotta text-cream
          rounded-full
          shadow-soft
        ">
          {badge}
        </span>
      )}

      {/* Icon */}
      <span className={`
        flex-shrink-0
        ${variant === 'featured' ? 'w-14 h-14' : 'w-12 h-12'}
        flex items-center justify-center
        rounded-xl
        ${variant === 'featured'
          ? 'bg-gradient-to-br from-sage-muted to-sage/20 dark:from-sage-muted-dark dark:to-sage/10'
          : 'bg-sage-muted dark:bg-sage-muted-dark'
        }
        text-sage
        transition-all duration-normal
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

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4-4-8-7.5-8-12a8 8 0 0116 0c0 4.5-4 8-8 12z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 13c2 0 4-2 4-4" />
    </svg>
  )
}
