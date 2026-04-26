import {
  contactEyebrow,
  contactHeadline,
  contactMeta,
  contactSocials,
} from '@/data/portfolio';
import ContactForm from '@/components/ui/ContactForm';

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-[#2b2a27] px-14 pt-[5.5rem] pb-32 max-lg:px-8 max-lg:pt-[4.5rem] max-lg:pb-24 max-md:px-6 max-md:pt-14 max-md:pb-20 xs:px-5 xs:pt-12 xs:pb-16"
    >
      <div className="grid grid-cols-[1fr_1.2fr] gap-20 items-start max-md:grid-cols-1 max-md:gap-12">
        {/* Left — info */}
        <div>
          <p
            className="text-[0.625rem] tracking-[0.22em] uppercase text-[rgba(247,243,238,0.3)] font-normal flex items-center gap-3 mb-[0.875rem] mt-8
              before:content-[''] before:w-5 before:h-px before:bg-[rgba(247,243,238,0.2)] before:inline-block"
          >
            {contactEyebrow}
          </p>

          <h2
            id="contact-title"
            className="font-serif text-[2.375rem] font-light italic text-[#f7f3ee] leading-[1.1] mb-8"
            style={{ whiteSpace: 'pre-line' }}
          >
            {contactHeadline}
          </h2>

          {/* Meta items */}
          <div className="flex flex-col gap-4 mb-9">
            {contactMeta.map((item) => (
              <div key={item.label} className="flex gap-5 items-baseline">
                <span
                  className="text-[0.5625rem] tracking-[0.18em] uppercase text-[rgba(247,243,238,0.25)] font-normal min-w-[72px] xs:min-w-[60px]"
                >
                  {item.label}
                </span>
                <span className="text-[0.875rem] text-[rgba(247,243,238,0.6)] font-light xs:text-[0.8125rem]">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="transition-colors duration-200 hover:text-[#e8c5c0]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex gap-6">
            {contactSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                title="Coming soon"
                className="text-[0.625rem] tracking-[0.16em] uppercase text-[rgba(247,243,238,0.3)] border-b border-[rgba(247,243,238,0.1)] pb-[0.2rem] transition-[color,border-color] duration-200 hover:text-[rgba(247,243,238,0.65)] hover:border-[rgba(247,243,238,0.3)]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <ContactForm />
      </div>
    </section>
  );
}
