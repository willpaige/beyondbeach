import { cn } from '@/lib/cn';

type AvatarSize = 'sm' | 'md' | 'lg';

const sizeMap: Record<AvatarSize, { dimension: string; text: string }> = {
  sm: { dimension: 'w-[32px] h-[32px]', text: 'text-[12px]' },
  md: { dimension: 'w-[48px] h-[48px]', text: 'text-[16px]' },
  lg: { dimension: 'w-[64px] h-[64px]', text: 'text-[20px]' },
};

type AvatarProps = {
  src?: string;
  name: string;
  size?: AvatarSize;
  className?: string;
};

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function Avatar({ src, name, size = 'md', className }: AvatarProps) {
  const { dimension, text } = sizeMap[size];

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={cn(
          'rounded-full object-cover flex-shrink-0',
          dimension,
          className,
        )}
      />
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full flex-shrink-0 bg-[var(--color-accent)] text-[var(--color-ink)] font-semibold',
        dimension,
        text,
        className,
      )}
      aria-label={name}
    >
      {getInitials(name)}
    </span>
  );
}
