import type { Meta, StoryObj } from '@storybook/react';
import { SimilarHolidayCard } from '@/components/cards/SimilarHolidayCard';

const meta: Meta<typeof SimilarHolidayCard> = {
  title: 'Cards/SimilarHolidayCard',
  component: SimilarHolidayCard,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof SimilarHolidayCard>;

export const Default: Story = {
  args: {
    imageSrc: 'https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg',
    imageAlt: 'Beach Club Lixouri Bay',
    destination: 'Kefalonia, Greece',
    name: 'Lixouri Bay Beach Club',
    price: 'From £899 per person',
    href: '#',
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-5 max-w-5xl">
      <SimilarHolidayCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg"
        imageAlt="Beach Club"
        destination="Kefalonia, Greece"
        name="Lixouri Bay Beach Club"
        price="From £899 per person"
        href="#"
      />
      <SimilarHolidayCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2025/06/Yacht-Sailing-General-Jumping-off-yachts.jpg"
        imageAlt="Sailing"
        destination="Lefkas, Greece"
        name="Ionian Sailing Adventure"
        price="From £1,199 per person"
        href="#"
      />
      <SimilarHolidayCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2025/03/alpineclub2.jpg"
        imageAlt="Alpine Club"
        destination="Kaprun, Austria"
        name="Alpine Club Kaprun"
        price="From £999 per person"
        href="#"
      />
    </div>
  ),
};
