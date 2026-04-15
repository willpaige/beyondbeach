import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from '@/components/ui/RadioGroup';
import { useState } from 'react';

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof RadioGroup>;

const boardOptions = [
  { value: 'bb', label: 'Bed & Breakfast' },
  { value: 'hb', label: 'Half Board' },
  { value: 'fb', label: 'Full Board' },
];

export const ThreeOptions: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <RadioGroup
        label="Board Basis"
        name="board"
        options={boardOptions}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const WithPreselected: Story = {
  render: () => {
    const [value, setValue] = useState('hb');
    return (
      <RadioGroup
        label="Board Basis"
        name="board-pre"
        options={boardOptions}
        value={value}
        onChange={setValue}
      />
    );
  },
};
