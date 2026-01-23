import { PageHeader, Footer, FeedbackForm } from '@/components'

export default function About() {
  return (
    <div>
      <PageHeader
        title="About ANCHOR"
        description="Why this exists and what it's trying to be."
        icon={<InfoIcon />}
      />

      {/* Philosophy */}
      <section className="mb-12">
        <h2 className="heading-section mb-5">The Philosophy</h2>
        <div className="space-y-4 text-clay dark:text-ash leading-relaxed">
          <p>
            This guide exists because sometimes the basics feel impossible.
            When you're overwhelmed, exhausted, or just stuck, the last thing you need
            is another app telling you to optimize your morning routine.
          </p>
          <p>
            We believe in <strong className="text-bark dark:text-parchment">minimum viable self-care</strong>.
            The smallest action that counts. The thing you can actually do when everything feels like too much.
          </p>
          <p>
            One shower. One glass of water. One breath. That's enough.
          </p>
        </div>
      </section>

      {/* What We Do Not Do */}
      <section className="mb-12">
        <h2 className="heading-section mb-5">What We Don't Do</h2>
        <div className="card-glass p-6">
          <ul className="space-y-3 text-clay dark:text-ash">
            <li className="flex items-start gap-3">
              <NoIcon className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
              <span><strong className="text-bark dark:text-parchment">No tracking.</strong> We don't know who you are. We don't store anything about you.</span>
            </li>
            <li className="flex items-start gap-3">
              <NoIcon className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
              <span><strong className="text-bark dark:text-parchment">No accounts.</strong> No login. No signup. No email list.</span>
            </li>
            <li className="flex items-start gap-3">
              <NoIcon className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
              <span><strong className="text-bark dark:text-parchment">No gamification.</strong> No streaks, no badges, no guilt trips about missing days.</span>
            </li>
            <li className="flex items-start gap-3">
              <NoIcon className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
              <span><strong className="text-bark dark:text-parchment">No medical advice.</strong> This is practical information, not diagnosis or treatment.</span>
            </li>
            <li className="flex items-start gap-3">
              <NoIcon className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
              <span><strong className="text-bark dark:text-parchment">No judgment.</strong> Whatever got you here, you're here now. That's what matters.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Our Approach */}
      <section className="mb-12">
        <h2 className="heading-section mb-5">Our Approach</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <ApproachCard
            title="Default to Smallest"
            description="Can't shower? Wash your face. Can't wash your face? Splash water on it. Something beats nothing."
          />
          <ApproachCard
            title="No Failure States"
            description="Missed a day? That's just a day. Start again whenever you're ready. No reset required."
          />
          <ApproachCard
            title="Body First"
            description="Your body affects your mind. Sometimes fixing the physical (water, food, movement) fixes the mental."
          />
          <ApproachCard
            title="One Thing"
            description="Pick one thing. Do that thing. Tomorrow, pick one thing again. That's the whole system."
          />
        </div>
      </section>

      {/* Privacy */}
      <section className="mb-12">
        <h2 className="heading-section mb-5">Privacy</h2>
        <div className="card-glass p-6 border-l-[3px] border-l-sage">
          <p className="text-clay dark:text-ash mb-4">
            This site doesn't use cookies, analytics, or any form of tracking.
            Everything happens in your browser. We literally can't know who you are.
          </p>
          <p className="text-clay dark:text-ash">
            If you save favorites or preferences, they stay on your device in local storage.
            Clear your browser data and they're gone. We never see them.
          </p>
        </div>
      </section>

      {/* Inspiration */}
      <section className="mb-12">
        <h2 className="heading-section mb-5">Inspired By</h2>
        <p className="text-clay dark:text-ash mb-4">
          The content here draws from evidence-based techniques:
        </p>
        <ul className="space-y-2 text-sm text-clay dark:text-ash">
          <li className="flex items-start gap-2">
            <span className="text-sage/60 flex-shrink-0">—</span>
            <span>Box breathing and physiological sighing from neuroscience research</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-sage/60 flex-shrink-0">—</span>
            <span>Grounding techniques from trauma-informed therapy</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-sage/60 flex-shrink-0">—</span>
            <span>Affect labeling from cognitive psychology</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-sage/60 flex-shrink-0">—</span>
            <span>Sleep hygiene from behavioral sleep medicine</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-sage/60 flex-shrink-0">—</span>
            <span>Movement basics from physical therapy principles</span>
          </li>
        </ul>
      </section>

      {/* Feedback */}
      <section className="mb-12">
        <h2 className="heading-section mb-5">Share Feedback</h2>
        <p className="text-clay dark:text-ash mb-6">
          Did this help? Have a suggestion? Let us know (anonymously, of course).
        </p>
        <FeedbackForm />
      </section>

      <Footer>
        You don't need to be productive. You don't need to be optimized.
        You just need to take care of yourself.
      </Footer>
    </div>
  )
}

// Components
function ApproachCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="card-glass p-5">
      <h3 className="font-medium text-bark dark:text-parchment mb-2">{title}</h3>
      <p className="text-sm text-clay dark:text-ash">{description}</p>
    </div>
  )
}

// Icons
function InfoIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function NoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
