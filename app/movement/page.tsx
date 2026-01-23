import { Collapsible, InstructionBlock, Footer, PageHeader, ContentDisclaimer } from '@/components'

export default function Movement() {
  return (
    <div>
      <PageHeader
        title="Movement & Posture"
        description="Basic body mechanics explained without jargon. Your body already knows how to do most of this. These instructions just remind it."
        icon={<BodyIcon />}
      />

      <ContentDisclaimer className="mb-8" />

      {/* Screen Worker Section */}
      <section className="mb-8">
        <div className="card-glass p-6 border-l-[3px] border-l-terracotta">
          <h2 className="font-medium text-bark dark:text-parchment mb-3">If you work at a screen</h2>
          <p className="text-clay dark:text-ash mb-4">
            Sitting loads your spine 40% more than standing. Slouching makes it worse.
            Your eyes weren't designed for close-up focus for hours. Here's the minimum:
          </p>
          <div className="space-y-3">
            <ScreenTip
              title="20-20-20 Rule"
              description="Every 20 minutes, look at something 20 feet away for 20 seconds. Lets your eye muscles relax."
            />
            <ScreenTip
              title="Movement Snacks"
              description="Stand up once an hour. Roll your shoulders. Walk to get water. Small movements add up."
            />
            <ScreenTip
              title="Blink More"
              description="You blink 66% less when staring at screens. Dry eyes = tired eyes. Blink deliberately."
            />
          </div>
        </div>
      </section>

      {/* Collapsible sections */}
      <div className="space-y-4 stagger-children">
        <Collapsible title="What Good Posture Actually Is" icon={<AlignIcon />} variant="featured">
          <p className="text-clay dark:text-ash mb-4">
            Good posture is not rigid, military, or forced.
            It's stacked. Head over shoulders, shoulders over hips.
          </p>
          <InstructionBlock
            steps={[
              "Imagine a string attached to the top of your head.",
              "Imagine that string gently pulling you upward.",
              "Let everything else hang from that point.",
              "Your shoulders drop naturally. Your chest opens slightly.",
              "That's it. That's good posture."
            ]}
            closingNote="You don't have to hold this perfectly. Just reset when you notice you've collapsed."
          />
          <div className="mt-4 pt-4 border-t border-stone-200/50 dark:border-night-600/50">
            <p className="text-sm text-clay dark:text-ash">
              <strong className="text-bark dark:text-parchment">Why it matters:</strong> When you slouch, your spine handles both compression and shear forces. Sitting upright with a natural curve keeps pressure distributed evenly across your discs.
            </p>
          </div>
        </Collapsible>

        <Collapsible title="How To Reset Your Posture" icon={<RefreshIcon />}>
          <p className="text-clay mb-4">
            A quick way to find neutral posture when you've been slouching.
            Takes ten seconds.
          </p>
          <InstructionBlock
            steps={[
              "Stand with your back against a wall.",
              "Touch the wall with your heels, butt, shoulders, and head.",
              "This might feel exaggerated. That's okay.",
              "Step away from the wall.",
              "Try to keep roughly that alignment."
            ]}
            closingNote="Do this whenever you notice you've been hunched over."
          />
        </Collapsible>

        <Collapsible title="Balance" icon={<BalanceIcon />}>
          <p className="text-clay mb-4">
            Balance keeps you stable and confident. It's simple to practice.
            You can do this while waiting for anything.
          </p>
          <InstructionBlock
            steps={[
              "Stand near a wall or counter, in case you need support.",
              "Lift one foot slightly off the ground.",
              "Hold for ten seconds. It's okay to wobble.",
              "Switch feet.",
              "That's it."
            ]}
            closingNote="When this gets easy, try it with your eyes closed."
          />
        </Collapsible>

        <Collapsible title="Push-Ups (The Basics)" icon={<ArrowUpIcon />}>
          <p className="text-clay mb-4">
            A push-up is just pushing your body away from something.
            Start wherever you need to start.
          </p>
          <InstructionBlock
            steps={[
              "Start easy: hands on a wall, push away and back.",
              "Next level: hands on a counter or sturdy table.",
              "Next: hands on the floor, knees down.",
              "Finally: full push-up, only toes and hands touching ground.",
              "Body stays straight like a plank. Lower until chest almost touches. Push back up."
            ]}
            closingNote="One push-up is better than zero. Start where you are."
          />
        </Collapsible>

        <Collapsible title="Hip Hinge (Why Your Back Hurts)" icon={<PivotIcon />}>
          <p className="text-clay dark:text-ash mb-4">
            Most back pain comes from bending wrong.
            You should bend from your hips, not your spine.
          </p>
          <InstructionBlock
            steps={[
              "Stand with feet hip-width apart.",
              "Push your butt back, like you're closing a car door with it.",
              "Your knees will bend slightly. That's fine.",
              "Your back stays flat, not rounded.",
              "This is how you pick things up without hurting yourself."
            ]}
            closingNote="Practice this with nothing in your hands first. Then use it every time you lift."
          />
          <div className="mt-4 pt-4 border-t border-stone-200/50 dark:border-night-600/50">
            <p className="text-sm text-clay dark:text-ash">
              <strong className="text-bark dark:text-parchment">Why it matters:</strong> Bending with a rounded spine puts shear force on your discs - they're being compressed and pushed forward at the same time. Hinging at the hips keeps the load vertical and distributed.
            </p>
          </div>
        </Collapsible>

        <Collapsible title="Neck & Shoulder Reset" icon={<NeckIcon />}>
          <p className="text-clay dark:text-ash mb-4">
            If you've been staring at a screen, your neck is probably jutting forward and your shoulders are hunched.
            This takes 30 seconds to fix.
          </p>
          <InstructionBlock
            steps={[
              "Drop your shoulders down and back. Let them fall.",
              "Tuck your chin slightly - like you're making a double chin.",
              "Hold for 5 seconds. Release.",
              "Roll your shoulders backward 5 times.",
              "Tilt your head to one side (ear toward shoulder). Hold 10 seconds. Switch."
            ]}
            closingNote="Do this every time you notice tension building. Prevention beats pain."
          />
        </Collapsible>
      </div>

      <Footer nextPage={{ href: '/baseline', label: 'Back to daily basics' }}>
        Your body already knows how to do most of this.
        These instructions just remind it.
      </Footer>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────────────────────────────────────

function BodyIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

function AlignIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function RefreshIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  )
}

function BalanceIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12l9-9 9 9" />
    </svg>
  )
}

function ArrowUpIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  )
}

function PivotIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
      <circle cx="12" cy="19" r="2" fill="currentColor" />
    </svg>
  )
}

function NeckIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="5" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4M8 12h8M10 16l2 4 2-4" />
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Screen Tip Component
// ─────────────────────────────────────────────────────────────────────────────

function ScreenTip({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-terracotta/60 flex-shrink-0 mt-0.5">-</span>
      <div>
        <span className="font-medium text-bark dark:text-parchment">{title}:</span>{' '}
        <span className="text-clay dark:text-ash">{description}</span>
      </div>
    </div>
  )
}
