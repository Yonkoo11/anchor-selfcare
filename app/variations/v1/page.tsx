'use client'

import { useState } from 'react'
import Link from 'next/link'

// ============================================================================
// V1: EARTHY CABIN - Warm, grounded, forest cabin feel
// UX: Card-based navigation, gentle hierarchy, breathing room
// ============================================================================

export default function V1EarthyCabin() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: '#FAF8F5',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundBlendMode: 'soft-light',
      }}
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md" style={{ background: 'rgba(250, 248, 245, 0.9)' }}>
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/variations" className="flex items-center gap-2" style={{ color: '#7D8B7A' }}>
            <span style={{ fontSize: 20 }}>←</span>
            <span style={{ fontSize: 14 }}>All Variations</span>
          </Link>
          <span style={{
            fontFamily: 'Georgia, serif',
            fontSize: 14,
            color: '#6B6560',
            letterSpacing: '0.05em'
          }}>
            V1: Earthy Cabin
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-12">
        {/* Hero */}
        <header className="mb-16">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(125, 139, 122, 0.2), rgba(125, 139, 122, 0.1))',
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7D8B7A" strokeWidth="1.5">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          </div>

          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: '2.75rem',
            fontWeight: 400,
            color: '#2D2A26',
            lineHeight: 1.1,
            marginBottom: '1rem'
          }}>
            Start Here
          </h1>

          <p style={{
            fontSize: '1.125rem',
            color: '#6B6560',
            lineHeight: 1.7,
            maxWidth: '480px'
          }}>
            Simple instructions for taking care of your body and presence.
            No accounts. No tracking. No pressure.
          </p>

          <div
            className="mt-6 h-1 w-16 rounded-full"
            style={{ background: 'linear-gradient(90deg, #C4A484, rgba(196, 164, 132, 0.3))' }}
          />
        </header>

        {/* Navigation Cards */}
        <section className="mb-16">
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.25rem',
            color: '#2D2A26',
            marginBottom: '1.5rem'
          }}>
            How to Use This Site
          </h2>

          <div className="space-y-4">
            {/* Featured Card */}
            <NavCard
              title="Daily Baseline"
              description="Start here if you're unsure what to do. The non-negotiables."
              icon="✓"
              featured
              badge="Start Here"
            />

            <NavCard
              title="When You Feel Off"
              description="Go here if something specific is wrong. Tired, stiff, unfocused."
              icon="?"
            />

            <NavCard
              title="Mind & Calm"
              description="Breathing techniques, grounding exercises, and mental resets."
              icon="◯"
            />

            <NavCard
              title="Movement & Posture"
              description="Basic body mechanics explained simply. No jargon."
              icon="↑"
            />
          </div>
        </section>

        {/* Quick Suggestion */}
        <section className="mb-16">
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.25rem',
            color: '#2D2A26',
            marginBottom: '1rem'
          }}>
            Not Sure Where to Start?
          </h2>

          <QuickSuggestion />
        </section>

        {/* What This Is Not */}
        <section className="mb-16">
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.25rem',
            color: '#2D2A26',
            marginBottom: '1rem'
          }}>
            What This Is Not
          </h2>

          <div
            className="p-6 rounded-xl"
            style={{
              background: 'rgba(245, 242, 237, 0.6)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(216, 211, 203, 0.5)',
            }}
          >
            <ul className="space-y-3">
              {[
                'Not a wellness app',
                'Not productivity advice',
                'Not here to judge you',
                'Not tracking anything about you',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3" style={{ color: '#6B6560' }}>
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: 'rgba(125, 139, 122, 0.5)' }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12" style={{ background: '#E8E4DE' }} />
            <span style={{ color: 'rgba(125, 139, 122, 0.4)' }}>❧</span>
            <div className="h-px w-12" style={{ background: '#E8E4DE' }} />
          </div>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            color: '#8B8580',
            fontSize: '1rem'
          }}>
            Pick one thing. Start there. That's enough.
          </p>
        </footer>
      </main>
    </div>
  )
}

function NavCard({
  title,
  description,
  icon,
  featured = false,
  badge
}: {
  title: string
  description: string
  icon: string
  featured?: boolean
  badge?: string
}) {
  return (
    <div
      className="relative p-5 rounded-xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
      style={{
        background: featured ? '#F5F2ED' : 'rgba(245, 242, 237, 0.6)',
        borderLeft: featured ? '4px solid #C4A484' : 'none',
        backdropFilter: 'blur(8px)',
        border: featured ? undefined : '1px solid rgba(216, 211, 203, 0.5)',
        boxShadow: featured
          ? '0 1px 3px rgba(45, 42, 38, 0.04), 0 4px 12px rgba(45, 42, 38, 0.03)'
          : 'none'
      }}
    >
      {badge && (
        <span
          className="absolute -top-2 left-6 px-3 py-1 rounded-full text-xs font-medium"
          style={{ background: '#C4A484', color: '#FAF8F5' }}
        >
          {badge}
        </span>
      )}

      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: featured
              ? 'linear-gradient(135deg, rgba(125, 139, 122, 0.2), rgba(125, 139, 122, 0.1))'
              : 'rgba(125, 139, 122, 0.15)'
          }}
        >
          <span style={{ color: '#7D8B7A', fontSize: 18 }}>{icon}</span>
        </div>

        <div className="flex-1 min-w-0">
          <div style={{ fontWeight: 500, color: '#2D2A26', marginBottom: 2 }}>{title}</div>
          <div style={{ fontSize: '0.875rem', color: '#6B6560' }}>{description}</div>
        </div>

        <span style={{ color: '#B8B2A7', fontSize: 18 }}>→</span>
      </div>
    </div>
  )
}

function QuickSuggestion() {
  const [suggestion, setSuggestion] = useState({
    text: "Drink a glass of water. Your brain needs hydration to function.",
    category: "Baseline"
  })

  const suggestions = [
    { text: "Drink a glass of water. Your brain needs hydration to function.", category: "Baseline" },
    { text: "Stand up and stretch your arms above your head for 10 seconds.", category: "Movement" },
    { text: "Take 3 slow breaths. In through nose, out through mouth.", category: "Mind" },
    { text: "Open a window or step outside for 60 seconds of fresh air.", category: "Reset" },
  ]

  const getNew = () => {
    const others = suggestions.filter(s => s.text !== suggestion.text)
    setSuggestion(others[Math.floor(Math.random() * others.length)])
  }

  return (
    <div
      className="p-6 rounded-xl"
      style={{
        background: '#F5F2ED',
        boxShadow: '0 1px 3px rgba(45, 42, 38, 0.04), 0 4px 12px rgba(45, 42, 38, 0.03)'
      }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <span
          className="px-2 py-1 rounded text-xs font-medium"
          style={{ background: 'rgba(125, 139, 122, 0.15)', color: '#5C6659' }}
        >
          {suggestion.category}
        </span>
        <button
          onClick={getNew}
          className="text-sm transition-colors"
          style={{ color: '#7D8B7A' }}
        >
          Try another →
        </button>
      </div>
      <p style={{ color: '#2D2A26', fontSize: '1.125rem', lineHeight: 1.6 }}>
        {suggestion.text}
      </p>
    </div>
  )
}
