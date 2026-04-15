import type { Meta, StoryObj } from '@storybook/react';
import { BlogCard } from '@/components/cards/BlogCard';

const meta: Meta<typeof BlogCard> = {
  title: 'Cards/BlogCard',
  component: BlogCard,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {
  args: {
    imageSrc: 'https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg',
    imageAlt: 'Beach holiday guide',
    category: 'Travel Guides',
    title: 'The Ultimate Guide to Kefalonia',
    excerpt: 'Discover the best beaches, restaurants, and hidden gems on this stunning Greek island. From the famous Myrtos Beach to charming Fiskardo harbour.',
    href: '#',
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-5 max-w-5xl">
      <BlogCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg"
        imageAlt="Kefalonia guide"
        category="Travel Guides"
        title="The Ultimate Guide to Kefalonia"
        excerpt="Discover the best beaches, restaurants, and hidden gems on this stunning Greek island."
        href="#"
      />
      <BlogCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2025/06/Yacht-Sailing-General-Jumping-off-yachts.jpg"
        imageAlt="Sailing tips"
        category="Sailing"
        title="First Time Sailing? Here's What to Expect"
        excerpt="Everything you need to know before your first yacht sailing adventure, from packing tips to daily routines."
        href="#"
      />
      <BlogCard
        imageSrc="https://www.beyondbeach.com/wp-content/uploads/2025/03/Beach-Club-Lixouri-Bay_0028_Copy-of-blitz-kef-edit-29.jpg"
        imageAlt="Yoga retreat"
        category="Wellbeing"
        title="5 Reasons to Try a Yoga Retreat"
        excerpt="Why combining yoga with a beach holiday is the perfect way to recharge your mind, body and soul."
        href="#"
      />
    </div>
  ),
};
