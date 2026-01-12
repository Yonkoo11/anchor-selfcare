'use client'

import Link from 'next/link'

const variations = [
  {
    id: 'v1',
    name: 'Earthy Cabin',
    tagline: 'Warm, grounded, forest cabin feel',
    description: 'Current design style. Sage greens, terracotta accents, paper texture. Feels like a quiet retreat.',
    colors: ['#FAF8F5', '#7D8B7A', '#C4A484', '#2D2A26'],
    mood: 'Cozy • Natural • Grounded',
    bestFor: 'Users seeking warmth and comfort',
  },
  {
    id: 'v2',
    name: 'Minimal Japanese',
    tagline: 'Extreme zen simplicity (Ma/間)',
    description: 'Maximum whitespace, hairline borders, single accent color. Meditative and focused.',
    colors: ['#FAFAFA', '#1A1A1A', '#8B4513', '#E5E5E5'],
    mood: 'Quiet • Zen • Focused',
    bestFor: 'Users seeking clarity and calm',
  },
  {
    id: 'v3',
    name: 'Soft Gradient',
    tagline: 'Gentle, nurturing, airy',
    description: 'Pastel gradients, glassmorphism, floating elements. Dreamy and emotionally supportive.',
    colors: ['#FDF8F5', '#E8B4B8', '#C5B4E3', '#A8C5DA'],
    mood: 'Soft • Nurturing • Dreamy',
    bestFor: 'Users seeking emotional comfort',
  },
  {
    id: 'v4',
    name: 'Bold Editorial',
    tagline: 'Magazine-style, authoritative',
    description: 'Strong typography, newspaper layout, pull quotes. Trustworthy and mature.',
    colors: ['#FFFEF8', '#121212', '#B8372B', '#1E4D2B'],
    mood: 'Confident • Mature • Authoritative',
    bestFor: 'Users seeking trust and authority',
  },
  {
    id: 'v5',
    name: 'Dark Sanctuary',
    tagline: 'Cozy darkness, warm amber light',
    description: 'Night-first design with warm amber accents. Intimate, restful, easy on the eyes.',
    colors: ['#0F0E0D', '#1A1917', '#E59866', '#E8E4DE'],
    mood: 'Cozy • Intimate • Restful',
    bestFor: 'Users browsing at night or preferring dark mode',
  },
]

export default function VariationsIndex() {
  return (
    <div className="min-h-screen bg-stone-100">
      {/* Header */}
      <header className="bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <Link
            href="/"
            className="text-sm text-stone-500 hover:text-stone-700 mb-4 inline-block"
          >
            ← Back to App
          </Link>
          <h1 className="text-3xl font-bold text-stone-900 mb-2">
            UI/UX Design Variations
          </h1>
          <p className="text-stone-600 max-w-2xl">
            5 complete product designs for the Self-Care Guide. Each represents a different
            visual direction and UX approach. Click any card to view the full design.
          </p>
        </div>
      </header>

      {/* Variations Grid */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid gap-6">
          {variations.map((v, index) => (
            <Link
              key={v.id}
              href={`/variations/${v.id}`}
              className="group bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6 flex flex-col sm:flex-row gap-6">
                {/* Preview Colors */}
                <div className="flex sm:flex-col gap-1 sm:w-16 flex-shrink-0">
                  {v.colors.map((color, i) => (
                    <div
                      key={i}
                      className="h-8 sm:h-10 flex-1 sm:flex-initial sm:w-full rounded-lg border border-stone-200"
                      style={{ background: color }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <span className="text-xs font-medium text-stone-400 mb-1 block">
                        V{index + 1}
                      </span>
                      <h2 className="text-xl font-semibold text-stone-900 group-hover:text-stone-700">
                        {v.name}
                      </h2>
                    </div>
                    <span className="text-stone-400 group-hover:text-stone-600 transition-colors text-xl">
                      →
                    </span>
                  </div>

                  <p className="text-sm font-medium text-stone-600 mb-2">
                    {v.tagline}
                  </p>

                  <p className="text-sm text-stone-500 mb-4">
                    {v.description}
                  </p>

                  <div className="flex flex-wrap gap-4 text-xs">
                    <div>
                      <span className="text-stone-400">Mood:</span>{' '}
                      <span className="text-stone-600">{v.mood}</span>
                    </div>
                    <div>
                      <span className="text-stone-400">Best for:</span>{' '}
                      <span className="text-stone-600">{v.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Comparison Note */}
        <div className="mt-8 p-6 bg-white rounded-xl border border-stone-200">
          <h3 className="font-semibold text-stone-900 mb-2">How to Choose</h3>
          <p className="text-sm text-stone-600 mb-4">
            Each design targets a different emotional state and user preference.
            Consider your target audience:
          </p>
          <ul className="text-sm text-stone-600 space-y-2">
            <li><strong>V1 Earthy:</strong> Broad appeal, works for most users</li>
            <li><strong>V2 Minimal:</strong> Users who find most apps overwhelming</li>
            <li><strong>V3 Gradient:</strong> Users seeking emotional support and softness</li>
            <li><strong>V4 Editorial:</strong> Users who value authority and trust</li>
            <li><strong>V5 Dark:</strong> Night owls, screen-sensitive users, modern aesthetic lovers</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
