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

export const WithLogos: Story = {
  args: {
    items: [
      { logoSrc: '/images/ATOL_Protected_u6zvry.png', label: 'ATOL Protected' },
      { logoSrc: '/images/british-travel-awards.png', label: 'British Travel Awards' },
      { logoSrc: '/images/international_passenger_protection_limited.png', label: 'IPP Insured' },
      { logoSrc: '/images/RYA.jpg', label: 'RYA Recognised' },
    ],
  },
};
