import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@/components/ui/Select';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Select>;

const destinations = [
  { value: 'greece', label: 'Greece' },
  { value: 'turkey', label: 'Turkey' },
  { value: 'croatia', label: 'Croatia' },
  { value: 'spain', label: 'Spain' },
];

export const Default: Story = {
  args: { label: 'Destination', options: destinations },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Destination',
    options: destinations,
    placeholder: 'Choose a destination...',
    defaultValue: '',
  },
};

export const WithError: Story = {
  args: {
    label: 'Destination',
    options: destinations,
    placeholder: 'Choose a destination...',
    defaultValue: '',
    error: 'Please select a destination.',
  },
};
