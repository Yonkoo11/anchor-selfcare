import type { Config } from 'tailwindcss'

const config: Config = {
  // ═══════════════════════════════════════════════════════════════════════════
  // DARK MODE - Using 'class' strategy for manual toggle
  // This means dark mode activates when <html class="dark"> is set
  // ═══════════════════════════════════════════════════════════════════════════
  darkMode: 'class',

  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ═══════════════════════════════════════════════════════════════════════
      // COLOR PALETTE - Grounded & Earthy (Light + Dark modes)
      // ═══════════════════════════════════════════════════════════════════════
      colors: {
        // ─────────────────────────────────────────────────────────────────────
        // LIGHT MODE COLORS (default)
        // ─────────────────────────────────────────────────────────────────────
        // Backgrounds (light to dark)
        cream: '#FAF8F5',      // Main background, like aged paper
        sand: '#F5F2ED',       // Cards, elevated surfaces
        stone: {
          100: '#E8E4DE',      // Subtle borders, dividers
          200: '#D4CFC6',      // Stronger borders, disabled
          300: '#B8B2A7',      // Muted text, placeholders
        },

        // Text colors (dark to light)
        bark: '#2D2A26',       // Primary text, headings
        earth: '#4A4640',      // Body text
        clay: '#6B6560',       // Secondary text
        dust: '#8B8580',       // Muted text, hints

        // ─────────────────────────────────────────────────────────────────────
        // DARK MODE COLORS
        // Philosophy: Warm, not harsh. Like firelight in a cabin.
        // ─────────────────────────────────────────────────────────────────────
        night: {
          // Backgrounds (dark to light)
          950: '#1A1917',      // Deepest background
          900: '#211F1D',      // Main background
          800: '#2A2825',      // Cards, elevated surfaces
          700: '#363330',      // Hover states
          600: '#45413D',      // Borders, dividers
          500: '#5C5752',      // Stronger borders
          400: '#736D67',      // Lighter accents
        },

        // Dark mode text (light to dark)
        parchment: '#F5F2ED',  // Primary text (light)
        limestone: '#D4CFC6',  // Body text
        ash: '#A8A29E',        // Secondary text
        coal: '#78716C',       // Muted text

        // ─────────────────────────────────────────────────────────────────────
        // ACCENT COLORS (work in both modes)
        // ─────────────────────────────────────────────────────────────────────
        sage: {
          DEFAULT: '#7D8B7A',  // Primary accent
          light: '#A3B09F',    // Hover states, highlights
          dark: '#5C6659',     // Active states
          muted: 'rgba(125, 139, 122, 0.1)', // Light mode backgrounds
          'muted-dark': 'rgba(125, 139, 122, 0.15)', // Dark mode backgrounds
        },
        terracotta: '#C4A484', // Warm accent (use sparingly)
        moss: '#6B7B6A',       // Alternative accent
      },

      // ═══════════════════════════════════════════════════════════════════════
      // TYPOGRAPHY
      // ═══════════════════════════════════════════════════════════════════════
      fontFamily: {
        sans: ['var(--font-inter)', 'Segoe UI', 'system-ui', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '1.5' }],
        sm: ['14px', { lineHeight: '1.5' }],
        base: ['16px', { lineHeight: '1.7' }],
        lg: ['18px', { lineHeight: '1.6' }],
        xl: ['20px', { lineHeight: '1.5' }],
        '2xl': ['24px', { lineHeight: '1.4' }],
        '3xl': ['30px', { lineHeight: '1.3' }],
        '4xl': ['36px', { lineHeight: '1.2' }],
        '5xl': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6xl': ['60px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '7xl': ['72px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '8xl': ['96px', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        '9xl': ['128px', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.02em',
        wider: '0.05em',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // SPACING
      // ═══════════════════════════════════════════════════════════════════════
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'reading': '680px',
        'narrow': '480px',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // SHADOWS - Light and Dark variants
      // ═══════════════════════════════════════════════════════════════════════
      boxShadow: {
        // Light mode shadows (warm-tinted)
        'soft': '0 1px 3px rgba(45, 42, 38, 0.04), 0 4px 12px rgba(45, 42, 38, 0.03)',
        'medium': '0 2px 8px rgba(45, 42, 38, 0.06), 0 8px 24px rgba(45, 42, 38, 0.04)',
        'elevated': '0 4px 16px rgba(45, 42, 38, 0.08), 0 12px 32px rgba(45, 42, 38, 0.06)',
        'inset': 'inset 0 1px 3px rgba(45, 42, 38, 0.06)',

        // Dark mode shadows (darker, more subtle)
        'soft-dark': '0 1px 3px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15)',
        'medium-dark': '0 2px 8px rgba(0, 0, 0, 0.25), 0 8px 24px rgba(0, 0, 0, 0.2)',
        'elevated-dark': '0 4px 16px rgba(0, 0, 0, 0.3), 0 12px 32px rgba(0, 0, 0, 0.25)',
        'inset-dark': 'inset 0 1px 3px rgba(0, 0, 0, 0.2)',

        // Glow effects
        'glow-sage': '0 0 20px rgba(125, 139, 122, 0.15)',
        'glow-sage-dark': '0 0 20px rgba(125, 139, 122, 0.25)',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // BORDER RADIUS
      // ═══════════════════════════════════════════════════════════════════════
      borderRadius: {
        'sm': '2px',
        'md': '4px',
        'lg': '6px',
        'xl': '8px',
        '2xl': '12px',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // ANIMATIONS
      // ═══════════════════════════════════════════════════════════════════════
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '400ms',
        'slower': '600ms',
      },
      transitionTimingFunction: {
        'ease-out-soft': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-soft': 'cubic-bezier(0.4, 0, 1, 1)',
        'bounce-gentle': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'spring-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up-lg': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'breathe': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        // Premium animations
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(125, 139, 122, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(125, 139, 122, 0.3)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        // Design elevation keyframes
        'mesh-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%, 100% 50%, 50% 0%' },
          '25%': { backgroundPosition: '100% 0%, 0% 100%, 50% 50%' },
          '50%': { backgroundPosition: '50% 100%, 50% 0%, 0% 50%' },
          '75%': { backgroundPosition: '0% 0%, 100% 100%, 100% 50%' },
        },
        'gradient-text': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'particle-drift': {
          '0%': { transform: 'translateY(100vh) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-10vh) translateX(20px)', opacity: '0' },
        },
        'dot-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        'hero-word-enter': {
          '0%': { opacity: '0', transform: 'translateY(40px) rotateX(-20deg)', filter: 'blur(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotateX(0)', filter: 'blur(0)' },
        },
        // Toggle animation
        'toggle-on': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'toggle-off': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 400ms ease-out',
        'fade-up': 'fade-up 400ms ease-out',
        'fade-up-lg': 'fade-up-lg 600ms ease-out',
        'scale-in': 'scale-in 300ms ease-out',
        'breathe': 'breathe 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'mesh-shift': 'mesh-shift 25s ease-in-out infinite',
        'gradient-text': 'gradient-text 6s ease-in-out infinite',
        'particle-drift': 'particle-drift 20s linear infinite',
        'dot-pulse': 'dot-pulse 8s ease-in-out infinite',
        'hero-word-enter': 'hero-word-enter 0.8s cubic-bezier(0.22, 1, 0.36, 1) backwards',
      },

      // ═══════════════════════════════════════════════════════════════════════
      // BACKDROP BLUR
      // ═══════════════════════════════════════════════════════════════════════
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
