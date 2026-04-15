import type { Meta, StoryObj } from '@storybook/react';
import { IncludesGrid } from '@/components/holiday/IncludesGrid';

const meta: Meta<typeof IncludesGrid> = {
  title: 'Holiday/IncludesGrid',
  component: IncludesGrid,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof IncludesGrid>;

export const TenItems: Story = {
  args: {
    items: [
      { text: 'Return flights', included: true },
      { text: 'Airport transfers', included: true },
      { text: '7 nights accommodation', included: true },
      { text: 'All-inclusive food & drink', included: true },
      { text: 'Watersports activities', included: true },
      { text: 'Evening entertainment', included: true },
      { text: 'Kids club access', included: true },
      { text: 'Travel insurance', included: false },
      { text: 'Excursions & day trips', included: false },
      { text: 'Spa treatments', included: false },
    ],
  },
};
