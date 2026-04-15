import type { Meta, StoryObj } from '@storybook/react';
import { Lightbox } from '@/components/gallery/Lightbox';

const images = [
  { src: 'https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg', alt: 'Beach view' },
  { src: 'https://www.beyondbeach.com/wp-content/uploads/2025/06/Yacht-Sailing-General-Jumping-off-yachts.jpg', alt: 'Yacht jumping' },
  { src: 'https://www.beyondbeach.com/wp-content/uploads/2023/11/Villa-Club-Top-Cover-Image-1.jpg', alt: 'Villa club' },
  { src: 'https://www.beyondbeach.com/wp-content/uploads/2025/03/Beach-Club-Lixouri-Bay_0028_Copy-of-blitz-kef-edit-29.jpg', alt: 'Beach club' },
  { src: 'https://www.beyondbeach.com/wp-content/uploads/2025/03/Yacht-Sailing-General_0013_lts4-e1726258041781.jpg', alt: 'Sailing' },
];

const meta: Meta<typeof Lightbox> = {
  title: 'Gallery/Lightbox',
  component: Lightbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof Lightbox>;

export const Open: Story = {
  args: {
    images,
    initialIndex: 0,
    isOpen: true,
    onClose: () => console.log('Close lightbox'),
  },
};
