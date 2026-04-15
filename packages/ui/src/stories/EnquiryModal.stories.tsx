import type { Meta, StoryObj } from '@storybook/react';
import { EnquiryModal } from '@/components/modals/EnquiryModal';

const meta: Meta<typeof EnquiryModal> = {
  title: 'Modals/EnquiryModal',
  component: EnquiryModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof EnquiryModal>;

export const Open: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
};
