'use client'

import { TextReveal, TextFadeIn, ScrollReveal } from '@/components'

interface PageHeaderProps {
  title: string
  description?: string
  icon?: React.ReactNode
}

export function PageHeader({ title, description, icon }: PageHeaderProps) {
  return (
    <header className="relative pt-4 pb-4 mb-10">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 -z-10 gradient-animate opacity-20 rounded-3xl blur-3xl" />

      {/* Icon with glow effect */}
      {icon && (
        <ScrollReveal direction="none" delay={0}>
          <div className="
            w-14 h-14 mb-5
            flex items-center justify-center
            rounded-2xl
            bg-gradient-to-br from-sage-muted to-sage/20
            dark:from-sage-muted-dark dark:to-sage/10
            text-sage
            animate-glow-pulse
            shadow-sm
          ">
            {icon}
          </div>
        </ScrollReveal>
      )}

      {/* Title - Text Reveal Animation */}
      <TextReveal
        text={title}
        as="h1"
        className="heading-page mb-3"
        splitBy="word"
        staggerDelay={100}
      />

      {/* Description */}
      {description && (
        <TextFadeIn delay={300} className="prose-lead max-w-lg">
          {description}
        </TextFadeIn>
      )}

      {/* Accent line */}
      <ScrollReveal delay={500} direction="left" distance={20}>
        <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-terracotta to-terracotta/50" />
      </ScrollReveal>
    </header>
  )
}
