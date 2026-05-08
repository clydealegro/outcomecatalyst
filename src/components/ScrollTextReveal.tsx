'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Section = {
  id: string;
  label: string;
  content: string;
};

const sections: Section[] = [
  {
    id: 'problem',
    label: 'THE PROBLEM',
    content:
      "I spent years working with investment firms and healthcare organizations that had no shortage of data and no way to actually use it. Every team had their own version of the truth buried in spreadsheets, reports, or systems that didn't talk to each other. Deals slowed down because analysts were stitching together data manually. Operators were making decisions off outdated numbers. In healthcare, revenue was leaking across workflows that nobody could fully see end-to-end. The frustrating part wasn't a lack of tools — it was that everything already existed. It just wasn't connected in a way that anyone could trust or act on.",
  },
  {
    id: 'founding-insight',
    label: 'THE FOUNDING INSIGHT',
    content:
      "Most solutions I saw tried to fix this at the surface — new dashboards, new tools, or one-off AI workflows. They worked in isolation, but they didn't scale because the underlying data was still fragmented. That's the gap OutcomeCatalyst was built to solve. Instead of starting with tools or models, we focus on the layer underneath — the governed data and workflow foundation that everything runs on. Once that exists, automation works, reporting becomes reliable, and AI actually produces something useful. Without it, you're just moving faster through the same broken processes.",
  },
  {
    id: 'where-we-are',
    label: 'WHERE WE ARE NOW',
    content:
      "Today, we work with private equity firms, healthcare organizations, and real estate platforms that all have the same underlying problem: complex systems, fragmented data, and workflows that don't scale. We typically start with one high-impact use case — something tied to revenue, reporting, or operations — and deploy it in weeks. From there, it expands into a system that connects the rest of the business. The outcomes are measurable early — faster diligence cycles, reduced reporting overhead, or in some cases millions in recovered revenue — but the real value is what happens after: a foundation that keeps improving as more workflows are added.",
  },
];

// px of scroll per section — enough to read comfortably
const SCROLL_PER_SECTION = 600;

function splitWords(text: string) {
  return text.split(' ');
}

export default function ScrollTextReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[][]>([[], [], []]);
  const [activeSection, setActiveSection] = useState(0);
  const [wordProgress, setWordProgress] = useState([0, 0, 0]);
  const [containerHeight, setContainerHeight] = useState(0);

  // Measure sticky element once rendered, then set container height
  useLayoutEffect(() => {
    if (stickyRef.current) {
      const stickyH = stickyRef.current.offsetHeight;
      setContainerHeight(stickyH + sections.length * SCROLL_PER_SECTION);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || containerHeight === 0) return;

    const totalScrollPx = sections.length * SCROLL_PER_SECTION;

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: `+=${totalScrollPx}`,
      pin: stickyRef.current,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        const sectionProgress = progress * sections.length;
        const currentSection = Math.min(Math.floor(sectionProgress), sections.length - 1);
        const withinSection = sectionProgress - currentSection;

        setActiveSection(currentSection);
        setWordProgress((prev) => {
          const next = [...prev];
          next[currentSection] = withinSection;
          for (let i = 0; i < currentSection; i++) next[i] = 1;
          for (let i = currentSection + 1; i < sections.length; i++) next[i] = 0;
          return next;
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [containerHeight]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: containerHeight > 0 ? `${containerHeight}px` : 'auto', backgroundColor: '#08090C' }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0"
        style={{ backgroundColor: '#08090C' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32 w-full grid grid-cols-[200px_1fr] gap-16 lg:gap-24 items-start">

          {/* Left nav */}
          <div className="flex flex-col gap-6 pt-2">
            {sections.map((s, i) => (
              <button
                key={s.id}
                className="text-left transition-colors duration-300"
                style={{
                  fontFamily: 'monospace',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  color: activeSection === i ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.25)',
                  cursor: 'default',
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Right content */}
          <div className="relative">
            {sections.map((s, sIdx) => {
              const words = splitWords(s.content);
              const progress = wordProgress[sIdx];
              const revealedCount = Math.floor(progress * words.length);
              const isActive = activeSection === sIdx;

              return (
                <p
                  key={s.id}
                  className="flex flex-wrap gap-x-[0.35em] gap-y-1"
                  style={{
                    display: isActive ? 'flex' : 'none',
                    fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                    fontSize: '32px',
                    lineHeight: '36px',
                    fontWeight: 500,
                  }}
                >
                  {words.map((word, wIdx) => (
                    <span
                      key={wIdx}
                      ref={(el) => {
                        wordRefs.current[sIdx][wIdx] = el;
                      }}
                      style={{
                        color: wIdx < revealedCount ? '#ffffff' : 'rgba(255,255,255,0.15)',
                        transition: 'color 0.08s ease',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </p>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
