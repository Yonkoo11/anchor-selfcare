import { Collapsible, InstructionBlock, Footer, PageHeader } from '@/components'

export default function Movement() {
  return (
    <div>
      <PageHeader
        title="Movement & Posture"
        description="Basic body mechanics explained without jargon. Your body already knows how to do most of this. These instructions just remind it."
        icon={<BodyIcon />}
      />

      {/* Collapsible sections */}
      <div className="space-y-4 stagger-children">
        <Collapsible title="What Good Posture Actually Is" icon={<AlignIcon />} variant="featured">
          <p className="text-clay mb-4">
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
          <p className="text-clay mb-4">
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
        </Collapsible>
      </div>

      <Footer>
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
