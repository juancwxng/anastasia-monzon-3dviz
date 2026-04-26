/* src/components/ui/ProjectCard.tsx */

import type { Project, TagVariant } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

function tagClass(variant: TagVariant): string {
  if (variant === 'interior') return 'bg-[#f0dade] text-[#7a4455]';
  if (variant === 'exterior') return 'bg-[#d8e4d1] text-[#4a5e3e]';
  return 'bg-[#f7f3ee] text-[#7a6e63] border border-[#d9cbbe]';
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, sub, year, tags, imgStyle, imgLabel, featured } = project;

  return (
    <article
      className={cn(
        'project-card relative block bg-[#ede5dc] rounded-[6px] overflow-hidden cursor-pointer',
        'transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1',
        featured && 'col-span-full grid grid-cols-[1.35fr_1fr]',
      )}
      tabIndex={0}
    >
      {/* Image area */}
      <div
        className={cn(
          'project-img w-full relative overflow-hidden',
          featured ? 'aspect-auto min-h-[320px]' : 'aspect-[4/3]',
        )}
        style={{ ...(imgStyle ? { cssText: imgStyle } as never : {}) }}
        /* fallback via dangerouslySetInnerHTML not used — style attr on parent div */
      >
        {/* We set style via a wrapper trick below */}
      </div>

      {/* Project body */}
      <div
        className={cn(
          'project-body bg-white',
          featured
            ? 'flex flex-col justify-end p-8 px-9'
            : 'p-5 pb-6 px-6',
        )}
      >
        {/* Tags */}
        <div className="flex gap-2 mb-[0.65rem]">
          {tags.map((t) => (
            <span
              key={t.label}
              className={cn(
                'text-[0.5625rem] tracking-[0.1em] uppercase px-[0.6rem] py-1 rounded-full font-medium',
                tagClass(t.variant),
              )}
            >
              {t.label}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3
          className={cn(
            'font-serif font-normal text-[#2b2a27] leading-[1.2] mb-[0.4rem]',
            featured ? 'text-[1.75rem]' : 'text-[1.25rem]',
          )}
          style={{ whiteSpace: 'pre-line' }}
        >
          {name}
        </h3>

        <p className="text-[0.8125rem] text-[#7a6e63] font-light">{sub}</p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 pt-[0.875rem] border-t border-[#f0ece6]">
          <span className="text-[0.5625rem] tracking-[0.2em] uppercase text-[#7a6e63]">
            {year}
          </span>
          <span className="text-base text-[#7a6e63] transition-[transform,color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#2b2a27]">
            ↗
          </span>
        </div>
      </div>
    </article>
  );
}

// ─── Workaround: render img div with inline style string ──
// Since Tailwind can't receive raw CSS gradient strings, we render the
// project image via a server-side inline style string on a separate component.
export function ProjectCardWithStyle({ project }: ProjectCardProps) {
  const { name, sub, year, tags, imgStyle, featured } = project;

  return (
    <article
      className={cn(
        'project-card relative block bg-[#ede5dc] rounded-[6px] overflow-hidden cursor-pointer',
        'transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1',
        featured && 'col-span-full grid grid-cols-[1.35fr_1fr] max-md:grid-cols-1',
      )}
      tabIndex={0}
    >
      <div
        className={cn(
          'w-full relative overflow-hidden',
          featured
            ? '[aspect-ratio:auto] min-h-[320px] max-md:min-h-[220px] xs:min-h-[180px]'
            : '[aspect-ratio:4/3]',
        )}
        style={{ background: imgStyle.replace('background: ', '').replace(';', '') }}
      />

      <div
        className={cn(
          'bg-white',
          featured
            ? 'flex flex-col justify-end p-8 px-9 xs:p-5 xs:px-6'
            : 'p-5 pb-6 px-6',
        )}
      >
        <div className="flex gap-2 mb-[0.65rem]">
          {tags.map((t) => (
            <span
              key={t.label}
              className={cn(
                'text-[0.5625rem] tracking-[0.1em] uppercase px-[0.6rem] py-1 rounded-full font-medium',
                tagClass(t.variant),
              )}
            >
              {t.label}
            </span>
          ))}
        </div>

        <h3
          className={cn(
            'font-serif font-normal text-[#2b2a27] leading-[1.2] mb-[0.4rem]',
            featured ? 'text-[1.75rem] xs:text-[1.375rem]' : 'text-[1.25rem]',
          )}
          style={{ whiteSpace: 'pre-line' }}
        >
          {name}
        </h3>

        <p
          className="text-[0.8125rem] text-[#7a6e63] font-light"
          dangerouslySetInnerHTML={{ __html: sub }}
        />

        <div className="flex justify-between items-center mt-4 pt-[0.875rem] border-t border-[#f0ece6]">
          <span className="text-[0.5625rem] tracking-[0.2em] uppercase text-[#7a6e63]">
            {year}
          </span>
          <span className="text-base text-[#7a6e63]">↗</span>
        </div>
      </div>
    </article>
  );
}
