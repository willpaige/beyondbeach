import type { Meta, StoryObj } from '@storybook/react';
import { ReviewHighlight } from '@/components/reviews/ReviewHighlight';

const meta: Meta<typeof ReviewHighlight> = {
  title: 'Reviews/ReviewHighlight',
  component: ReviewHighlight,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ReviewHighlight>;

export const Default: Story = {
  args: {
    score: 4.9,
    count: 400,
    reviewsHref: '#reviews',
    aboutHref: '#about',
  },
};
