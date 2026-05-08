'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">

        {/* Top footer row */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 pb-12 border-b border-white/[0.07]">

          {/* Brand col */}
          <div className="flex flex-col gap-5 max-w-xs">
            <img
              src="/assets/oc-logo-nav-v2.png"
              alt="OutcomeCatalyst"
              style={{ width: '154.5px', height: '40px', objectFit: 'contain', objectPosition: 'left' }}
            />
            <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
              Unified operating layer for investment firms and healthcare organizations. Connect fragmented data, standardize workflows, enable faster decisions across your portfolio.
            </p>
          </div>

          {/* Right cols group */}
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-16">

          {/* Industry col */}
          <div className="flex flex-col gap-4">
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase">Industry</p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/private-equity"
                  className={`text-sm transition-colors duration-150 ${
                    pathname === '/private-equity' ? 'text-white hover:text-brand-gold' : 'text-brand-muted hover:text-white'
                  }`}
                >
                  Private Equity
                </Link>
              </li>
              <li>
                <Link
                  href="/real-estate"
                  className={`text-sm transition-colors duration-150 ${
                    pathname === '/real-estate' ? 'text-white hover:text-brand-gold' : 'text-brand-muted hover:text-white'
                  }`}
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link
                  href="/healthcare"
                  className={`text-sm transition-colors duration-150 ${
                    pathname === '/healthcare' ? 'text-white hover:text-brand-gold' : 'text-brand-muted hover:text-white'
                  }`}
                >
                  Healthcare
                </Link>
              </li>
            </ul>
          </div>

          {/* Company col */}
          <div className="flex flex-col gap-4">
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase">Company</p>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className={`text-sm transition-colors duration-150 ${pathname === '/about' ? 'text-white hover:text-brand-gold' : 'text-brand-muted hover:text-white'}`}>About</Link></li>
              <li><Link href="/pricing" className={`text-sm transition-colors duration-150 ${pathname === '/pricing' ? 'text-white hover:text-brand-gold' : 'text-brand-muted hover:text-white'}`}>Pricing</Link></li>
              <li><Link href="/contact" className={`text-sm transition-colors duration-150 ${pathname === '/contact' ? 'text-white hover:text-brand-gold' : 'text-brand-muted hover:text-white'}`}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Connect col */}
          <div className="flex flex-col gap-4">
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase">Connect</p>
            <ul className="flex flex-col gap-3">
              <li><a href="https://www.linkedin.com/in/zach-shapiro/" target="_blank" rel="noopener noreferrer" className="text-brand-muted text-sm hover:text-white transition-colors duration-150">LinkedIn</a></li>
            </ul>
          </div>

          </div>{/* end right cols group */}

        </div>

        {/* Bottom footer row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-white/30 text-xs">© 2026 OutcomeCatalyst. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors duration-150">Privacy Policy</Link>
            <Link href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors duration-150">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
