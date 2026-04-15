import { cn } from '@/lib/cn';
import { Phone } from 'lucide-react';

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

type FooterProps = {
  className?: string;
  columns?: FooterColumn[];
};

const defaultColumns: FooterColumn[] = [
  {
    heading: 'Holidays',
    links: [
      { label: 'Beach Clubs', href: '#' },
      { label: 'Sailing', href: '#' },
      { label: 'Mountains', href: '#' },
      { label: 'Ski', href: '#' },
      { label: 'Latest Offers', href: '#' },
    ],
  },
  {
    heading: 'Destinations',
    links: [
      { label: 'Kefalonia, Greece', href: '#' },
      { label: 'Evia, Greece', href: '#' },
      { label: 'Cabedelo, Portugal', href: '#' },
      { label: 'Vaujany, France', href: '#' },
      { label: 'Val Thorens, France', href: '#' },
      { label: 'Meribel, France', href: '#' },
    ],
  },
  {
    heading: 'Information',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Flights', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Financial Protection', href: '#' },
      { label: 'Booking Conditions', href: '#' },
      { label: 'Vacancies', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
];

export function Footer({ className, columns = defaultColumns }: FooterProps) {
  return (
    <footer
      className={cn(
        'bg-[var(--color-ink)] text-white px-[var(--space-gutter)] py-[var(--space-section)]',
        className,
      )}
    >
      <div className="mx-auto max-w-[var(--width-page)]">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-8">
          {/* Brand column */}
          <div className="space-y-5">
            <img
              src="/BeyondBeach_horizontal.svg"
              alt="BeyondBeach"
              className="h-[30px] w-auto block"
              style={{ filter: 'brightness(0) invert(1)', maxWidth: '200px' }}
            />
            <p className="text-[14px] text-white/60 leading-relaxed max-w-[320px]">
              Award-winning active holidays for families, couples and groups.
              Beach clubs, sailing flotillas, ski chalets and more.
            </p>
            <a
              href="tel:01548288459"
              className="flex items-center gap-2 text-[14px] font-semibold text-white"
            >
              <Phone size={14} />
              01548 288459
            </a>
            <p className="text-[13px] text-white/40">
              Mon&ndash;Sat 9am&ndash;6pm
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/40 mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/30">
            &copy; {new Date().getFullYear()} BeyondBeach. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-white/30 font-semibold uppercase tracking-wider">
              ATOL Protected
            </span>
            <span className="text-[11px] text-white/30 font-semibold uppercase tracking-wider">
              IPP Insured
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
