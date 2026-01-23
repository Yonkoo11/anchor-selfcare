import { PageHeader, Footer, ContentDisclaimer } from '@/components'

export default function QuickReference() {
  return (
    <div>
      <PageHeader
        title="Quick Reference"
        description="Everything in one place. Bookmark this page for easy access."
        icon={<BookmarkIcon />}
      />

      <ContentDisclaimer className="mb-8" />

      {/* Daily Baseline */}
      <section className="mb-10">
        <h2 className="heading-section mb-4 flex items-center gap-2">
          <CheckIcon className="w-5 h-5 text-sage" />
          Daily Baseline
        </h2>
        <div className="card-glass p-5">
          <ul className="grid gap-3 sm:grid-cols-2">
            <QuickItem emoji="water" text="Shower or bath" />
            <QuickItem emoji="sparkle" text="Wash your face" />
            <QuickItem emoji="shirt" text="Change clothes" />
            <QuickItem emoji="food" text="Eat something" />
            <QuickItem emoji="move" text="Move your body" />
            <QuickItem emoji="sleep" text="Get some rest" />
          </ul>
        </div>
      </section>

      {/* Mind & Calm */}
      <section className="mb-10">
        <h2 className="heading-section mb-4 flex items-center gap-2">
          <MindIcon className="w-5 h-5 text-sage" />
          Mind & Calm
        </h2>
        <div className="space-y-3">
          <QuickCard
            title="Box Breathing"
            steps="In 4 → Hold 4 → Out 4 → Hold 4"
          />
          <QuickCard
            title="4-7-8 Relaxing"
            steps="In 4 → Hold 7 → Out 8"
          />
          <QuickCard
            title="5-4-3-2-1 Grounding"
            steps="5 see → 4 touch → 3 hear → 2 smell → 1 taste"
          />
          <QuickCard
            title="Physiological Sigh"
            steps="Deep breath → Quick second inhale → Slow exhale"
          />
          <QuickCard
            title="Cold Water Reset"
            steps="Cold water on face, especially forehead & cheeks"
          />
        </div>
      </section>

      {/* When You Feel Off */}
      <section className="mb-10">
        <h2 className="heading-section mb-4 flex items-center gap-2">
          <HelpIcon className="w-5 h-5 text-sage" />
          Quick Fixes
        </h2>
        <div className="card-glass p-5">
          <dl className="space-y-4">
            <QuickFix
              condition="Tired"
              action="Sit/lie down, drink water, close eyes 2 min"
            />
            <QuickFix
              condition="Stiff"
              action="Stand up, roll shoulders 3x, bend forward, twist L/R"
            />
            <QuickFix
              condition="Unfocused"
              action="Drink water, 5 min walk, change location"
            />
            <QuickFix
              condition="Anxious"
              action="Box breathing, cold water on face, name the feeling"
            />
            <QuickFix
              condition="Overwhelmed"
              action="One thing at a time. What's the smallest step?"
            />
          </dl>
        </div>
      </section>

      {/* Movement Basics */}
      <section className="mb-10">
        <h2 className="heading-section mb-4 flex items-center gap-2">
          <HeartIcon className="w-5 h-5 text-sage" />
          Movement Basics
        </h2>
        <div className="card-glass p-5">
          <ul className="space-y-3 text-sm text-clay dark:text-ash">
            <li className="flex items-start gap-3">
              <span className="font-medium text-bark dark:text-parchment min-w-[80px]">Posture</span>
              <span>String pulling head up, everything hangs from that point</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-medium text-bark dark:text-parchment min-w-[80px]">Lifting</span>
              <span>Hinge at hips (push butt back), bend knees, straight back</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-medium text-bark dark:text-parchment min-w-[80px]">Balance</span>
              <span>Stand on one foot 10 sec, switch. Do while waiting.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-medium text-bark dark:text-parchment min-w-[80px]">Reset</span>
              <span>Back against wall: heels, butt, shoulders, head touch. Step away.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* The Rules */}
      <section className="mb-10">
        <h2 className="heading-section mb-4">Remember</h2>
        <div className="card-glass p-5 border-l-[3px] border-l-sage">
          <ul className="space-y-2 text-clay dark:text-ash">
            <li className="flex items-start gap-2">
              <span className="text-sage/60">—</span>
              <span>One cycle is enough. You can stop anytime.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sage/60">—</span>
              <span>Pick one thing. Start there.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sage/60">—</span>
              <span>Something is better than nothing.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sage/60">—</span>
              <span>Missing a day isn't failure. It's just a day.</span>
            </li>
          </ul>
        </div>
      </section>

      <Footer>
        Print this page or bookmark it. Come back whenever you need it.
      </Footer>
    </div>
  )
}

// Quick Item Component
function QuickItem({ emoji, text }: { emoji: string; text: string }) {
  const icons: Record<string, React.ReactNode> = {
    water: <span className="text-blue-400">💧</span>,
    sparkle: <span>✨</span>,
    shirt: <span>👕</span>,
    food: <span>🍽️</span>,
    move: <span>🚶</span>,
    sleep: <span>😴</span>,
  }

  return (
    <li className="flex items-center gap-2 text-clay dark:text-ash">
      <span className="w-5 h-5 flex items-center justify-center text-sm">{icons[emoji]}</span>
      <span>{text}</span>
    </li>
  )
}

// Quick Card Component
function QuickCard({ title, steps }: { title: string; steps: string }) {
  return (
    <div className="card-glass p-4 flex items-center justify-between gap-4">
      <span className="font-medium text-bark dark:text-parchment">{title}</span>
      <span className="text-sm text-clay dark:text-ash font-mono">{steps}</span>
    </div>
  )
}

// Quick Fix Component
function QuickFix({ condition, action }: { condition: string; action: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
      <dt className="font-medium text-bark dark:text-parchment min-w-[100px]">{condition}</dt>
      <dd className="text-sm text-clay dark:text-ash">{action}</dd>
    </div>
  )
}

// Icons
function BookmarkIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function MindIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
}

function HelpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}
