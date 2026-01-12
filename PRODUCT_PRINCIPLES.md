# Product Principles - Self-Care Guide

> "Every decision should make a tired, overwhelmed person feel calmer."

---

## Core Philosophy

**We serve "wellness refugees"** - people burned out by apps that track, gamify, and optimize. Our job is to be the opposite.

### The Anti-Wellness Manifesto

| Traditional Wellness Apps | We Do Instead |
|--------------------------|---------------|
| Track everything | Track nothing |
| Streak-based shame | "Missing a day is just a day" |
| Optimize your life | Survive today |
| Community pressure | "No one knows you're here" |
| Gamification | Gentle guidance |
| Data harvesting | Zero tracking by design |

---

## The Five Questions

**Before adding ANY feature, ask:**

### 1. Does this make a tired person feel calmer?
If the feature adds complexity, pressure, or cognitive load - don't build it.

### 2. Does this require tracking or data storage?
If yes, can it be local-only (browser storage)? If it requires syncing or accounts, reject it.

### 3. Would this create shame if not used?
Streaks, reminders, notifications, progress bars - all can create shame. Default to no.

### 4. Is this the simplest possible implementation?
Can it be simpler? Can we remove a field, a step, an option? The best feature is invisible.

### 5. Does this align with "one thing is enough"?
Our core message is permission to do less. Does this feature reinforce or contradict that?

**If any answer is wrong, don't build it.**

---

## Feature Tiers

### Always Free (Core Experience)
- All current content (baseline, when-off, mind, movement)
- Breathing timer (basic patterns)
- Theme toggle (light/dark)
- Quick reference
- Full offline reading

### Premium (Convenience + Customization)
These don't gate core functionality - they add convenience:
- PWA install (home screen, better offline)
- Local-only habit checkboxes
- Custom breathing patterns (create your own)
- Printable PDF guides
- Advanced timer (background audio, custom durations)
- Accessibility pack (dyslexia fonts, high contrast)
- Family/caregiver mode

### Never Build
- User accounts with passwords
- Social features (sharing, comparing)
- AI chatbots or personalization
- Push notifications
- Gamification (points, badges, levels)
- Progress tracking that syncs anywhere
- Analytics that identify individuals

---

## Design Principles

### Visual
- No pure black (#000) or pure white (#FFF)
- Earthy, warm tones (cream, sage, terracotta)
- Generous whitespace (cramped = anxious)
- Typography optimized for tired readers (1.7 line-height)
- Max reading width: 65ch

### Interaction
- Animations feel like breathing, not bouncing
- Everything works without JavaScript (progressive enhancement)
- Mobile-first, but desktop is first-class
- Keyboard navigation always works

### Copy
- Speak like a kind friend, not a therapist or coach
- "You" not "users" or "customers"
- Permission-giving language ("you can stop anytime")
- Never aspirational or motivational
- Assume the reader is exhausted

---

## Revenue Principles

### Pricing
- Accessible pricing ($3-5/mo, $30/yr, $50-75 lifetime)
- Lifetime option for subscription-haters
- Free tier is genuinely complete, not crippled

### What We Won't Do for Money
- Sell user data (we don't have any)
- Add ads or sponsorships that compromise UX
- Create artificial scarcity in free tier
- Use dark patterns to convert
- Make premium feel required

### What We Will Do
- Accept donations (Ko-fi, GitHub Sponsors)
- Charge for genuine additional value
- Pursue ethical B2B contracts (employers, healthcare)
- Apply for mental health grants

---

## Success Metrics

### What We Measure
- Anonymous page views (Plausible, no cookies)
- Voluntary feedback submissions
- Premium conversions (aggregate only)
- Lighthouse/accessibility scores

### What We Don't Measure
- Individual user behavior
- Session duration or "engagement"
- Return visits per user
- A/B test conversion rates on individuals

### True Success
- Someone used it during a hard moment
- Someone felt less alone
- Someone's day was slightly better
- We stayed true to these principles

---

## Decision Log

Track major decisions here for future reference.

| Date | Decision | Rationale |
|------|----------|-----------|
| 2025-01-12 | Ethical Freemium model | Balances sustainability with values |
| 2025-01-12 | No user accounts with passwords | Reduces data liability, aligns with privacy-first |
| 2025-01-12 | Local-only habit tracking | Allows utility without surveillance |
| 2025-01-12 | Plausible over Google Analytics | Privacy-respecting, GDPR-compliant |

---

## Review Schedule

- **Weekly**: Review any new feature ideas against the 5 questions
- **Monthly**: Audit existing features for principle violations
- **Quarterly**: Review these principles - are they still right?

---

*Last updated: January 12, 2025*
