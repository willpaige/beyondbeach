import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '@/components/ui/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const ThreeTabs: Story = {
  args: {
    tabs: [
      {
        label: 'Overview',
        content: (
          <div>
            <p className="text-[14px] text-[var(--color-ink)] leading-relaxed">
              A week-long sailing adventure through the stunning Greek islands. Crystal-clear waters, hidden coves, and charming harbour towns await.
            </p>
          </div>
        ),
      },
      {
        label: 'Itinerary',
        content: (
          <div className="space-y-2">
            <p className="text-[14px]"><strong>Day 1:</strong> Arrive in Athens, transfer to marina</p>
            <p className="text-[14px]"><strong>Day 2:</strong> Sail to Hydra</p>
            <p className="text-[14px]"><strong>Day 3:</strong> Explore Spetses</p>
          </div>
        ),
      },
      {
        label: 'Pricing',
        content: (
          <div>
            <p className="text-[14px] text-[var(--color-ink)]">
              From <strong>&pound;1,495</strong> per person based on 2 sharing.
            </p>
          </div>
        ),
      },
    ],
  },
};
