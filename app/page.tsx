import { ArrowRight, Check, Plane, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import CookieBanner from "./components/CookieBanner";
import LeadCaptureForm from "./components/LeadCaptureForm";

const rights = [
  {
    title: "UK/EU 261 applies",
    description:
      "If you landed 3+ hours late and departed from or arrived in the UK/EU on a UK/EU carrier, the airline owes you cash, not vouchers.",
    payout: "£220 – £520 per traveller",
  },
  {
    title: "It’s not the weather",
    description:
      "Airlines love to blame ‘extraordinary circumstances’. We monitor CAA rulings to push back when that line doesn’t hold up.",
    payout: "Most denials get overturned",
  },
  {
    title: "Two years to file",
    description:
      "UK passengers have up to 6 years in England/Wales (2 in Scotland) to submit a claim. Translation: don’t leave free money on the runway.",
    payout: "Retro claims welcome",
  },
];

const steps = [
  {
    title: "Log the basics",
    detail:
      "Flight number, booking reference, departure + arrival airports, and actual arrival time. Screenshots from your airline app work fine.",
  },
  {
    title: "Plug into a claims partner",
    detail:
      "We’ll shortlist vetted partners (AirHelp, Skycop, Flightright) based on route and airline. You keep 70%+ of the payout after their cut.",
  },
  {
    title: "Stay hands-off",
    detail:
      "They chase the airline, send legal notices if needed, and wire you the cash. You’ll only step in to sign authority forms.",
  },
];

const faqs = [
  {
    question: "Can I claim if I was flying with a US or Middle East carrier?",
    answer:
      "Yes, if the flight departed from the UK or EU. Arrivals into the UK/EU only qualify when you flew with a UK/EU-based airline.",
  },
  {
    question: "Does the delay need to be the airline’s fault?",
    answer:
      "It needs to be within their control: crew shortages, tech faults, missed rotations. Weather, ATC strikes, or bird strikes generally don’t qualify.",
  },
  {
    question: "How long do airlines take to pay?",
    answer:
      "DIY claims can drag for months. Partner-led claims average 6–10 weeks, faster if the airline settles without court action.",
  },
  {
    question: "What fees do partners charge?",
    answer:
      "20–35% plus VAT only on success. No win, no fee. We flag the exact cut and any admin costs before you click through.",
  },
];

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden pb-24">
        <div className="pointer-events-none absolute inset-x-0 top-[-120px] z-0 h-[400px] bg-gradient-to-b from-[#08274a] to-transparent opacity-90" />
        <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 px-6 pt-16 md:px-8 lg:px-10">
          {/* Hero */}
          <section className="section-card relative overflow-hidden bg-white/90 p-10 md:flex md:items-center md:gap-12">
            <div className="absolute inset-0 z-0 opacity-30" aria-hidden>
              <div className="h-full w-full bg-gradient-to-br from-[#031633] via-[#0f2654] to-[#13315c]" />
            </div>
            <div className="relative z-10 flex flex-1 flex-col gap-6 text-white">
              <span className="section-pill border-white/50 bg-white/20 text-white">
                <Sparkles className="h-4 w-4" />
                No-nonsense help for delayed flights
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Delayed flight? Claim what you’re owed in under 10 minutes.
              </h1>
              <p className="max-w-2xl text-lg text-slate-100">
                MyFlightGotDelayed.com translates UK/EU261 rules into plain English, surfaces vetted claim partners, and ships a checklist so you never miss supporting evidence.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#partners"
                  className="inline-flex items-center justify-center rounded-full bg-[#f8ba3c] px-6 py-3 text-base font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-[#f28705]"
                >
                  Check my compensation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#checklist"
                  className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Download the checklist
                </Link>
              </div>
              <div className="mt-2 flex flex-wrap gap-6 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> Covered by UK Civil Aviation Authority
                </div>
                <div className="flex items-center gap-2">
                  <Plane className="h-4 w-4" /> Eligible delays: 3h+ arrival / cancellations / downgrades
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-10 flex flex-col gap-6 rounded-3xl bg-white/95 p-6 text-slate-900 shadow-2xl md:mt-0 md:w-80">
              <p className="text-sm font-semibold text-slate-500">Average payouts we’re seeing right now</p>
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Short-haul (under 1,500 km)</p>
                  <p className="text-3xl font-semibold">£220</p>
                  <p className="text-xs text-slate-500">per passenger</p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Medium-haul (1,500–3,500 km)</p>
                  <p className="text-3xl font-semibold">£350</p>
                  <p className="text-xs text-slate-500">per passenger</p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Long-haul (3,500+ km)</p>
                  <p className="text-3xl font-semibold">£520</p>
                  <p className="text-xs text-slate-500">per passenger</p>
                </div>
              </div>
              <p className="text-xs text-slate-500">Source: partner dashboards Feb–Mar 2026.</p>
            </div>
          </section>

          {/* Rights */}
          <section id="rights" className="section-card">
            <div className="section-pill">Know your rights in 90 seconds</div>
            <h2 className="section-heading mt-4">
              UK & EU passenger rules without the legal jargon.
            </h2>
            <p className="section-subheading">
              We distil hundreds of CAA rulings, ECJ cases, and airline excuses into three straight-talking checkpoints. Tick them off, then decide whether to DIY or hand off.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {rights.map((item) => (
                <article key={item.title} className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  <p className="mt-4 text-sm font-semibold text-slate-900">{item.payout}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Steps */}
          <section id="partners" className="section-card">
            <div className="section-pill">How we keep it low-effort</div>
            <h2 className="section-heading mt-4">Your claim flightpath.</h2>
            <p className="section-subheading">All-in, you’ll spend about 10 minutes gathering basics, then our recommended partners take the baton.</p>
            <div className="mt-10 space-y-6">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-5 rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-lg font-semibold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-dashed border-slate-200 bg-slate-50/70 p-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-base font-semibold text-slate-900">Preferred partners (April 2026):</p>
                <p>AirHelp · Skycop · Flightright · Bott & Co (UK legal) · InsureMyTrip (policy add-ons)</p>
              </div>
              <Link
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
                href="https://airhelp.tpo.li/fVUdhi1z"
                target="_blank"
                rel="noreferrer"
              >
                View partner criteria <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* Checklist & newsletter */}
          <section id="checklist" className="section-card grid gap-10 md:grid-cols-2">
            <div>
              <div className="section-pill">Delay compensation checklist</div>
              <h2 className="section-heading mt-4">
                Free one-pager: the evidence airlines actually accept.
              </h2>
              <p className="section-subheading">
                Pop in an email and we’ll auto-send the PDF (plus an editable Notion version) so you can save screenshots, receipts, and timelines in one place.
              </p>
              <LeadCaptureForm />
              <p className="mt-3 text-xs text-slate-500">
                No spam. One follow-up email with affiliate links so you can pick a partner. Unsubscribe any time.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Automation ideas</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-green-600" />
                  Forward airline emails to a dedicated inbox so Zapier can archive PDFs into Notion.
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-green-600" />
                  Subscribe to Heathrow / NATS RSS feeds via Mailbrew for real-time ATC disruption logs.
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-green-600" />
                  Calendar reminder 6 weeks after filing—if there’s silence, escalate to the ADR scheme listed in your airline’s T&Cs.
                </li>
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-card">
            <div className="section-pill">FAQs</div>
            <h2 className="section-heading mt-4">Questions UK travellers ask most.</h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-100 bg-white/90 p-5"
                  open={faq.question === faqs[0].question}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-slate-900">
                    {faq.question}
                    <span className="ml-4 text-xs font-medium text-slate-400 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="mb-10 text-center text-xs text-slate-500">
            <p>© {new Date().getFullYear()} MyFlightGotDelayed.com · Built in London · Affiliate links disclosed where used.</p>
            <p className="mt-2">GA4 & Plausible hooks ready — drop your IDs when you’re set.</p>
          </footer>
        </main>
      </div>
      <CookieBanner />
    </>
  );
}
