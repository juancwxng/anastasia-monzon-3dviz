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
      className="reveal bg-[#2b2a27] px-14 py-20 max-lg:px-8 max-lg:py-16 max-md:px-6 max-md:py-14 xs:px-5 xs:py-12"
    >
      <p
        className="text-[0.625rem] tracking-[0.22em] uppercase text-[rgba(247,243,238,0.3)] font-normal flex items-center gap-3 mb-3
          before:content-[''] before:w-5 before:h-px before:bg-[rgba(247,243,238,0.2)] before:inline-block"
      >
        {processEyebrow}
      </p>
      <h2
        id="process-title"
        className="font-serif text-[2.375rem] font-light italic text-[#f7f3ee] mb-14"
      >
        {processTitle}
      </h2>

      {/* Native <ul> with <li> children — replaces role="list" div */}
      <ul className="grid grid-cols-4 gap-0 list-none max-lg:grid-cols-2 max-md:grid-cols-1">
        {processSteps.map((step, i) => (
          <li key={step.num}>
            <ProcessStepCard step={step} index={i} />
          </li>
        ))}
      </ul>
    </section>
  );
}
