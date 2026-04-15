import { cn } from '@/lib/cn';
import { Phone, User } from 'lucide-react';

type UtilityBarProps = {
  className?: string;
};

export function UtilityBar({ className }: UtilityBarProps) {
  return (
    <div
      className={cn(
        'hidden md:flex items-center justify-between bg-[var(--color-ink)] text-white h-[44px] px-[var(--space-gutter)] text-[13px]',
        className,
      )}
    >
      {/* Left */}
      <div className="flex items-center gap-5">
        <a href="tel:01548288459" className="flex items-center gap-1.5 font-bold text-white">
          <Phone size={13} />
          01548 288459
        </a>
        <span className="flex items-center gap-1.5 text-white/70">
          <span className="relative flex h-2 w-2">
            <span className="animate-[pulse-dot_2s_ease-in-out_infinite] absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          We&rsquo;re open &mdash; Mon&ndash;Sat 9am&ndash;6pm
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <a href="#" className="text-white/70 hover:text-white transition-colors">ATOL Protected</a>
        <a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a>
        <a href="#" className="text-white/70 hover:text-white transition-colors">FAQs</a>
        <a href="#" className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors">
          <User size={13} />
          My Account
        </a>
      </div>
    </div>
  );
}
