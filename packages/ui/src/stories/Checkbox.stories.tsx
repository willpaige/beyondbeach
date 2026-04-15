import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/components/ui/Checkbox';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox label="I agree to the terms" checked={checked} onChange={setChecked} />;
  },
};

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Checkbox label="Include transfers" checked={checked} onChange={setChecked} />;
  },
};

export const Disabled: Story = {
  args: {
    label: 'Not available',
    checked: false,
    onChange: () => {},
    disabled: true,
  },
};
