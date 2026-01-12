'use client'

import { useState } from 'react'
import Link from 'next/link'

// ============================================================================
// V3: SOFT GRADIENT - Gentle, nurturing, airy
// UX: Floating cards, glassmorphism, emotional comfort
// ============================================================================

export default function V3SoftGradient() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FDF8F5 0%, #F5F0FF 40%, #FDF8F5 70%, #F0F5FF 100%)',
      }}
    >
      {/* Floating orbs */}
      <div
        className="fixed top-20 right-10 w-72 h-72 rounded-full blur-[100px] opacity-40 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #E8B4B8, #C5B4E3)' }}
      />
      <div
        className="fixed bottom-40 left-10 w-96 h-96 rounded-full blur-[120px] opacity-30 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #A8C5DA, #C5B4E3)' }}
      />
      <div
        className="fixed top-1/2 right-1/4 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none"
        style={{ background: '#E8B4B8' }}
      />

      {/* Navigation */}
      <nav
        className="sticky top-0 z-50"
        style={{
          background: 'rgba(253, 248, 245, 0.7)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.5)'
        }}
      >
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/variations" className="flex items-center gap-2" style={{ color: '#9B8BB8' }}>
            <span style={{ fontSize: 18 }}>←</span>
            <span style={{ fontSize: 14 }}>Back</span>
          </Link>
          <span
            className="px-3 py-1 rounded-full text-xs"
            style={{
              background: 'rgba(197, 180, 227, 0.2)',
              color: '#7A7189'
            }}
          >
            V3: Soft Gradient
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative max-w-2xl mx-auto px-6 py-12">
        {/* Hero */}
        <header className="mb-12 text-center">
          <div
            className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8"
            style={{
              background: 'linear-gradient(135deg, rgba(232, 180, 184, 0.4), rgba(197, 180, 227, 0.4))',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.5)'
            }}
          >
            <span style={{ fontSize: 36 }}>🌿</span>
          </div>

          <h1 style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            color: '#4A4458',
            fontSize: '2.5rem',
            fontWeight: 600,
            lineHeight: 1.2,
            marginBottom: '1rem'
          }}>
            Welcome, friend
          </h1>

          <p style={{
            color: '#7A7189',
            fontSize: '1.125rem',
            lineHeight: 1.7,
            maxWidth: '400px',
            margin: '0 auto'
          }}>
            A gentle space for taking care of yourself.
            No pressure. Just presence.
          </p>
        </header>

        {/* Main Cards Grid */}
        <section className="mb-12">
          <div className="grid gap-4">
            {/* Featured Card */}
            <GlassCard featured>
              <div className="flex items-center gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #E8B4B8, #C5B4E3)' }}
                >
                  <span style={{ color: 'white', fontSize: 24 }}>✨</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span style={{ fontWeight: 600, color: '#4A4458', fontSize: '1.125rem' }}>
                      Daily Baseline
                    </span>
                    <span
                      className="px-2 py-0.5 rounded-full text-xs"
                      style={{ background: 'rgba(232, 180, 184, 0.3)', color: '#9B7A7E' }}
                    >
                      Start here
                    </span>
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#7A7189' }}>
                    The essentials when everything feels hard
                  </div>
                </div>
                <span style={{ color: '#C5B4E3', fontSize: 24 }}>→</span>
              </div>
            </GlassCard>

            <div className="grid sm:grid-cols-2 gap-4">
              <GlassCard>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(168, 197, 218, 0.3)' }}
                >
                  <span style={{ color: '#7A9CB8', fontSize: 20 }}>💭</span>
                </div>
                <div style={{ fontWeight: 600, color: '#4A4458', marginBottom: 4 }}>
                  When You Feel Off
                </div>
                <div style={{ fontSize: '0.875rem', color: '#7A7189', lineHeight: 1.5 }}>
                  Gentle guidance for difficult moments
                </div>
              </GlassCard>

              <GlassCard>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(197, 180, 227, 0.3)' }}
                >
                  <span style={{ color: '#9B8BB8', fontSize: 20 }}>🧘</span>
                </div>
                <div style={{ fontWeight: 600, color: '#4A4458', marginBottom: 4 }}>
                  Mind & Calm
                </div>
                <div style={{ fontSize: '0.875rem', color: '#7A7189', lineHeight: 1.5 }}>
                  Breathing exercises and grounding
                </div>
              </GlassCard>

              <GlassCard>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(232, 180, 184, 0.3)' }}
                >
                  <span style={{ color: '#B89A9E', fontSize: 20 }}>🌸</span>
                </div>
                <div style={{ fontWeight: 600, color: '#4A4458', marginBottom: 4 }}>
                  Movement
                </div>
                <div style={{ fontSize: '0.875rem', color: '#7A7189', lineHeight: 1.5 }}>
                  Simple stretches and posture help
                </div>
              </GlassCard>

              <GlassCard>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(180, 200, 220, 0.3)' }}
                >
                  <span style={{ color: '#8A9CB8', fontSize: 20 }}>📖</span>
                </div>
                <div style={{ fontWeight: 600, color: '#4A4458', marginBottom: 4 }}>
                  Quick Reference
                </div>
                <div style={{ fontSize: '0.875rem', color: '#7A7189', lineHeight: 1.5 }}>
                  Everything at a glance
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Breathing Exercise Mini */}
        <section className="mb-12">
          <BreathingMini />
        </section>

        {/* Promise Section */}
        <section className="mb-12">
          <GlassCard>
            <h3 style={{
              fontWeight: 600,
              color: '#4A4458',
              marginBottom: '1rem',
              fontSize: '1.125rem'
            }}>
              Our promise to you
            </h3>
            <div className="space-y-3">
              {[
                { icon: '🔒', text: 'No tracking or data collection' },
                { icon: '💜', text: 'No guilt, no streaks, no judgment' },
                { icon: '✨', text: 'One small thing is always enough' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span style={{ fontSize: 18 }}>{item.icon}</span>
                  <span style={{ color: '#5A5468' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Footer */}
        <footer className="text-center py-8">
          <p style={{
            fontStyle: 'italic',
            color: '#9A8FA8',
            fontSize: '1rem',
            marginBottom: '2rem'
          }}>
            "You're doing better than you think."
          </p>

          <button
            className="px-8 py-4 rounded-2xl font-medium transition-all"
            style={{
              background: 'linear-gradient(135deg, #E8B4B8, #C5B4E3)',
              color: 'white',
              boxShadow: '0 8px 32px rgba(200, 180, 220, 0.3)'
            }}
          >
            Begin Your Journey
          </button>
        </footer>
      </main>
    </div>
  )
}

function GlassCard({ children, featured = false }: { children: React.ReactNode; featured?: boolean }) {
  return (
    <div
      className="p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{
        background: featured
          ? 'rgba(255, 255, 255, 0.8)'
          : 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.6)',
        boxShadow: featured
          ? '0 8px 32px rgba(200, 180, 220, 0.2)'
          : '0 4px 16px rgba(200, 180, 220, 0.1)'
      }}
    >
      {children}
    </div>
  )
}

function BreathingMini() {
  const [phase, setPhase] = useState<'idle' | 'inhale' | 'hold' | 'exhale'>('idle')
  const [isActive, setIsActive] = useState(false)

  const start = () => {
    setIsActive(true)
    setPhase('inhale')

    // Simple 4-4-4 cycle
    setTimeout(() => setPhase('hold'), 4000)
    setTimeout(() => setPhase('exhale'), 8000)
    setTimeout(() => {
      setPhase('idle')
      setIsActive(false)
    }, 12000)
  }

  return (
    <GlassCard>
      <div className="text-center">
        <h3 style={{
          fontWeight: 600,
          color: '#4A4458',
          marginBottom: '0.5rem'
        }}>
          Quick Breath
        </h3>
        <p style={{ color: '#7A7189', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
          One cycle. That's all you need.
        </p>

        <div
          className="w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-1000"
          style={{
            background: isActive
              ? 'linear-gradient(135deg, #E8B4B8, #C5B4E3)'
              : 'rgba(197, 180, 227, 0.2)',
            transform: phase === 'inhale' ? 'scale(1.2)' : phase === 'exhale' ? 'scale(0.9)' : 'scale(1)',
            boxShadow: isActive ? '0 0 40px rgba(200, 180, 220, 0.4)' : 'none'
          }}
        >
          <span style={{
            color: isActive ? 'white' : '#9B8BB8',
            fontSize: '0.875rem',
            fontWeight: 500
          }}>
            {phase === 'idle' && 'Ready'}
            {phase === 'inhale' && 'Breathe in'}
            {phase === 'hold' && 'Hold'}
            {phase === 'exhale' && 'Breathe out'}
          </span>
        </div>

        {!isActive && (
          <button
            onClick={start}
            className="px-6 py-2 rounded-xl font-medium transition-all"
            style={{
              background: 'rgba(197, 180, 227, 0.2)',
              color: '#7A6B98'
            }}
          >
            Start breathing
          </button>
        )}
      </div>
    </GlassCard>
  )
}
