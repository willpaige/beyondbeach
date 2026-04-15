import type { Meta, StoryObj } from '@storybook/react';
import { BookingCard } from '@/components/booking/BookingCard';

const meta: Meta<typeof BookingCard> = {
  title: 'Booking/BookingCard',
  component: BookingCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 380 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof BookingCard>;

export const FullCard: Story = {
  args: {
    wasPrice: '£899',
    nowPrice: '£699',
    saveText: 'Save £200',
    rating: 4.8,
    reviewCount: 124,
    dates: [
      { label: 'Sat 4 Jul - Sat 11 Jul', avail: '12 places left', price: '£699' },
      { label: 'Sat 11 Jul - Sat 18 Jul', avail: '6 places left', price: '£749', low: true },
      { label: 'Sat 18 Jul - Sat 25 Jul', avail: '20 places left', price: '£679' },
      { label: 'Sat 25 Jul - Sat 1 Aug', avail: '18 places left', price: '£719' },
    ],
  },
};
