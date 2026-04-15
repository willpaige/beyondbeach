import type { Meta, StoryObj } from '@storybook/react';
import { ActivityCard } from '@/components/cards/ActivityCard';

const meta: Meta<typeof ActivityCard> = {
  title: 'Cards/ActivityCard',
  component: ActivityCard,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ActivityCard>;

export const Default: Story = {
  args: {
    imageSrc: 'https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg',
    imageAlt: 'Kayaking',
    name: 'Kayaking',
    tag: 'Water Sports',
    href: '#',
  },
};

export const Row: Story = {
  render: () => (
    <div className="flex gap-4">
      <ActivityCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg"
        imageAlt="Kayaking"
        name="Kayaking"
        tag="Water Sports"
        href="#"
      />
      <ActivityCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2025/06/Yacht-Sailing-General-Jumping-off-yachts.jpg"
        imageAlt="Sailing"
        name="Sailing"
        tag="Water Sports"
        href="#"
      />
      <ActivityCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2025/03/Beach-Club-Lixouri-Bay_0028_Copy-of-blitz-kef-edit-29.jpg"
        imageAlt="Yoga"
        name="Yoga"
        tag="Wellbeing"
        href="#"
      />
      <ActivityCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2023/11/Villa-Club-Top-Cover-Image-1.jpg"
        imageAlt="Wine Tasting"
        name="Wine Tasting"
        tag="Food & Drink"
        href="#"
      />
      <ActivityCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2025/03/alpineclub2.jpg"
        imageAlt="Skiing"
        name="Skiing"
        tag="Winter Sports"
        href="#"
      />
    </div>
  ),
};
