import Link from 'next/link';
import { HelpCircle, Check, Layers, Lock, Zap, Link2 } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata = {
  title: 'Pricing — OutcomeCatalyst',
  description: 'Simple, outcome-based pricing. Start with one workflow and expand as value is proven.',
};

const faqItems = [
  {
    question: 'What determines pricing for a project?',
    answer: [
      'Pricing is based on:',
      { bullets: [
        'the number of workflows deployed',
        'the systems and data sources connected',
        'how broadly the solution is used across your team, portfolio, or facilities',
      ]},
      'Most clients start with a single workflow and expand once value is proven.',
    ],
  },
  {
    question: 'How does onboarding to the platform work?',
    answer: [
      "We connect directly to the systems you already use and deploy your first workflow. There's no rip-and-replace and no long discovery phase.",
      'Most teams are live with a working output in ~30 days.',
    ],
  },
  {
    question: "What's included in managed platform support?",
    answer: [
      { bullets: [
        'Data governance and monitoring',
        'Workflow automation and maintenance',
        'Continuous identification of new value opportunities',
        'Support as you expand across teams and systems',
      ]},
      "This isn't just support — it's ongoing value creation.",
    ],
  },
  {
    question: 'How does pricing scale over time?',
    answer: [
      'Pricing scales based on:',
      { bullets: [
        'workflows deployed',
        'data volume processed',
        'infrastructure usage',
      ]},
      'As more workflows run on the same foundation, cost per workflow decreases.',
    ],
  },
  {
    question: 'Do you offer custom enterprise pricing?',
    answer: [
      'Yes.',
      'For larger deployments across multiple teams, systems, or portfolio companies, we structure pricing based on scope and scale.',
    ],
  },
  {
    question: 'Can I start with just one portco / property / facility?',
    answer: [
      'Yes — and that\'s how every engagement starts.',
      'We begin with one high-impact workflow in one part of your business. Once that proves value, expanding is straightforward because the foundation is already in place. You don\'t need to commit to a full rollout upfront.',
    ],
  },
  {
    question: 'How is this different from a point solution or consulting project?',
    answer: [
      'Point solutions solve one problem in isolation. Consulting projects deliver recommendations.',
      'We build a working system that connects your data, automates workflows, and continues to improve over time. You\'re not buying a tool or a report — you\'re building an operating layer.',
    ],
  },
  {
    question: 'Do we need internal data or AI teams to use this?',
    answer: [
      'No.',
      'We handle the data engineering, workflow design, and deployment. Your team focuses on using the outputs to make decisions.',
    ],
  },
  {
    question: 'What if we\'re not seeing results in the first 30–60 days?',
    answer: [
      'We start with a workflow where the impact is measurable — revenue, cost, or time.',
      'If the initial workflow isn\'t delivering value, we adjust it or shift to a higher-impact use case. The goal is to prove ROI early — not drag out implementation.',
    ],
  },
  {
    question: 'What\'s the commitment? Can we stop if it\'s not working?',
    answer: [
      'We structure engagements around proving value first.',
      'Most clients expand after the first workflow because the ROI is clear, not because they\'re locked in.',
    ],
    isLast: true,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* PRICING TIERS */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0D0F14' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,168,42,0.07) 0%, transparent 65%)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 lg:pt-32 pb-20 lg:pb-28">

          {/* Section heading */}
          <div className="text-center mb-16 lg:mb-20">
            <h1 className="text-4xl lg:text-[58px] font-bold text-white leading-[1.08] tracking-tight max-w-3xl mx-auto">
              Start with one workflow. Prove ROI in weeks.<br />Then scale.
            </h1>
            <p className="mt-5 text-brand-muted text-lg max-w-2xl mx-auto whitespace-nowrap">
              We start where money or time is being lost. Then we scale from there.
            </p>
          </div>

          {/* Subheading */}
          <div className="mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-white">How teams typically start</h2>
            <p className="mt-2 text-brand-muted text-base">Most clients begin with a single high-impact workflow, then expand once value is proven.</p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">

            {/* Card 1 */}
            <div className="relative rounded-2xl border border-white/[0.08] flex flex-col" style={{ background: 'rgba(255,255,255,0.03)' }}>

              {/* Header */}
              <div className="p-8 pb-6">
                <h3 className="text-white font-bold text-xl leading-snug">First Workflow: Live in 30 Days</h3>
                <p className="mt-2 text-brand-muted text-sm leading-relaxed">You&apos;re not buying setup. You&apos;re deploying your first working system.</p>
              </div>

              <div className="h-px mx-8" style={{ background: 'rgba(255,255,255,0.07)' }} />

              {/* Body */}
              <div className="p-8 flex-1 flex flex-col gap-4">
                <ul className="flex flex-col gap-2.5">
                  {[
                    'Connect your core systems (ERP, CRM, EHR, etc.)',
                    'Build and deploy one high-impact workflow',
                    'Deliver outputs your team actually uses (not a demo)',
                    'No system replacement. No long discovery cycles.',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span className="text-brand-muted text-sm leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-brand-muted text-sm mt-auto">&#x1F449; This is where value is proven.</p>
              </div>

              <div className="h-px mx-8" style={{ background: 'rgba(255,255,255,0.07)' }} />

              {/* Footer */}
              <div className="p-8 pt-6 flex flex-col gap-4">
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Start at</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-brand-gold text-4xl font-bold">$25K</span>
                    <span className="text-brand-muted text-sm">one-time</span>
                  </div>
                </div>
                <a href="https://calendly.com/zach-outcomecatalyst/30min" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:border-white/40 bg-transparent transition-all duration-200">
                  Book a Demo
                </a>
              </div>

            </div>

            {/* Card 2 — Recommended */}
            <div className="relative rounded-2xl border border-brand-gold/40 flex flex-col" style={{ background: 'rgba(212,168,42,0.04)' }}>
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-brand-dark bg-brand-gold">Recommended</span>
              </div>

              {/* Header */}
              <div className="p-8 pb-6">
                <h3 className="text-brand-gold font-bold text-xl leading-snug">Unified Data + AI Layer<br />Typically starts at $2,500/month</h3>
                <p className="mt-2 text-brand-muted text-sm leading-relaxed">Infrastructure management + strategic data leverage. Most clients begin here — powering a single workflow with 1–2 connected systems.</p>
              </div>

              <div className="h-px mx-8" style={{ background: 'rgba(212,168,42,0.12)' }} />

              {/* Body */}
              <div className="p-8 flex-1 flex flex-col gap-4">
                <ul className="flex flex-col gap-2.5">
                  {[
                    'Govern and unify data for your first workflow',
                    'Run reporting, automation, or AI on consistent data',
                    'Eliminate manual reconciliation and data chasing',
                    'Continuously identify new opportunities to expand',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span className="text-brand-muted text-sm leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-brand-muted text-sm mt-auto">&#x1F449; Expand as value is proven across workflows and teams.</p>
              </div>

              <div className="h-px mx-8" style={{ background: 'rgba(212,168,42,0.12)' }} />

              {/* Footer */}
              <div className="p-8 pt-6 flex flex-col gap-4">
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Typically starts at</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-brand-gold text-4xl font-bold">$2,500</span>
                    <span className="text-brand-muted text-sm">/month</span>
                  </div>
                </div>
                <a href="https://calendly.com/zach-outcomecatalyst/30min" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm text-brand-dark bg-brand-gold hover:bg-brand-gold-hover transition-all duration-200 shadow-lg shadow-brand-gold/20 hover:scale-[1.02]">
                  Book a Demo
                </a>
              </div>

            </div>

            {/* Card 3 */}
            <div className="relative rounded-2xl border border-white/[0.08] flex flex-col" style={{ background: 'rgba(255,255,255,0.03)' }}>

              {/* Header */}
              <div className="p-8 pb-6">
                <h3 className="text-white font-bold text-xl leading-snug">Scale Across Workflows &amp; Systems. Usage-based as you grow.</h3>
                <p className="mt-2 text-brand-muted text-sm leading-relaxed">Once the first workflow proves value, expansion becomes straightforward.</p>
              </div>

              <div className="h-px mx-8" style={{ background: 'rgba(255,255,255,0.07)' }} />

              {/* Body */}
              <div className="p-8 flex-1 flex flex-col gap-4">
                <ul className="flex flex-col gap-2.5">
                  {[
                    'Add new workflows across teams and functions',
                    'Connect additional systems and data sources',
                    'Extend across portfolio companies or departments',
                    'Support higher data volume and automation load',
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span className="text-brand-muted text-sm leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-brand-muted text-sm mt-auto">&#x1F449; Most clients expand 2&#8211;3&#xD7; after the first workflow proves ROI.</p>
              </div>

              <div className="h-px mx-8" style={{ background: 'rgba(255,255,255,0.07)' }} />

              {/* Footer */}
              <div className="p-8 pt-6 flex flex-col gap-4">
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Start at</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-brand-gold text-4xl font-bold">$200</span>
                    <span className="text-brand-muted text-sm">/month</span>
                  </div>
                </div>
                <a href="https://calendly.com/zach-outcomecatalyst/30min" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 hover:border-white/40 bg-transparent transition-all duration-200">
                  Book a Demo
                </a>
              </div>

            </div>

          </div>

          {/* How this scales */}
          <div className="mt-16 lg:mt-20">
            <h2 className="text-2xl lg:text-3xl font-bold text-white text-center mb-10">How this scales as you grow</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              {/* Private Equity */}
              <div className="rounded-2xl border border-white/[0.08] p-7 flex flex-col gap-4" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <span className="text-brand-gold text-[10px] font-semibold tracking-widest uppercase">Private Equity</span>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">&ldquo;How does it scale across 10&ndash;20 portcos?&rdquo;</h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-3">As your portfolio grows, cost per company goes down.</p>
                  <ul className="flex flex-col gap-1.5 mb-4">
                    {['Start with one portco', 'Expand across the portfolio using the same data layer', 'No rebuild per company'].map(b => (
                      <li key={b} className="flex items-start gap-2 text-brand-muted text-sm leading-relaxed">
                        <span className="mt-[0.45em] w-1 h-1 rounded-full bg-brand-muted shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-brand-muted text-sm">&#x1F449; The system gets more valuable as you add companies — not more complex.</p>
                </div>
              </div>

              {/* Real Estate */}
              <div className="rounded-2xl border border-white/[0.08] p-7 flex flex-col gap-4" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <span className="text-brand-gold text-[10px] font-semibold tracking-widest uppercase">Real Estate</span>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">&ldquo;What about 50+ properties?&rdquo;</h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-3">Per-property costs decrease as you scale.</p>
                  <ul className="flex flex-col gap-1.5 mb-4">
                    {['Connect Yardi, ARGUS, and your reporting workflows once', 'Expand across assets without rebuilding', 'Reporting and analysis run on the same structure'].map(b => (
                      <li key={b} className="flex items-start gap-2 text-brand-muted text-sm leading-relaxed">
                        <span className="mt-[0.45em] w-1 h-1 rounded-full bg-brand-muted shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-brand-muted text-sm">&#x1F449; You don&apos;t pay per property — you scale on top of one system.</p>
                </div>
              </div>

              {/* Healthcare */}
              <div className="rounded-2xl border border-white/[0.08] p-7 flex flex-col gap-4" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <span className="text-brand-gold text-[10px] font-semibold tracking-widest uppercase">Healthcare</span>
                <div>
                  <h3 className="text-white font-bold text-base mb-2">&ldquo;What about multiple facilities?&rdquo;</h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-3">Scale across facilities without duplicating systems.</p>
                  <ul className="flex flex-col gap-1.5 mb-4">
                    {['Start with one workflow at one facility', 'Expand across locations using the same foundation', 'Built to handle PHI and compliance from day one'].map(b => (
                      <li key={b} className="flex items-start gap-2 text-brand-muted text-sm leading-relaxed">
                        <span className="mt-[0.45em] w-1 h-1 rounded-full bg-brand-muted shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-brand-muted text-sm">&#x1F449; Costs don&apos;t scale linearly with facilities — they compress.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>
      </section>

      {/* THREE OUTCOMES */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0E1119' }}>

        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 55% at 50% 70%, rgba(0,180,220,0.11) 0%, rgba(0,120,180,0.06) 40%, transparent 70%)' }}></div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

          <h2 className="text-4xl lg:text-[44px] font-bold text-white leading-[1.15] tracking-tight max-w-4xl text-balance">
            The Foundation Behind Every Workflow We Deploy
          </h2>
          <p className="mt-4 text-brand-muted text-lg">This is why we can deploy in weeks and deliver real outcomes immediately.</p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* Card 1 */}
            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Layers className="w-4 h-4 text-brand-muted" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-3">Unified, Governed Data Layer</h3>
                <ul className="flex flex-col gap-2">
                  {['Connects your systems into one consistent view', 'Structures data so workflows and AI can actually run', 'Built around your business — not a template'].map(b => (
                    <li key={b} className="flex items-start gap-2 text-brand-muted text-sm leading-relaxed">
                      <span className="mt-[0.45em] w-1 h-1 rounded-full bg-brand-muted shrink-0" />{b}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-brand-muted text-sm">&#x1F449; This is what makes everything else possible.</p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Lock className="w-4 h-4 text-brand-muted" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-3">Secure by Design (HIPAA Compliant)</h3>
                <ul className="flex flex-col gap-2">
                  {['Encrypted in transit and at rest', 'Full audit trails across workflows and data', 'Designed to meet healthcare, financial, and enterprise standards'].map(b => (
                    <li key={b} className="flex items-start gap-2 text-brand-muted text-sm leading-relaxed">
                      <span className="mt-[0.45em] w-1 h-1 rounded-full bg-brand-muted shrink-0" />{b}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-brand-muted text-sm">&#x1F449; Security and compliance aren&apos;t add-ons — they&apos;re built in.</p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Zap className="w-4 h-4 text-brand-muted" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-3">Workflows That Actually Run the Business</h3>
                <ul className="flex flex-col gap-2">
                  {['Automate reporting, reconciliation, and approvals', 'Trigger actions based on real data (not manual inputs)', 'Replace spreadsheets and manual coordination'].map(b => (
                    <li key={b} className="flex items-start gap-2 text-brand-muted text-sm leading-relaxed">
                      <span className="mt-[0.45em] w-1 h-1 rounded-full bg-brand-muted shrink-0" />{b}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-brand-muted text-sm">&#x1F449; This is where time and money are actually recovered.</p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Link2 className="w-4 h-4 text-brand-muted" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-3">Works With What You Already Have</h3>
                <ul className="flex flex-col gap-2">
                  {['ERP, CRM, EMR, property systems, spreadsheets', 'No rip-and-replace', 'No disruption to existing workflows'].map(b => (
                    <li key={b} className="flex items-start gap-2 text-brand-muted text-sm leading-relaxed">
                      <span className="mt-[0.45em] w-1 h-1 rounded-full bg-brand-muted shrink-0" />{b}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-brand-muted text-sm">&#x1F449; We don&apos;t change your systems — we make them work together.</p>
            </div>

          </div>

        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

      </section>

      {/* PROOF / ROI */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0D0F14' }}>

        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(212,168,42,0.07) 0%, transparent 65%)' }}></div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

          <h2 className="text-4xl lg:text-[44px] font-bold text-white leading-[1.15] tracking-tight max-w-3xl text-balance">
            Most clients recover the cost in the first 90 days
          </h2>
          <p className="mt-5 text-brand-muted text-lg max-w-xl leading-relaxed">
            You&apos;ve seen these numbers on the vertical pages. Here they sit next to the investment. The math is simple.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Private Equity */}
            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <span className="text-brand-gold text-[10px] font-semibold tracking-widest uppercase">Private Equity</span>
              <div>
                <div className="text-brand-gold text-3xl font-bold leading-none mb-2">40%</div>
                <p className="text-white font-bold text-base mb-4">Faster diligence cycles</p>
                <p className="text-brand-muted text-sm leading-relaxed">Deals move faster because data is connected from day one — no manual aggregation across systems. Firms see ROI through faster deal execution and reduced analyst hours.</p>
              </div>
              <p className="text-brand-muted text-xs font-mono mt-auto">Measured in first 30–60 days</p>
            </div>

            {/* Healthcare */}
            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <span className="text-brand-gold text-[10px] font-semibold tracking-widest uppercase">Healthcare</span>
              <div>
                <div className="text-brand-gold text-3xl font-bold leading-none mb-2">$2M/month</div>
                <p className="text-white font-bold text-base mb-4">Cash flow recovered</p>
                <p className="text-brand-muted text-sm leading-relaxed">Disconnected billing, EHR, and CRM data created gaps between services delivered and revenue collected. We unified and tracked the full workflow — and the leakage became visible. This isn&apos;t efficiency. This is revenue that was already there.</p>
              </div>
              <p className="text-brand-muted text-xs font-mono mt-auto">Measured in first quarter</p>
            </div>

            {/* Real Estate */}
            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <span className="text-brand-gold text-[10px] font-semibold tracking-widest uppercase">Real Estate</span>
              <div>
                <div className="text-brand-gold text-3xl font-bold leading-none mb-2">Weeks &rarr; Days</div>
                <p className="text-white font-bold text-base mb-4">Reporting cycle</p>
                <p className="text-brand-muted text-sm leading-relaxed">Property, financial, and operational data connected into a single reporting layer across assets. Teams stop building reports and start using them.</p>
              </div>
              <p className="text-brand-muted text-xs font-mono mt-auto">Measured in first 30–60 days</p>
            </div>

          </div>
        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0E1119' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 mb-8">
            <HelpCircle className="w-3 h-3 text-brand-gold" />
            <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">Pricing FAQs</span>
          </div>

          <h2 className="text-4xl lg:text-[52px] font-bold text-white leading-[1.1] tracking-tight max-w-3xl">
            We Answer Your Questions
          </h2>

          <FAQAccordion items={faqItems} />
        </div>
        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-dark">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-36 flex flex-col items-center text-center">

          <h2 className="text-4xl lg:text-[52px] font-bold text-white leading-[1.1] tracking-tight max-w-2xl text-balance">
            You&apos;ve seen what other teams are recovering. Now see where yours is leaking.
          </h2>

          <p className="mt-6 text-brand-muted text-base">
            Talk Through Your Use Case
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://calendly.com/zach-outcomecatalyst/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-brand-dark font-bold text-sm transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-brand-gold/20"
            >
              Book a Demo
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-transparent border border-white/20 hover:border-white/40 text-white font-bold text-sm transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>

          <p className="mt-5 text-brand-muted text-sm italic">
            30-minute working session. Not a generic demo.<br />
            We&apos;ll map this to your actual environment.
          </p>

        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>
      </section>
    </>
  );
}
