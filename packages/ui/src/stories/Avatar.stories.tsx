import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@/components/ui/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg',
    name: 'Sarah Mitchell',
    size: 'md',
  },
};

export const WithInitials: Story = {
  args: {
    name: 'James Cooper',
    size: 'md',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="Sarah Mitchell" size="sm" src="https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg" />
      <Avatar name="Sarah Mitchell" size="md" src="https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg" />
      <Avatar name="Sarah Mitchell" size="lg" src="https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg" />
      <Avatar name="James Cooper" size="sm" />
      <Avatar name="James Cooper" size="md" />
      <Avatar name="James Cooper" size="lg" />
    </div>
  ),
};
