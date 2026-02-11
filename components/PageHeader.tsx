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
      {/* Dot grid behind text */}
      <div className="dot-grid" />

      {icon && (
        <ScrollReveal direction="none" delay={0}>
          <div className="
            relative
            w-12 h-12 mb-5
            flex items-center justify-center
            rounded-xl
            bg-sage-muted dark:bg-sage-muted-dark
            border border-sage/10 dark:border-sage/5
            text-sage
          ">
            {icon}
          </div>
        </ScrollReveal>
      )}

      <TextReveal
        text={title}
        as="h1"
        className="heading-page text-3xl sm:text-4xl md:text-5xl relative mb-3"
        splitBy="word"
        staggerDelay={100}
      />

      {description && (
        <TextFadeIn delay={300} className="prose-lead max-w-xl relative">
          {description}
        </TextFadeIn>
      )}

      <ScrollReveal delay={500} direction="left" distance={20}>
        <div className="mt-5 h-px w-24 bg-gradient-to-r from-sage via-sage/50 to-transparent relative" />
      </ScrollReveal>
    </header>
  )
}
