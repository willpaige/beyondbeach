'use client';

import { cn } from '@/lib/cn';
import { useCallback, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type LightboxImage = {
  src: string;
  alt: string;
};

export function Lightbox({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
}: {
  images: LightboxImage[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) setIndex(initialIndex);
  }, [isOpen, initialIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose, prev, next]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/95">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <span className="text-white text-[14px] font-medium">
          {index + 1} / {images.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <X size={24} />
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 flex items-center justify-center relative px-16">
        <button
          type="button"
          onClick={prev}
          className="absolute left-4 w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="max-w-[90vw] max-h-[80vh] object-contain"
        />
        <button
          type="button"
          onClick={next}
          className="absolute right-4 w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Footer thumbnails */}
      <div className="flex items-center justify-center gap-2 px-6 py-4">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={cn(
              'w-[64px] h-[44px] rounded-[4px] overflow-hidden border-2 transition-colors cursor-pointer',
              i === index
                ? 'border-[var(--color-accent)]'
                : 'border-transparent opacity-60 hover:opacity-100',
            )}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
