import type { Meta, StoryObj } from '@storybook/react';
import { Stat } from '@/components/ui/Stat';

const meta: Meta<typeof Stat> = {
  title: 'UI/Stat',
  component: Stat,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Stat>;

export const SingleStat: Story = {
  args: { value: '2,400+', label: 'Happy Travellers' },
};

export const RowOfStats: Story = {
  render: () => (
    <div className="flex gap-12">
      <Stat value="25+" label="Destinations" />
      <Stat value="2,400+" label="Happy Travellers" />
      <Stat value="98%" label="Would Rebook" />
      <Stat value="4.9" label="Trustpilot Rating" />
    </div>
  ),
};
