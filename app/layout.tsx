import type { Metadata, Viewport } from 'next'
import { Navigation, SiteFooter, ThemeProvider } from '@/components'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF8F5' },
    { media: '(prefers-color-scheme: dark)', color: '#211F1D' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://selfcare-guide.vercel.app'),
  title: {
    default: 'Self-Care Guide',
    template: '%s | Self-Care Guide',
  },
  description: 'Simple instructions for taking care of your body and presence. A calm, practical guide for humans who need clarity, not motivation.',
  keywords: ['self-care', 'wellness', 'breathing exercises', 'mental health', 'mindfulness', 'grounding techniques', 'daily routine', 'posture', 'stress relief'],
  authors: [{ name: 'Self-Care Guide' }],
  creator: 'Self-Care Guide',
  publisher: 'Self-Care Guide',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Self-Care',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/apple-touch-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Self-Care Guide',
    title: 'Self-Care Guide',
    description: 'Simple instructions for taking care of your body and presence. No accounts. No tracking. No pressure.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Self-Care Guide - Simple instructions for taking care of yourself',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Self-Care Guide',
    description: 'Simple instructions for taking care of your body and presence. No accounts. No tracking. No pressure.',
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
      const stored = localStorage.getItem('selfcare-theme');
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Preload fonts for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Inter for body text, Fraunces for headings (distinctive, warm) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-cream dark:bg-night-900 texture-paper transition-colors duration-slow overflow-x-hidden">
        <ThemeProvider>
          <Navigation />

          {/* Main content with page entrance animation */}
          <main id="main-content" className="relative max-w-reading mx-auto px-6 py-10 pb-28 md:pb-12 page-enter">
            {children}
          </main>

          <SiteFooter />

          {/* Subtle gradient fade at bottom */}
          <div className="fixed bottom-0 left-0 right-0 h-20 pointer-events-none gradient-fade-up md:hidden" />
        </ThemeProvider>
      </body>
    </html>
  )
}
