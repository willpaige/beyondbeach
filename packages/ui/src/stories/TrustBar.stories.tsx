import type { Meta, StoryObj } from '@storybook/react';
import { TrustBar } from '@/components/sections/TrustBar';

const meta: Meta<typeof TrustBar> = {
  title: 'Sections/TrustBar',
  component: TrustBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof TrustBar>;

export const Default: Story = {};
