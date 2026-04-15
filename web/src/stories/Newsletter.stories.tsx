import type { Meta, StoryObj } from '@storybook/react';
import { Newsletter } from '@/components/sections/Newsletter';

const meta: Meta<typeof Newsletter> = {
  title: 'Sections/Newsletter',
  component: Newsletter,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof Newsletter>;

export const Default: Story = {};
