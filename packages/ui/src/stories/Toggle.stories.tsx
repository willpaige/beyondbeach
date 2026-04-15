import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@/components/ui/Toggle';
import { useState } from 'react';

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Off: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Toggle label="Flexible dates" checked={checked} onChange={setChecked} />;
  },
};

export const On: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Toggle label="Flexible dates" checked={checked} onChange={setChecked} />;
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
