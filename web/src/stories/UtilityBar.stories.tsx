import type { Meta, StoryObj } from '@storybook/react';
import { UtilityBar } from '@/components/layout/UtilityBar';

const meta: Meta<typeof UtilityBar> = {
  title: 'Layout/UtilityBar',
  component: UtilityBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof UtilityBar>;

export const Default: Story = {};
