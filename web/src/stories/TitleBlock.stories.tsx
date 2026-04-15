import type { Meta, StoryObj } from '@storybook/react';
import { TitleBlock } from '@/components/holiday/TitleBlock';
import { Star, Users, Calendar, Plane } from 'lucide-react';

const meta: Meta<typeof TitleBlock> = {
  title: 'Holiday/TitleBlock',
  component: TitleBlock,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof TitleBlock>;

export const FullExample: Story = {
  args: {
    badges: [
      { variant: 'type', text: 'Beach Club' },
      { variant: 'dest', text: 'Kefalonia, Greece' },
      { variant: 'offer', text: 'Save £200' },
    ],
    title: 'Villa Club Kefalonia',
    location: 'Lixouri Bay, Kefalonia, Greece',
    stats: [
      { icon: <Star size={14} />, text: '4.8 (124 reviews)' },
      { icon: <Users size={14} />, text: '18-35s' },
      { icon: <Calendar size={14} />, text: '7 nights' },
      { icon: <Plane size={14} />, text: 'Flights included' },
    ],
  },
};
