'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const LOOM_URL = 'https://www.loom.com/embed/e16fb0b2f21844b599224d4c0151bfea?autoplay=1';

export default function VideoLightbox({ heading = 'See how OutcomeCatalyst connects your data in minutes', pillLabel = 'See how it works' }: { heading?: string; pillLabel?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeVideo();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  function openVideo() {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function closeVideo() {
    setIsOpen(false);
    document.body.style.overflow = '';
  }

  return (
    <>
      {/* Video banner */}
      <div className="mt-5 relative rounded-2xl border border-white/[0.08] overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <div className="flex flex-col lg:flex-row items-center min-h-[260px]">

          {/* Left: text */}
          <div className="relative z-10 p-10 lg:p-12 lg:w-1/2 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/25 w-fit" style={{ background: 'rgba(212,168,42,0.08)' }}>
              <svg className="w-3 h-3 text-brand-gold" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><polygon points="10,8 16,12 10,16" fill="currentColor"/></svg>
              <span className="text-brand-gold text-[10px] font-semibold tracking-widest uppercase">{pillLabel}</span>
            </div>
            <h3 className="text-white font-bold text-3xl leading-tight text-balance">{heading}</h3>
            <button
              onClick={openVideo}
              className="inline-flex items-center gap-2 text-brand-gold text-sm font-semibold hover:gap-3 transition-all duration-150 w-fit"
            >
              Watch video <span>→</span>
            </button>
          </div>

          {/* Right: visual + play button */}
          <div className="absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden">
            <img
              src="/assets/oc-video-bg.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 55%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                WebkitMaskComposite: 'source-in',
                maskImage: 'linear-gradient(to right, transparent 0%, black 55%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                maskComposite: 'intersect',
              }}
            />
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 90% 100% at 75% 50%, rgba(15,60,120,0.7) 0%, rgba(10,30,80,0.4) 45%, transparent 75%)' }}></div>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(0,100,160,0.25) 0%, transparent 60%)' }}></div>
            <button
              onClick={openVideo}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center shadow-lg shadow-brand-gold/30 group-hover:scale-105 group-hover:bg-brand-gold-hover transition-all duration-200">
                <svg className="w-6 h-6 ml-1" viewBox="0 0 24 24" fill="#0D0F14" xmlns="http://www.w3.org/2000/svg"><polygon points="5,3 19,12 5,21"/></svg>
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* YouTube Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeVideo}
          />
          <div className="relative z-10 w-full max-w-4xl mx-4">
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white/70 hover:text-white flex items-center gap-2 text-sm transition-colors duration-150"
            >
              <X className="w-4 h-4" /> Close
            </button>
            <div className="rounded-2xl overflow-hidden aspect-video bg-black">
              <iframe
                width="100%"
                height="100%"
                src={LOOM_URL}
                title="OutcomeCatalyst Platform Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
