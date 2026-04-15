'use client';

import { cn } from '@/lib/cn';
import { useState } from 'react';
import { Star, Phone, Check } from 'lucide-react';

type DateOption = {
  label: string;
  avail: string;
  price: string;
  low?: boolean;
};

export function BookingCard({
  wasPrice,
  nowPrice,
  saveText,
  rating,
  reviewCount,
  dates,
  className,
}: {
  wasPrice: string;
  nowPrice: string;
  saveText: string;
  rating: number;
  reviewCount: number;
  dates: DateOption[];
  className?: string;
}) {
  const [selectedDate, setSelectedDate] = useState(0);
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [roomType, setRoomType] = useState('standard');
  const [departing, setDeparting] = useState('london');

  return (
    <div
      className={cn(
        'sticky top-16 bg-white rounded-[var(--radius-card-lg)] border border-[var(--color-border)] p-6 flex flex-col gap-5 shadow-sm',
        className,
      )}
    >
      {/* Pricing header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-baseline gap-3">
          <span className="text-[16px] text-[var(--color-muted)] line-through">{wasPrice}</span>
          <span className="font-[var(--font-heading)] text-[32px] font-bold text-[var(--color-ink)]">
            {nowPrice}
          </span>
        </div>
        <span className="text-[13px] text-[var(--color-muted)]">per person</span>
        <div className="flex items-center gap-3 mt-1">
          <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded bg-[rgba(85,186,166,0.15)] text-[#2D8A6F]">
            {saveText}
          </span>
          <div className="flex items-center gap-1 text-[13px]">
            <Star size={13} className="text-[var(--color-accent)] fill-[var(--color-accent)]" />
            <span className="font-semibold">{rating}</span>
            <span className="text-[var(--color-muted)]">({reviewCount} reviews)</span>
          </div>
        </div>
      </div>

      {/* Date options */}
      <div className="flex flex-col gap-2">
        <span className="text-[12px] font-semibold text-[var(--color-ink)] uppercase tracking-[0.04em]">
          Select a date
        </span>
        {dates.map((d, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSelectedDate(i)}
            className={cn(
              'flex items-center justify-between px-4 py-3 rounded-[var(--radius-card)] border text-left transition-colors cursor-pointer',
              selectedDate === i
                ? 'border-[var(--color-accent)] bg-[var(--theme-accent-bg)]'
                : 'border-[var(--color-border)] hover:border-[var(--color-muted)]',
            )}
          >
            <div className="flex flex-col">
              <span className="text-[13px] font-medium">{d.label}</span>
              <span className="text-[11px] text-[var(--color-muted)]">{d.avail}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[14px] font-semibold">{d.price}</span>
              {d.low && (
                <span className="text-[10px] text-[var(--color-bb-energy)] font-semibold">Low availability</span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Form selects */}
      <div className="grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1">
          <span className="text-[12px] font-semibold text-[var(--color-ink)] uppercase tracking-[0.04em]">Adults</span>
          <select
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="text-[14px] border border-[var(--color-border)] rounded-[var(--radius-btn)] px-3 py-2.5 bg-white"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-[12px] font-semibold text-[var(--color-ink)] uppercase tracking-[0.04em]">Children</span>
          <select
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            className="text-[14px] border border-[var(--color-border)] rounded-[var(--radius-btn)] px-3 py-2.5 bg-white"
          >
            {[0, 1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="flex flex-col gap-1">
        <span className="text-[12px] font-semibold text-[var(--color-ink)] uppercase tracking-[0.04em]">Room type</span>
        <select
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          className="text-[14px] border border-[var(--color-border)] rounded-[var(--radius-btn)] px-3 py-2.5 bg-white"
        >
          <option value="standard">Standard Room</option>
          <option value="superior">Superior Room</option>
          <option value="suite">Suite</option>
        </select>
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-[12px] font-semibold text-[var(--color-ink)] uppercase tracking-[0.04em]">Departing from</span>
        <select
          value={departing}
          onChange={(e) => setDeparting(e.target.value)}
          className="text-[14px] border border-[var(--color-border)] rounded-[var(--radius-btn)] px-3 py-2.5 bg-white"
        >
          <option value="london">London Gatwick</option>
          <option value="manchester">Manchester</option>
          <option value="birmingham">Birmingham</option>
          <option value="bristol">Bristol</option>
        </select>
      </label>

      {/* Submit */}
      <button
        type="button"
        className="w-full py-[15px] text-[14px] font-semibold rounded-[var(--radius-btn)] bg-[var(--color-accent)] text-[var(--color-ink)] hover:bg-[var(--color-accent-dk)] transition-colors cursor-pointer"
      >
        Check Availability &amp; Book
      </button>

      {/* Alt link */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-2 py-[13px] text-[14px] font-semibold rounded-[var(--radius-btn)] border border-[var(--color-border)] text-[var(--color-ink)] hover:border-[var(--color-ink)] transition-colors cursor-pointer"
      >
        <Phone size={14} />
        0207 123 4567
      </button>

      {/* Trust items */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
        {['ATOL protected', 'Free cancellation', 'Low deposit', 'Spread the cost'].map((text) => (
          <div key={text} className="flex items-center gap-1.5 text-[12px] text-[var(--color-muted)]">
            <Check size={12} className="text-[var(--color-bb-energy)]" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
