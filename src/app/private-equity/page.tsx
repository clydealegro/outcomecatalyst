import IndustryHero from '@/components/IndustryHero';
import VideoLightbox from '@/components/VideoLightbox';
import FAQAccordion from '@/components/FAQAccordion';
import { TrendingUp, Building2, Activity, ShieldCheck, Lock, Database, ClipboardList, FileSearch, FileSpreadsheet, Layers, Link2, Zap, BarChart2, Crosshair, LineChart, HelpCircle } from 'lucide-react';


export const metadata = {
  title: 'Private Equity — OutcomeCatalyst',
  description: 'One operating layer. Every portco. Every decision.',
};

export default function PrivateEquityPage() {
  return (
    <>
      <IndustryHero
        industry="private-equity"
        pillLabel="Private Equity"
        heading={
          <>
            One operating layer.<br />
            Every portco.<br />
            <span className="text-brand-gold">Every decision.</span>
          </>
        }
        bodyText="Your portcos send data in spreadsheets, PDFs, and emails so every decision turns into a reconciliation exercise. We give you a single operating layer across your portfolio so you can move faster on diligence, reporting, and value creation."
        ctaSubtext="See how we work across your portfolio. 30 minutes. No commitment."
        stats={[
          {
            value: '60%',
            label: 'Faster board and LP reporting cycles',
            description: 'Go from weeks of prep to decision-ready data',
          },
          {
            value: '30–40%',
            label: 'Reduction in reporting and reconciliation effort',
            description: 'Free up teams to focus on value creation, not data cleanup',
          },
          {
            value: '40–50%',
            label: 'Faster diligence cycles',
            description: 'Accelerate deal velocity with consistent, structured data',
          },
        ]}
      />

      {/* OUR PLATFORM */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0E1119' }}>

        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 55% at 50% 70%, rgba(0,180,220,0.11) 0%, rgba(0,120,180,0.06) 40%, transparent 70%)' }}></div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

          <h2 className="text-4xl lg:text-[44px] font-bold text-white leading-[1.15] tracking-tight max-w-4xl text-balance">
            Diligence takes too long. Reporting takes too many people.
          </h2>
          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <FileSearch className="w-4 h-4 text-brand-muted" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-3">Slow, Inconsistent Diligence</h3>
                <p className="text-brand-muted text-sm leading-relaxed">CIMs, financials, and ops data arrive in different formats from every target. Your team builds models manually, deal by deal. Insights depend on who&apos;s running the analysis, not on a repeatable system. Deals slow down because diligence does.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <FileSpreadsheet className="w-4 h-4 text-brand-muted" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-3">Manual, Reactive LP Reporting</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Portcos send data in Excel, email, and PDFs. Your team spends weeks reconciling it into something LPs can read. No real-time EBITDA bridge. No live KPI tracking. Every quarter, the same fire drill.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Layers className="w-4 h-4 text-brand-muted" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-3">No Repeatable Operating Model</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Value creation plans live in slide decks and update emails, not in systems. There&apos;s no way to see what&apos;s actually working across the portfolio. Every portco operates differently. Nothing you build at one company transfers to the next.</p>
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
            Your portcos keep their systems. You get a single operating view across all of them.
          </h2>
          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-6" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <Link2 className="w-5 h-5 text-brand-gold" />
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-3">Connect Fragmented Data Across Portcos</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Your portcos run SAP, QuickBooks, HubSpot, Salesforce, and a dozen tools in between. OC connects to what they already use. No migrations. No new systems for portco teams to learn. The Operating Partner gets a single view across the portfolio for the first time, without asking a single portco to change anything.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-6" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <Zap className="w-5 h-5 text-brand-gold" />
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-3">Standardize Key Workflows</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Diligence, LP reporting, value creation tracking. Right now, each one runs differently at every portco. OC turns those workflows into repeatable systems. What used to depend on one analyst or one VP now runs the same way across the fund, regardless of which portco it touches.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-6" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <BarChart2 className="w-5 h-5 text-brand-gold" />
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-3">Enable Faster, More Consistent Decisions</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Once the data is connected and the workflows are standardized, decisions get faster. EBITDA visibility in real time, not quarterly. Diligence models built in days, not weeks. LP reports generated from live data, not stale spreadsheets. AI accelerates the layer underneath. It doesn&apos;t replace it.</p>
              </div>
            </div>

          </div>

          {/* Video banner */}
          <VideoLightbox heading="PE Dashboard / Portfolio Operating View. Must show EBITDA bridge, portco KPIs, or workflow status an Operating Partner would recognize." />

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
            Here&apos;s what changed for firms that made the switch.
          </h2>
          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Card 1 */}
            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">Private Equity</span>
              <h3 className="text-white font-bold text-2xl leading-snug">43% faster diligence timelines on live deals</h3>
              <div className="flex flex-col gap-4 flex-1">
                <p className="text-brand-muted text-sm leading-relaxed">A $3B AUM middle-market private equity firm was running diligence across multiple active deals, but every process required rebuilding the same data foundation from scratch. Deal teams were pulling CIM data, QoE reports, and portfolio benchmarks into Excel, with analysts spending 60–70% of their time just aggregating and cleaning inputs.</p>
                <p className="text-brand-muted text-sm leading-relaxed">OutcomeCatalyst ingested CIMs, historical deal data, and third-party reports into a unified data layer, automatically structuring financials, normalizing metrics across deals, and enabling instant querying across both pipeline and portfolio.</p>
                <p className="text-brand-muted text-sm leading-relaxed">Within the first quarter, the firm reduced diligence timelines by 43% and was able to evaluate more deals in parallel without adding headcount. More importantly, senior deal partners had direct access to consistent data, eliminating back-and-forth with junior teams during investment committee prep.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">Private Equity</span>
              <h3 className="text-white font-bold text-2xl leading-snug">2.3x faster portfolio reporting across 18 PortCos</h3>
              <div className="flex flex-col gap-4 flex-1">
                <p className="text-brand-muted text-sm leading-relaxed">A PE-backed services platform with 18 portfolio companies was struggling to produce consistent monthly and quarterly reporting. Each PortCo operated on different ERP systems, and the finance team was manually reconciling revenue, margin, and operating metrics across spreadsheets before every board and LP update.</p>
                <p className="text-brand-muted text-sm leading-relaxed">OutcomeCatalyst connected each PortCo&apos;s ERP and operational systems into a centralized data layer, standardizing metrics like revenue recognition, cost-to-serve, and EBITDA adjustments. Reporting workflows were automated, and leadership gained a real-time view into performance across the portfolio.</p>
                <p className="text-brand-muted text-sm leading-relaxed">The finance team reduced reporting cycle time from ~3 weeks to under 1 week (2.3x faster), while uncovering recurring margin leakage patterns across multiple PortCos that had previously gone unnoticed.</p>
              </div>
            </div>

          </div>

          {/* Testimonial */}
          <div className="mt-8 rounded-2xl border border-white/[0.08] overflow-hidden relative" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{ background: 'radial-gradient(ellipse 60% 80% at 0% 100%, rgba(212,168,42,0.07) 0%, transparent 60%)' }}></div>
            {/* Top divider with gradient */}
            <div className="h-px w-full" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.06) 60%, transparent 100%)' }}></div>
            <div className="p-8 lg:p-10">
              {/* Avatar + name */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-brand-dark shrink-0" style={{ background: 'linear-gradient(135deg, #D4A82A, #a07d1a)' }}>
                  OP
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-none">Operating Partner</p>
                  <p className="text-brand-muted text-xs mt-1">Private Equity Firm ($2–5B AUM)</p>
                </div>
              </div>
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-brand-gold" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <blockquote className="text-brand-muted text-sm lg:text-base leading-relaxed">
                &ldquo;Before OutcomeCatalyst, our reporting process across portfolio companies was entirely manual. We were constantly reconciling numbers instead of understanding performance. Now we have a consistent view across every company, and our operating team can actually focus on driving EBITDA improvements.&rdquo;
              </blockquote>
            </div>
          </div>

        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

      </section>

      {/* OUR PLATFORM */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0E1119' }}>

        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 55% at 50% 70%, rgba(0,180,220,0.11) 0%, rgba(0,120,180,0.06) 40%, transparent 70%)' }}></div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

          <h2 className="text-4xl lg:text-[44px] font-bold text-white leading-[1.15] tracking-tight max-w-4xl text-balance">
            Three outcomes that change how your fund operates.
          </h2>
          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Crosshair className="w-4 h-4 text-brand-muted" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-3">Faster Diligence Cycles</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Your diligence speed is your competitive edge. Right now, CIMs, financials, and ops data get processed manually, deal by deal. When one analyst is tied up, the next deal waits. OC connects diligence workflows to systems, not individuals. The data flows in structured, the models build faster, and your team closes the gap between LOI and close.</p>
              </div>
              <div className="rounded-lg px-4 py-3 text-xs text-brand-gold leading-relaxed font-mono" style={{ background: 'rgba(212,168,42,0.08)', border: '1px solid rgba(212,168,42,0.2)' }}>
                Faster diligence cycles → more competitive in deals
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <LineChart className="w-4 h-4 text-brand-muted" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-3">Clear EBITDA Visibility Across Portcos</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Ask an Operating Partner what&apos;s driving EBITDA across the portfolio and you&apos;ll get a different answer depending on when you ask and who pulled the data. OC gives you one answer, in real time, across every portco. Revenue drivers, cost structure, margin trends. Visible. Comparable. Current.</p>
              </div>
              <div className="rounded-lg px-4 py-3 text-xs text-brand-gold leading-relaxed font-mono" style={{ background: 'rgba(212,168,42,0.08)', border: '1px solid rgba(212,168,42,0.2)' }}>
                Clear visibility into EBITDA drivers across portcos
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <BarChart2 className="w-4 h-4 text-brand-muted" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-3">Repeatable Operating Model</h3>
                <p className="text-brand-muted text-sm leading-relaxed">At 10 portcos, the Operating Partner can hold the portfolio in their head. At 25, they can&apos;t. What worked through personal relationships and quarterly check-ins doesn&apos;t scale. OC turns the workflows that matter most into repeatable systems. Reporting, onboarding, value creation tracking. The fund&apos;s operating model becomes the fund&apos;s, not any one person&apos;s.</p>
              </div>
              <div className="rounded-lg px-4 py-3 text-xs text-brand-gold leading-relaxed font-mono" style={{ background: 'rgba(212,168,42,0.08)', border: '1px solid rgba(212,168,42,0.2)' }}>
                30-40% reduction in manual reporting effort
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
            What PE Firms Ask First
          </h2>
          <p className="mt-5 text-brand-muted text-lg">Six questions we hear on every PE call. Here are the answers.</p>

          <FAQAccordion items={[
            {
              question: 'Can this work with the systems our portcos already use?',
              answer: [
                "Yes — we're designed to work with your existing stack.",
                "We don't require rip-and-replace. Most of our clients are running some combination of ERPs, CRMs, spreadsheets, and industry-specific systems across their portfolio. We connect to those systems, ingest the data, and create a unified layer on top.",
                "The goal is to make your current environment usable — not to disrupt it.",
              ],
              defaultOpen: true,
            },
            {
              question: 'What does this look like in the first 30–60 days?',
              answer: [
                "We start with one high-impact workflow.",
                "That could be diligence, portfolio reporting, revenue tracking, or a specific operational process inside a portco. In the first few weeks, we connect the relevant data sources, structure the data, and deliver a working output that your team can use immediately.",
                "You're not waiting months for value — you're seeing it in the first cycle.",
              ],
            },
            {
              question: 'How do we scale this across 10–20 companies?',
              answer: [
                "We don't treat each company as a new project.",
                "Once the initial workflow is live, we standardize it into a repeatable model. That allows us to onboard additional portcos much faster — typically by plugging into their systems and mapping them to the same structure.",
                "Over time, you're building a consistent operating layer across the portfolio, not a collection of one-off solutions.",
              ],
            },
            {
              question: 'How does pricing scale across the portfolio?',
              answer: [
                "Pricing scales with usage and impact, not complexity.",
                "Most firms start with one company or one workflow, prove the value, and then expand. As you roll out across more portcos, pricing becomes more efficient on a per-company basis.",
                "In practice, budget is rarely the constraint — it's whether the value is clear. Once it is, expansion tends to follow quickly.",
              ],
            },
            {
              question: 'What about data security across portfolio companies?',
              answer: [
                "Security is built into how we operate.",
                "We support deployment in your environment (AWS, Azure) or ours, with strict access controls, role-based permissions, and full data isolation between portcos when needed. We also implement audit logs, encryption at rest and in transit, and follow enterprise-grade security practices.",
                "We work directly with your IT and security teams to align with your requirements from day one.",
              ],
            },
            {
              question: 'How is this different from a one-off data project or consulting engagement?',
              answer: [
                "Most data projects deliver a point-in-time output.",
                "We build an operating layer that your team continues to use.",
                "Instead of producing a dashboard or a report, we connect your data, structure it, and enable workflows that run continuously — whether that's diligence, reporting, or operational decision-making.",
                "That's why our clients expand. The first use case proves the value, and then it becomes part of how the firm operates.",
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

          <a href="#" className="mt-10 inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-brand-dark font-bold text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-brand-gold/20">
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
