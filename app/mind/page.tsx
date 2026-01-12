import { BreathingTimer, Collapsible, InstructionBlock, Footer, PageHeader } from '@/components'

export default function Mind() {
  return (
    <div>
      <PageHeader
        title="Mind & Calm"
        description="Your mind is connected to your body. When thoughts race or feelings overwhelm, start with your breath. These techniques work."
        icon={<MindIcon />}
      />

      {/* Interactive Breathing Timer */}
      <section className="mb-12">
        <h2 className="heading-section mb-5">Guided Breathing</h2>
        <BreathingTimer />
        <p className="text-center text-sm text-dust dark:text-coal mt-4 italic">
          One cycle is enough. You can stop anytime.
        </p>
      </section>

      {/* Quick Reference Techniques */}
      <section>
        <h2 className="heading-section mb-5">Quick Techniques</h2>
        <p className="text-clay dark:text-ash mb-6">
          When you don't have time for guided breathing, try one of these.
        </p>

        {/* Collapsible sections */}
        <div className="space-y-4 stagger-children">
          <Collapsible title="5-4-3-2-1 Grounding" icon={<AnchorIcon />} variant="featured">
          <p className="text-clay dark:text-ash mb-4">
            When your mind is spinning, this pulls you back to the present moment.
            Uses your senses to anchor you to reality.
          </p>
          <InstructionBlock
            steps={[
              "Name 5 things you can SEE right now.",
              "Name 4 things you can TOUCH or feel.",
              "Name 3 things you can HEAR.",
              "Name 2 things you can SMELL.",
              "Name 1 thing you can TASTE."
            ]}
            closingNote="Say them out loud or in your head. Either works."
          />
        </Collapsible>

        <Collapsible title="The Physiological Sigh" icon={<WindIcon />}>
          <p className="text-clay dark:text-ash mb-4">
            The fastest way to calm your nervous system. One breath.
            Discovered by Stanford neuroscientists.
          </p>
          <InstructionBlock
            steps={[
              "Take a deep breath in through your nose.",
              "At the top, take a second quick inhale to fully fill your lungs.",
              "Slowly exhale everything through your mouth.",
              "Done. One cycle is enough."
            ]}
            closingNote="This is what your body does naturally when crying stops. You're triggering calm on purpose."
          />
        </Collapsible>

        <Collapsible title="Cold Water Reset" icon={<DropletIcon />}>
          <p className="text-clay dark:text-ash mb-4">
            Cold water on your face triggers the dive reflex.
            It physically slows your heart rate and calms you down.
          </p>
          <InstructionBlock
            steps={[
              "Get cold water. As cold as you can.",
              "Splash it on your face, especially forehead and cheeks.",
              "Hold a cold, wet cloth to your face for 30 seconds if you can.",
              "Breathe slowly while you do this."
            ]}
            closingNote="This is biology, not willpower. Your body will respond."
          />
        </Collapsible>

        <Collapsible title="Name the Feeling" icon={<TagIcon />}>
          <p className="text-clay dark:text-ash mb-4">
            Naming an emotion reduces its intensity.
            This is called "affect labeling" and it's backed by brain science.
          </p>
          <InstructionBlock
            steps={[
              "Pause. Notice what you're feeling.",
              "Try to name it specifically: anxious, frustrated, overwhelmed, sad, angry.",
              "Say it: 'I notice I'm feeling [X] right now.'",
              "Don't judge it. Just name it."
            ]}
            closingNote="Naming creates distance. Distance creates choice."
          />
        </Collapsible>

        <Collapsible title="The 90-Second Rule" icon={<ClockIcon />}>
          <p className="text-clay dark:text-ash mb-4">
            Strong emotions last about 90 seconds in your body.
            After that, you're choosing to keep them going.
          </p>
          <InstructionBlock
            steps={[
              "When a strong feeling hits, note the time.",
              "Don't fight it. Let it wash through you.",
              "Focus on the physical sensations, not the thoughts.",
              "Wait 90 seconds. Breathe.",
              "Notice: the intensity has shifted."
            ]}
            closingNote="You don't have to act on every feeling. Some just need to pass through."
          />
        </Collapsible>
      </div>
      </section>

      {/* Crisis Resources - Gentle and Non-judgmental */}
      <section className="mt-12">
        <div className="card-glass p-6 border-l-4 border-l-sage">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-sage-muted dark:bg-sage-muted-dark text-sage">
              <HeartHandIcon />
            </span>
            <div>
              <h3 className="font-serif text-lg font-semibold text-bark dark:text-parchment mb-2">
                If You Need More Support
              </h3>
              <p className="text-clay dark:text-ash text-sm mb-4">
                These techniques help with everyday stress. If you're going through something bigger,
                that's okay. Reaching out is a form of self-care too.
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href="https://988lifeline.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sage hover:text-sage-dark transition-colors"
                >
                  <span className="font-medium">988 Suicide & Crisis Lifeline</span>
                  <span className="text-dust dark:text-coal">(US)</span>
                  <ExternalLinkIcon />
                </a>
                <a
                  href="https://www.crisistextline.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sage hover:text-sage-dark transition-colors"
                >
                  <span className="font-medium">Crisis Text Line</span>
                  <span className="text-dust dark:text-coal">Text HOME to 741741</span>
                  <ExternalLinkIcon />
                </a>
                <a
                  href="https://findahelpline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sage hover:text-sage-dark transition-colors"
                >
                  <span className="font-medium">Find A Helpline</span>
                  <span className="text-dust dark:text-coal">(International)</span>
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer>
        Your mind and body are not separate. Calming one calms the other.
        Start with your breath.
      </Footer>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────────────────────────────────────

function MindIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
}

function BoxIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path strokeLinecap="round" d="M4 12h16M12 4v16" strokeOpacity="0.5" />
    </svg>
  )
}

function AnchorIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="5" r="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v14M5 12H2a10 10 0 0020 0h-3" />
    </svg>
  )
}

function WindIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
    </svg>
  )
}

function DropletIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.5c-3.5 0-6.5-2.5-6.5-6.5 0-4 6.5-11 6.5-11s6.5 7 6.5 11c0 4-3 6.5-6.5 6.5z" />
    </svg>
  )
}

function TagIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
    </svg>
  )
}

function HeartHandIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 14H7a4 4 0 01-4-4V7a2 2 0 012-2h2m8 9v7m0-7a2 2 0 012-2h2a2 2 0 012 2v2a4 4 0 01-4 4h-4a4 4 0 01-4-4v-3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12.5 6.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zM10 9c-1.5 0-3 1-3 3m11-3c1.5 0 3 1 3 3" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}
