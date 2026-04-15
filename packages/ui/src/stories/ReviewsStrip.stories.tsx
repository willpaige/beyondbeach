import type { Meta, StoryObj } from '@storybook/react';
import { ReviewsStrip } from '@/components/reviews/ReviewsStrip';

const meta: Meta<typeof ReviewsStrip> = {
  title: 'Reviews/ReviewsStrip',
  component: ReviewsStrip,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof ReviewsStrip>;

export const WithThreeQuotes: Story = {
  args: {
    score: 4.9,
    reviewCount: 400,
    quotes: [
      {
        text: 'The best family holiday we have ever had. The kids were entertained all day and we actually got to relax.',
        author: 'Sarah T., Nikiana Beach Club',
      },
      {
        text: 'Sailing around the Greek islands with a group of friends — honestly life-changing. Already booked again.',
        author: 'James R., Lefkas Flotilla',
      },
      {
        text: 'We tried a ski holiday with BeyondBeach after years of beach clubs. The chalet team were incredible.',
        author: 'The Hendersons, Val d\'Isère',
      },
    ],
  },
};
