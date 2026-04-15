'use client';

import { cn } from '@/lib/cn';

type GalleryImage = {
  src: string;
  alt: string;
};

export function Gallery({
  images,
  onOpenLightbox,
  className,
}: {
  images: GalleryImage[];
  onOpenLightbox: (index: number) => void;
  className?: string;
}) {
  const display = images.slice(0, 5);

  return (
    <div
      className={cn(
        'grid grid-cols-[2fr_1fr_1fr] grid-rows-[260px_260px] gap-[6px] rounded-[16px] overflow-hidden',
        className,
      )}
    >
      {display.map((img, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onOpenLightbox(i)}
          className={cn(
            'relative overflow-hidden cursor-pointer group',
            i === 0 && 'row-span-2',
          )}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {i === display.length - 1 && (
            <span className="absolute inset-0 flex items-end justify-end p-4">
              <span className="bg-white text-[var(--color-ink)] text-[12px] font-semibold px-4 py-2 rounded-[6px] shadow-sm">
                View all photos
              </span>
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
