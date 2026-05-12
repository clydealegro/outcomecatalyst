'use client';

import React, { useState } from 'react';

type AnswerItem = string | { bullets: string[] };

type FAQItem = {
  question: string;
  answer: AnswerItem[];
  defaultOpen?: boolean;
  isLast?: boolean;
};

const defaultFaqs: FAQItem[] = [
  {
    question: 'Can this work with the systems we already use?',
    answer: [
      "Yes. We connect directly to your existing systems — ERP, CRM, EHR, Yardi, ARGUS, and more. There's no rip-and-replace. Your team keeps working where they already are. We just make the data consistent underneath.",
      "Most clients are live in 4–6 weeks without disrupting workflows.",
    ],
    defaultOpen: true,
  },
  {
    question: 'What does this look like in the first 30–60 days?',
    answer: [
      'We start with one high-impact workflow — typically reporting, diligence, or revenue tracking. In the first few weeks, your systems are connected and the data is structured. By week 4–6, that workflow is live and running on real data.',
      'You see results before expanding.',
    ],
  },
  {
    question: 'How does this scale across our portfolio / properties / facilities?',
    answer: [
      "Once the data layer is in place, every new asset, company, or system plugs into the same structure. You're not rebuilding workflows each time — you're extending what already works.",
      "That's what allows this to scale from one workflow to the entire organization.",
    ],
  },
  {
    question: 'How do you handle PHI and what is your HIPAA compliance posture?',
    answer: [
      'We implement role-based access controls and data isolation aligned with your security requirements. PHI can be de-identified, restricted, or segmented based on use case.',
      'We build the data layer inside governed environments — not as a separate, unmanaged tool.',
    ],
  },
  {
    question: 'How does pricing scale?',
    answer: [
      'We start with one workflow and expand based on value delivered. Pricing scales with usage and scope — not upfront platform cost. Most clients begin small and grow as the impact becomes clear.',
    ],
  },
  {
    question: 'How is this different from a point solution or one-off consulting project?',
    answer: [
      'Point solutions solve one workflow. Consulting projects end. We build a governed data layer that multiple workflows run on — so every new use case builds on the same foundation.',
      "That's what allows results to compound instead of resetting with each project.",
    ],
  },
  {
    question: 'How is this different from building this internally or using our data team?',
    answer: [
      "Most internal teams are capable of building this. The issue is they're not set up to do it quickly or consistently. They're managing ad hoc requests, maintaining existing systems, and building one-off solutions. The result is progress, but not a unified foundation.",
      "We focus on one outcome: getting a working, governed data layer into production in 4–6 weeks. After that, your team doesn't start from scratch — they build on something that already works.",
    ],
    isLast: true,
  },
];

export default function FAQAccordion({ items }: { items?: FAQItem[] }) {
  const faqs = items ?? defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-16 flex flex-col" id="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`faq-item border-t border-white/[0.08] ${faq.isLast ? 'border-b border-b-white/[0.08]' : ''}`}
          >
            <button
              className="faq-trigger w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span
                className={`faq-question font-semibold text-lg transition-colors duration-200 ${
                  isOpen ? 'text-brand-gold' : 'text-white'
                }`}
              >
                {faq.question}
              </span>
              <span
                className={`faq-icon shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 text-lg font-light select-none ${
                  isOpen
                    ? 'border-brand-gold/50 text-brand-gold'
                    : 'border-white/20 text-white/60'
                }`}
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div className={`faq-answer max-w-3xl ${isOpen ? 'faq-expanded' : ''}`}>
              {faq.answer.map((item, idx) => {
                if (typeof item === 'object' && 'bullets' in item) {
                  return (
                    <ul key={idx} className={`flex flex-col gap-1.5 list-none ${idx > 0 ? 'mt-3' : ''}`}>
                      {item.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-brand-muted text-base leading-relaxed">
                          <span className="mt-[0.45em] w-1 h-1 rounded-full bg-brand-muted shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className={`text-brand-muted text-base leading-relaxed ${idx > 0 ? 'mt-3' : ''}`}>
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
