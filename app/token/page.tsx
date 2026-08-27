import type { Metadata } from 'next'
import { PageHeader, Footer, CopyAddress } from '@/components'

const CONTRACT = '0x1A299fd570DFCA4d9822aEe9Ab3D5444E99645cc'
const TOKEN_URL = `https://www.letscash.fun/token/${CONTRACT}`

export const metadata: Metadata = {
  title: 'The Coin',
  description: 'ANCHOR has a token on letscash.fun. The guide stays free, with no wallet, no accounts, and nothing locked behind it.',
  alternates: { canonical: '/token' },
}

export default function Token() {
  return (
    <div>
      <PageHeader
        title="The coin"
        description="ANCHOR has a token now. Here is what it changes for you: nothing."
        icon={<CoinIcon />}
      />

      {/* What happened */}
      <section className="mb-12">
        <h2 className="heading-section mb-5">What happened</h2>
        <div className="space-y-4 text-clay dark:text-ash leading-relaxed">
          <p>
            ANCHOR was launched as a coin on{' '}
            <a
              href={TOKEN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage hover:text-sage-dark underline underline-offset-4 transition-colors duration-fast"
            >
              letscash.fun
            </a>
            , a small launchpad on Robinhood Chain. People can buy it, sell it, or ignore it.
          </p>
          <p>
            That is the entire story. It is a name on a chain, not a company, and it did not change
            a single thing about the guide you came here for.
          </p>
        </div>
      </section>

      {/* What stays the same */}
      <section className="mb-12 reveal-on-scroll section-mood-sage rounded-xl py-8 px-6 -mx-6">
        <h2 className="heading-section mb-5">What stays the same</h2>
        <div className="card-glass p-6">
          <ul className="space-y-3 text-clay dark:text-ash">
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
              <span><strong className="text-bark dark:text-parchment">Everything here is free.</strong> Every page, every timer, every checklist. No premium tier.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
              <span><strong className="text-bark dark:text-parchment">No wallet, ever.</strong> This site never connects to one and never asks you to sign anything.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
              <span><strong className="text-bark dark:text-parchment">Nothing is locked.</strong> No page, feature, or resource depends on holding the coin.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
              <span><strong className="text-bark dark:text-parchment">Still no tracking, still no accounts.</strong> Same as it has always been.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
              <span><strong className="text-bark dark:text-parchment">No pop-ups about it.</strong> This page is the only place the coin is mentioned. You found it on purpose.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Honest warnings */}
      <section className="mb-12">
        <h2 className="heading-section mb-5">Read this before you buy anything</h2>
        <div className="card-glass p-6">
          <ul className="space-y-3 text-clay dark:text-ash">
            <li className="flex items-start gap-3">
              <WarnIcon className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
              <span><strong className="text-bark dark:text-parchment">It is a memecoin.</strong> It is not a share of anything, not a promise of future features, and not an investment.</span>
            </li>
            <li className="flex items-start gap-3">
              <WarnIcon className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
              <span><strong className="text-bark dark:text-parchment">The price can go to zero.</strong> Most coins like this do. Treat any amount you put in as gone.</span>
            </li>
            <li className="flex items-start gap-3">
              <WarnIcon className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
              <span><strong className="text-bark dark:text-parchment">Never use money you need.</strong> Rent, food, medication, and care come first. Always.</span>
            </li>
            <li className="flex items-start gap-3">
              <WarnIcon className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
              <span><strong className="text-bark dark:text-parchment">Copycats exist.</strong> Check the address below character by character. Anything else claiming to be ANCHOR is not.</span>
            </li>
          </ul>
          <p className="mt-5 pt-5 border-t border-stone-200/60 dark:border-night-600/60 text-sm text-dust dark:text-coal">
            None of this is financial advice, and it never will be.
          </p>
        </div>
      </section>

      {/* The address */}
      <section className="mb-12">
        <h2 className="heading-section mb-5">If you want to look</h2>
        <p className="text-clay dark:text-ash leading-relaxed mb-5">
          The contract address on Robinhood Chain:
        </p>

        <CopyAddress address={CONTRACT} />

        <div className="mt-6">
          <a
            href={TOKEN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              px-5 py-2.5
              text-sm font-medium
              text-sage hover:text-sage-dark
              bg-sage-muted/50 hover:bg-sage-muted
              dark:bg-sage-muted-dark/50 dark:hover:bg-sage-muted-dark
              rounded-full
              transition-all duration-fast
              group
            "
          >
            <span>View it on letscash.fun</span>
            <svg
              className="w-4 h-4 transition-transform duration-fast group-hover:translate-x-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </section>

      <Footer nextPage={{ href: '/baseline', label: 'Start with one thing' }}>
        If you came here for the actual help, that part is still the point. The coin is a footnote.
      </Footer>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────

function CoinIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function WarnIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
    </svg>
  )
}
