'use client';
import {
  useEffect,
  useRef,
} from 'react';
import {
  heroEyebrow,
  heroName,
  heroTagline,
  heroPrimaryBtn,
  heroSecondaryBtn,
  heroQuote,
  heroAvailDot,
  heroAvailLabel,
  heroDisciplines,
  heroStats,
  heroScrollLabel,
} from '@/data/portfolio';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [firstName, lastName] = heroName as [string, string];
  
  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      setTimeout (() => el.classList.add('is-visible'), 100);
    }
  }, []);
  return (
    <section
      id="hero"
      ref={sectionRef}
      aria-label="Introduction"
      className="reveal relative min-h-svh flex flex-col md:grid md:grid-cols-2 md:items-end overflow-hidden bg-[#2b2a27]"
      style={{ paddingTop: 'var(--header-h, 58px)' }}
    >
      {/* ── Background patterns ───────────────────────────── */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundColor: '#201f1c',
          backgroundImage: [
            'linear-gradient(165deg, rgba(43,42,39,0.04) 0%, rgba(43,42,39,0.82) 65%, rgba(43,42,39,0.95) 100%)',
            'repeating-linear-gradient(-45deg, rgba(255,255,255,0.014) 0px, rgba(255,255,255,0.014) 1px, transparent 1px, transparent 52px)',
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.008) 0px, rgba(255,255,255,0.008) 1px, transparent 1px, transparent 52px)',
          ].join(', '),
        }}
      >
        <div
          className="absolute top-[15%] right-0 w-1/2 h-[70%] border-l border-[rgba(247,243,238,0.06)]"
          style={{
            background: [
              'repeating-linear-gradient(0deg, rgba(255,255,255,0.022) 0px, rgba(255,255,255,0.022) 1px, transparent 1px, transparent 38px)',
              'repeating-linear-gradient(90deg, rgba(255,255,255,0.022) 0px, rgba(255,255,255,0.022) 1px, transparent 1px, transparent 38px)',
            ].join(', '),
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-3/5 h-1/2"
          style={{
            background:
              'radial-gradient(ellipse at 20% 80%, rgba(232,197,192,0.09) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* ── LEFT — primary content ────────────────────────── */}
      <div className="relative z-[1] flex flex-col justify-end flex-1 px-5 pt-10 pb-8 sm:px-8 sm:pt-12 sm:pb-12 md:px-10 md:py-16 md:pb-[4.5rem] lg:px-14">

        {/* Eyebrow */}
        <p
          className="text-[0.5625rem] tracking-[0.3em] uppercase text-[#e8c5c0] font-normal flex items-center gap-3 mb-5
            before:content-[''] before:w-5 before:h-px before:bg-[#e8c5c0] before:opacity-55 before:shrink-0"
          aria-hidden="true"
        >
          {heroEyebrow}
        </p>

        {/* Name — clamp prevents overflow at 390px */}
        <h1
          className="font-serif font-light italic text-[#f7f3ee] leading-[0.92] mb-6 tracking-[-0.01em] w-full"
          style={{ fontSize: 'clamp(2.75rem, 10vw, 7rem)' }}
        >
          {firstName}
          <br />
          {lastName}
        </h1>

        {/* Tagline */}
        <p
          className="font-serif italic font-light text-[rgba(247,243,238,0.72)] leading-[1.55] w-full max-w-sm mb-8 md:mb-11"
          style={{ fontSize: 'clamp(0.9375rem, 2.5vw, 1.25rem)' }}
        >
          {heroTagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col gap-4 w-full sm:flex-row sm:items-center sm:gap-8">
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-[0.625rem] bg-[#a8b89a] text-[#2b2a27] text-[0.625rem] tracking-[0.18em] uppercase font-medium px-7 py-[0.875rem] rounded-full transition-[background,color,gap] duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#4a5e3e] hover:text-[#f7f3ee] hover:gap-[0.9rem] w-full sm:w-auto"
          >
            {heroPrimaryBtn}
          </a>
          <a
            href="#contact"
            className="text-[0.625rem] tracking-[0.18em] uppercase text-[rgba(247,243,238,0.55)] border-b border-[rgba(247,243,238,0.25)] pb-[0.2rem] self-start transition-[color,border-color] duration-200 hover:text-[rgba(247,243,238,0.85)] hover:border-[rgba(247,243,238,0.55)]"
          >
            {heroSecondaryBtn}
          </a>
        </div>

        {/* Quote — hidden on smallest screens, shown sm+ */}
        <p className="hidden sm:block font-serif italic font-light text-[rgba(247,243,238,0.45)] text-[0.9375rem] leading-[1.6] max-w-md mt-10 md:mt-14">
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
        {/* Availability + disciplines — left side on mobile, top on desktop */}
        <div className="flex flex-col gap-4 md:gap-10">
          {/* Availability */}
          <div className="flex flex-col gap-1">
            <p
              className="flex items-center gap-2 text-[0.5rem] tracking-[0.16em] uppercase text-[rgba(247,243,238,0.55)] font-normal
                before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#a8b89a] before:opacity-80 before:shrink-0"
            >
              {heroAvailDot}
            </p>
            <p className="text-[0.4375rem] tracking-[0.14em] uppercase text-[rgba(247,243,238,0.35)]">
              {heroAvailLabel}
            </p>
          </div>

          {/* Disciplines — hidden below sm to avoid clutter */}
          <div className="hidden sm:flex flex-col gap-[0.625rem] md:items-end">
            {heroDisciplines.map((d) => (
              <p
                key={d.label}
                className={[
                  'text-[0.5rem] tracking-[0.2em] uppercase font-normal flex items-center gap-3',
                  d.active
                    ? 'text-[rgba(247,243,238,0.55)]'
                    : 'text-[rgba(247,243,238,0.3)]',
                ].join(' ')}
              >
                {d.label}
              </p>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-row gap-5 items-end sm:gap-7 md:flex-col md:items-end md:gap-5 md:pt-8 md:border-t md:border-[rgba(247,243,238,0.07)] md:w-full">
          {heroStats.map((s) => (
            <div key={s.label} className="text-right">
              <p className="font-serif text-[1.375rem] sm:text-[1.75rem] font-light italic text-[rgba(247,243,238,0.65)] leading-none mb-[0.2rem]">
                {s.num}
              </p>
              <p className="text-[0.4375rem] tracking-[0.2em] uppercase text-[rgba(247,243,238,0.35)]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator — desktop only ──────────────── */}
      <div
        aria-hidden="true"
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-[1] flex-col items-center gap-3"
      >
        <span className="text-[0.4375rem] tracking-[0.28em] uppercase text-[rgba(247,243,238,0.3)] [writing-mode:vertical-rl]">
          {heroScrollLabel}
        </span>
        <div className="hero-scroll-track w-px h-14 bg-[rgba(247,243,238,0.08)] relative overflow-hidden" />
      </div>
    </section>
  );
}
