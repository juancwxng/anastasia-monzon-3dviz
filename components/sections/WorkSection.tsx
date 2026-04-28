'use client';

import { useEffect, useRef } from 'react';
import { workEyebrow, workTitle, workAllLink, projects } from '@/data/portfolio';
import ProjectCard from '@/components/ui/ProjectCard';

export default function WorkSection() {
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
      id="work"
      ref={sectionRef}
      aria-labelledby="work-title"
      className="reveal px-14 py-20 pb-24 bg-[#f7f3ee] max-lg:px-8 max-lg:py-16 max-lg:pb-20 max-md:px-6 max-md:py-14 max-md:pb-16 xs:px-5 xs:py-12 xs:pb-14"
    >
      {/* Header */}
      <div className="flex justify-between items-end mb-12 max-xs:flex-col max-xs:items-start max-xs:gap-4">
        <div>
          <p
            className="text-[0.625rem] tracking-[0.22em] uppercase text-[#7a6e63] font-normal flex items-center gap-3 mb-3
              before:content-[''] before:w-5 before:h-px before:bg-[#7a6e63] before:inline-block"
          >
            {workEyebrow}
          </p>
          <h2
            id="work-title"
            className="font-serif text-[2.625rem] font-light italic text-[#2b2a27] leading-[1.1]"
          >
            {workTitle}
          </h2>
        </div>
        <a
          href="#"
          title="Coming soon"
          className="text-[0.6875rem] tracking-[0.14em] uppercase text-[#7a6e63] border-b border-[#d9cbbe] pb-[0.2rem] transition-[color,border-color] duration-200 hover:text-[#2b2a27] hover:border-[#7a6e63] self-end max-xs:self-auto"
        >
          {workAllLink}
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
