'use client'

import { useState } from 'react'
import Link from 'next/link'

// ============================================================================
// V2: MINIMAL JAPANESE - Extreme zen simplicity (Ma/間)
// UX: List-based navigation, maximum whitespace, focus on content
// ============================================================================

export default function V2MinimalJapanese() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <div className="min-h-screen" style={{ background: '#FAFAFA' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50" style={{ background: '#FAFAFA', borderBottom: '1px solid #E5E5E5' }}>
        <div className="max-w-xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link href="/variations" className="flex items-center gap-2" style={{ color: '#8B4513' }}>
            <span style={{ fontSize: 16 }}>←</span>
            <span style={{ fontSize: 13, letterSpacing: '0.05em' }}>Back</span>
          </Link>
          <span style={{ fontSize: 12, color: '#888', letterSpacing: '0.1em' }}>
            V2
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-xl mx-auto px-8 py-20">
        {/* Header - extreme minimal */}
        <header className="mb-24">
          <p style={{
            color: '#8B4513',
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom: '2rem'
          }}>
            Self-Care Guide
          </p>

          <h1 style={{
            fontFamily: 'Georgia, serif',
            color: '#1A1A1A',
            fontSize: '4rem',
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            marginBottom: '3rem'
          }}>
            Begin.
          </h1>

          <p style={{
            color: '#666666',
            fontSize: '1rem',
            lineHeight: 2,
            maxWidth: '320px'
          }}>
            Simple instructions for presence.
            <br />
            No accounts. No tracking.
            <br />
            No pressure.
          </p>
        </header>

        {/* Divider */}
        <div style={{ height: 1, background: '#E5E5E5', marginBottom: '4rem' }} />

        {/* Navigation List - minimal */}
        <nav className="mb-24">
          <ListItem
            number="01"
            title="Daily Baseline"
            subtitle="The essentials"
            active={activeSection === '01'}
            onClick={() => setActiveSection(activeSection === '01' ? null : '01')}
          />

          {activeSection === '01' && (
            <ExpandedContent>
              <p>Start here when everything feels impossible. These are the non-negotiables:</p>
              <ul>
                <li>Water — hydrate your brain</li>
                <li>Food — fuel your body</li>
                <li>Clean — wash face or shower</li>
                <li>Move — any movement counts</li>
              </ul>
            </ExpandedContent>
          )}

          <ListItem
            number="02"
            title="When You Feel Off"
            subtitle="Finding balance"
            active={activeSection === '02'}
            onClick={() => setActiveSection(activeSection === '02' ? null : '02')}
          />

          {activeSection === '02' && (
            <ExpandedContent>
              <p>Something specific is wrong. Choose your symptom:</p>
              <ul>
                <li>Tired → Rest or move gently</li>
                <li>Stiff → Stretch and breathe</li>
                <li>Anxious → Ground yourself</li>
                <li>Unfocused → Reset environment</li>
              </ul>
            </ExpandedContent>
          )}

          <ListItem
            number="03"
            title="Mind & Calm"
            subtitle="Breathing, grounding"
            active={activeSection === '03'}
            onClick={() => setActiveSection(activeSection === '03' ? null : '03')}
          />

          {activeSection === '03' && (
            <ExpandedContent>
              <p>Techniques for mental reset:</p>
              <ul>
                <li>Box breathing — 4-4-4-4</li>
                <li>5-4-3-2-1 grounding</li>
                <li>Cold water on wrists</li>
                <li>Name what you feel</li>
              </ul>
            </ExpandedContent>
          )}

          <ListItem
            number="04"
            title="Movement & Posture"
            subtitle="Body mechanics"
            active={activeSection === '04'}
            onClick={() => setActiveSection(activeSection === '04' ? null : '04')}
            isLast
          />

          {activeSection === '04' && (
            <ExpandedContent>
              <p>Simple body maintenance:</p>
              <ul>
                <li>Shoulders down and back</li>
                <li>Unclench your jaw</li>
                <li>Feet flat on floor</li>
                <li>Screen at eye level</li>
              </ul>
            </ExpandedContent>
          )}
        </nav>

        {/* Quick action */}
        <section className="mb-24">
          <p style={{
            color: '#8B4513',
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}>
            Right Now
          </p>

          <div style={{ borderTop: '1px solid #E5E5E5', borderBottom: '1px solid #E5E5E5', padding: '2rem 0' }}>
            <p style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1.5rem',
              fontWeight: 300,
              color: '#1A1A1A',
              lineHeight: 1.5
            }}>
              Drink a glass of water.
              <br />
              <span style={{ color: '#888' }}>Your brain needs it.</span>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16">
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.125rem',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#888',
            lineHeight: 1.8
          }}>
            "One thing is enough."
          </p>

          <div style={{ marginTop: '3rem' }}>
            <button
              style={{
                background: '#1A1A1A',
                color: '#FAFAFA',
                padding: '1rem 2rem',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                fontWeight: 500
              }}
            >
              ENTER GUIDE
            </button>
          </div>
        </footer>
      </main>
    </div>
  )
}

function ListItem({
  number,
  title,
  subtitle,
  active,
  onClick,
  isLast = false
}: {
  number: string
  title: string
  subtitle: string
  active: boolean
  onClick: () => void
  isLast?: boolean
}) {
  return (
    <div
      className="cursor-pointer transition-all duration-200"
      onClick={onClick}
      style={{
        borderTop: '1px solid #E5E5E5',
        borderBottom: isLast ? '1px solid #E5E5E5' : 'none',
        padding: '1.75rem 0',
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-6">
          <span style={{
            color: active ? '#8B4513' : '#CCC',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            marginTop: 4
          }}>
            {number}
          </span>
          <div>
            <div style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1.375rem',
              fontWeight: 400,
              color: '#1A1A1A',
              marginBottom: 4
            }}>
              {title}
            </div>
            <div style={{ fontSize: '0.875rem', color: '#888' }}>
              {subtitle}
            </div>
          </div>
        </div>
        <span style={{
          color: active ? '#8B4513' : '#CCC',
          fontSize: '1.25rem',
          fontWeight: 300,
          transform: active ? 'rotate(90deg)' : 'none',
          transition: 'transform 0.2s'
        }}>
          →
        </span>
      </div>
    </div>
  )
}

function ExpandedContent({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="overflow-hidden animate-fadeIn"
      style={{
        padding: '1.5rem 0 2rem 3.5rem',
        borderBottom: '1px solid #E5E5E5',
      }}
    >
      <div style={{
        fontSize: '0.9375rem',
        color: '#444',
        lineHeight: 1.8,
      }}>
        <style jsx>{`
          div :global(p) {
            margin-bottom: 1rem;
          }
          div :global(ul) {
            list-style: none;
            padding: 0;
          }
          div :global(li) {
            padding: 0.5rem 0;
            padding-left: 1.5rem;
            position: relative;
          }
          div :global(li)::before {
            content: '—';
            position: absolute;
            left: 0;
            color: #CCC;
          }
        `}</style>
        {children}
      </div>
    </div>
  )
}
