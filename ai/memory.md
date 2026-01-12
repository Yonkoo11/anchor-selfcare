# Project Memory - Self-Care Guide

## Key Decisions

### Strategic Direction (Jan 12, 2025)
- **Business Model**: Ethical Freemium (Proton/Signal model for wellness)
- **Target Market**: "Wellness refugees" - people burned out by traditional wellness apps
- **Positioning**: "The anti-wellness app" - serves survival, not optimization
- **Revenue Path**: Free public launch → Premium tier (local-only features) → B2B
- **Core Values**: Privacy first, no tracking, no shame, one thing is enough
- **See**: `PRODUCT_PRINCIPLES.md` for decision framework

### Design Philosophy
- **Core principle**: "Every visual choice should make a tired, confused person feel calmer"
- **Aesthetic**: Grounded & earthy - like a quiet forest cabin
- **Complexity**: Rich but calm - depth through layering, not loudness

### Technical Stack
- **Framework**: Next.js 14.2.0 with App Router
- **Styling**: Tailwind CSS 3.4.0 with extensive custom design system
- **Fonts**: Inter (body) + Fraunces (serif headings) via Google Fonts
- **AI**: @google/generative-ai for mockup generation script (optional feature)

### Color Philosophy
- **No pure black (#000) or pure white (#FFF)** - everything has warmth
- Background: cream (#FAF8F5) instead of white
- Text: bark (#2D2A26) instead of black
- Accents: sage (#7D8B7A), terracotta (#C4A484), moss (#6B7B6A)

### Dark Mode Strategy
- Warm "firelight" aesthetic, not harsh dark mode
- Uses night-* color scale for backgrounds
- Maintains warmth through terracotta and sage accents

## Learned Context

### File Structure
- `/app/` - Next.js app directory with 7 pages
- `/components/` - 15+ reusable components
- `/hooks/` - Custom React hooks
- `/public/` - SVG icons, favicons, manifest
- `DESIGN_SYSTEM.md` - Comprehensive design documentation

### Key Components
- `BreathingTimer.tsx` - Interactive breathing exercises with audio (Web Audio API)
- `ThemeProvider.tsx` - Light/dark mode with localStorage persistence
- `ScrollReveal.tsx` & `TextReveal.tsx` - Animation components
- `RandomSuggestion.tsx` - Random wellness suggestions
- `Collapsible.tsx` - Expandable content sections
- `FeedbackForm.tsx` - Anonymous feedback via mailto (no data stored)

### Pages
1. `/` - Homepage with hero + navigation cards
2. `/baseline` - Daily non-negotiables (most important)
3. `/when-off` - Troubleshooting when feeling off
4. `/mind` - Mental care, breathing exercises
5. `/movement` - Physical movement guide
6. `/quick-reference` - Quick reference section
7. `/about` - About the project

## Gotchas & Warnings

### Breathing Timer
- Uses Web Audio API - won't work without user interaction first (browser security)
- Audio context must be created on user gesture
- Has sound toggle to respect user preference

### Static Export
- App is configured for static export (`out/` directory)
- Some dynamic features may need adjustment for pure static hosting

### Tailwind Custom Classes
- Extensive custom classes in `globals.css` (800+ lines)
- Card variants: `card-elevated`, `card-glass`, `card-accent`, `card-interactive`
- Typography: `heading-hero`, `heading-section`, `prose-lead`
- Must maintain consistency with DESIGN_SYSTEM.md

### Animation Accessibility
- All animations respect `prefers-reduced-motion`
- Alternative instant states provided

## Reflections

### What Worked
- Comprehensive design system created upfront = consistent implementation
- Earthy color palette feels genuinely calming (validated against design philosophy)
- Component-based architecture makes changes easy
- Dark mode feels cohesive, not an afterthought

### What Could Improve
- Mockups directory unused - could generate visual previews
- No test coverage currently
- Could add more breathing patterns to timer (Phase 2 premium feature)
- PNG icons needed for better PWA compatibility (currently using SVG)

### Recently Added (Jan 12, 2025)
- PWA support with service worker (`public/sw.js`)
- SEO optimization (sitemap.ts, robots.ts)
- Anonymous feedback form on About page
- Product principles documentation (`PRODUCT_PRINCIPLES.md`)
- Git repository initialized
