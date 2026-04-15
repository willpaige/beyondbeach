import type { Meta, StoryObj } from '@storybook/react';
import { AccommodationCard } from '@/components/cards/AccommodationCard';

const meta: Meta<typeof AccommodationCard> = {
  title: 'Cards/AccommodationCard',
  component: AccommodationCard,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof AccommodationCard>;

export const Default: Story = {
  args: {
    imageSrc: 'https://www.beyondbeach.com/wp-content/uploads/2023/11/Villa-Club-Top-Cover-Image-1.jpg',
    imageAlt: 'Superior room',
    name: 'Superior Room',
    description: 'Spacious room with private balcony overlooking the bay. Air conditioning, en-suite bathroom and complimentary Wi-Fi.',
    sleeps: 2,
    bedType: 'Double',
  },
};

export const Pair: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-5 max-w-3xl">
      <AccommodationCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2023/11/Villa-Club-Top-Cover-Image-1.jpg"
        imageAlt="Superior room"
        name="Superior Room"
        description="Spacious room with private balcony overlooking the bay. Air conditioning, en-suite bathroom and complimentary Wi-Fi."
        sleeps={2}
        bedType="Double"
      />
      <AccommodationCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg"
        imageAlt="Family suite"
        name="Family Suite"
        description="Two-bedroom suite with separate living area. Perfect for families, with a kitchenette and sea-view terrace."
        sleeps={4}
        bedType="Twin + Double"
      />
    </div>
  ),
};
