import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'ghost', 'dark', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Latest Offers' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Explore Holidays' },
};

export const Dark: Story = {
  args: { variant: 'dark', children: 'More About Us' },
};

export const Outline: Story = {
  args: { variant: 'outline', children: 'Speak to our team' },
};

export const AsLink: Story = {
  args: { variant: 'primary', children: 'Check Availability', href: '#' },
};

export const Small: Story = {
  args: { variant: 'primary', size: 'sm', children: 'Book Now' },
};

export const Large: Story = {
  args: { variant: 'primary', size: 'lg', children: 'Explore 2026 Holidays' },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="primary">Primary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};
