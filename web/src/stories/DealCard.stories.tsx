import type { Meta, StoryObj } from '@storybook/react';
import { DealCard } from '@/components/cards/DealCard';

const meta: Meta<typeof DealCard> = {
  title: 'Cards/DealCard',
  component: DealCard,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof DealCard>;

export const Default: Story = {
  args: {
    imageSrc: 'https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg',
    imageAlt: 'Beach Club deal',
    badgeText: 'Beach Club',
    offerText: 'Save £200',
    destination: 'Kefalonia, Greece',
    title: 'Lixouri Bay Beach Club',
    meta: '7 nights · Half board · Jun 2026',
    wasPrice: '£1,299',
    nowPrice: '£1,099',
    perPerson: 'per person',
    saveText: 'Save £200',
    href: '#',
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-5 max-w-5xl">
      <DealCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg"
        imageAlt="Beach Club deal"
        badgeText="Beach Club"
        offerText="Save £200"
        destination="Kefalonia, Greece"
        title="Lixouri Bay Beach Club"
        meta="7 nights · Half board · Jun 2026"
        wasPrice="£1,299"
        nowPrice="£1,099"
        perPerson="per person"
        saveText="Save £200"
        href="#"
      />
      <DealCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2025/06/Yacht-Sailing-General-Jumping-off-yachts.jpg"
        imageAlt="Sailing deal"
        badgeText="Sailing"
        offerText="Early Bird"
        destination="Lefkas, Greece"
        title="Ionian Sailing Adventure"
        meta="7 nights · Full board · Jul 2026"
        wasPrice="£1,599"
        nowPrice="£1,349"
        perPerson="per person"
        saveText="Save £250"
        href="#"
      />
      <DealCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2025/03/alpineclub2.jpg"
        imageAlt="Ski deal"
        badgeText="Ski & Alpine"
        offerText="Last Minute"
        destination="Kaprun, Austria"
        title="Alpine Club Kaprun"
        meta="7 nights · Half board · Jan 2026"
        wasPrice="£1,499"
        nowPrice="£1,199"
        perPerson="per person"
        saveText="Save £300"
        href="#"
      />
    </div>
  ),
};
