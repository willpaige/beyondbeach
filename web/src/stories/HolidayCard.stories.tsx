import type { Meta, StoryObj } from '@storybook/react';
import { HolidayCard } from '@/components/cards/HolidayCard';

const meta: Meta<typeof HolidayCard> = {
  title: 'Cards/HolidayCard',
  component: HolidayCard,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof HolidayCard>;

export const Regular: Story = {
  args: {
    imageSrc: 'https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg',
    imageAlt: 'Beach Club holiday',
    type: 'Beach Club',
    title: 'Lixouri Bay Beach Club',
    subtitle: 'Kefalonia, Greece',
    href: '#',
  },
};

export const Featured: Story = {
  args: {
    imageSrc: 'https://www.beyondbeach.com/wp-content/uploads/2025/06/Yacht-Sailing-General-Jumping-off-yachts.jpg',
    imageAlt: 'Sailing holiday',
    type: 'Sailing',
    title: 'Yacht Sailing Adventures in the Greek Islands',
    subtitle: 'Lefkas & Ionian Islands',
    href: '#',
    featured: true,
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 max-w-5xl" style={{ gridAutoRows: '280px' }}>
      <div className="row-span-2">
        <HolidayCard
          imageSrc="https://www.beyondbeach.com/wp-content/uploads/2025/06/Yacht-Sailing-General-Jumping-off-yachts.jpg"
          imageAlt="Sailing"
          type="Sailing"
          title="Yacht Sailing Adventures"
          subtitle="Lefkas & Ionian Islands"
          href="#"
          featured
        />
      </div>
      <HolidayCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg"
        imageAlt="Beach Club"
        type="Beach Club"
        title="Lixouri Bay Beach Club"
        subtitle="Kefalonia, Greece"
        href="#"
      />
      <HolidayCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2025/03/alpineclub2.jpg"
        imageAlt="Ski"
        type="Ski & Alpine"
        title="Alpine Club Kaprun"
        subtitle="Kaprun, Austria"
        href="#"
      />
      <HolidayCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2023/11/Villa-Club-Top-Cover-Image-1.jpg"
        imageAlt="Villa"
        type="Villa Club"
        title="Luxury Villa Collection"
        subtitle="Kefalonia, Greece"
        href="#"
      />
      <HolidayCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2025/03/Beach-Club-Lixouri-Bay_0028_Copy-of-blitz-kef-edit-29.jpg"
        imageAlt="Yoga"
        type="Health & Wellbeing"
        title="Yoga & Wellness Retreat"
        subtitle="Kefalonia, Greece"
        href="#"
      />
    </div>
  ),
};
