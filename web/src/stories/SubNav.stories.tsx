import type { Meta, StoryObj } from '@storybook/react';
import { SubNav } from '@/components/navigation/SubNav';

const meta: Meta<typeof SubNav> = {
  title: 'Navigation/SubNav',
  component: SubNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof SubNav>;

export const EightItems: Story = {
  args: {
    items: [
      { label: 'Overview', href: '#overview' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Highlights', href: '#highlights' },
      { label: "What's Included", href: '#includes' },
      { label: 'Day by Day', href: '#itinerary' },
      { label: 'Accommodation', href: '#accommodation' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'FAQs', href: '#faqs' },
    ],
    ctaHref: '#book',
    ctaLabel: 'Book Now',
  },
};
