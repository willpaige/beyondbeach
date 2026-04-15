import type { Meta, StoryObj } from '@storybook/react';
import { WhyCard } from '@/components/cards/WhyCard';

const meta: Meta<typeof WhyCard> = {
  title: 'Cards/WhyCard',
  component: WhyCard,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof WhyCard>;

export const Default: Story = {
  args: {
    imageSrc: 'https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg',
    imageAlt: 'Expert curation',
    title: 'Expert Curation',
    body: 'Every holiday is hand-picked by our team of travel specialists who have visited every destination.',
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-8 max-w-4xl">
      <WhyCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg"
        imageAlt="Expert curation"
        title="Expert Curation"
        body="Every holiday is hand-picked by our team of travel specialists who have visited every destination."
      />
      <WhyCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2025/06/Yacht-Sailing-General-Jumping-off-yachts.jpg"
        imageAlt="Unique experiences"
        title="Unique Experiences"
        body="From sailing adventures to yoga retreats, we offer holidays you simply won't find anywhere else."
      />
      <WhyCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2023/11/Villa-Club-Top-Cover-Image-1.jpg"
        imageAlt="ATOL protected"
        title="ATOL Protected"
        body="Book with total confidence. Every BeyondBeach holiday is fully ATOL protected for your peace of mind."
      />
      <WhyCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2025/03/Beach-Club-Lixouri-Bay_0028_Copy-of-blitz-kef-edit-29.jpg"
        imageAlt="Personal service"
        title="Personal Service"
        body="Our dedicated travel team is always on hand to help before, during and after your holiday."
      />
    </div>
  ),
};
