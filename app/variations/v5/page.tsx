'use client'

import { useState } from 'react'
import Link from 'next/link'

// ============================================================================
// V5: DARK SANCTUARY - Cozy darkness, warm amber light
// UX: Night-first design, warm glows, intimate and restful
// ============================================================================

export default function V5DarkSanctuary() {
  return (
    <div className="min-h-screen relative" style={{ background: '#0F0E0D' }}>
      {/* Ambient glow effects */}
      <div
        className="fixed top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-15 pointer-events-none"
        style={{ background: '#E59866' }}
      />
      <div
        className="fixed bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: '#D4A574' }}
      />

      {/* Navigation */}
      <nav
        className="sticky top-0 z-50"
        style={{
          background: 'rgba(15, 14, 13, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}
      >
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/variations" className="flex items-center gap-2" style={{ color: '#E59866' }}>
            <span style={{ fontSize: 18 }}>←</span>
            <span style={{ fontSize: 14 }}>Back</span>
          </Link>
          <span style={{ fontSize: 12, color: '#6A6560' }}>
            V5: Dark Sanctuary
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative max-w-2xl mx-auto px-6 py-16">
        {/* Hero */}
        <header className="mb-16">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-8"
            style={{
              background: 'rgba(229, 152, 102, 0.1)',
              border: '1px solid rgba(229, 152, 102, 0.2)',
              boxShadow: '0 0 40px rgba(229, 152, 102, 0.1)'
            }}
          >
            <span style={{ color: '#E59866', fontSize: 24 }}>◐</span>
          </div>

          <h1 style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            color: '#E8E4DE',
            fontSize: '2.75rem',
            fontWeight: 600,
            lineHeight: 1.15,
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            Rest here.
          </h1>

          <p style={{
            color: '#8A8580',
            fontSize: '1.125rem',
            lineHeight: 1.7,
            maxWidth: '420px'
          }}>
            A quiet space for when the world is too bright.
            No tracking. No pressure. Just presence.
          </p>

          {/* Subtle glow line */}
          <div
            className="mt-8 h-px w-24"
            style={{
              background: 'linear-gradient(90deg, #E59866, transparent)'
            }}
          />
        </header>

        {/* Navigation Cards */}
        <section className="mb-16">
          <h2 style={{
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            color: '#6A6560',
            marginBottom: '1.5rem',
            textTransform: 'uppercase'
          }}>
            Find Your Way
          </h2>

          <div className="space-y-3">
            <DarkCard
              icon="☀"
              title="Daily Baseline"
              description="The essentials for today"
              featured
            />

            <DarkCard
              icon="?"
              title="When You Feel Off"
              description="Find your way back"
            />

            <DarkCard
              icon="◯"
              title="Mind & Calm"
              description="Breathing and grounding"
            />

            <DarkCard
              icon="↑"
              title="Movement"
              description="Gentle body care"
            />
          </div>
        </section>

        {/* Quick Breath Section */}
        <section className="mb-16">
          <QuickBreathDark />
        </section>

        {/* Quote Section */}
        <section className="mb-16">
          <div
            className="p-8 rounded-xl"
            style={{
              background: '#1A1917',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <p style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1.375rem',
              fontStyle: 'italic',
              color: '#C8C4BE',
              lineHeight: 1.6,
              marginBottom: '1rem'
            }}>
              "The goal isn't to be productive.
              The goal is to still be here tomorrow."
            </p>
            <div style={{
              height: 1,
              background: 'rgba(229, 152, 102, 0.2)',
              width: 40,
              marginBottom: '1rem'
            }} />
            <p style={{ color: '#6A6560', fontSize: '0.875rem' }}>
              One thing is enough. You are enough.
            </p>
          </div>
        </section>

        {/* Promises */}
        <section className="mb-16">
          <h2 style={{
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            color: '#6A6560',
            marginBottom: '1.5rem',
            textTransform: 'uppercase'
          }}>
            Our Promise
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            <PromiseCard icon="🔒" text="No tracking" />
            <PromiseCard icon="💛" text="No judgment" />
            <PromiseCard icon="✨" text="No pressure" />
          </div>
        </section>

        {/* Footer */}
        <footer
          className="pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p style={{
              fontStyle: 'italic',
              color: '#4A4540',
              fontSize: '0.9rem'
            }}>
              Pick one thing. Start there. That's enough.
            </p>

            <button
              className="px-6 py-3 rounded-lg font-medium transition-all"
              style={{
                background: '#E59866',
                color: '#0F0E0D',
              }}
            >
              Begin
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
            <FooterLinkDark>About</FooterLinkDark>
            <span style={{ color: '#2A2825' }}>•</span>
            <FooterLinkDark>Quick Reference</FooterLinkDark>
            <span style={{ color: '#2A2825' }}>•</span>
            <FooterLinkDark>Feedback</FooterLinkDark>
          </div>
        </footer>
      </main>
    </div>
  )
}

function DarkCard({
  icon,
  title,
  description,
  featured = false
}: {
  icon: string
  title: string
  description: string
  featured?: boolean
}) {
  return (
    <div
      className="p-5 rounded-xl cursor-pointer transition-all duration-200 group"
      style={{
        background: '#1A1917',
        border: featured
          ? '1px solid rgba(229, 152, 102, 0.2)'
          : '1px solid rgba(255,255,255,0.05)',
        boxShadow: featured
          ? '0 0 0 1px rgba(0,0,0,0.5), 0 4px 24px rgba(0,0,0,0.3), 0 0 40px rgba(229, 152, 102, 0.05)'
          : '0 0 0 1px rgba(0,0,0,0.5), 0 4px 24px rgba(0,0,0,0.3)',
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-11 h-11 rounded-lg flex items-center justify-center transition-all"
          style={{
            background: featured
              ? 'rgba(229, 152, 102, 0.15)'
              : 'rgba(255,255,255,0.05)',
            border: featured
              ? '1px solid rgba(229, 152, 102, 0.2)'
              : '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <span style={{ color: featured ? '#E59866' : '#8A8580' }}>{icon}</span>
        </div>

        <div className="flex-1 min-w-0">
          <div style={{
            fontWeight: 500,
            color: featured ? '#E8E4DE' : '#C8C4BE',
            marginBottom: 2
          }}>
            {title}
          </div>
          <div style={{ fontSize: '0.875rem', color: '#6A6560' }}>
            {description}
          </div>
        </div>

        <span
          className="transition-all group-hover:translate-x-1"
          style={{ color: featured ? '#E59866' : '#4A4540' }}
        >
          →
        </span>
      </div>
    </div>
  )
}

function PromiseCard({ icon, text }: { icon: string; text: string }) {
  return (
    <div
      className="p-4 rounded-lg text-center"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)'
      }}
    >
      <span style={{ fontSize: 20, display: 'block', marginBottom: 8 }}>{icon}</span>
      <span style={{ color: '#8A8580', fontSize: '0.875rem' }}>{text}</span>
    </div>
  )
}

function FooterLinkDark({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="transition-colors"
      style={{ color: '#6A6560', fontSize: '0.875rem' }}
    >
      {children}
    </a>
  )
}

function QuickBreathDark() {
  const [phase, setPhase] = useState<'idle' | 'inhale' | 'hold' | 'exhale'>('idle')
  const [isActive, setIsActive] = useState(false)

  const start = () => {
    setIsActive(true)
    setPhase('inhale')
    setTimeout(() => setPhase('hold'), 4000)
    setTimeout(() => setPhase('exhale'), 8000)
    setTimeout(() => {
      setPhase('idle')
      setIsActive(false)
    }, 12000)
  }

  return (
    <div
      className="p-8 rounded-xl text-center"
      style={{
        background: '#1A1917',
        border: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <h3 style={{
        color: '#C8C4BE',
        fontSize: '1rem',
        fontWeight: 500,
        marginBottom: '0.5rem'
      }}>
        Quick Breath
      </h3>
      <p style={{ color: '#6A6560', fontSize: '0.875rem', marginBottom: '2rem' }}>
        One cycle is all you need.
      </p>

      <div
        className="w-28 h-28 mx-auto rounded-full flex items-center justify-center mb-6 transition-all duration-1000"
        style={{
          background: isActive
            ? 'radial-gradient(circle, rgba(229, 152, 102, 0.3), rgba(229, 152, 102, 0.1))'
            : 'rgba(255,255,255,0.03)',
          border: isActive
            ? '2px solid rgba(229, 152, 102, 0.4)'
            : '1px solid rgba(255,255,255,0.05)',
          transform: phase === 'inhale' ? 'scale(1.15)' : phase === 'exhale' ? 'scale(0.9)' : 'scale(1)',
          boxShadow: isActive ? '0 0 60px rgba(229, 152, 102, 0.2)' : 'none'
        }}
      >
        <span style={{
          color: isActive ? '#E59866' : '#6A6560',
          fontSize: '0.8rem',
          fontWeight: 500
        }}>
          {phase === 'idle' && 'Ready'}
          {phase === 'inhale' && 'In...'}
          {phase === 'hold' && 'Hold...'}
          {phase === 'exhale' && 'Out...'}
        </span>
      </div>

      {!isActive && (
        <button
          onClick={start}
          className="px-6 py-2 rounded-lg font-medium transition-all"
          style={{
            background: 'rgba(229, 152, 102, 0.1)',
            color: '#E59866',
            border: '1px solid rgba(229, 152, 102, 0.2)'
          }}
        >
          Start
        </button>
      )}
    </div>
  )
}
