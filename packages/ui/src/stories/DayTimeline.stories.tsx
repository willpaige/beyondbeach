import type { Meta, StoryObj } from '@storybook/react';
import { DayTimeline } from '@/components/holiday/DayTimeline';

const meta: Meta<typeof DayTimeline> = {
  title: 'Holiday/DayTimeline',
  component: DayTimeline,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof DayTimeline>;

export const SevenItems: Story = {
  args: {
    items: [
      { time: '07:00', title: 'Sunrise Yoga', description: 'Start the day with a guided yoga session on the beach terrace.' },
      { time: '08:30', title: 'Breakfast Buffet', description: 'Fresh pastries, fruit, eggs and local Greek specialities at the main restaurant.' },
      { time: '10:00', title: 'Watersports', description: 'Kayaking, paddleboarding, and snorkelling — all equipment provided.' },
      { time: '12:30', title: 'Poolside Lunch', description: 'Light bites and cocktails served at the pool bar.' },
      { time: '14:00', title: 'Free Time', description: 'Explore the local village, relax by the pool, or book a spa treatment.' },
      { time: '18:00', title: 'Sunset Drinks', description: 'Live acoustic music and cocktails as the sun sets over the bay.' },
      { time: '20:00', title: 'Evening Dinner', description: 'Three-course Mediterranean dinner with wine pairings.' },
    ],
  },
};
