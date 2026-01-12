# Self-Care Guide - Design System

A comprehensive design system for a calm, grounded, earthy self-care website.

---

## Design Philosophy

**Core Principle**: Every visual choice should make a tired, confused person feel calmer.

**Aesthetic**: Grounded & Earthy
- Like being in a quiet forest cabin
- Natural materials: wood, stone, linen
- Muted, warm tones that don't demand attention
- Organic shapes that feel human, not machine-made

**Complexity**: Rich but Calm
- Depth through layering, not loudness
- Textures that add warmth without distraction
- Animations that feel like breathing, not bouncing

---

## Color Palette

### Philosophy
Colors inspired by natural materials: stone, sand, sage, clay, bark.
No pure whites or blacks - everything has warmth.

### Tokens

```
Background Colors (Light to Dark):
┌─────────────────────────────────────────────────────────────┐
│ cream        #FAF8F5   Main background, like aged paper     │
│ sand         #F5F2ED   Cards, elevated surfaces             │
│ stone-100    #E8E4DE   Subtle borders, dividers             │
│ stone-200    #D4CFC6   Stronger borders, disabled states    │
│ stone-300    #B8B2A7   Muted text, placeholders             │
└─────────────────────────────────────────────────────────────┘

Text Colors:
┌─────────────────────────────────────────────────────────────┐
│ bark         #2D2A26   Primary text, headings               │
│ earth        #4A4640   Body text                            │
│ clay         #6B6560   Secondary text                       │
│ dust         #8B8580   Muted text, hints                    │
└─────────────────────────────────────────────────────────────┘

Accent Colors:
┌─────────────────────────────────────────────────────────────┐
│ sage         #7D8B7A   Primary accent, nature               │
│ sage-light   #A3B09F   Hover states, highlights             │
│ sage-dark    #5C6659   Active states                        │
│ terracotta   #C4A484   Warm accent, sparingly               │
│ moss         #6B7B6A   Alternative accent                   │
└─────────────────────────────────────────────────────────────┘

Semantic Colors:
┌─────────────────────────────────────────────────────────────┐
│ gentle-success  #7D8B7A   Positive, use sage                │
│ gentle-warning  #C4A484   Attention, use terracotta         │
│ gentle-info     #8B9BA3   Informational, muted blue-gray    │
└─────────────────────────────────────────────────────────────┘
```

### Color Usage Rules

1. **Never use pure white (#FFF) or pure black (#000)**
   - Background: cream (#FAF8F5) instead of white
   - Text: bark (#2D2A26) instead of black

2. **Accent colors are supporting actors, not stars**
   - Sage for interactive elements, links, icons
   - Terracotta only for special emphasis (use sparingly)

3. **Create depth with subtle shade variations**
   - Elevated card on cream background = sand (#F5F2ED)
   - Pressed/active state = slightly darker

---

## Typography

### Philosophy
Typography should feel like handwritten notes from a friend - warm, readable, unhurried.

### Font Stack

```css
/* Primary: Humanist sans-serif */
font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;

/* Optional: Serif for special headings */
font-family: 'Lora', 'Georgia', serif;
```

### Type Scale

```
Text Sizes (with line-height):
┌─────────────────────────────────────────────────────────────┐
│ xs     12px / 1.5    Small labels, captions                 │
│ sm     14px / 1.5    Secondary text, hints                  │
│ base   16px / 1.7    Body text (generous line-height!)      │
│ lg     18px / 1.6    Lead paragraphs, emphasis              │
│ xl     20px / 1.5    Section titles, H3                     │
│ 2xl    24px / 1.4    Page section headings, H2              │
│ 3xl    30px / 1.3    Page titles, H1                        │
│ 4xl    36px / 1.2    Hero headings (rare)                   │
└─────────────────────────────────────────────────────────────┘
```

### Font Weights

```
light      300   Rarely used, delicate text only
normal     400   Body text
medium     500   Subtle emphasis, nav items
semibold   600   Headings, strong emphasis
```

### Typography Rules

1. **Body text line-height: 1.7** (more generous than default)
   - Gives text room to breathe
   - Reduces cognitive load for tired readers

2. **Headings have tighter line-height** (1.2-1.4)
   - Keeps multi-line headings cohesive

3. **Letter-spacing**:
   - Body: normal
   - All-caps labels: 0.05em (slight tracking)
   - Large headings: -0.01em (slight tightening)

4. **Max reading width: 65ch** (~680px)
   - Optimal for comfortable reading
   - Never wider, often narrower on mobile

---

## Spacing

### Philosophy
Generous whitespace = calm. Cramped layouts = anxiety.

### Spacing Scale

```
Base unit: 4px

┌─────────────────────────────────────────────────────────────┐
│ 1     4px      Hairline gaps                                │
│ 2     8px      Tight spacing, related items                 │
│ 3     12px     Default gap in tight groups                  │
│ 4     16px     Standard spacing                             │
│ 5     20px     Comfortable padding                          │
│ 6     24px     Section padding, card padding                │
│ 8     32px     Between related sections                     │
│ 10    40px     Between distinct sections                    │
│ 12    48px     Page section breaks                          │
│ 16    64px     Major section divisions                      │
│ 20    80px     Page-level spacing                           │
│ 24    96px     Hero spacing                                 │
└─────────────────────────────────────────────────────────────┘
```

### Spacing Rules

1. **Padding inside cards**: 24px (6) minimum
2. **Gap between cards**: 16px (4)
3. **Section margins**: 48px (12) top, 32px (8) bottom
4. **Page padding**: 24px mobile, 32px tablet, 48px desktop

---

## Shadows & Depth

### Philosophy
Shadows should feel like natural light falling on physical objects.
Soft, diffuse, warm-tinted.

### Shadow Scale

```css
/* Subtle: Slight lift, cards at rest */
shadow-soft: 0 1px 3px rgba(45, 42, 38, 0.04),
             0 4px 12px rgba(45, 42, 38, 0.03);

/* Medium: Hover states, interactive elements */
shadow-medium: 0 2px 8px rgba(45, 42, 38, 0.06),
               0 8px 24px rgba(45, 42, 38, 0.04);

/* Elevated: Modal, dropdown, focused elements */
shadow-elevated: 0 4px 16px rgba(45, 42, 38, 0.08),
                 0 12px 32px rgba(45, 42, 38, 0.06);

/* Inset: Pressed states, input fields */
shadow-inset: inset 0 1px 3px rgba(45, 42, 38, 0.06);
```

### Shadow Rules

1. **Shadow color is warm** (based on bark color, not gray)
2. **Multiple layers** for natural falloff
3. **Hover = lift** (shadow-soft → shadow-medium)
4. **Active/pressed = flatten** (reduce shadow or use inset)

---

## Border Radius

### Philosophy
Organic, not geometric. Soft enough to feel human.

```
┌─────────────────────────────────────────────────────────────┐
│ sm      4px     Subtle rounding, inputs                     │
│ md      8px     Standard cards, buttons                     │
│ lg      12px    Prominent cards, sections                   │
│ xl      16px    Large cards, hero elements                  │
│ 2xl     24px    Feature cards, special elements             │
│ full    9999px  Pills, circular elements                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Textures & Patterns

### Philosophy
Subtle textures add warmth and organic feel.
Like the grain of paper or the weave of linen.

### Paper Texture

```css
/* Subtle noise overlay */
.texture-paper {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-blend-mode: soft-light;
  opacity: 0.3;
}
```

### Linen Texture
A subtle cross-hatch pattern that adds tactile warmth.

### Gradient Overlays

```css
/* Warm fade for sections */
.gradient-warm {
  background: linear-gradient(
    180deg,
    rgba(250, 248, 245, 0) 0%,
    rgba(250, 248, 245, 1) 100%
  );
}

/* Sage accent gradient */
.gradient-sage {
  background: linear-gradient(
    135deg,
    #7D8B7A 0%,
    #6B7B6A 100%
  );
}
```

---

## Animation & Motion

### Philosophy
Movement should feel like breathing - slow, rhythmic, calming.
Never jarring, never demanding attention.

### Timing

```
┌─────────────────────────────────────────────────────────────┐
│ instant    0ms       Immediate feedback                     │
│ fast       150ms     Micro-interactions, hovers             │
│ normal     250ms     Standard transitions                   │
│ slow       400ms     Reveals, collapses                     │
│ slower     600ms     Page transitions, major changes        │
└─────────────────────────────────────────────────────────────┘
```

### Easing

```css
/* Default: Smooth and natural */
ease-default: cubic-bezier(0.4, 0, 0.2, 1);

/* Enter: Starts fast, settles gently */
ease-out: cubic-bezier(0, 0, 0.2, 1);

/* Exit: Starts slow, exits quickly */
ease-in: cubic-bezier(0.4, 0, 1, 1);

/* Bounce: Gentle overshoot for playful moments */
ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Animation Rules

1. **Prefer transforms over layout changes**
   - Use transform: translateY, scale, rotate
   - Never animate width/height (use max-height for collapses)

2. **Stagger group animations** (50-100ms between items)

3. **Reduce motion for accessibility**
   - Respect prefers-reduced-motion
   - Provide instant alternatives

---

## Components

### Card Variants

```
┌─────────────────────────────────────────────────────────────┐
│ Flat Card                                                    │
│ - Background: sand                                           │
│ - Border: 1px stone-100                                      │
│ - Shadow: none                                               │
│ - Use: Lists, tight layouts                                  │
├─────────────────────────────────────────────────────────────┤
│ Elevated Card                                                │
│ - Background: sand                                           │
│ - Border: none                                               │
│ - Shadow: shadow-soft                                        │
│ - Hover: shadow-medium + slight lift                         │
│ - Use: Interactive cards, collapsibles                       │
├─────────────────────────────────────────────────────────────┤
│ Featured Card                                                │
│ - Background: gradient or sage tint                          │
│ - Border: none                                               │
│ - Shadow: shadow-medium                                      │
│ - Use: Highlighted content, CTAs                             │
└─────────────────────────────────────────────────────────────┘
```

### Button Variants

```
┌─────────────────────────────────────────────────────────────┐
│ Primary Button                                               │
│ - Background: sage                                           │
│ - Text: cream                                                │
│ - Hover: sage-dark                                           │
│ - Shadow: shadow-soft                                        │
├─────────────────────────────────────────────────────────────┤
│ Secondary Button                                             │
│ - Background: transparent                                    │
│ - Border: 1px stone-200                                      │
│ - Text: earth                                                │
│ - Hover: sand background                                     │
├─────────────────────────────────────────────────────────────┤
│ Ghost Button                                                 │
│ - Background: transparent                                    │
│ - Text: sage                                                 │
│ - Hover: sage-light background (10% opacity)                 │
└─────────────────────────────────────────────────────────────┘
```

### Interactive States

```
Default → Hover → Active → Focus

Hover:
- Slight lift (transform: translateY(-1px))
- Increased shadow
- Subtle color shift

Active/Pressed:
- Flatten (transform: translateY(0))
- Reduced shadow
- Slightly darker color

Focus:
- Ring: 2px sage with 2px offset
- Never remove focus styles
```

---

## Icons

### Philosophy
Icons should be simple, organic strokes.
Like they were drawn with a pen, not a machine.

### Style
- Stroke-based, not filled
- 1.5-2px stroke width
- Rounded caps and joins
- Warm stone color, or sage for interactive

### Recommended Set
Lucide, Heroicons (outline), or Phosphor

---

## Responsive Breakpoints

```
┌─────────────────────────────────────────────────────────────┐
│ sm      640px     Large phones                              │
│ md      768px     Tablets                                   │
│ lg      1024px    Small laptops                             │
│ xl      1280px    Desktops                                  │
│ 2xl     1536px    Large desktops                            │
└─────────────────────────────────────────────────────────────┘
```

### Mobile-First Approach
- Start with mobile styles
- Add complexity at larger breakpoints
- Content max-width: 680px (reading width)

---

## Accessibility

### Requirements

1. **Color contrast**: Minimum 4.5:1 for text, 3:1 for large text
2. **Focus indicators**: Always visible, high contrast
3. **Touch targets**: Minimum 44x44px
4. **Reduced motion**: Respect prefers-reduced-motion
5. **Semantic HTML**: Proper heading hierarchy, landmarks

### Testing Checklist
- [ ] All text passes contrast check
- [ ] Keyboard navigation works throughout
- [ ] Screen reader announces correctly
- [ ] Works with 200% zoom
- [ ] No motion sickness triggers

---

## Implementation Checklist

- [ ] Tailwind config updated with all tokens
- [ ] Global CSS with textures, gradients
- [ ] Typography utilities
- [ ] Card components
- [ ] Button components
- [ ] Collapsible with new styling
- [ ] Navigation redesigned
- [ ] All pages updated
- [ ] Responsive testing
- [ ] Accessibility audit
