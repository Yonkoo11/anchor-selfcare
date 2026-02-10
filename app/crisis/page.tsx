import { PageHeader, Footer } from '@/components'
import Link from 'next/link'

export default function Crisis() {
  return (
    <div>
      <PageHeader
        title="Right Now"
        description="Pick one. Just one. That's enough."
        icon={<AnchorIcon />}
      />

      {/* Immediate Actions - Large tap targets */}
      <section className="mb-10">
        <div className="grid gap-4">
          <ActionCard
            icon={<BreathIcon />}
            title="Breathe"
            action="In 4... Hold 4... Out 4..."
            href="/mind"
            color="sage"
          />
          <ActionCard
            icon={<WaterIcon />}
            title="Drink Water"
            action="Get a glass. Drink it slowly."
            color="blue"
          />
          <ActionCard
            icon={<SplashIcon />}
            title="Cold Water on Face"
            action="Activates your calm reflex."
            color="terracotta"
          />
          <ActionCard
            icon={<StandIcon />}
            title="Stand Up & Stretch"
            action="Arms up. Reach. Release."
            color="moss"
          />
          <ActionCard
            icon={<GroundIcon />}
            title="Feel Your Feet"
            action="Press them into the floor. You're here."
            color="bark"
          />
        </div>
      </section>

      {/* Grounding - 5-4-3-2-1 */}
      <section className="mb-10 reveal-on-scroll">
        <h2 className="text-sm font-medium text-clay dark:text-ash mb-3 uppercase tracking-wide">If you need grounding</h2>
        <div className="card-glass p-6">
          <p className="text-bark dark:text-parchment font-medium mb-4">Name what you notice:</p>
          <div className="space-y-3 text-clay dark:text-ash">
            <GroundingStep number="5" sense="things you see" />
            <GroundingStep number="4" sense="things you can touch" />
            <GroundingStep number="3" sense="things you hear" />
            <GroundingStep number="2" sense="things you smell" />
            <GroundingStep number="1" sense="thing you taste" />
          </div>
        </div>
      </section>

      {/* Permission */}
      <section className="mb-10 reveal-on-scroll">
        <div className="card-glass p-6 border-l-[3px] border-l-sage bg-sage/5">
          <p className="text-bark dark:text-parchment font-medium mb-2">Remember:</p>
          <ul className="space-y-2 text-clay dark:text-ash">
            <li className="flex items-start gap-2">
              <span className="text-sage">-</span>
              <span>You don't have to fix everything right now.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sage">-</span>
              <span>One breath counts. One sip counts.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sage">-</span>
              <span>This feeling will pass. They always do.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Crisis Resources */}
      <section className="mb-10 reveal-on-scroll">
        <h2 className="text-sm font-medium text-clay dark:text-ash mb-3 uppercase tracking-wide">If you need more support</h2>
        <div className="card-glass p-5 space-y-3">
          <CrisisLink
            name="988 Suicide & Crisis Lifeline"
            action="Call or text 988"
            region="US"
          />
          <CrisisLink
            name="Crisis Text Line"
            action="Text HOME to 741741"
            region="US"
          />
          <CrisisLink
            name="Samaritans"
            action="Call 116 123"
            region="UK"
          />
          <p className="text-xs text-clay/60 dark:text-ash/60 pt-2">
            These are free, confidential services available 24/7.
          </p>
        </div>
      </section>

      <Footer nextPage={{ href: '/mind', label: 'Try breathing exercises' }}>
        You found this page. That took effort. You're doing better than you think.
      </Footer>
    </div>
  )
}

// Action Card Component - Large tap targets
function ActionCard({
  icon,
  title,
  action,
  href,
  color
}: {
  icon: React.ReactNode
  title: string
  action: string
  href?: string
  color: 'sage' | 'blue' | 'terracotta' | 'moss' | 'bark'
}) {
  const colorClasses = {
    sage: 'border-l-sage bg-sage/5 hover:bg-sage/10',
    blue: 'border-l-blue-400 bg-blue-50/50 dark:bg-blue-900/10 hover:bg-blue-50 dark:hover:bg-blue-900/20',
    terracotta: 'border-l-terracotta bg-terracotta/5 hover:bg-terracotta/10',
    moss: 'border-l-moss bg-moss/5 hover:bg-moss/10',
    bark: 'border-l-bark/50 dark:border-l-parchment/50 bg-bark/5 dark:bg-parchment/5 hover:bg-bark/10 dark:hover:bg-parchment/10',
  }

  const content = (
    <div className={`card-glass p-5 border-l-[4px] ${colorClasses[color]} transition-colors cursor-pointer`}>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center text-bark dark:text-parchment">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-bark dark:text-parchment text-lg">{title}</h3>
          <p className="text-sm text-clay dark:text-ash">{action}</p>
        </div>
      </div>
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}

// Grounding Step
function GroundingStep({ number, sense }: { number: string; sense: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center text-sm font-medium text-sage">
        {number}
      </span>
      <span>{sense}</span>
    </div>
  )
}

// Crisis Link
function CrisisLink({ name, action, region }: { name: string; action: string; region: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="font-medium text-bark dark:text-parchment text-sm">{name}</p>
        <p className="text-sm text-clay dark:text-ash">{action}</p>
      </div>
      <span className="text-xs text-clay/60 dark:text-ash/60 bg-stone-100 dark:bg-night-700 px-2 py-1 rounded">
        {region}
      </span>
    </div>
  )
}

// Icons
function AnchorIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a2 2 0 100 4 2 2 0 000-4zM12 6v14m0 0l-4-2m4 2l4-2M5 12a7 7 0 1114 0" />
    </svg>
  )
}

function BreathIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
    </svg>
  )
}

function WaterIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.5c-3.5 0-6.5-2.5-6.5-6.5 0-4 6.5-11 6.5-11s6.5 7 6.5 11c0 4-3 6.5-6.5 6.5z" />
    </svg>
  )
}

function SplashIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16.5c-1.5 0-3-1-3-2.5s1.5-2.5 3-2.5c.5-2.5 2.5-4.5 5-4.5s4.5 2 5 4.5c1.5 0 3 1 3 2.5s-1.5 2.5-3 2.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v6m-2-2l2 2 2-2" />
    </svg>
  )
}

function StandIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a2 2 0 100 4 2 2 0 000-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v4m0 0l-3 8m3-8l3 8m-6-4h6" />
    </svg>
  )
}

function GroundIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z" />
    </svg>
  )
}
