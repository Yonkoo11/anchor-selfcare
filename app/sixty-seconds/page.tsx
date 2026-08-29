import type { Metadata } from 'next'
import { PageHeader, Footer, SixtySeconds } from '@/components'

export const metadata: Metadata = {
  title: 'Sixty Seconds',
  description: 'A one minute reset that runs itself. No menus, no choosing, no reading. Breathe, stand, water, look away.',
  alternates: { canonical: '/sixty-seconds' },
}

export default function SixtySecondsPage() {
  return (
    <div>
      <PageHeader
        title="Sixty seconds"
        description="Everything else here asks you to pick something. This does not."
        icon={<ClockIcon />}
      />

      <SixtySeconds />

      <section className="mt-10">
        <div className="card-glass p-6">
          <p className="text-clay dark:text-ash leading-relaxed">
            Four things in one minute: two slow breaths, stand up, a sip of water, and let your
            eyes look at something further away than a screen. None of it is impressive. That is
            the point.
          </p>
          <p className="mt-4 text-clay dark:text-ash leading-relaxed">
            It runs offline once the page has loaded, so it still works with the plane mode on.
            Nothing is stored and nothing is counted, so stopping halfway costs you nothing.
          </p>
        </div>
      </section>

      <Footer nextPage={{ href: '/baseline', label: 'Start with one thing' }}>
        If a minute is too much today, close the tab. That is allowed too.
      </Footer>
    </div>
  )
}

function ClockIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
