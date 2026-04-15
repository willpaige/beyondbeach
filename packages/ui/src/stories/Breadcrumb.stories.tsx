import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '@/components/ui/Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const FourLevels: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Beach Clubs', href: '/beach-clubs' },
      { label: 'Greece', href: '/beach-clubs/greece' },
      { label: 'Villa Club Kefalonia' },
    ],
  },
};
