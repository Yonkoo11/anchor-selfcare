# Design Elevation Reference

## Premium Web Design Techniques (Abstract/Linear/Vercel tier)

### Depth Hierarchy
- Minimum 5 visual layers: bg gradient -> mesh -> particles -> content -> grain overlay
- Each layer operates independently with its own animation timing
- Fixed-position decorative layers avoid scroll jank

### Texture Variety
- Grain/noise: SVG feTurbulence overlay at 3-4% opacity transforms "digital" to "analog"
- Glassmorphism: backdrop-blur + semi-transparent backgrounds
- Gradient borders: mask-composite trick (highest ROI single visual upgrade)
- Dot grids: radial-gradient repeating pattern at 24px intervals

### Motion Principles
- Spring physics: `cubic-bezier(0.34, 1.56, 0.64, 1)` for interactive elements
- Soft spring: `cubic-bezier(0.22, 1, 0.36, 1)` for page transitions
- Staggered entrances: 80-120ms between children
- Ambient idle: floating particles, morphing gradients, breathing effects
- All animations use GPU-composited properties only (transform, opacity, filter)

### Color Story
- Limited palette with strategic accent pops
- Never flat/single-color backgrounds -- always gradients or layered
- Section moods: vary background warmth per section for rhythm
- Gradient text: background-clip technique for animated text color

### Typography Scale
- Heroes: 8xl-9xl (96-128px) with tight tracking (-0.03em)
- Dramatic size contrast between heading and body
- Serif for emotion, sans for utility

### Key Techniques
- **Gradient borders**: 1px via `border-image` or `mask-composite` on pseudo-element
- **Grain overlay**: Fixed SVG noise at 3% opacity, z-9999, pointer-events:none
- **Mesh gradient**: 5-color radial gradients with slow background-position animation
- **CSS particles**: 8 span elements, transform-only animation, varied timing
- **Vignette**: Radial gradient from transparent center to dark edges (dark mode)
- **Section numbers**: 120px decorative serif at 4-6% opacity, absolute positioned

### Performance Rules
- All new animations: transform, opacity, filter only (GPU composited)
- Grain overlay: fixed position, pointer-events:none, no repaints
- Mesh gradient: animate background-size not gradient recalculation
- CSS particles: 8 DOM elements total, transform-only
- No will-change (reserves GPU memory unnecessarily)
- Reduced motion: disable all new animations for prefers-reduced-motion
