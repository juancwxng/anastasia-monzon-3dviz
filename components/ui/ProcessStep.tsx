import type { ProcessStep } from '@/types';

interface ProcessStepProps {
  step: ProcessStep;
  index: number; 
}

export default function ProcessStepCard({ step }: ProcessStepProps) {
  return (
    <article
      role="listitem"
      className="p-6 sm:p-8 md:p-10 flex flex-col h-full"
    >
      <p className="text-[0.5625rem] tracking-[0.3em] uppercase text-[#7a6e63] mb-4 font-normal">
        {step.num}
      </p>
      <h3 className="font-serif text-[1.25rem] font-normal text-[#2b2a27] mb-3 leading-[1.2]">
        {step.name}
      </h3>
      <p className="text-[0.8125rem] text-[#7a6e63] leading-[1.75] font-light">
        {step.desc}
      </p>
    </article>
  );
}