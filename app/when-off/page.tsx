import { Collapsible, InstructionBlock, Footer, PageHeader } from '@/components'

export default function WhenOff() {
  return (
    <div>
      <PageHeader
        title="When You Feel Off"
        description="Sometimes you know something is wrong but you don't know what to do about it. Find your situation below."
        icon={<CompassIcon />}
      />

      {/* Collapsible scenarios */}
      <div className="space-y-4 stagger-children">
        <Collapsible title="If you feel tired" icon={<BatteryIcon />} variant="featured">
          <p className="text-clay mb-4">
            Tiredness is information, not weakness. Your body is telling you something.
            Listen to it.
          </p>
          <InstructionBlock
            steps={[
              "Sit or lie down somewhere comfortable.",
              "Drink a glass of water.",
              "Close your eyes for two minutes. Just two.",
              "If you're still tired after that, rest more. You probably need it."
            ]}
            closingNote="Rest is not failure. It's maintenance."
          />
        </Collapsible>

        <Collapsible title="If you're about to go out" icon={<DoorIcon />}>
          <p className="text-clay mb-4">
            Transitions are hard. Going from inside to outside takes effort.
            Here's a quick checklist to make it easier.
          </p>
          <InstructionBlock
            steps={[
              "Check your face. Quick wash if needed.",
              "Check your clothes. Clean enough? Good.",
              "Check your essentials: wallet, keys, phone.",
              "Take one slow breath.",
              "Go."
            ]}
            closingNote="You're ready. Don't overthink it."
          />
        </Collapsible>

        <Collapsible title="If you feel stiff" icon={<StretchIcon />}>
          <p className="text-clay mb-4">
            Your body has been in one position too long.
            It needs to remember it can move.
          </p>
          <InstructionBlock
            steps={[
              "Stand up.",
              "Roll your shoulders back slowly, three times.",
              "Bend forward gently. Let your arms hang. Don't force it.",
              "Twist gently to the left. Then the right.",
              "Sit back down."
            ]}
            closingNote="That's it. Do this whenever you notice stiffness."
          />
        </Collapsible>

        <Collapsible title="If you feel unconfident" icon={<ShieldIcon />}>
          <p className="text-clay mb-4">
            Low confidence is usually physical, not mental. Your body affects your mind.
            Start with your body.
          </p>
          <InstructionBlock
            steps={[
              "Stand up straight. Feet shoulder-width apart.",
              "Pull your shoulders back. Not forced, just open.",
              "Take three slow breaths. In through nose, out through mouth.",
              "If you can, splash cold water on your face."
            ]}
            closingNote="Your body is now signaling confidence. Your mind will follow."
          />
        </Collapsible>

        <Collapsible title="If you've skipped routines" icon={<RefreshIcon />}>
          <p className="text-clay mb-4">
            Happens to everyone. This is not a moral failing.
            You just need to restart, not punish yourself.
          </p>
          <InstructionBlock
            steps={[
              "Pick ONE thing from Daily Baseline. Just one.",
              "Do that thing. Nothing else required.",
              "Tomorrow, pick one thing again."
            ]}
            closingNote="Consistency beats intensity. One thing is enough."
          />
        </Collapsible>
      </div>

      <Footer>
        Start with the first step. If that's too much, just notice how you feel.
        That counts too.
      </Footer>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────────────────────────────────────

function CompassIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function BatteryIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h16a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2zM23 10v4M7 10v4" />
    </svg>
  )
}

function DoorIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" />
    </svg>
  )
}

function StretchIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M12 4v16" />
      <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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
