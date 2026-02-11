import { Collapsible, InstructionBlock, Footer, PageHeader, ContentDisclaimer, GuideNav } from '@/components'

export default function Baseline() {
  return (
    <div>
      <PageHeader
        title="Daily Baseline"
        description="The non-negotiables. The things your body needs every day to function. You don't have to do all of them perfectly."
        icon={<BaselineIcon />}
      />

      <ContentDisclaimer className="mb-8" />

      {/* Collapsible sections with icons */}
      <div className="space-y-4 stagger-children reveal-on-scroll">
        <Collapsible title="Bathing" icon={<DropletIcon />} variant="featured" id="bathing">
          <p className="text-clay mb-4">
            Water resets your body's sense of itself. It's not about being clean for others.
            It's about feeling like you exist in your body.
          </p>
          <InstructionBlock
            steps={[
              "Get in water. Shower or bath, doesn't matter.",
              "Use soap. Anywhere that gets sweaty.",
              "Rinse off.",
              "Dry off."
            ]}
          />
        </Collapsible>

        <Collapsible title="Face" icon={<SparklesIcon />} id="face">
          <p className="text-clay mb-4">
            Your face accumulates the day. Oil, dust, stress.
            Washing it is a small reset button.
          </p>
          <InstructionBlock
            steps={[
              "Wet your face with water.",
              "Use cleanser if you have it. If not, water is fine.",
              "Rinse thoroughly.",
              "Pat dry with a clean towel."
            ]}
          />
        </Collapsible>

        <Collapsible title="Clean Clothes" icon={<ShirtIcon />} id="clean-clothes">
          <p className="text-clay mb-4">
            Fresh fabric changes how you feel. You don't need a full outfit change.
            The basics are enough.
          </p>
          <InstructionBlock
            steps={[
              "Change your underwear.",
              "Change your shirt or top layer.",
              "That's it."
            ]}
            closingNote="Everything else is optional."
          />
        </Collapsible>

        <Collapsible title="Eating" icon={<CoffeeIcon />} id="eating">
          <p className="text-clay dark:text-ash mb-4">
            Your brain needs fuel to function. You don't need a perfect meal.
            You need something in your body.
          </p>
          <InstructionBlock
            steps={[
              "Eat something. Anything.",
              "If you can, include some protein.",
              "Don't overthink it."
            ]}
            closingNote="A snack counts. Food is food."
          />
          <div className="mt-4 pt-4 border-t border-stone-200/50 dark:border-night-600/50">
            <p className="text-sm text-clay dark:text-ash mb-3">
              <strong className="text-bark dark:text-parchment">Why it matters:</strong> Your brain uses 20% of your daily calories despite being only 2% of your body weight. Low blood sugar = poor focus, irritability, and decision fatigue.
            </p>
            <ul className="space-y-2 text-sm text-clay dark:text-ash">
              <li className="flex items-start gap-2">
                <span className="text-sage/60 flex-shrink-0">-</span>
                <span><strong className="text-bark dark:text-parchment">Protein stabilizes energy.</strong> It digests slowly, preventing the crash that comes from sugar alone.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage/60 flex-shrink-0">-</span>
                <span><strong className="text-bark dark:text-parchment">Hunger affects mood.</strong> "Hangry" is real - low glucose makes your brain prioritize survival over rational thinking.</span>
              </li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="Hydration" icon={<WaterGlassIcon />} id="hydration">
          <p className="text-clay dark:text-ash mb-4">
            Most people are mildly dehydrated most of the time.
            Even 1-2% dehydration affects focus and mood.
          </p>
          <InstructionBlock
            steps={[
              "Get a glass of water.",
              "Drink it. All of it.",
              "Do this a few times a day."
            ]}
            closingNote="If you feel thirsty, you're already dehydrated. Don't wait for thirst."
          />
          <div className="mt-4 pt-4 border-t border-stone-200/50 dark:border-night-600/50">
            <p className="text-sm text-clay dark:text-ash mb-3">
              <strong className="text-bark dark:text-parchment">Signs you need water:</strong>
            </p>
            <ul className="space-y-1 text-sm text-clay dark:text-ash">
              <li className="flex items-start gap-2">
                <span className="text-sage/60 flex-shrink-0">-</span>
                <span>Headache or fatigue (often mistaken for hunger)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage/60 flex-shrink-0">-</span>
                <span>Trouble concentrating</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage/60 flex-shrink-0">-</span>
                <span>Dark urine (aim for light yellow)</span>
              </li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="Movement" icon={<ActivityIcon />} id="movement">
          <p className="text-clay mb-4">
            Bodies need to move to feel alive. This isn't exercise.
            This is reminding your body it has limbs.
          </p>
          <InstructionBlock
            steps={[
              "Stand up.",
              "Walk around a little. Even just around the room.",
              "Stretch if you feel like it.",
              "Five minutes counts."
            ]}
          />
        </Collapsible>

        <Collapsible title="Sleep" icon={<MoonIcon />} variant="featured" id="sleep">
          <p className="text-clay dark:text-ash mb-4">
            Everything is harder when you're tired. Sleep isn't lazy.
            Sleep is when your brain takes out the trash - literally. Your brain has a cleaning system
            that flushes out waste while you sleep. It works twice as fast when you're asleep versus awake.
          </p>
          <p className="text-clay dark:text-ash mb-4">
            Sleep debt is real. Your brain keeps a running tab. You can't fully "catch up" on weekends -
            studies show even a week of recovery sleep doesn't restore full cognitive function.
          </p>
          <InstructionBlock
            steps={[
              "Get horizontal.",
              "Close your eyes.",
              "Let go of the day."
            ]}
            closingNote="Rest is not optional. It's maintenance."
          />

          {/* Sleep Hygiene Tips */}
          <div className="mt-6 pt-5 border-t border-stone-200/50 dark:border-night-600/50">
            <p className="text-sm font-medium text-bark dark:text-parchment mb-3">If sleep is hard:</p>
            <ul className="space-y-3 text-sm text-clay dark:text-ash">
              <li className="flex items-start gap-2">
                <span className="text-sage/60 flex-shrink-0">—</span>
                <span><strong className="text-bark dark:text-parchment">Same time, every day.</strong> Even weekends. Your body runs on a 24-hour clock. Irregular sleep confuses it.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage/60 flex-shrink-0">—</span>
                <span><strong className="text-bark dark:text-parchment">Screens off 1-2 hours before bed.</strong> The blue light from your screen tells your brain it's daytime. Your brain won't make the "time to sleep" hormone (melatonin) while it thinks the sun is up.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage/60 flex-shrink-0">—</span>
                <span><strong className="text-bark dark:text-parchment">Cool room, dark room.</strong> Your body temperature drops 1-2 degrees before sleep - that's the signal. A cool room (60-67°F / 16-19°C) helps this happen. Too warm = fragmented sleep.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage/60 flex-shrink-0">—</span>
                <span><strong className="text-bark dark:text-parchment">Caffeine has a long tail.</strong> Half-life is 5-6 hours. That 2pm coffee? Half its caffeine is still in you at 8pm. If you sleep at 10pm, cut caffeine by 2pm at the latest.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage/60 flex-shrink-0">—</span>
                <span><strong className="text-bark dark:text-parchment">Can't sleep after 20 minutes?</strong> Get up. Do something boring in dim light. Lying awake trains your brain that bed = frustration. Break the pattern.</span>
              </li>
            </ul>
          </div>
        </Collapsible>
      </div>

      <GuideNav currentIndex={0} />

      <Footer>
        You don't have to do all of these perfectly. Pick one. Start there.
        Tomorrow is another day.
      </Footer>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────────────────────────────────────

function BaselineIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function DropletIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.5c-3.5 0-6.5-2.5-6.5-6.5 0-4 6.5-11 6.5-11s6.5 7 6.5 11c0 4-3 6.5-6.5 6.5z" />
    </svg>
  )
}

function SparklesIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )
}

function ShirtIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 2L2 6v2l4-2 4 2V6L6 2zM18 2l4 4v2l-4-2-4 2V6l4-4zM4 8v12a2 2 0 002 2h12a2 2 0 002-2V8" />
    </svg>
  )
}

function CoffeeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
    </svg>
  )
}

function ActivityIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  )
}

function WaterGlassIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 2h8l-1 9H9L8 2zM7 11h10v2a5 5 0 01-10 0v-2zM12 18v3" />
    </svg>
  )
}
