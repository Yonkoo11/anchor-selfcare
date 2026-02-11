import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { Navigation, SiteFooter, ThemeProvider, ParallaxOrbs, CrisisButton, ThemeToggleCompact, CommandPalette } from '@/components'
import './globals.css'

// Optimized font loading via next/font
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF8F5' },
    { media: '(prefers-color-scheme: dark)', color: '#211F1D' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://yonkoo11.github.io/anchor-selfcare'),
  title: {
    default: 'ANCHOR',
    template: '%s | ANCHOR',
  },
  description: 'Something to hold onto when you\'re drifting. Simple self-care for humans who need grounding, not optimization.',
  keywords: ['self-care', 'wellness', 'breathing exercises', 'mental health', 'mindfulness', 'grounding techniques', 'anchor', 'stress relief'],
  authors: [{ name: 'ANCHOR' }],
  creator: 'ANCHOR',
  publisher: 'ANCHOR',
  manifest: '/anchor-selfcare/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ANCHOR',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ANCHOR',
    title: 'ANCHOR',
    description: 'Something to hold onto when you\'re drifting. No accounts. No tracking. No pressure.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ANCHOR - Something to hold onto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ANCHOR',
    description: 'Something to hold onto when you\'re drifting. No accounts. No tracking. No pressure.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// Script to prevent flash of wrong theme on page load
const themeScript = `
  (function() {
    try {
      const stored = localStorage.getItem('anchor-theme');
      const theme = stored || 'system';
      let resolved = theme;
      if (theme === 'system') {
        resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      document.documentElement.classList.add(resolved);
      document.documentElement.style.colorScheme = resolved;
    } catch (e) {}
  })();
`;

// Service Worker registration for PWA offline support
const swScript = `
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/anchor-selfcare/sw.js').catch(function(err) {
        console.log('SW registration failed:', err);
      });
    });
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Register service worker for offline support */}
        <script dangerouslySetInnerHTML={{ __html: swScript }} />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                name: 'ANCHOR',
                url: 'https://yonkoo11.github.io/anchor-selfcare',
                description: 'Something to hold onto when you\'re drifting. Simple self-care for humans who need grounding.',
                logo: 'https://yonkoo11.github.io/anchor-selfcare/icon-512.png',
              },
              {
                '@type': 'WebSite',
                name: 'ANCHOR',
                url: 'https://yonkoo11.github.io/anchor-selfcare',
                description: 'Simple self-care instructions for tired humans. No accounts. No tracking. No pressure.',
              },
            ],
          }) }}
        />
      </head>
      <body className="font-sans min-h-screen bg-cream dark:bg-night-900 vignette texture-paper transition-colors duration-slow overflow-x-hidden">
        <ThemeProvider>
          {/* Design elevation: mesh gradient background layer */}
          <div className="mesh-gradient" aria-hidden="true" />

          {/* CSS-only floating particles */}
          <div className="particles" aria-hidden="true">
            <span className="particle" style={{ '--x': '10%', '--speed': '22s', '--delay': '0s', '--drift': '15px' } as React.CSSProperties} />
            <span className="particle" style={{ '--x': '25%', '--speed': '18s', '--delay': '3s', '--drift': '-20px' } as React.CSSProperties} />
            <span className="particle" style={{ '--x': '40%', '--speed': '25s', '--delay': '7s', '--drift': '25px' } as React.CSSProperties} />
            <span className="particle" style={{ '--x': '55%', '--speed': '20s', '--delay': '2s', '--drift': '-15px' } as React.CSSProperties} />
            <span className="particle" style={{ '--x': '70%', '--speed': '23s', '--delay': '5s', '--drift': '10px' } as React.CSSProperties} />
            <span className="particle" style={{ '--x': '85%', '--speed': '19s', '--delay': '8s', '--drift': '-25px' } as React.CSSProperties} />
            <span className="particle" style={{ '--x': '15%', '--speed': '26s', '--delay': '4s', '--drift': '20px' } as React.CSSProperties} />
            <span className="particle" style={{ '--x': '60%', '--speed': '21s', '--delay': '6s', '--drift': '-10px' } as React.CSSProperties} />
          </div>

          {/* Ambient floating orbs */}
          <ParallaxOrbs />

          <Navigation />
          <CommandPalette />
          <CrisisButton />

          {/* Mobile-only theme toggle */}
          <div className="md:hidden fixed top-3 right-3 z-50">
            <ThemeToggleCompact />
          </div>

          {/* Main content with page entrance animation */}
          <main id="main-content" className="relative z-10 max-w-reading mx-auto px-6 py-10 pb-28 md:pb-12 page-enter">
            {children}
          </main>

          <SiteFooter />

          {/* Grain overlay - analog texture */}
          <div className="grain-overlay" aria-hidden="true" />

          {/* Subtle gradient fade at bottom */}
          <div className="fixed bottom-0 left-0 right-0 h-20 pointer-events-none gradient-fade-up md:hidden" />
        </ThemeProvider>
      </body>
    </html>
  )
}
