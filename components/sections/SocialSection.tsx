import {
  socialEyebrow,
  socialTitle,
  socialIntro,
  pinterestLabel,
  instagramLabel,
  pinThumbs,
  igThumbs,
} from '@/data/portfolio';

const pinBg: Record<string, string> = {
  'pin-1': 'linear-gradient(160deg, #cdc0b6, #b8a898)',
  'pin-2': 'linear-gradient(160deg, #b8c9b0, #9aae90)',
  'pin-3': 'linear-gradient(160deg, #d4b8b5, #c09090)',
};

export default function SocialSection() {
  return (
    <section
      id="social"
      aria-labelledby="social-title"
      className="bg-[#ede5dc] px-14 py-[4.5rem] border-t border-[#d9cbbe] max-lg:px-8 max-lg:py-16 max-md:px-6 max-md:py-14 xs:px-5 xs:py-12"
    >
      {/* Header */}
      <div className="mb-10">
        <p
          className="text-[0.625rem] tracking-[0.22em] uppercase text-[#7a6e63] font-normal flex items-center gap-3 mb-3
            before:content-[''] before:w-5 before:h-px before:bg-[#7a6e63] before:inline-block"
        >
          {socialEyebrow}
        </p>
        <h2
          id="social-title"
          className="font-serif text-[2.625rem] font-light italic text-[#2b2a27] leading-[1.1]"
        >
          {socialTitle}
        </h2>
        <p className="text-[0.9375rem] text-[#7a6e63] mt-3 max-w-[500px] font-light">
          {socialIntro}
        </p>
      </div>

      {/* Platforms grid */}
      <div className="grid grid-cols-[1fr_1.4fr] gap-14 max-md:grid-cols-1 max-md:gap-10">
        {/* Pinterest */}
        <div>
          <p className="text-[0.625rem] tracking-[0.22em] uppercase text-[#7a6e63] flex items-center gap-2 mb-4">
            {pinterestLabel}
          </p>
          <div
            aria-label="Pinterest board preview"
            className="grid gap-2 h-[260px] max-md:h-[220px] xs:h-[180px]"
            style={{ gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr' }}
          >
            {pinThumbs.map((pin, i) => (
              <div
                key={pin.label}
                className="rounded-[6px] relative overflow-hidden"
                style={{
                  background: pinBg[pin.bgClass],
                  ...(pin.tall ? { gridRow: '1 / 3' } : {}),
                }}
              >
                <span className="absolute bottom-2 left-2 text-[0.5625rem] tracking-[0.1em] uppercase bg-[rgba(43,42,39,0.65)] text-[#f7f3ee] px-[0.55rem] py-[0.2rem] rounded-full">
                  {pin.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram */}
        <div>
          <p className="text-[0.625rem] tracking-[0.22em] uppercase text-[#7a6e63] flex items-center gap-2 mb-4">
            {instagramLabel}
          </p>
          <div
            aria-label="Instagram feed preview"
            className="grid grid-cols-3 gap-[0.375rem] xs:grid-cols-2 xs:gap-2"
          >
            {igThumbs.map((thumb, i) => (
              <div
                key={i}
                className="aspect-square rounded-[4px]"
                style={{ backgroundColor: thumb.bgColor }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
