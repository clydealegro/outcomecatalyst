import IndustryHero from '@/components/IndustryHero';
import VideoLightbox from '@/components/VideoLightbox';
import FAQAccordion from '@/components/FAQAccordion';
import { TrendingUp, Building2, Activity, ShieldCheck, Lock, Database, ClipboardList, FileSearch, FileSpreadsheet, Layers, Link2, Zap, BarChart2, Crosshair, LineChart, HelpCircle } from 'lucide-react';


export const metadata = {
  title: 'Real Estate — OutcomeCatalyst',
  description: 'One operating layer. Every portco. Every decision.',
};

export default function RealEstatePage() {
  return (
    <>
      <IndustryHero
        industry="real-estate"
        pillLabel="Real Estate"
        heading={
          <>
            ARGUS, Yardi, Excel, and investor decks. Four sources. Four different versions of how your <span className="text-brand-gold">portfolio is performing.</span>
          </>
        }
        bodyText="Nothing connects, nothing reconciles, and every quarter your team rebuilds the same reports from scratch. Your underwriting never learns from what actually happened. We fix that with a single operating layer that ties it all together."
        ctaSubtext="See a multi-property dashboard walkthrough. 30 minutes. No commitment."
        stats={[
          {
            value: '40–50% faster',
            label: 'Underwriting vs. actual analysis',
            description: 'Automatically compare ARGUS projections to Yardi performance',
          },
          {
            value: '2x faster',
            label: 'Investor and asset-level reporting',
            description: 'Eliminate manual data aggregation across properties',
          },
          {
            value: '20–30%',
            label: 'Reduction in variance leakage',
            description: 'Identify where deals consistently miss underwriting assumptions',
          },
        ]}
      />

      {/* OUR PLATFORM */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0E1119' }}>

        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 55% at 50% 70%, rgba(0,180,220,0.11) 0%, rgba(0,120,180,0.06) 40%, transparent 70%)' }}></div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

          <h2 className="text-4xl lg:text-[44px] font-bold text-white leading-[1.15] tracking-tight max-w-4xl text-balance">
            50 properties. 50 systems. One quarterly deadline. And no clear view of what&apos;s actually driving performance.
          </h2>
          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <BarChart2 className="w-4 h-4 text-brand-muted" />
              </div>
              <div>
                <span className="text-brand-muted text-[10px] font-semibold tracking-widest uppercase">Projected vs Actual (Core Wedge)</span>
                <h3 className="text-white font-bold text-lg mt-2 mb-3">Underwriting vs. Reality Never Lines Up</h3>
                <p className="text-brand-muted text-sm leading-relaxed">ARGUS models get built at acquisition and rarely get touched again. Yardi tracks what actually happens. There&apos;s no system connecting the two.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">So every comparison is manual and the firm never learns where underwriting was wrong.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <FileSpreadsheet className="w-4 h-4 text-brand-muted" />
              </div>
              <div>
                <span className="text-brand-muted text-[10px] font-semibold tracking-widest uppercase">Investor Reporting</span>
                <h3 className="text-white font-bold text-lg mt-2 mb-3">Quarterly Reporting is Still Manual</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Every quarter, the same process. Pull from Yardi. Pull from the GL. Rebuild the story for each asset.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">It takes 2–3 weeks. The output is inconsistent. And by the time it&apos;s delivered, the data is already stale.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Layers className="w-4 h-4 text-brand-muted" />
              </div>
              <div>
                <span className="text-brand-muted text-[10px] font-semibold tracking-widest uppercase">Capital Allocation</span>
                <h3 className="text-white font-bold text-lg mt-2 mb-3">CapEx Decisions are Made in Spreadsheets</h3>
                <p className="text-brand-muted text-sm leading-relaxed">CapEx lives in spreadsheets with no connection to asset performance.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">There&apos;s no way to track whether spend actually moved NOI or benchmark across properties.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">So capital gets deployed based on assumptions, not outcomes.</p>
              </div>
            </div>

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

      {/* STOP BUYING NEW TOOLS */}
      <section className="relative bg-brand-dark overflow-hidden">

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

          <h2 className="text-4xl lg:text-[52px] font-bold text-white leading-[1.1] tracking-tight max-w-4xl text-balance">
            We don&apos;t replace Yardi. We connect everything around it.
          </h2>
          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-6" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <Link2 className="w-5 h-5 text-brand-gold" />
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-3">Connect Yardi and ARGUS in one layer</h3>
                <p className="text-brand-muted text-sm leading-relaxed">OutcomeCatalyst connects Yardi and ARGUS without changing how your team works.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">Property managers stay in Yardi. Acquisitions stay in ARGUS.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">We bridge the two so projections and actuals are finally visible side by side across every asset.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-6" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <BarChart2 className="w-5 h-5 text-brand-gold" />
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-3">Automate Underwriting vs. Actual Analysis</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Once Yardi and ARGUS are connected, variance is tracked automatically.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">When performance deviates, you see it immediately, not months later.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">You start to understand where deals miss, which assumptions break, and how to improve the next one.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-6" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <TrendingUp className="w-5 h-5 text-brand-gold" />
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-3">Generate Investor Reports from Live Data</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Investor reports pull directly from the unified data layer.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">No manual aggregation. No reconciliation. No rebuilding narratives each quarter.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">Reporting cycles move from weeks to days and the data is always current.</p>
              </div>
            </div>

          </div>

          {/* Video banner */}
          <VideoLightbox pillLabel="Real Estate Dashboard" heading="RE Dashboard / Projected vs Actual View. Must show ARGUS projections vs Yardi actuals, variance analysis, or investor report output a GP would recognize." />

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
            How one firm went from quarterly spreadsheet reconciliation to a live asset-level view in 4 weeks
          </h2>
          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Card 1 */}
            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">Real Estate</span>
              <div className="flex flex-col gap-4 flex-1">
                <p className="text-brand-muted text-sm leading-relaxed">A mid-market real estate PE firm with ~35 properties was running quarterly reporting across Yardi, ARGUS, and asset manager spreadsheets. Every cycle required pulling rent rolls, expenses, and leasing data from Yardi, rebuilding underwriting models in ARGUS, and stitching everything together in Excel.</p>
                <p className="text-brand-muted text-sm leading-relaxed">The process took ~3 weeks and still produced inconsistent outputs across assets.</p>
                <p className="text-brand-muted text-sm leading-relaxed">OutcomeCatalyst connected Yardi and ARGUS into a unified data layer in under 4 weeks. Operational data and underwriting assumptions were automatically reconciled, and investor reports were generated directly from the system.</p>
              </div>
              <div className="text-brand-gold text-2xl font-bold leading-snug">3 weeks → 3 days for investor reporting</div>
              <p className="text-brand-muted text-sm leading-relaxed">Reporting cycles dropped from ~3 weeks to under 3 days — and the firm finally had a consistent view of performance across every asset.</p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">Real Estate</span>
              <div className="flex flex-col gap-4 flex-1">
                <p className="text-brand-muted text-sm leading-relaxed">A real estate platform with a diversified portfolio had no systematic way to track how deals performed vs. underwriting. ARGUS models were built at acquisition but never revisited, while Yardi tracked actual performance in isolation.</p>
                <p className="text-brand-muted text-sm leading-relaxed">Asset managers relied on ad hoc analysis, meaning variance issues were discovered late — often during refinancing or exit prep.</p>
                <p className="text-brand-muted text-sm leading-relaxed">OutcomeCatalyst automated projected vs. actual analysis across the portfolio, surfacing where assumptions consistently missed — including tenant improvement costs and lease-up timelines.</p>
              </div>
              <div className="text-brand-gold text-2xl font-bold leading-snug">Uncovered 12–18% underwriting variance across assets</div>
              <p className="text-brand-muted text-sm leading-relaxed">Within the first quarter, the firm identified 12–18% variance in key assumptions across multiple assets and began adjusting underwriting models and capital allocation decisions in real time.</p>
            </div>

          </div>

          {/* Testimonial */}
          <div className="mt-8 rounded-2xl border border-white/[0.08] overflow-hidden relative" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{ background: 'radial-gradient(ellipse 60% 80% at 0% 100%, rgba(212,168,42,0.07) 0%, transparent 60%)' }}></div>
            <div className="h-px w-full" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.06) 60%, transparent 100%)' }}></div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-brand-dark shrink-0" style={{ background: 'linear-gradient(135deg, #D4A82A, #a07d1a)' }}>
                  DA
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-none">Director of Asset Management</p>
                  <p className="text-brand-muted text-xs mt-1">Real Estate PE Firm</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-brand-gold" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-brand-muted text-sm lg:text-base leading-relaxed">
                &ldquo;Before OutcomeCatalyst, every quarter was a scramble to pull data from Yardi and rebuild models in Excel. We didn&apos;t have a consistent view across assets, and we definitely weren&apos;t learning from our underwriting. Now everything is connected, and we can actually see where deals are performing — and where they&apos;re not.&rdquo;
              </blockquote>
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
            Three ways this drives better asset-level decisions
          </h2>
          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <BarChart2 className="w-4 h-4 text-brand-muted" />
              </div>
              <div className="flex-1">
                <span className="text-brand-muted text-[10px] font-semibold tracking-widest uppercase">Continuous Feedback Loop</span>
                <h3 className="text-white font-bold text-lg mt-2 mb-3">See where deals actually miss</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Projected vs. actual analysis creates a continuous feedback loop across your portfolio.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">You see where rent assumptions were off, where OpEx drifted, and where comps were wrong in real time.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">Each new deal is underwritten with actual performance data from prior assets.</p>
              </div>
              <div className="rounded-lg px-4 py-3 text-xs text-brand-gold leading-relaxed font-mono" style={{ background: 'rgba(212,168,42,0.08)', border: '1px solid rgba(212,168,42,0.2)' }}>
                Replace manual underwriting reconciliation with real-time variance tracking
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <FileSpreadsheet className="w-4 h-4 text-brand-muted" />
              </div>
              <div className="flex-1">
                <span className="text-brand-muted text-[10px] font-semibold tracking-widest uppercase">Reporting Speed</span>
                <h3 className="text-white font-bold text-lg mt-2 mb-3">Reporting moves from weeks to days</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Investor reporting shifts from a 3-week manual process to a 2–3 day review.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">Data pulls automatically from Yardi, ARGUS, and the GL with consistent metrics across every asset.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">The team stops building reports and starts analyzing performance.</p>
              </div>
              <div className="rounded-lg px-4 py-3 text-xs text-brand-gold leading-relaxed font-mono" style={{ background: 'rgba(212,168,42,0.08)', border: '1px solid rgba(212,168,42,0.2)' }}>
                Reduce reporting cycle from weeks to days
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <TrendingUp className="w-4 h-4 text-brand-muted" />
              </div>
              <div className="flex-1">
                <span className="text-brand-muted text-[10px] font-semibold tracking-widest uppercase">Expansion Path</span>
                <h3 className="text-white font-bold text-lg mt-2 mb-3">Turn portfolio data into an operating advantage</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Once data is unified, you move beyond reporting.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">CapEx decisions, leasing strategy, and pricing are based on actual performance — not static models.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">Over time, the firm builds a proprietary dataset across assets that improves underwriting, capital allocation, and exit decisions.</p>
              </div>
              <div className="rounded-lg px-4 py-3 text-xs text-brand-gold leading-relaxed font-mono" style={{ background: 'rgba(212,168,42,0.08)', border: '1px solid rgba(212,168,42,0.2)' }}>
                Build a proprietary performance dataset across your assets
              </div>
            </div>

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
            What RE Firms Ask First
          </h2>

          <FAQAccordion items={[
            {
              question: 'Can you connect Yardi and ARGUS without us changing systems?',
              answer: [
                "Yes. OutcomeCatalyst sits between Yardi and ARGUS — no rip-and-replace.",
                "Your property managers stay in Yardi. Your acquisitions team stays in ARGUS. We connect the two and unify the data layer so projections and actuals are visible side by side.",
                "Most firms are live in 3–4 weeks without disrupting existing workflows.",
              ],
              defaultOpen: true,
            },
            {
              question: 'Can this replace our manual reporting process immediately?',
              answer: [
                "We typically start with one workflow — investor reporting or projected vs. actual — and replace it within weeks.",
                "Instead of pulling data from Yardi, the GL, and spreadsheets every quarter, reports are generated directly from the unified layer.",
                "Most teams eliminate 2–3 weeks of manual reporting in the first cycle.",
              ],
            },
            {
              question: 'How does this scale across all assets and funds?',
              answer: [
                "The platform is built at the portfolio level, not per asset.",
                "Once Yardi, ARGUS, and your core systems are connected, every new property automatically flows into the same structure and reporting framework.",
                "Whether you have 20 assets or 200, the operating model stays consistent.",
              ],
            },
            {
              question: 'Can this handle different asset types and reporting formats?',
              answer: [
                "Yes. The data layer standardizes underlying structures while preserving asset-level differences.",
                "We've worked across multifamily, industrial, retail, and mixed-use portfolios — each with different reporting needs.",
                "The output stays consistent for investors, even if the underlying data varies by asset type.",
              ],
            },
            {
              question: 'What about data security across properties and fund structures?',
              answer: [
                "Data is isolated at the fund and asset level with role-based access controls.",
                "We support multi-fund environments, ensuring teams only see the data relevant to them.",
                "Infrastructure is deployed with enterprise-grade security aligned to your internal policies.",
              ],
            },
            {
              question: 'What does expansion look like after reporting is live?',
              answer: [
                "Most firms start with reporting or projected vs. actual analysis. From there, the same data layer expands into:",
                "• CapEx tracking and optimization\n• Leasing and pricing decisions\n• Portfolio benchmarking\n• Disposition and exit analysis",
                "The value compounds as more workflows sit on the same foundation.",
              ],
              isLast: true,
            },
          ]} />

        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-dark">

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(212,168,42,0.07) 0%, transparent 70%)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-36 flex flex-col items-center text-center">

          <h2 className="text-4xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight max-w-3xl text-balance">
            Your next LP meeting is already on the calendar. The question is what you&apos;re walking in with.
          </h2>

          <p className="mt-6 text-brand-muted text-lg max-w-xl leading-relaxed">
            Start with one workflow at one portco. See what the operating layer looks like before you commit to the portfolio.
          </p>

          <a href="https://calendly.com/zach-outcomecatalyst/30min" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-brand-dark font-bold text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-brand-gold/20">
            Book a Demo
          </a>

          <p className="mt-4 text-brand-muted text-sm italic">
            Start with one workflow. See results before committing to the portfolio.
          </p>

        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

      </section>
    </>
  );
}
