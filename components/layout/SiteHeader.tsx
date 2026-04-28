'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { logoText, navLinks } from '@/data/portfolio';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);
  const lastFocusableRef = useRef<HTMLAnchorElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  /* ── Scroll → header style ───────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Escape key closure ──────────────────────────────── */
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    hamburgerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen, closeMenu]);

  /* ── Focus trap ──────────────────────────────────────── */
  useEffect(() => {
    if (!menuOpen) return;

    // Move focus into menu
    firstFocusableRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusables = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  /* ── Prevent body scroll when menu open ─────────────── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-14 py-6 max-lg:px-8 max-lg:py-5 max-md:px-6 max-md:py-[1.125rem] xs:px-5 xs:py-4"
        style={{
          height: 'var(--header-h, 58px)',
          background: scrolled
            ? 'rgba(43,42,39,0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
        }}
      >
        {/* Gradient overlay — only when not scrolled */}
        {!scrolled && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to bottom, rgba(43,42,39,0.72) 0%, rgba(43,42,39,0) 100%)',
            }}
            aria-hidden="true"
          />
        )}

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
          ref={hamburgerRef}
          className="hidden flex-col gap-[5px] cursor-pointer p-1 relative z-[1] max-md:flex"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
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

      {/* Mobile menu overlay — always in DOM, toggled via CSS */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 190,
          background: 'rgba(32,31,28,0.97)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            ref={
              i === 0
                ? firstFocusableRef
                : i === navLinks.length - 1
                ? lastFocusableRef
                : undefined
            }
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
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
    </>
  );
}
