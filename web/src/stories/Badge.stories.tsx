import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/components/ui/Badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['type', 'dest', 'new', 'offer', 'themed'] },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Type: Story = { args: { variant: 'type', children: 'Beach Club' } };
export const Destination: Story = { args: { variant: 'dest', children: 'Kefalonia, Greece' } };
export const New: Story = { args: { variant: 'new', children: 'Summer 2026' } };
export const Offer: Story = { args: { variant: 'offer', children: 'Save £200' } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="type">Beach Club</Badge>
      <Badge variant="dest">Kefalonia, Greece</Badge>
      <Badge variant="new">Summer 2026</Badge>
      <Badge variant="offer">Save £200</Badge>
    </div>
  ),
};

export const WithCategoryTheme: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <div data-theme="clubs"><Badge variant="themed">Clubs</Badge></div>
      <div data-theme="sailing"><Badge variant="themed">Sailing</Badge></div>
      <div data-theme="health"><Badge variant="themed">Health</Badge></div>
      <div data-theme="ski"><Badge variant="themed">Ski</Badge></div>
      <div data-theme="bright"><Badge variant="themed">Offer</Badge></div>
    </div>
  ),
};
