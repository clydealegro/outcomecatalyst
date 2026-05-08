import { TrendingUp, Building2, Activity, LucideIcon } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
  description: string;
}

interface IndustryHeroProps {
  industry: 'private-equity' | 'real-estate' | 'healthcare';
  pillLabel: string;
  heading: React.ReactNode;
  bodyText: string;
  ctaSubtext: string;
  stats: Stat[];
}

const iconMap: Record<string, LucideIcon> = {
  'private-equity': TrendingUp,
  'real-estate': Building2,
  'healthcare': Activity,
};

export default function IndustryHero({
  industry,
  pillLabel,
  heading,
  bodyText,
  ctaSubtext,
  stats,
}: IndustryHeroProps) {
  const Icon = iconMap[industry];

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#010215' }}>


      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Main content */}
        <div className="pt-24 pb-16 lg:pt-32 lg:pb-20" style={{ marginTop: '-50px' }}>

          {/* Industry pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/30 mb-6" style={{ background: 'rgba(212,168,42,0.08)' }}>
            <Icon className="w-3 h-3 text-brand-gold" />
            <span className="text-brand-gold text-[11px] font-semibold tracking-widest uppercase">{pillLabel}</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl lg:text-[52px] font-bold leading-[1.1] tracking-tight text-white max-w-4xl text-balance">
            {heading}
          </h1>

          {/* Body text */}
          <div className="mt-8 max-w-[550px] space-y-4">
            <p className="text-brand-muted text-lg leading-relaxed">{bodyText}</p>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <a href="#" className="group inline-flex items-center gap-2.5 px-8 py-4 bg-brand-gold hover:bg-brand-gold-hover text-brand-dark text-base font-bold rounded-xl transition-all duration-200 hover:gap-4">
              Book a Demo
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
            <p className="mt-3 text-sm text-brand-muted opacity-50">{ctaSubtext}</p>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.15) 70%, transparent)' }}></div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-14">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-[42px] font-bold text-brand-gold leading-none">{stat.value}</div>
              <div className="mt-3 text-sm font-semibold text-white">{stat.label}</div>
              <div className="mt-1.5 text-sm text-brand-muted leading-relaxed">{stat.description}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
