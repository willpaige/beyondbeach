import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: 'Full Name', placeholder: 'Enter your name' },
};

export const WithHelper: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'you@example.com',
    helperText: 'We will never share your email with anyone.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    value: 'not-an-email',
    error: 'Please enter a valid email address.',
  },
};

export const EmailType: Story = {
  args: { label: 'Email', type: 'email', placeholder: 'you@example.com' },
};

export const PasswordType: Story = {
  args: { label: 'Password', type: 'password', placeholder: 'Enter password' },
};

export const Disabled: Story = {
  args: { label: 'Disabled Field', placeholder: 'Cannot edit', disabled: true },
};
