import IndustryHero from '@/components/IndustryHero';
import VideoLightbox from '@/components/VideoLightbox';
import FAQAccordion from '@/components/FAQAccordion';
import { TrendingUp, Building2, Activity, ShieldCheck, Lock, Database, ClipboardList, FileSearch, FileSpreadsheet, Layers, Link2, Zap, BarChart2, Crosshair, LineChart, HelpCircle, AlertTriangle, CircleDollarSign, FileText, BadgeCheck, Search } from 'lucide-react';


export const metadata = {
  title: 'Healthcare — OutcomeCatalyst',
  description: 'One operating layer. Every portco. Every decision.',
};

export default function HealthcarePage() {
  return (
    <>
      <IndustryHero
        industry="healthcare"
        pillLabel="Healthcare"
        heading={
          <>
            Disconnected systems are costing you revenue.{' '}
            <span className="text-brand-gold">We make them work together.</span>
          </>
        }
        bodyText="Your revenue lives across EHR, billing, CRM, and operational systems that don't talk to each other. We connect and govern that data so you can see where money is leaking and fix it."
        ctaSubtext="See how we trace revenue leakage across your workflows. HIPAA-compliant. 30 minutes."
        heroImage="/assets/oc-healthcare-hero-g1.png"
        headingMaxWidth="max-w-xl"
        stats={[
          {
            value: '$2M/month',
            label: 'Revenue recovered',
            description: '',
          },
          {
            value: '15–25%',
            label: 'Reduction in claim leakage',
            description: '',
          },
          {
            value: '3–5x',
            label: 'Faster revenue reconciliation',
            description: '',
          },
        ]}
      />

      {/* OUR PLATFORM */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0E1119' }}>

        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 55% at 50% 70%, rgba(0,180,220,0.11) 0%, rgba(0,120,180,0.06) 40%, transparent 70%)' }}></div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

          <h2 className="text-4xl lg:text-[44px] font-bold text-white leading-[1.15] tracking-tight max-w-4xl text-balance">
            Revenue is leaking across systems you can&apos;t reconcile.
          </h2>
          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <ClipboardList className="w-4 h-4 text-brand-muted" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-3">Revenue Is Lost Before Billing Even Starts</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Referrals aren&apos;t followed up. Patients aren&apos;t scheduled in time. Intake falls through gaps between systems.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">By the time billing starts, revenue has already been lost and no one has a clear view of where it happened.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <AlertTriangle className="w-4 h-4 text-brand-muted" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-3">No End-to-End View of Revenue</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Revenue moves across referrals, eligibility, charge capture, billing, and collections.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">Each step lives in a different system. No one sees the full path so leakage goes unnoticed.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <CircleDollarSign className="w-4 h-4 text-brand-muted" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-3">You Can&apos;t See Where the Process Breaks</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Denied claims, missed charges, delayed collections — but no clear root cause.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">Decisions are made on partial data instead of real system-level insight.</p>
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
                  <span className="text-white text-sm font-semibold">HIPAA Compliant</span>
                </div>

                <div className="w-px h-5 bg-white/10 hidden md:block"></div>

                <div className="flex items-center gap-2.5">
                  <BadgeCheck className="w-4 h-4 text-brand-muted shrink-0" />
                  <span className="text-white text-sm font-semibold">SOC 2 Type II</span>
                </div>

                <div className="w-px h-5 bg-white/10 hidden md:block"></div>

                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-brand-muted shrink-0" />
                  <span className="text-white text-sm font-semibold">BAA Available</span>
                </div>

                <div className="w-px h-5 bg-white/10 hidden md:block"></div>

                <div className="flex items-center gap-2.5">
                  <Lock className="w-4 h-4 text-brand-muted shrink-0" />
                  <span className="text-white text-sm font-semibold">PHI Encryption</span>
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
            We don&apos;t touch your systems. We make them work together across the entire revenue lifecycle.
          </h2>
          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-6" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <Search className="w-5 h-5 text-brand-gold" />
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-3">See Where Revenue Is Lost</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Revenue breaks before, during, and after billing — across referrals, scheduling, eligibility, charge capture, and collections.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">We connect those systems so you can see exactly where patients drop off and where revenue is lost.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-6" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <Zap className="w-5 h-5 text-brand-gold" />
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-3">Fix the Breakpoints Automatically</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Missed charges, delayed follow-ups, and preventable denials are identified and corrected in real time.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">Manual checks are replaced with workflows that catch and prevent revenue loss across systems.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-6" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <TrendingUp className="w-5 h-5 text-brand-gold" />
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-3">Track Revenue End-to-End</h3>
                <p className="text-brand-muted text-sm leading-relaxed">From first referral to final payment, revenue is tracked across systems — not just within one.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-3">You get a complete view of how money actually moves through your organization.</p>
              </div>
            </div>

          </div>

          {/* Video banner */}
          <VideoLightbox pillLabel="Healthcare Dashboard" heading="Healthcare Dashboard / Workflow Revenue Tracking View. Must show a real output a COO would recognize: referral-to-collection pipeline, denial root causes, revenue by workflow stage." />

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

          <h2 className="text-4xl lg:text-[52px] font-bold text-white leading-[1.1] tracking-tight max-w-4xl">
            $2M/month recovered.<br />And it wasn&apos;t a billing problem.
          </h2>
          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Card 1 */}
            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="flex items-center gap-2">
                <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">Healthcare</span>
                <span className="text-white/20 text-xs">·</span>
                <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">Clinical Trials</span>
              </div>
              <p className="text-brand-muted text-sm leading-relaxed">A clinical trials operator had revenue fragmented across two CRMs and an ERP system. Finance spent weeks manually reconciling payments, with no clear view of what had been collected, missed, or delayed.</p>
              <div className="text-brand-gold text-3xl font-bold">$2M/month recovered</div>
              <div className="flex flex-col gap-3 flex-1">
                <p className="text-brand-muted text-sm leading-relaxed">OutcomeCatalyst connected the systems and automated reconciliation across the full revenue lifecycle.</p>
                <p className="text-brand-muted text-sm leading-relaxed">Revenue that was previously lost in disconnected workflows became visible and recoverable in real time.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">Healthcare</span>
              <p className="text-brand-muted text-sm leading-relaxed">A hospital system had no visibility into referral follow-through and scheduling delays. Patients were dropping off between intake and scheduling, but no system captured where or why.</p>
              <div className="text-brand-gold text-3xl font-bold">18% patient drop-off identified</div>
              <div className="flex flex-col gap-3 flex-1">
                <p className="text-brand-muted text-sm leading-relaxed">OutcomeCatalyst connected referral, scheduling, and operational systems.</p>
                <p className="text-brand-muted text-sm leading-relaxed">The organization could finally see where patients were lost — and fix the workflow before revenue disappeared.</p>
              </div>
            </div>

          </div>

          {/* Testimonial */}
          <div className="mt-8 rounded-2xl border border-white/[0.08] overflow-hidden relative" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{ background: 'radial-gradient(ellipse 60% 80% at 0% 100%, rgba(212,168,42,0.07) 0%, transparent 60%)' }}></div>
            <div className="h-px w-full" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.06) 60%, transparent 100%)' }}></div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-brand-dark shrink-0" style={{ background: 'linear-gradient(135deg, #D4A82A, #a07d1a)' }}>
                  CF
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-none">CFO</p>
                  <p className="text-brand-muted text-xs mt-1">$60M Revenue Clinical Trials Portfolio Company</p>
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
                &ldquo;Before OC, we didn&apos;t know where revenue was being lost across systems. Now we see it clearly and fix it before it impacts cash flow.&rdquo;
              </blockquote>
            </div>
          </div>

        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

      </section>

      {/* PHI / SECURITY */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0E1119' }}>

        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 55% at 50% 70%, rgba(0,180,220,0.11) 0%, rgba(0,120,180,0.06) 40%, transparent 70%)' }}></div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

          <h2 className="text-4xl lg:text-[44px] font-bold text-white leading-[1.15] tracking-tight max-w-4xl text-balance">
            Built for environments where PHI handling, security, and auditability are non-negotiable.
          </h2>
          <p className="mt-5 text-brand-muted text-lg max-w-2xl">Your CIO will ask about PHI handling before anything else. Here&apos;s the answer.</p>
          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <ShieldCheck className="w-4 h-4 text-brand-muted" />
              </div>
              <div className="flex-1">
                <span className="text-brand-gold text-[10px] font-semibold tracking-widest uppercase">HIPAA Compliance</span>
                <h3 className="text-white font-bold text-lg mt-2 mb-3">HIPAA-Compliant Data Handling</h3>
                <p className="text-brand-muted text-sm leading-relaxed">We operate under HIPAA-compliant environments with full encryption, access controls, and audit logging. All PHI is handled under strict governance aligned with your organization&apos;s compliance requirements.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <FileText className="w-4 h-4 text-brand-muted" />
              </div>
              <div className="flex-1">
                <span className="text-brand-gold text-[10px] font-semibold tracking-widest uppercase">PHI Data Handling</span>
                <h3 className="text-white font-bold text-lg mt-2 mb-3">BAA-Supported Architecture</h3>
                <p className="text-brand-muted text-sm leading-relaxed">We sign Business Associate Agreements and operate as a compliant data partner. Data handling, access, and processing follow the same standards required across your organization.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <ClipboardList className="w-4 h-4 text-brand-muted" />
              </div>
              <div className="flex-1">
                <span className="text-brand-gold text-[10px] font-semibold tracking-widest uppercase">Audit Readiness</span>
                <h3 className="text-white font-bold text-lg mt-2 mb-3">Role-Based Access and Full Auditability</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Access is restricted by role and fully logged. Every data interaction is traceable, supporting audits, compliance reviews, and internal governance.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Link2 className="w-4 h-4 text-brand-muted" />
              </div>
              <div className="flex-1">
                <span className="text-brand-gold text-[10px] font-semibold tracking-widest uppercase">EHR Integration</span>
                <h3 className="text-white font-bold text-lg mt-2 mb-3">Flexible Deployment Models</h3>
                <p className="text-brand-muted text-sm leading-relaxed">We support both client-hosted and managed environments. PHI can remain within your infrastructure or be handled in secure, governed environments under BAA depending on your requirements.</p>
              </div>
            </div>

          </div>

        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

      </section>

      {/* THREE OUTCOMES */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0D0F14' }}>

        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 75% 50% at 50% 100%, rgba(212,168,42,0.08) 0%, rgba(160,120,20,0.04) 50%, transparent 75%)' }}></div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

          <h2 className="text-4xl lg:text-[44px] font-bold text-white leading-[1.15] tracking-tight max-w-4xl text-balance">
            Find where revenue is lost. Recover it. Then scale it.
          </h2>
          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Search className="w-4 h-4 text-brand-muted" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-3">Quantify Revenue Leakage</h3>
                <p className="text-brand-muted text-sm leading-relaxed">You can&apos;t fix what you can&apos;t see.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-2">We map revenue across referrals, scheduling, eligibility, billing, and collections — showing exactly where money is lost.</p>
              </div>
              <div className="rounded-lg px-4 py-3 text-xs text-brand-gold leading-relaxed font-mono" style={{ background: 'rgba(212,168,42,0.08)', border: '1px solid rgba(212,168,42,0.2)' }}>
                Identify $1M+ in recoverable revenue
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Zap className="w-4 h-4 text-brand-muted" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-3">Fix the Root Causes</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Leakage isn&apos;t random — it comes from repeatable breakdowns.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-2">We surface and automate fixes across eligibility, charge capture, denials, and follow-ups so the same issues stop happening.</p>
              </div>
              <div className="rounded-lg px-4 py-3 text-xs text-brand-gold leading-relaxed font-mono" style={{ background: 'rgba(212,168,42,0.08)', border: '1px solid rgba(212,168,42,0.2)' }}>
                Reduce denials and missed charges in weeks
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] p-8 flex flex-col gap-5" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <TrendingUp className="w-4 h-4 text-brand-muted" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-3">Scale Across the Revenue Lifecycle</h3>
                <p className="text-brand-muted text-sm leading-relaxed">Once one workflow is fixed, the same model expands across the organization.</p>
                <p className="text-brand-muted text-sm leading-relaxed mt-2">Revenue is tracked end-to-end — from referral to final payment — across all systems.</p>
              </div>
              <div className="rounded-lg px-4 py-3 text-xs text-brand-gold leading-relaxed font-mono" style={{ background: 'rgba(212,168,42,0.08)', border: '1px solid rgba(212,168,42,0.2)' }}>
                Revenue tracked across every system, not just billing
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
          <h2 className="text-4xl lg:text-[52px] font-bold text-white leading-[1.1] tracking-tight max-w-3xl">
            The Questions Every Healthcare Buyer Asks<br />Before Saying Yes
          </h2>
          <p className="mt-5 text-brand-muted text-lg">These are the questions we get before every healthcare engagement — from CFOs, CIOs, and operators. Here&apos;s how we answer them.</p>

          <FAQAccordion items={[
            {
              question: 'Will this disrupt our EHR or clinical workflows?',
              answer: [
                "No.",
                "We integrate directly with your EHR, billing, and operational systems without changing how clinicians or staff work.",
                "We don't write into clinical systems or require new tools. Your workflows stay the same — we just make the data consistent underneath.",
              ],
              defaultOpen: true,
            },
            {
              question: "Can you show us exactly where we're losing revenue?",
              answer: [
                "Yes — that's where we start.",
                "We map revenue across referrals, scheduling, eligibility, billing, and collections to show exactly where patients drop off and where revenue is lost.",
                "Most organizations identify significant recoverable revenue within the first few weeks.",
              ],
            },
            {
              question: 'How quickly can we see ROI?',
              answer: [
                "Typically within 4–6 weeks.",
                "We start with one high-impact workflow, connect the systems, and make the data usable immediately.",
                "Clients usually identify and begin recovering revenue before expanding.",
              ],
            },
            {
              question: 'Will this impact clinical workflows?',
              answer: [
                "No.",
                "We operate on the data layer — not the clinical layer.",
                "There's no change to how clinicians document, treat patients, or interact with systems.",
              ],
            },
            {
              question: 'How do you handle PHI and what is your HIPAA compliance posture?',
              answer: [
                "We operate in HIPAA-compliant environments and sign Business Associate Agreements.",
                "PHI is encrypted, access is role-based and logged, and all data handling aligns with your organization's security policies.",
                "We support both client-hosted and managed environments depending on your requirements.",
              ],
            },
            {
              question: 'How does pricing work for organizations with multiple facilities or service lines?',
              answer: [
                "We start with one workflow and expand based on value.",
                "Pricing scales with usage and scope — not upfront platform cost.",
                "Most organizations begin with a single use case and grow as ROI is proven.",
              ],
            },
            {
              question: 'How is this different from traditional RCM or analytics tools?',
              answer: [
                "Traditional tools optimize one part of the process.",
                "We connect the entire revenue lifecycle across systems — so you can see and fix issues that don't exist within any single system.",
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
            You&apos;re already losing revenue.<br />You just can&apos;t see where.
          </h2>

          <p className="mt-6 text-brand-muted text-lg max-w-xl leading-relaxed">
            Start with one workflow. See exactly where revenue is leaking — using your own systems.
          </p>

          <a href="https://calendly.com/zach-outcomecatalyst/30min" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-brand-dark font-bold text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-brand-gold/20">
            Book a Demo
          </a>

          <p className="mt-4 text-brand-muted text-sm italic">
            30 minutes. Your data. No generic demo.
          </p>

        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

      </section>
    </>
  );
}
