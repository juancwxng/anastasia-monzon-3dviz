import type { ProcessStep } from '@/types';

interface ProcessStepProps {
  step: ProcessStep;
  index: number;
}

export default function ProcessStepCard({ step, index }: ProcessStepProps) {
  return (
    <article
      role="listitem"
      className={[
        'py-8 pr-8',
        index === 0
          ? 'pl-0'
          : 'pl-8 border-l border-[rgba(247,243,238,0.08)]',
        // tablet: 2-col → bottom border on first two
        'max-lg:[&:nth-child(1)]:border-b max-lg:[&:nth-child(1)]:border-[rgba(247,243,238,0.08)] max-lg:[&:nth-child(1)]:pb-8',
        'max-lg:[&:nth-child(2)]:border-b max-lg:[&:nth-child(2)]:border-[rgba(247,243,238,0.08)] max-lg:[&:nth-child(2)]:pb-8',
        'max-lg:[&:nth-child(3)]:border-l-0 max-lg:[&:nth-child(3)]:pl-0',
        // mobile: 1-col → border-left gone, border-bottom on all except last
        'max-md:border-l-0 max-md:pl-0 max-md:border-b max-md:border-[rgba(247,243,238,0.08)] max-md:pb-8',
        'max-md:[&:last-child]:border-b-0 max-md:[&:last-child]:pb-0',
      ].join(' ')}
    >
      <p className="text-[0.5625rem] tracking-[0.2em] uppercase text-[#e8c5c0] opacity-70 mb-4 font-normal">
        {step.num}
      </p>
      <h3 className="font-serif text-[1.25rem] font-normal text-[#f7f3ee] mb-3 leading-[1.2]">
        {step.name}
      </h3>
      <p className="text-[0.8125rem] text-[rgba(247,243,238,0.4)] leading-[1.75] font-light">
        {step.desc}
      </p>
    </article>
  );
}
