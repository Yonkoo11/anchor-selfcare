# Self-Care Guide - Design Variations

5 distinctly different design directions for the app. Each maintains the core philosophy:
- Calm a tired, overwhelmed person
- No shame, no pressure
- Body-first, survival-focused

---

## Variation 1: Current Design (Earthy Cabin)
**What we have now**

### Mood
Like being in a quiet forest cabin. Warm, grounded, natural.

### Color Palette
```
Background:  #FAF8F5 (cream)
Text:        #2D2A26 (bark)
Accent:      #7D8B7A (sage)
Warm:        #C4A484 (terracotta)
Dark mode:   #211F1D (night)
```

### Typography
- Headings: Fraunces (serif, warm, distinctive)
- Body: Inter (clean, readable)

### Characteristics
- Subtle paper texture
- Soft shadows with warm tint
- Rounded corners (8-12px)
- Generous whitespace
- Animations feel like breathing

### Best For
Users who want: warmth, nature, comfort, grounding

---

## Variation 2: Minimal Japanese (Ma/間)
**Extreme restraint, zen simplicity**

### Mood
Empty space as a feature. Quiet. Meditative. Museum-like calm.

### Color Palette
```
Background:  #FAFAFA (off-white)
Text:        #1A1A1A (near-black)
Accent:      #8B4513 (single warm brown)
Subtle:      #E5E5E5 (light gray)
Dark mode:   #0D0D0D (deep black)
```

### Typography
- Headings: Noto Serif JP or Cormorant (elegant serif)
- Body: IBM Plex Sans (clean, technical)
- Lots of letter-spacing, large sizes

### Characteristics
- NO shadows
- NO textures
- Hairline borders only
- Extreme whitespace (40%+ empty)
- Single accent color used sparingly
- Vertical rhythm emphasized
- Cards are just bordered boxes

### Example Component
```css
.card {
  border: 1px solid #E5E5E5;
  padding: 32px;
  background: transparent;
}
.card:hover {
  border-color: #8B4513;
}
```

### Best For
Users who want: clarity, focus, minimalism, zen

---

## Variation 3: Soft Gradient (Dreamy Cloud)
**Gentle, airy, nurturing**

### Mood
Like being wrapped in a soft blanket. Floating. Safe. Tender.

### Color Palette
```
Background:  #FDF8F5 → #F5F0FF (warm to lavender gradient)
Text:        #4A4458 (soft purple-gray)
Accent 1:    #E8B4B8 (dusty rose)
Accent 2:    #A8C5DA (soft blue)
Accent 3:    #C5B4E3 (lavender)
Dark mode:   #1E1B2E (deep purple) with same pastels
```

### Typography
- Headings: Outfit or Plus Jakarta Sans (soft, modern)
- Body: DM Sans (friendly, approachable)
- Rounded letterforms preferred

### Characteristics
- Soft gradient backgrounds (subtle, not gaudy)
- Blur effects (glassmorphism lite)
- Very rounded corners (16-24px)
- Soft drop shadows with color tint
- Floating elements feel
- Gentle animations (float, pulse)

### Example Component
```css
.card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px rgba(200, 180, 220, 0.15);
}
```

### Best For
Users who want: softness, nurturing, gentle, emotional comfort

---

## Variation 4: Bold Editorial (Newsprint)
**Strong typography, confident, grown-up**

### Mood
Like a well-designed magazine. Authoritative but approachable. Trustworthy.

### Color Palette
```
Background:  #FFFEF8 (warm paper)
Text:        #121212 (true black)
Accent:      #B8372B (editorial red)
Secondary:   #1E4D2B (forest green)
Dark mode:   #121212 with inverted accents
```

### Typography
- Headings: Playfair Display or Lora (bold serif, editorial)
- Body: Source Serif Pro (readable serif)
- VERY large heading sizes (48-72px)
- Strong weight contrast (300 vs 700)

### Characteristics
- NO rounded corners (sharp or slightly rounded 4px)
- Newspaper-style layouts (columns, rules)
- Horizontal divider lines
- Pull quotes styled prominently
- Black and white photography aesthetic
- Minimal color, maximum typography

### Example Component
```css
.card {
  border-top: 3px solid #121212;
  padding: 24px 0;
  background: transparent;
}
h2 {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
```

### Best For
Users who want: authority, trust, maturity, seriousness

---

## Variation 5: Dark Sanctuary (Night Mode First)
**Cozy darkness, warm light accents**

### Mood
Like a cozy room at night with warm lamp light. Intimate. Restful. Safe from the bright world.

### Color Palette
```
Background:  #0F0E0D (warm black)
Surface:     #1A1917 (elevated dark)
Text:        #E8E4DE (warm off-white)
Accent:      #E59866 (warm amber/copper)
Subtle:      #D4A574 (soft gold)
Light mode:  Inverted with same warmth
```

### Typography
- Headings: Clash Display or Cabinet Grotesk (modern, distinctive)
- Body: Satoshi or General Sans (clean, modern)
- Medium weights (450-500) for better dark mode readability

### Characteristics
- Dark as default, light as alternative
- Warm accent colors (amber, copper, gold)
- Subtle glow effects on interactive elements
- Soft inner shadows for depth
- NO harsh whites
- Gradients: dark to darker (depth)

### Example Component
```css
.card {
  background: #1A1917;
  border: 1px solid rgba(229, 152, 102, 0.1);
  border-radius: 12px;
  box-shadow:
    0 0 0 1px rgba(0,0,0,0.5),
    0 4px 24px rgba(0,0,0,0.3);
}
.card:hover {
  border-color: rgba(229, 152, 102, 0.3);
  box-shadow:
    0 0 0 1px rgba(229, 152, 102, 0.2),
    0 8px 32px rgba(0,0,0,0.4),
    0 0 60px rgba(229, 152, 102, 0.05);
}
```

### Best For
Users who want: nighttime use, eye comfort, cozy, modern

---

## Comparison Matrix

| Aspect | Earthy Cabin | Minimal Japanese | Soft Gradient | Bold Editorial | Dark Sanctuary |
|--------|--------------|------------------|---------------|----------------|----------------|
| **Primary Feel** | Warm, grounded | Quiet, zen | Soft, nurturing | Confident, mature | Cozy, intimate |
| **Colors** | Sage/terracotta | Monochrome+1 | Pastels | Black/red | Amber/dark |
| **Typography** | Serif+sans | Elegant serif | Soft sans | Bold serif | Modern sans |
| **Corners** | Rounded (8-12px) | Sharp (0-4px) | Very round (16-24px) | Sharp (0-4px) | Rounded (12px) |
| **Shadows** | Soft, warm | None | Soft, colored | None | Glow effects |
| **Texture** | Paper grain | None | Blur/glass | None | Subtle grain |
| **Best Time** | Anytime | Focused work | Emotional moments | Reading | Night/evening |
| **Energy** | Low-medium | Very low | Low | Medium | Very low |

---

## Recommendation

Given the app's philosophy ("make a tired person feel calmer"):

1. **Keep Earthy Cabin** for users who like warmth
2. **Add Dark Sanctuary** as true dark mode (not just inverted)
3. **Consider Minimal Japanese** for a "focus mode"

The current design is strong. The biggest improvement might be making dark mode feel more intentional (Dark Sanctuary style) rather than just inverting colors.

---

## Next Steps

1. Choose 1-2 directions to explore further
2. Create component mockups in code
3. A/B test with real users (if possible)
4. Implement chosen direction

Which variation(s) interest you?
