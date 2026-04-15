import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '@/components/ui/Tag';

const meta: Meta<typeof Tag> = {
  title: 'UI/Tag',
  component: Tag,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag>All Holidays</Tag>
      <Tag variant="clubs">Beach Clubs</Tag>
      <Tag variant="sailing">Sailing</Tag>
      <Tag variant="mountains">Mountains</Tag>
      <Tag variant="ski">Ski</Tag>
    </div>
  ),
};

export const Removable: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="clubs" onRemove={() => alert('Removed!')}>Beach Clubs</Tag>
      <Tag variant="sailing" onRemove={() => alert('Removed!')}>Sailing</Tag>
      <Tag variant="mountains" onRemove={() => alert('Removed!')}>Mountains</Tag>
    </div>
  ),
};
