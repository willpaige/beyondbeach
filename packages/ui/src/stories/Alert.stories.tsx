import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@/components/ui/Alert';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Good to know',
    children: 'Transfers from the airport are included in the price.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Booking confirmed',
    children: 'Your holiday has been reserved. Check your email for details.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Limited availability',
    children: 'Only 2 rooms left at this price. Book soon to avoid missing out.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Payment failed',
    children: 'We could not process your card. Please try again or use a different payment method.',
  },
};

export const Dismissible: Story = {
  args: {
    variant: 'info',
    title: 'Tip',
    children: 'You can dismiss this alert by clicking the X button.',
    dismissible: true,
    onDismiss: () => alert('Dismissed!'),
  },
};
