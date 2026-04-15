import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@/components/ui/Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-[16px] font-semibold mb-2">Sailing Holiday</h3>
        <p className="text-[14px] text-[var(--color-muted)]">
          Explore the Greek islands on a luxury catamaran.
        </p>
      </div>
    ),
  },
};

export const WithHover: Story = {
  args: {
    hover: true,
    children: (
      <div>
        <h3 className="text-[16px] font-semibold mb-2">Beach Club Escape</h3>
        <p className="text-[14px] text-[var(--color-muted)]">
          Sun, sea and exclusive beachfront access.
        </p>
      </div>
    ),
  },
};

export const AsLink: Story = {
  args: {
    href: '#',
    hover: true,
    children: (
      <div>
        <h3 className="text-[16px] font-semibold mb-2">View Holiday</h3>
        <p className="text-[14px] text-[var(--color-muted)]">Click to see full details.</p>
      </div>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <div>
        <div className="h-[160px] bg-[var(--color-sand)] flex items-center justify-center text-[var(--color-muted)]">
          Image area
        </div>
        <div className="p-4">
          <h3 className="text-[16px] font-semibold mb-1">Mountain Retreat</h3>
          <p className="text-[14px] text-[var(--color-muted)]">Alpine wellness and adventure.</p>
        </div>
      </div>
    ),
  },
};
