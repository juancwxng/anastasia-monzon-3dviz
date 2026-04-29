'use client';

import { useEffect, useRef } from 'react';
import {
  contactEyebrow,
  contactHeadline,
  contactMeta,
  contactSocials,
  contactPricingAnchor,
} from '@/data/portfolio';
import ContactForm from '@/components/ui/ContactForm';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          obs.disconnect();
        }
      },
      { threshold: 0.06 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-title"
      className="reveal bg-[#f7f3ee] border-t border-[#d9cbbe] px-5 pt-14 pb-20 sm:px-8 sm:pt-[4.5rem] sm:pb-24 md:px-10 lg:px-14 lg:pt-[5.5rem] lg:pb-32"
    >
      <div className="flex flex-col gap-12 md:flex-row md:gap-16 lg:gap-20 md:items-start">

        {/* ── Left — info ──────────────────────────────────── */}
        <div className="w-full md:w-2/5 lg:w-1/3 shrink-0">
          <p
            className="text-[0.625rem] tracking-[0.3em] uppercase text-[#7a6e63] font-normal flex items-center gap-3 mb-4 mt-0 md:mt-8
              before:content-[''] before:w-5 before:h-px before:bg-[#d9cbbe] before:inline-block"
          >
            {contactEyebrow}
          </p>

          <h2
            id="contact-title"
            className="font-serif font-light italic text-[#2b2a27] leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(1.875rem, 5vw, 2.375rem)' }}
          >
            {contactHeadline.split(/\\n|\n/).map((line, i) => (
              <span key={`contact-headline-${i}`} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* Pricing anchor */}
          <p className="font-serif italic text-[#7a4455] text-[0.875rem] mb-8 leading-relaxed">
            {contactPricingAnchor}
          </p>

          {/* Meta items */}
          <div className="flex flex-col gap-3 mb-8">
            {contactMeta.map((item) => (
              <div key={item.label} className="flex gap-4 items-baseline">
                <span className="text-[0.5625rem] tracking-[0.3em] uppercase text-[#7a6e63] font-normal w-16 shrink-0">
                  {item.label}
                </span>
                <span className="text-[0.8125rem] text-[#2b2a27] font-light min-w-0 break-words">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="transition-colors duration-200 hover:text-[#7a4455] break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Social links — clean text, no borders */}
          <div className="flex flex-wrap gap-5">
            {contactSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                title="Coming soon"
                className="text-[0.625rem] tracking-[0.3em] uppercase text-[#7a6e63] transition-colors duration-200 hover:text-[#2b2a27]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right — form ─────────────────────────────────── */}
        <div className="w-full min-w-0">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}