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
