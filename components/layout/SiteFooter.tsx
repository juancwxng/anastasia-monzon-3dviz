import { footerCopy, footerLinks } from '@/data/portfolio';

export default function SiteFooter() {
  return (
    <footer
      role="contentinfo"
      className="bg-[#201f1c] px-14 py-[1.625rem] flex justify-between items-center border-t border-[rgba(247,243,238,0.06)] max-lg:px-8 max-lg:py-6 max-md:px-6 max-md:py-[1.375rem] xs:px-5 xs:py-5 xs:flex-col xs:items-start xs:gap-4"
    >
      <p className="text-[0.625rem] tracking-[0.12em] text-[rgba(247,243,238,0.2)] font-light">
        {footerCopy}
      </p>

      <nav aria-label="Footer navigation">
        <ul className="flex gap-8 list-none xs:gap-6">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                title={link.label === 'Privacy' ? 'Coming soon' : undefined}
                className="text-[0.5625rem] tracking-[0.18em] uppercase text-[rgba(247,243,238,0.2)] font-normal transition-colors duration-200 hover:text-[rgba(247,243,238,0.5)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
