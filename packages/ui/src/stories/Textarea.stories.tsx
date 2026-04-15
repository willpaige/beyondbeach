import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/ui/Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Tell us about your ideal holiday...',
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    placeholder: 'Tell us about your ideal holiday...',
    error: 'Please enter a message.',
  },
};
