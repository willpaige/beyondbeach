import type { Meta, StoryObj } from '@storybook/react';
import { TrustBadge, ATOLBadge, BTABadge } from '@/components/ui/TrustBadge';
import { Shield, Star } from 'lucide-react';

const meta: Meta<typeof TrustBadge> = {
  title: 'UI/TrustBadge',
  component: TrustBadge,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof TrustBadge>;

export const HeroVariant: Story = {
  decorators: [
    (Story) => (
      <div className="bg-[var(--color-ink)] p-12">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="flex gap-3">
      <ATOLBadge variant="hero" />
      <BTABadge variant="hero" />
    </div>
  ),
};

/** ATOL badge shown in a hero context alongside action buttons (white/inverted) */
export const ATOLInHeroContext: Story = {
  decorators: [
    (Story) => (
      <div className="bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600')] bg-cover bg-center p-12">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8">
          <Story />
        </div>
      </div>
    ),
  ],
  render: () => (
    <div className="flex items-center gap-3">
      <button className="bg-[var(--color-accent)] text-[var(--color-ink)] font-semibold px-6 py-3 rounded-lg text-[14px]">
        Search holidays
      </button>
      <button className="bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-lg text-[14px]">
        View offers
      </button>
      <ATOLBadge variant="hero" />
    </div>
  ),
};

export const DefaultVariant: Story = {
  render: () => (
    <div className="flex gap-3 p-8">
      <ATOLBadge variant="default" />
      <BTABadge variant="default" />
    </div>
  ),
};

export const Custom: Story = {
  args: {
    icon: <Shield size={18} className="text-[var(--color-ink)]" />,
    title: 'IPP Insured',
    subtitle: 'Full financial protection',
    variant: 'default',
  },
};
