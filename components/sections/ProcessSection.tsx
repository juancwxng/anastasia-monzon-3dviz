/* src/components/sections/ProcessSection.tsx */

import { processEyebrow, processTitle, processSteps } from '@/data/portfolio';
import ProcessStepCard from '@/components/ui/ProcessStep';

export default function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="bg-[#2b2a27] px-14 py-20 max-lg:px-8 max-lg:py-16 max-md:px-6 max-md:py-14 xs:px-5 xs:py-12"
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

      <div
        role="list"
        className="grid grid-cols-4 gap-0 max-lg:grid-cols-2 max-md:grid-cols-1"
      >
        {processSteps.map((step, i) => (
          <ProcessStepCard key={step.num} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}
