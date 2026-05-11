import Link from 'next/link';
import Image from 'next/image';
import { Milestone } from 'lucide-react';
import ScrollTextReveal from '@/components/ScrollTextReveal';

export const metadata = {
  title: 'About — OutcomeCatalyst',
  description: 'Learn about OutcomeCatalyst.',
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0D0F14' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,168,42,0.07) 0%, transparent 65%)' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 lg:pt-32 pb-20 lg:pb-28">
          <div className="text-center">
            <h1 className="text-4xl lg:text-[58px] font-bold text-white leading-[1.08] tracking-tight max-w-3xl mx-auto text-balance">
              We build the data and AI infrastructure that actually runs your business.
            </h1>
            <p className="mt-5 text-brand-muted text-lg max-w-2xl mx-auto">
              Most firms are experimenting with AI. We focus on making it work by fixing the data and workflows underneath it.
            </p>
          </div>
        </div>
        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>
      </section>

      {/* SCROLL TEXT REVEAL */}
      <ScrollTextReveal />

      {/* TEAM */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0E1119' }}>

        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,168,42,0.06) 0%, transparent 65%)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">

          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-[44px] font-bold text-white leading-[1.15] tracking-tight">
              Meet our experts
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              { name: 'Zach Shapiro', role: 'Founder & CEO', photo: '/assets/zach-shapiro.png' },
              { name: 'Mariano Neto', role: 'Chief Technology Officer', photo: '/assets/mariano-neto.png' },
              { name: 'Jessica Fox', role: 'Head of Client Outcomes', photo: '/assets/jessica-fox.png' },
            ].map((member, idx) => (
              <div key={idx} className="flex flex-col gap-5">

                {/* Photo */}
                <div
                  className="w-full aspect-[3/4] rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={600}
                      height={800}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-brand-muted">
                      <div className="w-16 h-16 rounded-full" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }} />
                      <span className="text-xs tracking-widest uppercase">Photo</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-white font-bold text-lg">{member.name}</h3>
                  <p className="text-brand-muted text-sm mt-0.5">{member.role}</p>
                </div>

              </div>
            ))}

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
                <h3 className="text-white font-bold text-lg leading-snug">We deploy in weeks, not quarters.</h3>
                <div className="text-brand-muted text-sm leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
                  <p>We don&apos;t run long discovery cycles or hand off plans.</p>
                  <p>We connect your systems and deploy a working workflow in weeks — something your team actually uses.</p>
                  <p className="text-brand-gold/80">&#128073; You see real output early, not months later.</p>
                </div>
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
                <h3 className="text-white font-bold text-lg leading-snug">We work with your existing systems</h3>
                <div className="text-brand-muted text-sm leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
                  <p>We connect to the tools you already use — ERP, CRM, EMR, spreadsheets. No rip-and-replace. No disruption to how your team works.</p>
                  <p className="text-brand-gold/80">&#128073; We don&apos;t change your systems. We make them work together.</p>
                </div>
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
                <h3 className="text-white font-bold text-lg leading-snug">We prove ROI before we scale</h3>
                <div className="text-brand-muted text-sm leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
                  <p>Every engagement starts with one workflow tied to a measurable outcome — revenue, cost, or time. Once that works, expansion is straightforward.</p>
                  <p className="text-brand-gold/80">&#128073; You don&apos;t commit upfront. You expand based on results.</p>
                </div>
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
                <h3 className="text-white font-bold text-lg leading-snug">We build a foundation, not one-off solutions</h3>
                <div className="text-brand-muted text-sm leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
                  <p>Most solutions solve one problem and stop there.</p>
                  <p>We build the data and workflow layer underneath, so each new workflow builds on the last.</p>
                  <p className="text-brand-gold/80">&#128073; The system gets more valuable over time.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

      </section>

      {/* STATS */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0D0F14' }}>

        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(212,168,42,0.09) 0%, transparent 60%), radial-gradient(ellipse 50% 70% at 100% 50%, rgba(0,160,200,0.06) 0%, transparent 60%)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>

            <div className="flex flex-col gap-3 p-10" style={{ background: '#0D0F14' }}>
              <span className="text-brand-gold text-4xl lg:text-5xl font-bold leading-none">20+</span>
              <span className="text-white font-bold text-lg leading-snug">Deployments</span>
              <p className="text-brand-muted text-sm leading-relaxed">Live workflows across private equity, healthcare, and real estate</p>
            </div>

            <div className="flex flex-col gap-3 p-10" style={{ background: '#0D0F14' }}>
              <span className="text-brand-gold text-4xl lg:text-5xl font-bold leading-none">3</span>
              <span className="text-white font-bold text-lg leading-snug">Regulated Industries</span>
              <p className="text-brand-muted text-sm leading-relaxed">Built for complex, multi-system environments — not generic use cases</p>
            </div>

            <div className="flex flex-col gap-3 p-10" style={{ background: '#0D0F14' }}>
              <span className="text-brand-gold text-4xl lg:text-5xl font-bold leading-none">100+</span>
              <span className="text-white font-bold text-lg leading-snug">Data Sources Connected</span>
              <p className="text-brand-muted text-sm leading-relaxed">ERP, CRM, EMR, property systems, and everything in between</p>
            </div>

            <div className="flex flex-col gap-3 p-10" style={{ background: '#0D0F14' }}>
              <span className="text-brand-gold text-4xl lg:text-5xl font-bold leading-none">4–6 Wk</span>
              <span className="text-white font-bold text-lg leading-snug">Go-Live</span>
              <p className="text-brand-muted text-sm leading-relaxed">From disconnected systems to a working workflow your team uses</p>
            </div>

          </div>
        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-dark">

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(212,168,42,0.07) 0%, transparent 70%)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-36 flex flex-col items-center text-center">

          <h2 className="text-4xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight max-w-3xl text-balance">
            Bring your messiest data problem. We&apos;ll map your first workflow.
          </h2>

          <a
            href="https://calendly.com/zach-outcomecatalyst/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-brand-dark font-bold text-base transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-brand-gold/20"
          >
            Map My First Workflow
          </a>

          <p className="mt-4 text-brand-muted text-sm italic">
            30 minutes. Bring your messiest data problem.
          </p>

        </div>

        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.12) 70%, transparent)' }}></div>

      </section>
    </>
  );
}
