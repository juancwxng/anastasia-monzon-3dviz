'use client';

import { useEffect, useRef } from 'react';
import {
  aboutEyebrow,
  aboutHeadline,
  aboutBody1,
  aboutBody2,
  aboutBadgeNum,
  aboutBadgeLabel,
  aboutPortraitLabel,
  aboutPortraitPlaceholder,
  aboutCredentials,
  aboutStats,
  igThumbs,
} from '@/data/portfolio';

export default function AboutSection() {
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
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Split headline on literal \n or newline characters into an array of lines
  const headlineLines = aboutHeadline.split(/\\n|\n/);

  return (
   <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-title"
      className="reveal px-6 py-20 md:px-10 md:py-28 lg:px-14 lg:py-32 bg-[#f7f3ee]"
    >
      <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20 items-center">
        {/* Image column */}
        {/* ── Image column ── */}
        <div className="relative -mx-2 md:mx-0">
          <div
            // Use Tailwind aspect-ratio instead of inline styles
            className="w-full rounded-[4px] flex items-end justify-start p-6 aspect-[4/5] md:aspect-[3/4]"
            style={{
              background: 'linear-gradient(180deg, rgba(232,197,192,0.15) 0%, rgba(43,42,39,0.1) 100%), #d9cbbe',
            }}
            aria-label={aboutPortraitLabel}
          >
            <span className="text-[0.5625rem] tracking-[0.2em] uppercase text-[#7a6e63]">
              {aboutPortraitPlaceholder}
            </span>
          </div>

          {/* ── The Floating Badge ── */}
          {/* Mobile: Tucked to the right so it doesn't cause horizontal scrollbar */}
          {/* Desktop: Pushed aggressively out to the right (-right-10) for that premium overlap */}
          <div className="absolute -bottom-6 right-4 md:-bottom-8 md:-right-10 bg-[#2b2a27] text-[#f7f3ee] p-5 px-6 rounded-[4px] z-10 shadow-lg">
            <p className="font-serif text-[2rem] italic font-light leading-none mb-[0.2rem]">
              {aboutBadgeNum}
            </p>
            <p className="text-[0.5625rem] tracking-[0.18em] uppercase text-[rgba(247,243,238,0.45)] font-normal">
              {aboutBadgeLabel}
            </p>
          </div>
        </div>

        {/* Content column */}
        <div>
          <p
            className="text-[0.625rem] tracking-[0.22em] uppercase text-[#7a6e63] flex items-center gap-3 mb-[0.875rem]
              before:content-[''] before:w-5 before:h-px before:bg-[#7a6e63] before:inline-block"
          >
            {aboutEyebrow}
          </p>

          {/* Headline rendered as individual <span> blocks — no whiteSpace pre-line */}
          <h2
            id="about-title"
            className="font-serif text-[2rem] font-light italic text-[#2b2a27] leading-[1.25] mb-6"
          >
            {headlineLines.map((line, i) => (
              <span key={`headline-line-${i}`} className="block">
                {line}
              </span>
            ))}
          </h2>

          <p className="text-[0.9375rem] text-[#3d3830] leading-[1.8] mb-4 font-light">
            {aboutBody1}
          </p>
          <p className="text-[0.9375rem] text-[#3d3830] leading-[1.8] font-light">
            {aboutBody2}
          </p>

          {/* Credentials */}
          <div className="flex flex-wrap gap-2 mt-7 mb-8" aria-label="Qualifications">
            {aboutCredentials.map((c) => (
              <span
                key={c}
                className="text-[0.625rem] tracking-[0.12em] uppercase text-[#3d3830] border border-[#d9cbbe] px-[0.85rem] py-[0.35rem] rounded-full font-normal"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div
            className="flex gap-10 pt-6 border-t border-[#ede5dc] max-xs:flex-wrap max-xs:gap-5"
            aria-label="Key figures"
          >
            {aboutStats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-[2.5rem] italic font-light text-[#2b2a27] leading-none mb-[0.2rem]">
                  {s.num}
                </p>
                <p className="text-[0.625rem] tracking-[0.16em] uppercase text-[#7a6e63] font-normal">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Instagram thumbnails — stable keys using bgColor value */}
          {igThumbs && igThumbs.length > 0 && (
            <div
              className="grid grid-cols-3 gap-2 mt-8"
              aria-label="Instagram preview"
            >
              {igThumbs.map((thumb) => (
                <div
                  key={`ig-${thumb.bgColor}`}
                  className="aspect-square rounded-[3px]"
                  style={{ background: thumb.bgColor }}
                  aria-hidden="true"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
