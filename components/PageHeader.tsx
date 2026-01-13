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
      {/* Icon - V1 clean, grounded style */}
      {icon && (
        <ScrollReveal direction="none" delay={0}>
          <div className="
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

      {/* Accent line - simple sage gradient */}
      <ScrollReveal delay={500} direction="left" distance={20}>
        <div className="mt-5 h-px w-16 bg-gradient-to-r from-sage to-transparent" />
      </ScrollReveal>
    </header>
  )
}
