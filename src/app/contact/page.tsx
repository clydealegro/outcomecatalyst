import { Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact Us — OutcomeCatalyst',
  description: 'Get in touch with the OutcomeCatalyst team.',
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#0E1119' }}>

      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(212,168,42,0.06) 0%, transparent 70%)' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-20">

          {/* Left — heading + form */}
          <div>
            <h1 className="text-4xl lg:text-[48px] font-bold text-white leading-[1.1] tracking-tight max-w-xl">
              Bring your messiest data problem. We&apos;ll map your first workflow.
            </h1>
            <p className="mt-5 text-brand-muted text-base leading-relaxed max-w-lg">
              We&apos;ll review your systems and respond with a clear point of view of where to start, what to fix, and what the ROI could look like.
            </p>

            <form className="mt-10 flex flex-col gap-6">

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-colors duration-150"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-medium">Company</label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-colors duration-150"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="work@company.com"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-colors duration-150"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-medium">
                    Role / Title <span className="text-brand-muted font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. VP Operations"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-colors duration-150"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                </div>
              </div>

              {/* Industry */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-medium">Industry</label>
                <select
                  className="w-full px-4 py-3 rounded-xl text-sm text-brand-muted outline-none transition-colors duration-150 appearance-none"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <option value="" style={{ background: '#0E1119' }}>Select your industry</option>
                  <option value="pe" style={{ background: '#0E1119' }}>Private Equity</option>
                  <option value="re" style={{ background: '#0E1119' }}>Real Estate</option>
                  <option value="healthcare" style={{ background: '#0E1119' }}>Healthcare</option>
                  <option value="other" style={{ background: '#0E1119' }}>Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-medium">Message</label>
                <textarea
                  rows={5}
                  placeholder="What's the workflow or data problem you're trying to fix?"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-colors duration-150 resize-none"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-brand-dark font-bold text-sm transition-all duration-200 hover:scale-[1.01] shadow-lg shadow-brand-gold/20"
                >
                  Send My Message
                </button>
                <p className="text-center text-brand-muted text-xs italic">
                  You&apos;ll get a real response — not a generic follow-up.
                </p>
              </div>

            </form>
          </div>

          {/* Right — cards */}
          <div className="flex flex-col gap-5 lg:pt-2">

            {/* Card 1 — Prefer a call? */}
            <div className="rounded-2xl border border-white/[0.08] p-7 flex flex-col gap-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <span className="text-white/40 text-[10px] font-semibold tracking-widest uppercase">Prefer a call?</span>
              <h3 className="text-white font-bold text-xl leading-snug">Schedule time with Zach</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Skip the form. Bring your systems, your workflows, and what&apos;s breaking.
              </p>
              <a href="#" className="text-brand-gold text-sm font-semibold hover:underline mt-1 w-fit">
                Pick a time →
              </a>
            </div>

            {/* Card 2 — Direct contact */}
            <div className="rounded-2xl border border-white/[0.08] p-7 flex flex-col gap-6" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <span className="text-white/40 text-[10px] font-semibold tracking-widest uppercase">Direct Contact</span>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <Mail className="w-4 h-4 text-brand-muted" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-semibold tracking-widest uppercase mb-1">Email</p>
                  <a href="mailto:zach@outcomecatalyst.io" className="text-white text-sm hover:text-brand-gold transition-colors duration-150 font-medium">
                    zach@outcomecatalyst.io
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 font-bold text-sm text-brand-muted" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  in
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-semibold tracking-widest uppercase mb-1">LinkedIn</p>
                  <a href="#" className="text-white text-sm hover:text-brand-gold transition-colors duration-150 font-medium">
                    Zach&apos;s LinkedIn profile link
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
