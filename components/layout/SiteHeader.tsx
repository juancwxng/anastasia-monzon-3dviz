/* src/components/layout/SiteHeader.tsx */
'use client';

import { useState } from 'react';
import { logoText, navLinks } from '@/data/portfolio';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-14 py-6 bg-transparent max-lg:px-8 max-lg:py-5 max-md:px-6 max-md:py-[1.125rem] xs:px-5 xs:py-4">
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(43,42,39,0.72) 0%, rgba(43,42,39,0) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Logo */}
        <a
          href="#"
          className="font-serif text-[1.125rem] italic font-normal text-[#f7f3ee] tracking-[0.03em] relative z-[1] flex items-center gap-3
            after:content-[''] after:w-8 after:h-px after:bg-[rgba(247,243,238,0.25)] after:inline-block xs:text-[1rem] xs:after:hidden"
        >
          {logoText}
        </a>

        {/* Desktop nav */}
        <nav className="relative z-[1]">
          <ul className="flex gap-11 list-none items-center max-md:hidden">
            {navLinks.map((link) =>
              link.cta ? (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#f7f3ee] bg-[#a8b89a] px-[1.1rem] py-[0.45rem] rounded-[20px] tracking-[0.14em] text-[0.625rem] font-medium uppercase transition-[background,color] duration-200 hover:bg-[#4a5e3e]"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.6875rem] tracking-[0.18em] uppercase text-[rgba(247,243,238,0.55)] transition-colors duration-200 hover:text-[rgba(247,243,238,0.9)] font-normal"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          className="hidden flex-col gap-[5px] cursor-pointer p-1 relative z-[1] max-md:flex"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className="block w-[22px] h-px bg-[rgba(247,243,238,0.6)] transition-[transform,opacity] duration-[250ms]"
            style={menuOpen ? { transform: 'translateY(6px) rotate(45deg)' } : {}}
          />
          <span
            className="block w-[22px] h-px bg-[rgba(247,243,238,0.6)] transition-[transform,opacity] duration-[250ms]"
            style={menuOpen ? { opacity: 0 } : {}}
          />
          <span
            className="block w-[22px] h-px bg-[rgba(247,243,238,0.6)] transition-[transform,opacity] duration-[250ms]"
            style={menuOpen ? { transform: 'translateY(-6px) rotate(-45deg)' } : {}}
          />
        </button>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[190] bg-[rgba(32,31,28,0.97)] flex flex-col items-center justify-center gap-10"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={
                link.cta
                  ? 'font-serif text-[2.5rem] italic font-light text-[#a8b89a]'
                  : 'font-serif text-[2.5rem] italic font-light text-[rgba(247,243,238,0.7)] hover:text-[#f7f3ee] transition-colors duration-200'
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
