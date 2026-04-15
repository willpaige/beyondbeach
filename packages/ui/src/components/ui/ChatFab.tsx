'use client';

import { MessageCircle } from 'lucide-react';

export function ChatFab({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-7 right-7 z-[500] flex items-center gap-2.5 bg-[var(--color-accent)] text-[var(--color-ink)] font-body text-sm font-semibold px-6 py-4 rounded-full border-none cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-200 hover:bg-[var(--color-accent-dk)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
    >
      <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-[var(--color-bb-energy)] rounded-full border-2 border-[var(--color-accent)] animate-[pulse-dot_2s_ease-in-out_infinite]" />
      <MessageCircle size={20} />
      Chat with us
    </button>
  );
}
