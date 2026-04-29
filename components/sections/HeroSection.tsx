'use client';
import { useEffect, useRef } from 'react';
import {
  heroEyebrow,
  heroName,
  heroTagline,
  heroPrimaryBtn,
  heroSecondaryBtn,
  heroQuote,
  heroAvailLabel,
  heroDisciplines,
  heroStats,
} from '@/data/portfolio';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [firstName, lastName] = heroName as [string, string];

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      setTimeout(() => el.classList.add('is-visible'), 100);
    }
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      aria-label="Introduction"
      className="reveal relative min-h-svh flex flex-col md:grid md:grid-cols-2 md:items-end overflow-hidden bg-[#f7f3ee]"
      style={{ paddingTop: 'var(--header-h, 58px)' }}
    >
      {/* ── Soft aurora background ────────────────────────── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: [
            'radial-gradient(ellipse 70% 55% at 80% 20%, rgba(232,197,192,0.28) 0%, transparent 65%)',
            'radial-gradient(ellipse 50% 40% at 15% 85%, rgba(216,228,209,0.18) 0%, transparent 60%)',
          ].join(', '),
          filter: 'blur(1px)',
        }}
      />

      {/* ── LEFT — primary content ────────────────────────── */}
      <div className="relative z-[1] flex flex-col justify-end flex-1 px-5 pt-10 pb-8 sm:px-8 sm:pt-12 sm:pb-12 md:px-10 md:py-16 md:pb-[4.5rem] lg:px-14">

        {/* Eyebrow */}
        <p
          className="text-[0.5625rem] tracking-[0.3em] uppercase text-[#7a6e63] font-normal flex items-center gap-3 mb-5
            before:content-[''] before:w-5 before:h-px before:bg-[#7a6e63] before:opacity-55 before:shrink-0"
          aria-hidden="true"
        >
          {heroEyebrow}
        </p>

        {/* Name */}
        <h1
          className="font-serif font-light italic text-[#2b2a27] leading-[0.92] mb-6 tracking-[-0.01em] w-full"
          style={{ fontSize: 'clamp(2.75rem, 10vw, 7rem)' }}
        >
          {firstName}
          <br />
          {lastName}
        </h1>

        {/* Tagline */}
        <p
          className="font-serif italic font-light text-[#3d3830] leading-[1.55] w-full max-w-sm mb-8 md:mb-11"
          style={{ fontSize: 'clamp(0.9375rem, 2.5vw, 1.25rem)' }}
        >
          {heroTagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col gap-4 w-full sm:flex-row sm:items-center sm:gap-8">
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-[0.625rem] bg-[#2b2a27] text-[#f7f3ee] text-[0.625rem] tracking-[0.18em] uppercase font-medium px-7 py-[0.875rem] rounded-full transition-[background,gap] duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#3d3830] hover:gap-[0.9rem] w-full sm:w-auto"
          >
            {heroPrimaryBtn}
          </a>
          <a
            href="#contact"
            className="text-[0.625rem] tracking-[0.18em] uppercase text-[#7a6e63] self-start transition-colors duration-200 hover:text-[#2b2a27]"
          >
            {heroSecondaryBtn}
          </a>
        </div>

        {/* Quote */}
        <p className="hidden sm:block font-serif italic font-light text-[#7a6e63] text-[0.9375rem] leading-[1.6] max-w-md mt-10 md:mt-14">
          {heroQuote}
        </p>
      </div>

      {/* ── RIGHT — meta / stats ──────────────────────────── */}
      <div
        aria-hidden="true"
        className="relative z-[1] px-5 pb-10 pt-0 sm:px-8 md:px-10 md:py-16 md:pb-[4.5rem] lg:px-14 lg:pl-8
          flex flex-row justify-between items-end gap-6
          md:flex-col md:justify-between md:items-end md:h-full"
      >
        {/* Availability + disciplines */}
        <div className="flex flex-col gap-4 md:gap-10">
          {/* Availability */}
          <div className="flex flex-col gap-1">
            <p className="flex items-center gap-2 text-[0.5rem] tracking-[0.16em] uppercase text-[#7a6e63] font-normal">
              <span className="text-[#d4a0a4] text-[0.7rem] leading-none" aria-hidden="true">✦</span>
              {heroAvailLabel}
            </p>
          </div>

          {/* Disciplines */}
          <div className="hidden sm:flex flex-col gap-[0.625rem] md:items-end">
            {heroDisciplines.map((d) => (
              <p
                key={d.label}
                className={[
                  'text-[0.5rem] tracking-[0.2em] uppercase font-normal',
                  d.active ? 'text-[#3d3830]' : 'text-[#7a6e63]',
                ].join(' ')}
              >
                {d.label}
              </p>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-row gap-5 items-end sm:gap-7 md:flex-col md:items-end md:gap-5 md:pt-8 md:border-t md:border-[#ede5dc] md:w-full">
          {heroStats.map((s) => (
            <div key={s.label} className="text-right">
              <p className="font-serif text-[1.375rem] sm:text-[1.75rem] font-light italic text-[#2b2a27] leading-none mb-[0.2rem]">
                {s.num}
              </p>
              <p className="text-[0.4375rem] tracking-[0.2em] uppercase text-[#7a6e63]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
