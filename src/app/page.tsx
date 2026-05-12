import {
  TrendingUp,
  Building2,
  Activity,
  ShieldCheck,
  Lock,
  Database,
  ClipboardList,
  Share2,
  Scan,
  Network,
  BarChart2,
  Milestone,
  HelpCircle,
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import VideoLightbox from '@/components/VideoLightbox';

export const metadata = {
  title: 'Outcome Catalyst',
  description: 'We connect your data so your team can make faster decisions.',
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#010215' }}>

        {/* Hero background image */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden flex items-start justify-end pt-[46px] lg:pt-[78px]"
          style={{ paddingRight: '30px' }}
        >
          <img
            src="/assets/oc-homepage-hero-g5.png"
            alt=""
            aria-hidden="true"
            style={{
              width: '52%',
              height: 'auto',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 82%, transparent 100%)',
              WebkitMaskComposite: 'source-in',
              maskImage:
                'linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 82%, transparent 100%)',
              maskComposite: 'intersect',
              opacity: 1,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

          {/* Main content */}
          <div className="pt-24 pb-16 lg:pt-32 lg:pb-20" style={{ marginTop: '-50px' }}>

            {/* H1 */}
            <h1 className="text-4xl lg:text-[52px] font-bold leading-[1.1] tracking-tight text-white max-w-4xl text-balance">
              We connect your data<br />
              so your team can make<br />
              <span className="text-brand-gold">faster decisions.</span>
            </h1>

            {/* Body text */}
            <div className="mt-8 max-w-[550px] space-y-4">
              <p className="text-brand-muted text-lg leading-relaxed">
                Your systems hold the answers. They just don&apos;t talk to each other. PE firms can&apos;t see across their portfolio. RE firms can&apos;t compare what they underwrote vs. what happened. Healthcare organizations are losing revenue across disconnected workflows.
              </p>
              <p className="text-brand-muted text-lg leading-relaxed">
                The problem is the same. The data exists. The decisions don&apos;t.
              </p>
            </div>

            {/* CTA row */}
            <div className="mt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <div>
                <a href="https://calendly.com/zach-outcomecatalyst/30min" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 px-8 py-4 bg-brand-gold hover:bg-brand-gold-hover text-brand-dark text-base font-bold rounded-xl transition-all duration-200 hover:gap-4">
                  Book a Demo
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </a>
                <p className="mt-3 text-sm text-brand-muted opacity-50">30-minute walkthrough. No commitment. See your data, not a slide deck.</p>
              </div>
            </div>
          </div>

          {/* I work in selector */}
          <div className="flex items-center gap-3 flex-wrap mb-8">
            <span className="text-brand-muted text-sm whitespace-nowrap">I work in:</span>
            <div className="flex items-center gap-2 flex-wrap">
              <a href="/private-equity" className="industry-pill flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm font-medium text-brand-muted hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-150">
                <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                Private Equity
              </a>
              <a href="/real-estate" className="industry-pill flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm font-medium text-brand-muted hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-150">
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                Real Estate
              </a>
              <a href="/healthcare" className="industry-pill flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm font-medium text-brand-muted hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-150">
                <Activity className="w-3.5 h-3.5 shrink-0" />
                Healthcare
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.15) 70%, transparent)' }}></div>

          {/* Stats row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-14">
            <div>
              <div className="text-[42px] font-bold text-brand-gold leading-none">8–10x</div>
              <div className="mt-3 text-sm font-semibold text-white">Faster data onboarding</div>
              <div className="mt-1.5 text-sm text-brand-muted leading-relaxed">New systems, datasets, and<br />workflows live in weeks</div>
            </div>
            <div>
              <div className="text-[42px] font-bold text-brand-gold leading-none">$2M+</div>
              <div className="mt-3 text-sm font-semibold text-white">Monthly value unlocked</div>
              <div className="mt-1.5 text-sm text-brand-muted leading-relaxed">Across revenue leakage, working capital,<br />and cost inefficiencies</div>
            </div>
            <div>
              <div className="text-[42px] font-bold text-brand-gold leading-none">30–40%</div>
              <div className="mt-3 text-sm font-semibold text-white">Reduction in manual reporting &amp; analysis time</div>
              <div className="mt-1.5 text-sm text-brand-muted leading-relaxed">Teams stop reconciling data and<br />start making decisions</div>
            </div>
          </div>

        </div>
      </section>

      {/* OUR PLATFORM */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0E1119' }}>

        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 55% at 50% 70%, rgba(0,180,220,0.11) 0%, rgba(0,120,180,0.06) 40%, transparent 70%)' }}></div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

          <h2 className="text-4xl lg:text-[44px] font-bold text-white leading-[1.15] tracking-tight max-w-4xl text-balance">
            One platform. Built around the workflows<br />that matter in your industry.
          </h2>
          <p className="mt-5 text-brand-muted text-lg max-w-xl leading-relaxed">
            Most platforms force every industry into the same mold. We don&apos;t. You&apos;ve seen how that ends: six months of customization, a dashboard nobody trusts, and a team that goes back to spreadsheets.
          </p>

          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">

            <a href="https://calendly.com/zach-outcomecatalyst/30min" target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-6 transition-transform duration-200 ease-out hover:scale-[1.025] hover:border-white/[0.14]" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <TrendingUp className="w-5 h-5 text-brand-gold" />
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-2">Private Equity</h3>
                <p className="text-brand-muted text-sm leading-relaxed">One operating layer across every portco. Diligence, reporting, and value creation decisions that took weeks now take minutes.</p>
              </div>
              <div className="rounded-lg px-4 py-3 text-xs text-brand-gold leading-relaxed font-mono" style={{ background: 'rgba(212,168,42,0.08)', border: '1px solid rgba(212,168,42,0.2)' }}>
                8-10x faster data onboarding · 30-40% less manual reporting
              </div>
              <span className="mt-auto inline-flex items-center gap-2 text-brand-gold text-sm font-semibold group-hover:gap-3 transition-all duration-150">
                See the Private Equity workflows <span>→</span>
              </span>
            </a>

            <a href="https://calendly.com/zach-outcomecatalyst/30min" target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-6 transition-transform duration-200 ease-out hover:scale-[1.025] hover:border-white/[0.14]" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <Building2 className="w-5 h-5 text-brand-gold" />
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-2">Real Estate</h3>
                <p className="text-brand-muted text-sm leading-relaxed">ARGUS holds your underwriting. Yardi holds reality. OutcomeCatalyst connects the two so your firm can finally compare what you projected vs. what actually happened.</p>
              </div>
              <div className="rounded-lg px-4 py-3 text-xs text-brand-gold leading-relaxed font-mono" style={{ background: 'rgba(212,168,42,0.08)', border: '1px solid rgba(212,168,42,0.2)' }}>
                3 weeks → 3 days reporting · 12-18% variance identified
              </div>
              <span className="mt-auto inline-flex items-center gap-2 text-brand-gold text-sm font-semibold group-hover:gap-3 transition-all duration-150">
                See the Real Estate workflows <span>→</span>
              </span>
            </a>

            <a href="https://calendly.com/zach-outcomecatalyst/30min" target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-6 transition-transform duration-200 ease-out hover:scale-[1.025] hover:border-white/[0.14]" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <Activity className="w-5 h-5 text-brand-gold" />
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-2">Healthcare</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Revenue leaks across referrals, eligibility, charge capture, and denials. OutcomeCatalyst traces it end-to-end so teams see exactly where the cash is going and what to fix.</p>
              </div>
              <div className="rounded-lg px-4 py-3 text-xs text-brand-gold leading-relaxed font-mono" style={{ background: 'rgba(212,168,42,0.08)', border: '1px solid rgba(212,168,42,0.2)' }}>
                $2M/month cash flow unlocked · 100% PHI de-identified
              </div>
              <span className="mt-auto inline-flex items-center gap-2 text-brand-gold text-sm font-semibold group-hover:gap-3 transition-all duration-150">
                See the Healthcare workflows <span>→</span>
              </span>
            </a>

          </div>

          {/* Security & Compliance */}
          <div className="mt-20">
            <div className="flex flex-wrap items-center justify-between gap-6">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/25 shrink-0" style={{ background: 'rgba(212,168,42,0.08)' }}>
                <ShieldCheck className="w-3 h-3 text-brand-gold" />
                <span className="text-brand-gold text-[10px] font-semibold tracking-widest uppercase">Security &amp; Compliance</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">

                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-brand-muted shrink-0" />
                  <span className="text-white text-sm font-semibold">SOC 2 Compliant</span>
                </div>

                <div className="w-px h-5 bg-white/10 hidden md:block"></div>

                <div className="flex items-center gap-2.5">
                  <Lock className="w-4 h-4 text-brand-muted shrink-0" />
                  <span className="text-white text-sm font-semibold">Enterprise-Grade Encryption</span>
                </div>

                <div className="w-px h-5 bg-white/10 hidden md:block"></div>

                <div className="flex items-center gap-2.5">
                  <Database className="w-4 h-4 text-brand-muted shrink-0" />
                  <span className="text-white text-sm font-semibold">Data Residency Control</span>
                </div>

                <div className="w-px h-5 bg-white/10 hidden md:block"></div>

                <div className="flex items-center gap-2.5">
                  <ClipboardList className="w-4 h-4 text-brand-muted shrink-0" />
                  <span className="text-white text-sm font-semibold">Access Audit Trail</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

      </section>

      {/* CASE STUDIES */}
      <section className="relative bg-brand-dark overflow-hidden">

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

          <h2 className="text-4xl lg:text-[52px] font-bold text-white leading-[1.1] tracking-tight max-w-4xl text-balance">
            Stop buying new tools. Make the ones you have actually work together.
          </h2>
          <p className="mt-6 text-brand-muted text-lg max-w-2xl leading-relaxed">
            We connect and govern the data across your existing systems so your team and your AI operate on the same, trusted foundation. No migrations. No new tools. Just data that finally works together.
          </p>

          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-6" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <Share2 className="w-5 h-5 text-brand-gold" />
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-3">Connect What You Already Use</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Your data lives across ERP, CRM, EHR, Yardi, ARGUS, and more. We connect it without replacing anything so everything runs on the same, unified layer from day one.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-6" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <Scan className="w-5 h-5 text-brand-gold" />
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-3">Standardize the Workflows That Matter</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Reporting, diligence, underwriting, revenue tracking. Each team runs its own version today. We standardize these workflows so data flows automatically and every output is one your team can actually trust.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-6" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <Network className="w-5 h-5 text-brand-gold" />
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-3">Make Faster, Trusted Decisions.</h3>
                <p className="text-brand-muted text-sm leading-relaxed">An Operating Partner sees what&apos;s driving EBITDA across 25 portcos without waiting for the quarterly deck. A Head of Asset Management compares what they underwrote to what actually happened across 50 properties. A COO traces exactly where revenue is leaking without cross-referencing three systems.<br /><br />Same platform. Three decisions. All faster.</p>
              </div>
            </div>

          </div>

          {/* Video banner via client component */}
          <VideoLightbox />

        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

      </section>

      {/* PROOF & RESULTS */}
      <section className="relative overflow-hidden" style={{ background: '#0E1119' }}>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,168,42,0.04) 0%, transparent 70%)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 mb-8">
            <BarChart2 className="w-3 h-3 text-brand-gold" />
            <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">Proof &amp; Results</span>
          </div>

          <h2 className="text-4xl lg:text-[52px] font-bold text-white leading-[1.1] tracking-tight max-w-4xl text-balance">
            $2M per month recovered. 40% faster diligence. And that&apos;s just two clients.
          </h2>
          <p className="mt-6 text-brand-muted text-lg leading-relaxed">
            These aren&apos;t projections. They&apos;re measured outcomes from real engagements delivered in weeks.
          </p>

          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Private Equity */}
            <a href="/private-equity" className="rounded-2xl border border-white/[0.08] flex flex-col overflow-hidden cursor-pointer transition-transform duration-200 ease-out hover:scale-[1.02]" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-full h-52 overflow-hidden">
                <img src="/assets/pe-firm-image-card.png" alt="Private Equity" className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-8 flex flex-col flex-1 gap-4">
                <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">Private Equity</span>
                <p className="text-brand-muted text-sm leading-relaxed flex-1">A mid-market PE firm was pulling CIMs, QoE reports, and financials across multiple sources for every deal. OutcomeCatalyst unified everything into a governed deal intelligence layer, eliminating manual reconciliation and giving the team a consistent view across all diligence.</p>
                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-white font-bold text-2xl leading-tight">40% faster<br />diligence cycles</p>
                  <p className="text-brand-muted text-xs mt-2">5B+ AUM mid-market PE firm.</p>
                </div>
              </div>
            </a>

            {/* Real Estate */}
            <a href="/real-estate" className="rounded-2xl border border-white/[0.08] flex flex-col overflow-hidden cursor-pointer transition-transform duration-200 ease-out hover:scale-[1.02]" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-full h-52 overflow-hidden">
                <img src="/assets/real-estate-v2.png" alt="Real Estate" className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-8 flex flex-col flex-1 gap-4">
                <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">Real Estate</span>
                <p className="text-brand-muted text-sm leading-relaxed flex-1">A real estate platform was rebuilding investor reports manually across Yardi, ARGUS, and asset-level spreadsheets every quarter. OutcomeCatalyst connected the systems and automated projected vs. actual analysis so reporting and performance tracking ran from the same data layer.</p>
                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-white font-bold text-2xl leading-tight">3 weeks → 3 days<br />reporting cycle</p>
                  <p className="text-brand-muted text-xs mt-2">35+ asset real estate portfolio</p>
                </div>
              </div>
            </a>

            {/* Healthcare */}
            <a href="/healthcare" className="rounded-2xl border border-white/[0.08] flex flex-col overflow-hidden cursor-pointer transition-transform duration-200 ease-out hover:scale-[1.02]" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-full h-52 overflow-hidden">
                <img src="/assets/clinical-medicine-office.png" alt="Healthcare" className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-8 flex flex-col flex-1 gap-4">
                <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">Healthcare</span>
                <p className="text-brand-muted text-sm leading-relaxed flex-1">A clinical trials portfolio company had revenue leakage across multiple CRMs and ERP systems, with no clear way to reconcile collections. OutcomeCatalyst automated revenue reconciliation across systems, creating a unified view of cash flow and identifying gaps in real time.</p>
                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-white font-bold text-2xl leading-tight">$2M/month<br />cash flow unlocked</p>
                  <p className="text-brand-muted text-xs mt-2">$60M revenue clinical trials portco</p>
                </div>
              </div>
            </a>

          </div>

        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

      </section>

      {/* THE PROCESS */}
      <section className="relative overflow-hidden bg-brand-dark">

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(212,168,42,0.04) 0%, transparent 70%)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 mb-8">
            <Milestone className="w-3 h-3 text-brand-gold" />
            <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">The Process</span>
          </div>

          <h2 className="text-4xl lg:text-[52px] font-bold text-white leading-[1.1] tracking-tight max-w-4xl text-balance">
            This isn&apos;t a 6-month data project. You&apos;ll be live in 4–6 weeks.
          </h2>
          <p className="mt-6 text-brand-muted text-lg max-w-3xl leading-relaxed">
            No migrations. No disruption. Just a 4-step process that connects your existing systems without changing how anyone works. The most common reaction after week one: &apos;That&apos;s it?&apos;
          </p>

          {/* Steps */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* Step 01 */}
            <div className="group relative p-8 lg:p-10 cursor-default flex flex-col gap-6 rounded-2xl border border-white/[0.07] transition-all duration-300 ease-out hover:border-white/[0.14] hover:scale-[1.025]">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}></div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 20%, rgba(212,168,42,0.08) 0%, transparent 70%)' }}></div>
              <div className="relative z-10 flex flex-col gap-6 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[56px] lg:text-[72px] font-bold leading-none text-brand-gold tabular-nums">01</span>
                  <span className="text-white/20 text-2xl hidden md:block group-hover:text-white/40 transition-colors duration-300">→</span>
                </div>
                <h3 className="text-white font-bold text-lg leading-snug">Find the Workflow That&apos;s Slowing You Down</h3>
                <p className="text-brand-muted text-sm leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  We pinpoint where data fragmentation is costing you time, money, or decisions.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="group relative p-8 lg:p-10 cursor-default flex flex-col gap-6 rounded-2xl border border-white/[0.07] transition-all duration-300 ease-out hover:border-white/[0.14] hover:scale-[1.025]">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}></div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 20%, rgba(212,168,42,0.08) 0%, transparent 70%)' }}></div>
              <div className="relative z-10 flex flex-col gap-6 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[56px] lg:text-[72px] font-bold leading-none text-brand-gold tabular-nums">02</span>
                  <span className="text-white/20 text-2xl hidden md:block group-hover:text-white/40 transition-colors duration-300">→</span>
                </div>
                <h3 className="text-white font-bold text-lg leading-snug">Map Where the Data Breaks</h3>
                <p className="text-brand-muted text-sm leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  We identify which systems and documents power that workflow and where they don&apos;t connect.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="group relative p-8 lg:p-10 cursor-default flex flex-col gap-6 rounded-2xl border border-white/[0.07] transition-all duration-300 ease-out hover:border-white/[0.14] hover:scale-[1.025]">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}></div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 20%, rgba(212,168,42,0.08) 0%, transparent 70%)' }}></div>
              <div className="relative z-10 flex flex-col gap-6 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[56px] lg:text-[72px] font-bold leading-none text-brand-gold tabular-nums">03</span>
                  <span className="text-white/20 text-2xl hidden md:block group-hover:text-white/40 transition-colors duration-300">→</span>
                </div>
                <h3 className="text-white font-bold text-lg leading-snug">Create a Trusted Data Layer</h3>
                <p className="text-brand-muted text-sm leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  We connect and structure only the data needed so everything runs on consistent, reliable data.
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="group relative p-8 lg:p-10 cursor-default flex flex-col gap-6 rounded-2xl border border-white/[0.07] transition-all duration-300 ease-out hover:border-white/[0.14] hover:scale-[1.025]">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}></div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 20%, rgba(212,168,42,0.08) 0%, transparent 70%)' }}></div>
              <div className="relative z-10 flex flex-col gap-6 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[56px] lg:text-[72px] font-bold leading-none text-brand-gold tabular-nums">04</span>
                </div>
                <h3 className="text-white font-bold text-lg leading-snug">Replace Manual Work with Automation</h3>
                <p className="text-brand-muted text-sm leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                  Reporting, reconciliation, and approvals run automatically on top of that foundation.
                </p>
              </div>
            </div>

          </div>

          {/* Footer callout */}
          <div className="mt-10 pl-6 border-l-2 border-brand-gold">
            <p className="text-white font-semibold text-base">First workflow live in 4–6 Weeks.</p>
            <p className="text-brand-muted text-sm mt-1">Once it works, expansion becomes an operational decision – not a technology bet.</p>
          </div>

        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0E1119' }}>

        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 55% at 50% 70%, rgba(0,180,220,0.07) 0%, rgba(0,120,180,0.04) 40%, transparent 70%)' }}></div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 mb-8">
            <HelpCircle className="w-3 h-3 text-brand-gold" />
            <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">Our FAQs</span>
          </div>
          <h2 className="text-4xl lg:text-[52px] font-bold text-white leading-[1.1] tracking-tight max-w-2xl text-balance">
            What Our Clients Ask First
          </h2>
          <p className="mt-5 text-brand-muted text-lg">These come up on every first call. We figured we&apos;d answer them here.</p>

          {/* FAQ Accordion - client component */}
          <FAQAccordion />

        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

      </section>

      {/* CTA SECTION */}
      <section className="relative overflow-hidden bg-brand-dark">

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(212,168,42,0.07) 0%, transparent 70%)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-36 flex flex-col items-center text-center">

          <h2 className="text-4xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight max-w-3xl text-balance">
            Your data already has the answers. We make them usable.
          </h2>

          <p className="mt-6 text-brand-muted text-lg max-w-xl leading-relaxed">
            We&apos;ll show you your own data in 30 minutes — connected, structured, and ready to use. No slides. No generic demo.
          </p>

          <a href="https://calendly.com/zach-outcomecatalyst/30min" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-brand-dark font-bold text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-brand-gold/20">
            Book a Demo
          </a>

          <p className="mt-4 text-brand-muted text-sm italic">
            30-minute walkthrough. See your systems, your workflows, your gaps.
          </p>

        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

      </section>
    </>
  );
}
