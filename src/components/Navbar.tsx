'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isIndustryActive =
    pathname === '/private-equity' ||
    pathname === '/real-estate' ||
    pathname === '/healthcare';

  return (
    <header
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 bg-brand-dark border-b border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/assets/oc-logo-nav-v2.png"
            alt="OutcomeCatalyst"
            width={155}
            height={40}
            style={{ width: '154.5px', height: '40px' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {/* Industry dropdown */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 text-sm font-medium transition-colors duration-150 ${
                isIndustryActive ? 'text-white' : 'text-brand-muted hover:text-white'
              }`}
            >
              Industry
              <ChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            {/* Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-[#13161D] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
              <div className="py-2 px-1">
                <Link
                  href="/private-equity"
                  className={`block px-4 py-2.5 text-sm rounded-lg transition-colors duration-150 ${
                    pathname === '/private-equity'
                      ? 'text-white bg-white/5'
                      : 'text-brand-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  Private Equity
                </Link>
                <Link
                  href="/real-estate"
                  className={`block px-4 py-2.5 text-sm rounded-lg transition-colors duration-150 ${
                    pathname === '/real-estate'
                      ? 'text-white bg-white/5'
                      : 'text-brand-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  Real Estate
                </Link>
                <Link
                  href="/healthcare"
                  className={`block px-4 py-2.5 text-sm rounded-lg transition-colors duration-150 ${
                    pathname === '/healthcare'
                      ? 'text-white bg-white/5'
                      : 'text-brand-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  Healthcare
                </Link>
              </div>
            </div>
          </div>

          <Link href="/about" className={`text-sm font-medium transition-colors duration-150 ${pathname === '/about' ? 'text-white' : 'text-brand-muted hover:text-white'}`}>About</Link>
          <Link href="/pricing" className={`text-sm font-medium transition-colors duration-150 ${pathname === '/pricing' ? 'text-white' : 'text-brand-muted hover:text-white'}`}>Pricing</Link>
          <Link href="/contact" className={`text-sm font-medium transition-colors duration-150 ${pathname === '/contact' ? 'text-white' : 'text-brand-muted hover:text-white'}`}>Contact Us</Link>
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://calendly.com/zach-outcomecatalyst/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 bg-brand-gold hover:bg-brand-gold-hover text-brand-dark text-sm font-bold rounded-lg transition-colors duration-150 whitespace-nowrap"
          >
            Book a Demo
          </a>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-brand-muted hover:text-white hover:bg-white/5 transition-colors duration-150"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-white/[0.06] bg-brand-dark ${mobileOpen ? '' : 'hidden'}`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
          <Link
            href="/private-equity"
            className={`flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ${
              pathname === '/private-equity' ? 'text-white' : 'text-brand-muted hover:text-white hover:bg-white/5'
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Private Equity
          </Link>
          <Link
            href="/real-estate"
            className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ${
              pathname === '/real-estate' ? 'text-white' : 'text-brand-muted hover:text-white hover:bg-white/5'
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Real Estate
          </Link>
          <Link
            href="/healthcare"
            className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ${
              pathname === '/healthcare' ? 'text-white' : 'text-brand-muted hover:text-white hover:bg-white/5'
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Healthcare
          </Link>
          <Link href="/about" className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ${pathname === '/about' ? 'text-white' : 'text-brand-muted hover:text-white hover:bg-white/5'}`} onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/pricing" className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ${pathname === '/pricing' ? 'text-white' : 'text-brand-muted hover:text-white hover:bg-white/5'}`} onClick={() => setMobileOpen(false)}>Pricing</Link>
          <Link href="/contact" className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ${pathname === '/contact' ? 'text-white' : 'text-brand-muted hover:text-white hover:bg-white/5'}`} onClick={() => setMobileOpen(false)}>Contact Us</Link>
          <div className="pt-3 mt-1 border-t border-white/[0.06]">
            <a
              href="https://calendly.com/zach-outcomecatalyst/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-5 py-3 bg-brand-gold hover:bg-brand-gold-hover text-brand-dark text-sm font-bold rounded-lg transition-colors duration-150"
            >
              Book a Demo
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
