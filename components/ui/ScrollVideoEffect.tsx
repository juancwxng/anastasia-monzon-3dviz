'use client';

import { useEffect, useRef } from 'react';
import { animGhostTitle, animGhostSub, animCaptionText } from '@/data/portfolio';

const TOTAL_FRAMES = 120;
const FRAME_BASE = '/frames/';

function pad(n: number): string {
  return String(n).padStart(3, '0');
}

export default function ScrollVideoEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<ImageBitmap[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const loadedRef = useRef(false);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const rafRef = useRef<number>(0);

  /* ── Preload frames off-main-thread ─────────────────── */
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion) return;

    async function loadFrames() {
      const promises: Promise<ImageBitmap>[] = [];
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        promises.push(
          fetch(`${FRAME_BASE}${pad(i)}.jpg`)
            .then((r) => r.blob())
            .then((blob) => createImageBitmap(blob)),
        );
      }

      try {
        // Load in batches of 20 to avoid saturating network
        const batchSize = 20;
        for (let b = 0; b < promises.length; b += batchSize) {
          const batch = await Promise.all(promises.slice(b, b + batchSize));
          framesRef.current.push(...batch);
        }
        loadedRef.current = true;
      } catch {
        // Frames not available — canvas stays as background
      }
    }

    loadFrames();
  }, []);

  /* ── Scroll → frame mapping via rAF ─────────────────── */
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const container = canvas.closest('#scroll-anim') as HTMLElement | null;
    if (!container) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollHeight = container.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / scrollHeight);
      targetFrameRef.current = Math.floor(progress * (TOTAL_FRAMES - 1));

      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress * 100}%`;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const tick = () => {
      if (!reducedMotion && loadedRef.current) {
        // Ease toward target frame
        const diff = targetFrameRef.current - currentFrameRef.current;
        currentFrameRef.current += diff * 0.1;
        const idx = Math.round(currentFrameRef.current);
        const frame = framesRef.current[idx];

        if (frame && canvas.width > 0 && canvas.height > 0) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Contain + center the frame
          const scale = Math.max(
            canvas.width / frame.width,
            canvas.height / frame.height,
          );
          const w = frame.width * scale;
          const h = frame.height * scale;
          ctx.drawImage(
            frame,
            (canvas.width - w) / 2,
            (canvas.height - h) / 2,
            w,
            h,
          );
        }

        if (counterRef.current) {
          const display = String(Math.round(currentFrameRef.current) + 1).padStart(3, '0');
          counterRef.current.textContent = `${display} / ${pad(TOTAL_FRAMES)}`;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

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
          {/* Canvas layer */}
          <div className="flex-1 relative flex items-center justify-center overflow-hidden">
            <canvas
              ref={canvasRef}
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
              }}
            />

            {/* Grid overlay when no frame loaded */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  'repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 68px), repeating-linear-gradient(90deg, rgba(255,255,255,0.018) 0px, rgba(255,255,255,0.018) 1px, transparent 1px, transparent 68px)',
              }}
            />

            {/* Ghost text overlay */}
            <div
              className="relative text-center pointer-events-none select-none z-[1]"
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
              className="absolute bottom-8 right-14 max-md:hidden z-[1]"
              aria-hidden="true"
            >
              <p className="font-serif text-[0.875rem] italic font-light text-[rgba(247,243,238,0.2)]">
                {animCaptionText}
              </p>
            </div>

            {/* HUD: progress bar + counter */}
            <div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-[1.125rem] whitespace-nowrap max-md:gap-3 xs:gap-2 z-[1]"
              aria-hidden="true"
            >
              <div className="w-[110px] h-px bg-[rgba(247,243,238,0.08)] relative overflow-hidden max-md:w-[60px] xs:w-[50px]">
                <div
                  ref={progressBarRef}
                  className="absolute left-0 top-0 bottom-0 bg-[#e8c5c0] opacity-50 transition-none"
                  style={{ width: '0%' }}
                />
              </div>
              <span
                ref={counterRef}
                className="font-mono text-[0.4375rem] tracking-[0.18em] text-[rgba(247,243,238,0.25)] max-md:text-[0.375rem]"
              >
                001 / 120
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
