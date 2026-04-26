/* src/components/ui/ScrollVideoEffect.tsx */

import { animGhostTitle, animGhostSub, animCaptionText, animCounter } from '@/data/portfolio';

export default function ScrollVideoEffect() {
  return (
    <div
      id="scroll-anim"
      role="region"
      aria-label="Scroll animation — room furnished in 3D"
      className="relative bg-[#1c1a17] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-20 after:bg-gradient-to-b after:from-transparent after:to-[#ede5dc] after:pointer-events-none after:z-[2]"
    >
      {/* 300svh scroll track */}
      <div className="h-[300svh]">
        {/* Sticky 100svh container */}
        <div className="sticky top-0 h-[100svh] flex flex-col overflow-hidden">
          {/* Canvas */}
          <div
            className="flex-1 relative flex items-center justify-center"
            style={{
              background:
                'repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 68px), repeating-linear-gradient(90deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 68px), #181614',
            }}
          >
            {/* Ghost text overlay */}
            <div
              className="text-center pointer-events-none select-none"
              aria-hidden="true"
            >
              <p
                className="font-serif font-light italic text-[rgba(247,243,238,0.1)] tracking-[-0.01em] mb-[0.875rem]"
                style={{ fontSize: 'clamp(1.375rem, 4vw, 3rem)' }}
              >
                {animGhostTitle}
              </p>
              <p className="text-[0.5rem] tracking-[0.28em] uppercase text-[rgba(247,243,238,0.1)]">
                {animGhostSub}
              </p>
            </div>

            {/* Caption — hidden on mobile */}
            <div
              className="absolute bottom-8 right-14 max-md:hidden"
              aria-hidden="true"
            >
              <p className="font-serif text-[0.875rem] italic font-light text-[rgba(247,243,238,0.2)]">
                {animCaptionText}
              </p>
            </div>

            {/* HUD: progress bar + counter */}
            <div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-[1.125rem] whitespace-nowrap max-md:gap-3 xs:gap-2"
              aria-hidden="true"
            >
              <div className="w-[110px] h-px bg-[rgba(247,243,238,0.08)] relative overflow-hidden max-md:w-[60px] xs:w-[50px]">
                {/* Static progress bar at 0% */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0 bg-[#e8c5c0] opacity-50"
                />
              </div>
              <span className="font-mono text-[0.4375rem] tracking-[0.18em] text-[rgba(247,243,238,0.25)] max-md:text-[0.375rem]">
                {animCounter}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
