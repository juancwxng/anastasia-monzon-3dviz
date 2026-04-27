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
} from '@/data/portfolio';

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="px-14 py-22 bg-[#f7f3ee] max-lg:px-8 max-lg:py-[4.5rem] max-md:px-6 max-md:py-14 xs:px-5 xs:py-12"
    >
      <div className="grid grid-cols-[1fr_1.1fr] gap-20 items-center max-lg:gap-14 max-md:grid-cols-1 max-md:gap-14">
        {/* Image column */}
        <div className="relative">
          <div
            className="w-full rounded-[4px] flex items-end justify-start p-6"
            style={{
              aspectRatio: '3/4',
              background:
                'linear-gradient(180deg, rgba(232,197,192,0.15) 0%, rgba(43,42,39,0.1) 100%), #d9cbbe',
            }}
            aria-label={aboutPortraitLabel}
          >
            <span className="text-[0.5625rem] tracking-[0.2em] uppercase text-[#7a6e63]">
              {aboutPortraitPlaceholder}
            </span>
          </div>

          {/* Badge */}
          <div className="absolute -bottom-4 -right-6 bg-[#2b2a27] text-[#f7f3ee] p-5 px-6 rounded-[4px] max-md:right-0 xs:-bottom-3">
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

          <h2
            id="about-title"
            className="font-serif text-[2rem] font-light italic text-[#2b2a27] leading-[1.25] mb-6"
            style={{ whiteSpace: 'pre-line' }}
          >
            {aboutHeadline}
          </h2>

          <p className="text-[0.9375rem] text-[#3d3830] leading-[1.8] mb-4 font-light">
            {aboutBody1}
          </p>
          <p className="text-[0.9375rem] text-[#3d3830] leading-[1.8] font-light">
            {aboutBody2}
          </p>

          {/* Credentials */}
          <div
            className="flex flex-wrap gap-2 mt-7 mb-8"
            aria-label="Qualifications"
          >
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
        </div>
      </div>
    </section>
  );
}
