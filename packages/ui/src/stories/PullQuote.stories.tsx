import type { Meta, StoryObj } from '@storybook/react';
import { PullQuote } from '@/components/ui/PullQuote';

const meta: Meta<typeof PullQuote> = {
  title: 'UI/PullQuote',
  component: PullQuote,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof PullQuote>;

export const WithAttribution: Story = {
  args: {
    quote: 'The sailing trip was the best holiday we have ever had. The crew were fantastic and the itinerary was perfectly balanced.',
    author: 'Sarah Mitchell',
    role: 'Family of 4, Greece 2025',
  },
};

export const WithoutAttribution: Story = {
  args: {
    quote: 'BeyondBeach helped us discover places we would never have found on our own.',
  },
};
