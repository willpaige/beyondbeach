import type { Meta, StoryObj } from '@storybook/react';
import { Gallery } from '@/components/gallery/Gallery';

const images = [
  { src: 'https://www.beyondbeach.com/wp-content/uploads/2023/09/img13.jpg', alt: 'Beach view' },
  { src: 'https://www.beyondbeach.com/wp-content/uploads/2025/06/Yacht-Sailing-General-Jumping-off-yachts.jpg', alt: 'Yacht jumping' },
  { src: 'https://www.beyondbeach.com/wp-content/uploads/2023/11/Villa-Club-Top-Cover-Image-1.jpg', alt: 'Villa club' },
  { src: 'https://www.beyondbeach.com/wp-content/uploads/2025/03/Beach-Club-Lixouri-Bay_0028_Copy-of-blitz-kef-edit-29.jpg', alt: 'Beach club' },
  { src: 'https://www.beyondbeach.com/wp-content/uploads/2025/03/Yacht-Sailing-General_0013_lts4-e1726258041781.jpg', alt: 'Sailing' },
];

const meta: Meta<typeof Gallery> = {
  title: 'Gallery/Gallery',
  component: Gallery,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Gallery>;

export const Default: Story = {
  args: {
    images,
    onOpenLightbox: (index: number) => console.log('Open lightbox at', index),
  },
};
