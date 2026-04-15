import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '@/components/ui/Divider';

const meta: Meta<typeof Divider> = {
  title: 'UI/Divider',
  component: Divider,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Divider>;

export const Plain: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: { label: 'or continue with' },
};
