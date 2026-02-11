import { Collapsible, InstructionBlock, Footer, PageHeader, ContentDisclaimer, Contraindication, GuideNav } from '@/components'

export default function Movement() {
  return (
    <div>
      <PageHeader
        title="Movement & Body"
        description="Body mechanics and training, explained without jargon. Start where you are. Do what you can."
        icon={<BodyIcon />}
      />

      <ContentDisclaimer className="mb-8" />

      {/* ═══════════════════════════════════════════════════════════════════════
          PART 1: BODY MECHANICS
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="mb-14">
        <div className="mb-6">
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-bark dark:text-parchment mb-1">
            Body Mechanics
          </h2>
          <p className="text-sm text-clay dark:text-ash">
            How your body works. No gym required.
          </p>
        </div>

        {/* Screen Worker Section */}
        <div className="mb-4" id="screen-worker">
          <div className="card-glass p-6 border-l-[3px] border-l-terracotta">
            <h3 className="font-medium text-bark dark:text-parchment mb-3">If you work at a screen</h3>
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
        </div>

        {/* Body Mechanics Collapsibles */}
        <div className="space-y-4 stagger-children reveal-on-scroll">
          <Collapsible title="What Good Posture Actually Is" icon={<AlignIcon />} variant="featured" id="good-posture">
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

          <Collapsible title="How To Reset Your Posture" icon={<RefreshIcon />} id="reset-posture">
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

          <Collapsible title="Balance" icon={<BalanceIcon />} id="balance">
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

          <Collapsible title="Push-Ups (The Basics)" icon={<ArrowUpIcon />} id="push-ups">
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

          <Collapsible title="Hip Hinge (Why Your Back Hurts)" icon={<PivotIcon />} id="hip-hinge">
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

          <Collapsible title="Neck & Shoulder Reset" icon={<NeckIcon />} id="neck-reset">
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
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PART 2: TRAINING
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="mb-8 section-mood-sage rounded-xl py-8 px-6 -mx-6">
        <div className="mb-6">
          <div className="divider-gradient mb-8" />
          <h2 className="font-serif text-xl sm:text-2xl font-semibold text-bark dark:text-parchment mb-1">
            Training
          </h2>
          <p className="text-sm text-clay dark:text-ash">
            The minimum effective exercise. Start where you are.
          </p>
        </div>

        <div className="space-y-4 stagger-children reveal-on-scroll">
          {/* The 5-Minute Minimum - Featured */}
          <Collapsible title="The 5-Minute Minimum" icon={<TimerIcon />} variant="featured" id="five-min">
            <p className="text-clay dark:text-ash mb-4">
              The absolute least you can do that still counts. For days when "real exercise" feels impossible.
            </p>
            <InstructionBlock
              steps={[
                "10 squats. Stand up, sit down. That's a squat.",
                "10 push-ups (wall, counter, or floor - wherever you are).",
                "30-second plank. Hands or elbows, doesn't matter.",
                "Done. That's it. You exercised today."
              ]}
              closingNote="Five minutes beats zero minutes. Every time."
            />
            <div className="mt-4 pt-4 border-t border-stone-200/50 dark:border-night-600/50">
              <p className="text-sm text-clay dark:text-ash">
                <strong className="text-bark dark:text-parchment">Why it works:</strong> Short bursts of exercise trigger the same hormonal cascade as longer sessions - endorphins, serotonin, BDNF (brain fertilizer). The hardest part is starting. Five minutes removes the excuse.
              </p>
            </div>
          </Collapsible>

          {/* Bodyweight Circuit */}
          <Collapsible title="Bodyweight Circuit" icon={<CircuitIcon />} id="bodyweight">
            <p className="text-clay dark:text-ash mb-4">
              A 15-minute no-equipment routine. The 5 fundamental human movements.
            </p>
            <InstructionBlock
              steps={[
                "Squats: 10 reps. Feet shoulder-width, push butt back, chest up.",
                "Push-ups: 10 reps. Wall, counter, knees, or floor.",
                "Rows: 10 reps. Use a towel over a door handle. Lean back, pull yourself in.",
                "Lunges: 5 each leg. Step forward, lower until both knees are at 90 degrees.",
                "Plank: 30 seconds. Straight line from head to heels.",
                "Rest 60 seconds. Repeat 2-3 times if you want."
              ]}
              closingNote="This covers push, pull, squat, hinge, and hold. That's the whole body."
            />
            <div className="mt-4 pt-4 border-t border-stone-200/50 dark:border-night-600/50">
              <p className="text-sm text-clay dark:text-ash">
                <strong className="text-bark dark:text-parchment">Why it works:</strong> These 5 movement patterns cover every major muscle group. Progressive overload (doing more reps or harder versions over time) is how your body adapts and gets stronger.
              </p>
            </div>
          </Collapsible>

          {/* Stretching Routine */}
          <Collapsible title="Stretching Routine" icon={<StretchIcon />} id="stretching">
            <p className="text-clay dark:text-ash mb-4">
              Full body, hold each stretch 30 seconds. Good for morning or before bed.
            </p>
            <InstructionBlock
              steps={[
                "Neck: Tilt ear to shoulder. 30 seconds each side.",
                "Shoulders: Arm across chest, hold with other hand. 30 seconds each.",
                "Chest: Hands behind back, push chest forward. 30 seconds.",
                "Hamstrings: Sit on floor, reach for toes. Don't bounce. 30 seconds.",
                "Hip flexors: Lunge position, push hips forward gently. 30 seconds each side.",
                "Calves: Wall push-up position, one foot back, heel down. 30 seconds each."
              ]}
              closingNote="Stretching should feel like a pull, not pain. If it hurts, back off."
            />
            <div className="mt-4 pt-4 border-t border-stone-200/50 dark:border-night-600/50">
              <p className="text-sm text-clay dark:text-ash">
                <strong className="text-bark dark:text-parchment">Why it works:</strong> Static stretching increases flexibility by teaching your nervous system that it's safe to lengthen the muscle. Hold for 30+ seconds to get past the stretch reflex.
              </p>
            </div>
          </Collapsible>

          {/* Core */}
          <Collapsible title="Core (3 Exercises)" icon={<CoreIcon />} id="core">
            <p className="text-clay dark:text-ash mb-4">
              Three exercises. That's the whole core program. No crunches.
            </p>
            <InstructionBlock
              steps={[
                "Dead Bug: Lie on your back. Arms up, knees up at 90 degrees. Lower opposite arm and leg slowly. 5 each side.",
                "Plank: Hold yourself straight. Start with 20 seconds. Work up to 60.",
                "Bird Dog: On hands and knees. Extend opposite arm and leg. Hold 5 seconds. 5 each side."
              ]}
              closingNote="Your core is not your abs. It's the whole cylinder around your spine. These three exercises train all of it."
            />
            <div className="mt-4 pt-4 border-t border-stone-200/50 dark:border-night-600/50">
              <p className="text-sm text-clay dark:text-ash">
                <strong className="text-bark dark:text-parchment">Why it works:</strong> Crunches only train flexion. Your core's real job is anti-movement - keeping your spine stable while your limbs move. These exercises train exactly that.
              </p>
            </div>
          </Collapsible>

          {/* Walking */}
          <Collapsible title="Walking" icon={<WalkingIcon />} id="walking">
            <p className="text-clay dark:text-ash mb-4">
              The most underrated exercise. How to make it count.
            </p>
            <InstructionBlock
              steps={[
                "Put on shoes. Go outside.",
                "Walk for 10 minutes in any direction.",
                "Turn around. Walk back.",
                "That's a 20-minute walk. That's exercise."
              ]}
              closingNote="A 20-minute daily walk reduces all-cause mortality by 30%. Nothing else in medicine comes close to that ratio of effort to benefit."
            />
            <div className="mt-4 pt-4 border-t border-stone-200/50 dark:border-night-600/50">
              <p className="text-sm text-clay dark:text-ash">
                <strong className="text-bark dark:text-parchment">Why it works:</strong> Walking is the exercise your body was designed for. It improves cardiovascular health, clears brain fog (increases blood flow to the prefrontal cortex by 15%), reduces cortisol, and strengthens bones through impact loading.
              </p>
            </div>
          </Collapsible>

          {/* Gym Starter */}
          <Collapsible title="Gym Starter" icon={<GymIcon />} id="gym-starter">
            <p className="text-clay dark:text-ash mb-4">
              If you have gym access, here are the only 5 movements that matter. No bro splits.
            </p>
            <InstructionBlock
              steps={[
                "Squat or Leg Press: Your legs are your foundation.",
                "Bench Press or Push-ups: Push something heavy away from you.",
                "Row or Pull-down: Pull something heavy toward you.",
                "Deadlift or Hip Hinge: Pick something heavy up.",
                "Overhead Press: Push something heavy above you."
              ]}
              closingNote="Do these 5 movements, 2-3 times a week. Add weight slowly. That's the whole program. Everything else is optional."
            />
            <Contraindication
              warnings={[
                "If you've never done these movements, learn them with light weight or bodyweight first. Form matters more than weight. Consider one session with a trainer to learn the basics."
              ]}
              className="mt-4"
            />
            <div className="mt-4 pt-4 border-t border-stone-200/50 dark:border-night-600/50">
              <p className="text-sm text-clay dark:text-ash">
                <strong className="text-bark dark:text-parchment">Why it works:</strong> These compound movements work multiple muscle groups simultaneously. A beginner doing 3 sets of 8-12 reps of each, twice a week, will see more progress than someone doing 20 isolation exercises. Simplicity is the point.
              </p>
            </div>
          </Collapsible>
        </div>
      </section>

      <GuideNav currentIndex={3} />

      <Footer>
        Your body already knows how to do most of this.
        These instructions just remind it.
      </Footer>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Icons - Body Mechanics
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
// Icons - Training
// ─────────────────────────────────────────────────────────────────────────────

function TimerIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="13" r="8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4l2 2M10 2h4" />
    </svg>
  )
}

function CircuitIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h4v4H4zM16 4h4v4h-4zM10 16h4v4h-4zM6 8v4a4 4 0 004 4M18 8v4a4 4 0 01-4 4" />
    </svg>
  )
}

function StretchIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h4m8 0h4M12 4v4m0 8v4M7.05 7.05l2.83 2.83m4.24 4.24l2.83 2.83M7.05 16.95l2.83-2.83m4.24-4.24l2.83-2.83" />
    </svg>
  )
}

function CoreIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="8" />
    </svg>
  )
}

function WalkingIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="13" cy="4" r="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l-2 6 3 3 2 5M11 12l-3 3-2 5" />
    </svg>
  )
}

function GymIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 7v10M18 7v10M2 9v6M22 9v6M6 12h12" />
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
