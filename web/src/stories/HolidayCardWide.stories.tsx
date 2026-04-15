import type { Meta, StoryObj } from '@storybook/react';
import { HolidayCardWide } from '@/components/cards/HolidayCardWide';

const meta: Meta<typeof HolidayCardWide> = {
  title: 'Cards/HolidayCardWide',
  component: HolidayCardWide,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof HolidayCardWide>;

export const Default: Story = {
  args: {
    imageSrc: 'https://www.beyondbeach.com/wp-content/uploads/2025/03/Sailing2.jpg',
    imageAlt: 'Sailing holiday',
    type: 'Sailing',
    title: 'Yacht Sailing Adventures in the Greek Islands',
    subtitle: 'Lefkas & Ionian Islands',
    href: '#',
  },
  decorators: [
    (Story) => (
      <div className="max-w-4xl">
        <Story />
      </div>
    ),
  ],
};
