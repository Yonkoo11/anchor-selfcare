'use client'

import Link from 'next/link'

// ============================================================================
// V4: BOLD EDITORIAL - Magazine-style, authoritative
// UX: Strong typography, newspaper layout, pull quotes, authority
// ============================================================================

export default function V4BoldEditorial() {
  return (
    <div className="min-h-screen" style={{ background: '#FFFEF8' }}>
      {/* Navigation */}
      <nav style={{ borderBottom: '1px solid #E5E5E5' }}>
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/variations" style={{ color: '#B8372B', fontSize: 14, fontWeight: 500 }}>
            ← Back
          </Link>
          <span style={{ fontSize: 12, color: '#888', letterSpacing: '0.1em' }}>
            V4: EDITORIAL
          </span>
        </div>
      </nav>

      {/* Masthead */}
      <header
        className="max-w-4xl mx-auto px-6 py-6"
        style={{ borderBottom: '3px solid #121212' }}
      >
        <div className="flex items-center justify-between">
          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.5rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            color: '#121212'
          }}>
            THE SELF-CARE GUIDE
          </h1>
          <span style={{
            fontFamily: 'Georgia, serif',
            fontSize: '0.875rem',
            color: '#666',
            fontStyle: 'italic'
          }}>
            Est. 2025
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p style={{
              color: '#B8372B',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              A Manifesto for the Exhausted
            </p>

            <h2 style={{
              fontFamily: 'Georgia, serif',
              fontSize: '3.5rem',
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: '#121212',
              marginBottom: '1.5rem'
            }}>
              The Art of<br />
              <span style={{ color: '#B8372B' }}>Doing Less</span>
            </h2>

            <p style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1.25rem',
              lineHeight: 1.7,
              color: '#333',
              marginBottom: '2rem'
            }}>
              In a world obsessed with optimization, productivity, and endless self-improvement,
              we propose something radical: enough is enough.
            </p>

            <button
              style={{
                background: '#121212',
                color: '#FFFEF8',
                padding: '1rem 2rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.15em'
              }}
            >
              READ THE GUIDE →
            </button>
          </div>

          {/* Pull Quote */}
          <div className="flex items-center">
            <blockquote
              className="pl-8"
              style={{ borderLeft: '4px solid #B8372B' }}
            >
              <p style={{
                fontFamily: 'Georgia, serif',
                fontSize: '2rem',
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#121212',
                lineHeight: 1.3
              }}>
                "One shower is enough.
                One glass of water is enough.
                One breath is enough."
              </p>
              <cite style={{
                display: 'block',
                marginTop: '1rem',
                fontSize: '0.875rem',
                color: '#666',
                fontStyle: 'normal'
              }}>
                — The Daily Baseline
              </cite>
            </blockquote>
          </div>
        </div>

        {/* Section Divider */}
        <div style={{ height: 3, background: '#121212', marginBottom: '3rem' }} />

        {/* Sections Grid - Newspaper Style */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Article
            category="ESSENTIAL"
            categoryColor="#B8372B"
            title="Daily Baseline"
            excerpt="The non-negotiable foundations. Start here when everything feels impossible. Water. Food. Clean. Move."
            number="I"
          />

          <Article
            category="TROUBLESHOOTING"
            categoryColor="#1E4D2B"
            title="When You Feel Off"
            excerpt="Something specific is wrong. Tired, stiff, anxious, unfocused. Find targeted solutions for what ails you."
            number="II"
          />

          <Article
            category="TECHNIQUE"
            categoryColor="#4A4A8A"
            title="Mind & Calm"
            excerpt="Breathing exercises, grounding techniques, and mental resets drawn from neuroscience and therapy."
            number="III"
          />
        </div>

        {/* Feature Article */}
        <div
          className="p-8 mb-16"
          style={{ background: '#F5F4F0', border: '1px solid #E5E5E5' }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p style={{
                color: '#666',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                marginBottom: '0.75rem'
              }}>
                FEATURED
              </p>
              <h3 style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: '#121212',
                lineHeight: 1.2,
                marginBottom: '1rem'
              }}>
                Movement & Posture
              </h3>
              <p style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1rem',
                color: '#444',
                lineHeight: 1.7
              }}>
                Basic body mechanics explained simply. No jargon, no gym memberships,
                no equipment required. Just the fundamentals of how your body works
                and what it needs to feel human again.
              </p>
            </div>
            <div className="space-y-4">
              <MiniArticle title="Posture Reset" subtitle="60 seconds to realign" />
              <MiniArticle title="Desk Stretches" subtitle="No standing required" />
              <MiniArticle title="The Walk" subtitle="Movement as medicine" />
            </div>
          </div>
        </div>

        {/* What We Don't Do */}
        <div className="mb-16">
          <h3 style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#121212',
            marginBottom: '1.5rem',
            paddingBottom: '0.75rem',
            borderBottom: '2px solid #121212'
          }}>
            What This Publication Is Not
          </h3>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              'Not a wellness app harvesting your data',
              'Not productivity advice in disguise',
              'Not gamified with streaks and badges',
              'Not here to judge your choices',
              'Not selling you a subscription',
              'Not tracking anything about you',
            ].map((item, i) => (
              <p
                key={i}
                className="flex items-start gap-3"
                style={{
                  fontFamily: 'Georgia, serif',
                  color: '#444',
                  fontSize: '0.9375rem',
                  lineHeight: 1.6
                }}
              >
                <span style={{ color: '#B8372B', fontWeight: 700 }}>✕</span>
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer
          className="py-8 text-center"
          style={{ borderTop: '3px solid #121212' }}
        >
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.125rem',
            fontStyle: 'italic',
            color: '#666',
            marginBottom: '2rem'
          }}>
            "Pick one thing. Start there. Tomorrow is another edition."
          </p>

          <div className="flex items-center justify-center gap-8">
            <FooterLink>About</FooterLink>
            <FooterLink>Archive</FooterLink>
            <FooterLink>Subscribe</FooterLink>
          </div>
        </footer>
      </main>
    </div>
  )
}

function Article({
  category,
  categoryColor,
  title,
  excerpt,
  number
}: {
  category: string
  categoryColor: string
  title: string
  excerpt: string
  number: string
}) {
  return (
    <article
      className="pb-8 cursor-pointer group"
      style={{ borderBottom: '1px solid #E5E5E5' }}
    >
      <div className="flex items-start justify-between mb-3">
        <span style={{
          color: categoryColor,
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.2em'
        }}>
          {category}
        </span>
        <span style={{
          fontFamily: 'Georgia, serif',
          fontSize: '0.875rem',
          color: '#CCC'
        }}>
          {number}
        </span>
      </div>

      <h3
        className="group-hover:underline"
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#121212',
          lineHeight: 1.2,
          marginBottom: '0.75rem'
        }}
      >
        {title}
      </h3>

      <p style={{
        fontFamily: 'Georgia, serif',
        fontSize: '0.9375rem',
        color: '#555',
        lineHeight: 1.6
      }}>
        {excerpt}
      </p>
    </article>
  )
}

function MiniArticle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div
      className="flex items-center justify-between py-3 cursor-pointer group"
      style={{ borderBottom: '1px solid #DDD' }}
    >
      <div>
        <div
          className="group-hover:underline"
          style={{
            fontFamily: 'Georgia, serif',
            fontWeight: 600,
            color: '#121212',
            marginBottom: 2
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: '0.8rem', color: '#888' }}>{subtitle}</div>
      </div>
      <span style={{ color: '#CCC' }}>→</span>
    </div>
  )
}

function FooterLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      style={{
        fontSize: '0.8rem',
        fontWeight: 500,
        letterSpacing: '0.1em',
        color: '#666',
        textDecoration: 'none'
      }}
      className="hover:underline"
    >
      {children}
    </a>
  )
}
