import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@/components/ui/Tooltip';
import { Button } from '@/components/ui/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center min-h-[200px]">
        <Story />
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  args: {
    content: 'Check availability and pricing',
    position: 'top',
    children: <Button variant="outline">Hover me (top)</Button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Check availability and pricing',
    position: 'bottom',
    children: <Button variant="outline">Hover me (bottom)</Button>,
  },
};

export const Left: Story = {
  args: {
    content: 'Check availability',
    position: 'left',
    children: <Button variant="outline">Hover me (left)</Button>,
  },
};

export const Right: Story = {
  args: {
    content: 'Check availability',
    position: 'right',
    children: <Button variant="outline">Hover me (right)</Button>,
  },
};
