/* src/components/sections/HeroSection.tsx */

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
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[100svh] grid grid-cols-2 items-end overflow-hidden bg-[#2b2a27] pt-[58px] max-lg:pt-[54px] max-md:grid-cols-1 max-md:grid-rows-[auto_auto] max-md:pt-[52px] xs:pt-[50px]"
    >
      {/* Background patterns */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background: [
            'linear-gradient(165deg, rgba(43,42,39,0.04) 0%, rgba(43,42,39,0.82) 65%, rgba(43,42,39,0.95) 100%)',
            'repeating-linear-gradient(-45deg, rgba(255,255,255,0.014) 0px, rgba(255,255,255,0.014) 1px, transparent 1px, transparent 52px)',
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.008) 0px, rgba(255,255,255,0.008) 1px, transparent 1px, transparent 52px)',
            '#201f1c',
          ].join(', '),
        }}
      >
        {/* Grid overlay right */}
        <div
          className="absolute top-[15%] right-0 w-[52%] h-[70%] border-l border-[rgba(247,243,238,0.06)]"
          style={{
            background: [
              'repeating-linear-gradient(0deg, rgba(255,255,255,0.022) 0px, rgba(255,255,255,0.022) 1px, transparent 1px, transparent 38px)',
              'repeating-linear-gradient(90deg, rgba(255,255,255,0.022) 0px, rgba(255,255,255,0.022) 1px, transparent 1px, transparent 38px)',
            ].join(', '),
          }}
        />
        {/* Radial pink tint */}
        <div
          className="absolute bottom-0 left-0 w-[60%] h-[50%]"
          style={{
            background:
              'radial-gradient(ellipse at 20% 80%, rgba(232,197,192,0.09) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* ─── LEFT ─────────────────────────────────────────── */}
      <div
        className="relative z-[1] flex flex-col justify-end h-full px-14 py-16 pb-[4.5rem] max-lg:px-8 max-lg:py-12 max-lg:pb-16 max-md:px-6 max-md:py-12 max-md:pb-8 xs:px-5 xs:py-10 xs:pb-7"
      >
        {/* Eyebrow */}
        <p
          className="text-[0.5625rem] tracking-[0.3em] uppercase text-[#e8c5c0] font-normal flex items-center gap-[0.875rem] mb-6
            before:content-[''] before:w-6 before:h-px before:bg-[#e8c5c0] before:opacity-55 before:shrink-0"
        >
          {heroEyebrow}
        </p>

        {/* Name */}
        <h1
          className="font-serif font-light italic text-[#f7f3ee] leading-[0.92] mb-8 tracking-[-0.01em]"
          style={{ fontSize: 'clamp(3.5rem, 6.5vw, 7rem)' }}
        >
          {heroName[0]}
          <br />
          {heroName[1]}
        </h1>

        {/* Tagline */}
        <p
          className="font-serif italic font-light text-[rgba(247,243,238,0.42)] leading-[1.55] max-w-[360px] mb-11"
          style={{ fontSize: 'clamp(1rem, 1.4vw, 1.25rem)' }}
        >
          {heroTagline}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-8 flex-wrap xs:flex-col xs:items-start xs:gap-5">
          <a
            href="#work"
            className="inline-flex items-center gap-[0.625rem] bg-[#a8b89a] text-[#2b2a27] text-[0.625rem] tracking-[0.18em] uppercase font-medium px-7 py-[0.8rem] rounded-full whitespace-nowrap transition-[background,color,gap] duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#4a5e3e] hover:text-[#f7f3ee] hover:gap-[0.9rem]"
          >
            {heroPrimaryBtn}
          </a>
          <a
            href="#contact"
            className="text-[0.625rem] tracking-[0.18em] uppercase text-[rgba(247,243,238,0.3)] border-b border-[rgba(247,243,238,0.12)] pb-[0.2rem] whitespace-nowrap transition-[color,border-color] duration-200 hover:text-[rgba(247,243,238,0.65)] hover:border-[rgba(247,243,238,0.35)]"
          >
            {heroSecondaryBtn}
          </a>
        </div>

        {/* Quote */}
        <p className="font-serif italic font-light text-[rgba(247,243,238,0.45)] text-base leading-[1.6] max-w-[500px] mt-14">
          {heroQuote}
        </p>
      </div>

      {/* ─── RIGHT ────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="relative z-[1] h-full flex flex-col justify-between items-end px-14 py-16 pb-[4.5rem] pl-8 max-lg:px-8 max-lg:py-12 max-lg:pb-16 max-lg:pl-6 max-md:h-auto max-md:flex-row max-md:justify-between max-md:items-end max-md:px-6 max-md:pt-0 max-md:pb-12 xs:px-5 xs:pb-10"
      >
        <div className="flex flex-col items-end gap-10 max-md:flex-row max-md:items-end max-md:gap-8 max-md:w-full max-md:justify-between xs:flex-col xs:items-start xs:gap-5">
          {/* Availability */}
          <div className="flex flex-col items-end gap-2 max-md:items-start">
            <p
              className="flex items-center gap-2 text-[0.5625rem] tracking-[0.16em] uppercase text-[rgba(247,243,238,0.4)] font-normal
                before:content-[''] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#a8b89a] before:opacity-80"
            >
              {heroAvailDot}
            </p>
            <p className="text-[0.5rem] tracking-[0.14em] uppercase text-[rgba(247,243,238,0.2)]">
              {heroAvailLabel}
            </p>
          </div>

          {/* Disciplines */}
          <div className="flex flex-col items-end gap-[0.625rem] max-md:items-start">
            {heroDisciplines.map((d) => (
              <p
                key={d.label}
                className={[
                  'text-[0.5625rem] tracking-[0.2em] uppercase font-normal flex items-center gap-3',
                  'after:content-[\'\'] after:w-4 after:h-px max-md:flex-row-reverse max-md:after:hidden',
                  d.active
                    ? 'text-[rgba(247,243,238,0.55)] after:bg-[#e8c5c0] after:opacity-50'
                    : 'text-[rgba(247,243,238,0.35)] after:bg-[rgba(247,243,238,0.15)]',
                ].join(' ')}
              >
                {d.label}
              </p>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          className="flex flex-col items-end gap-5 pt-8 border-t border-[rgba(247,243,238,0.07)] max-lg:gap-4 max-md:flex-row max-md:items-end max-md:border-t-0 max-md:border-l max-md:border-[rgba(247,243,238,0.07)] max-md:pt-0 max-md:pl-8 xs:flex-row xs:border-l-0 xs:border-t xs:border-[rgba(247,243,238,0.07)] xs:pt-5 xs:pl-0 xs:w-full xs:gap-6 xxs:gap-4"
        >
          {heroStats.map((s) => (
            <div key={s.label} className="text-right max-md:text-left">
              <p className="font-serif text-[1.75rem] font-light italic text-[rgba(247,243,238,0.65)] leading-none mb-[0.2rem] xxs:text-[1.375rem]">
                {s.num}
              </p>
              <p className="text-[0.5rem] tracking-[0.2em] uppercase text-[rgba(247,243,238,0.22)]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── SCROLL INDICATOR ─────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[1] flex flex-col items-center gap-3 max-md:hidden"
      >
        <span className="text-[0.4375rem] tracking-[0.28em] uppercase text-[rgba(247,243,238,0.3)] [writing-mode:vertical-rl]">
          {heroScrollLabel}
        </span>
        <div className="hero-scroll-track w-px h-14 bg-[rgba(247,243,238,0.08)] relative overflow-hidden" />
      </div>
    </section>
  );
}
