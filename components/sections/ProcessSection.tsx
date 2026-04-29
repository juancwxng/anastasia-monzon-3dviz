'use client';

import { useEffect, useRef } from 'react';
import { processEyebrow, processTitle, processSteps } from '@/data/portfolio';
import ProcessStepCard from '@/components/ui/ProcessStep';

export default function ProcessSection() {
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

  return (
    <section
      id="process"
      ref={sectionRef}
      aria-labelledby="process-title"
      className="reveal bg-[#ede5dc] px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 lg:py-28"
    >
      {/* Section header */}
      <div className="mb-10 md:mb-14">
        <p
          className="text-[0.625rem] tracking-[0.3em] uppercase text-[#7a6e63] font-normal flex items-center gap-3 mb-3
            before:content-[''] before:w-5 before:h-px before:bg-[#7a6e63] before:inline-block"
        >
          {processEyebrow}
        </p>
        <h2
          id="process-title"
          className="font-serif font-light italic text-[#2b2a27]"
          style={{ fontSize: 'clamp(1.75rem, 5vw, 2.375rem)' }}
        >
          {processTitle}
        </h2>
      </div>

      {/* Steps grid — 1 col on mobile, 2 on md, 4 on xl */}
      <ul className="grid grid-cols-1 gap-px list-none sm:grid-cols-2 xl:grid-cols-4 bg-[#d9cbbe] rounded-[4px] overflow-hidden">
        {processSteps.map((step, i) => (
          <li key={step.num} className="bg-[#ede5dc]">
            <ProcessStepCard step={step} index={i} />
          </li>
        ))}
      </ul>
    </section>
  );
}