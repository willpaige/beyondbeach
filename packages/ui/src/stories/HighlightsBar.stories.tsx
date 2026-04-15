import type { Meta, StoryObj } from '@storybook/react';
import { HighlightsBar } from '@/components/holiday/HighlightsBar';
import { Plane, Utensils, Waves, Music } from 'lucide-react';

const meta: Meta<typeof HighlightsBar> = {
  title: 'Holiday/HighlightsBar',
  component: HighlightsBar,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof HighlightsBar>;

export const FourItems: Story = {
  args: {
    items: [
      { icon: <Plane size={18} />, text: 'Flights Included', subtext: 'Return from UK' },
      { icon: <Utensils size={18} />, text: 'All Inclusive', subtext: 'Food & drinks' },
      { icon: <Waves size={18} />, text: 'Beachfront', subtext: 'Private beach access' },
      { icon: <Music size={18} />, text: 'Live Events', subtext: 'DJs & pool parties' },
    ],
  },
};
