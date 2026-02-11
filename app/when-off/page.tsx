import { Collapsible, InstructionBlock, Footer, PageHeader, ContentDisclaimer, GuideNav } from '@/components'

export default function WhenOff() {
  return (
    <div>
      <PageHeader
        title="When You Feel Off"
        description="Sometimes you know something is wrong but you don't know what to do about it. Find your situation below."
        icon={<CompassIcon />}
      />

      <ContentDisclaimer className="mb-8" />

      {/* Collapsible scenarios */}
      <div className="space-y-4 stagger-children reveal-on-scroll">
        <Collapsible title="If you feel tired" icon={<BatteryIcon />} variant="featured" id="tired">
          <p className="text-clay dark:text-ash mb-4">
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
          <div className="mt-4 pt-4 border-t border-stone-200/50 dark:border-night-600/50">
            <p className="text-sm text-clay dark:text-ash">
              <strong className="text-bark dark:text-parchment">Why tiredness matters:</strong> Fatigue builds up a chemical called adenosine in your brain - it's literally your body's "time to rest" signal. Fighting it with willpower doesn't remove the adenosine. Only rest clears it.
            </p>
          </div>
        </Collapsible>

        <Collapsible title="If you're about to go out" icon={<DoorIcon />} id="going-out">
          <p className="text-clay dark:text-ash mb-4">
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

        <Collapsible title="If you feel stiff" icon={<StretchIcon />} id="stiff">
          <p className="text-clay dark:text-ash mb-4">
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
          <div className="mt-4 pt-4 border-t border-stone-200/50 dark:border-night-600/50">
            <p className="text-sm text-clay dark:text-ash">
              <strong className="text-bark dark:text-parchment">Why movement helps:</strong> Sitting still causes your fascia (connective tissue) to stiffen and your joints to lose lubrication. Movement pumps synovial fluid through your joints and releases tension that accumulates from static positions.
            </p>
          </div>
        </Collapsible>

        <Collapsible title="If you feel unconfident" icon={<ShieldIcon />} id="unconfident">
          <p className="text-clay dark:text-ash mb-4">
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
          <div className="mt-4 pt-4 border-t border-stone-200/50 dark:border-night-600/50">
            <p className="text-sm text-clay dark:text-ash">
              <strong className="text-bark dark:text-parchment">Why posture affects confidence:</strong> This is called embodied cognition - your brain reads your body position to determine how you feel. Expansive postures signal safety. Hunched postures signal threat. Your brain adjusts your state to match your body.
            </p>
          </div>
        </Collapsible>

        <Collapsible title="If you've skipped routines" icon={<RefreshIcon />} id="skipped-routines">
          <p className="text-clay dark:text-ash mb-4">
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

        <Collapsible title="If you can't stop checking" icon={<PhoneIcon />} id="cant-stop-checking">
          <p className="text-clay dark:text-ash mb-4">
            Markets, feeds, notifications. The urge to check is a stress response, not a strategy.
            You're looking for certainty in a place that can't give it.
          </p>
          <InstructionBlock
            steps={[
              "Put your phone face-down or in another room.",
              "Set a specific time to check next (15 min, 1 hour, tomorrow).",
              "Do one physical thing: stand, stretch, walk to get water.",
              "Notice: nothing catastrophic happened while you weren't looking."
            ]}
            closingNote="The market will still be there. You need to still be here too."
          />
          <div className="mt-4 pt-4 border-t border-stone-200/50 dark:border-night-600/50">
            <p className="text-sm text-clay dark:text-ash">
              <strong className="text-bark dark:text-parchment">Why you can't stop:</strong> Intermittent rewards (sometimes good news, sometimes bad) create the strongest compulsion loops - same mechanism as slot machines. Your brain releases dopamine on the anticipation, not the result. Breaking the loop requires physical distance and time boundaries.
            </p>
          </div>
        </Collapsible>

        <Collapsible title="Post-volatility reset" icon={<HeartResetIcon />} id="post-volatility">
          <p className="text-clay dark:text-ash mb-4">
            After big moves - up or down - your nervous system is activated.
            This reset helps you return to baseline.
          </p>
          <InstructionBlock
            steps={[
              "Step away from screens completely. Even 5 minutes.",
              "Do a physiological sigh: deep breath, second quick inhale, long exhale.",
              "Splash cold water on your face to trigger the dive reflex.",
              "Drink a full glass of water.",
              "Ask yourself: What do I actually need to do right now?"
            ]}
            closingNote="Decisions made while activated are usually regretted. Reset first, decide later."
          />
          <div className="mt-4 pt-4 border-t border-stone-200/50 dark:border-night-600/50">
            <p className="text-sm text-clay dark:text-ash">
              <strong className="text-bark dark:text-parchment">Permission granted:</strong> You don't have to watch every candle. You don't have to be first to know. The best traders protect their mental state. Logging off is not missing out - it's risk management for your brain.
            </p>
          </div>
        </Collapsible>
      </div>

      <GuideNav currentIndex={1} />

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
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function BatteryIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h16a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2zM23 10v4M7 10v4" />
    </svg>
  )
}

function DoorIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" />
    </svg>
  )
}

function StretchIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M12 4v16" />
      <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function RefreshIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" />
    </svg>
  )
}

function HeartResetIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  )
}
