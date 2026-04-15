import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '@/components/ui/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Accordion>;

const items = [
  {
    title: 'What is included in the price?',
    content: (
      <p>The price includes flights, accommodation, transfers, and a dedicated concierge. Meals and activities can be added as extras.</p>
    ),
  },
  {
    title: 'Can I customise my itinerary?',
    content: (
      <p>Absolutely. Every BeyondBeach holiday is tailored to you. Speak to our team to adjust dates, activities, and accommodation.</p>
    ),
  },
  {
    title: 'What is the cancellation policy?',
    content: (
      <p>Full refund up to 60 days before departure. 50% refund between 30-59 days. No refund within 30 days unless covered by travel insurance.</p>
    ),
  },
];

export const SingleOpen: Story = {
  args: { items, allowMultiple: false },
};

export const MultipleOpen: Story = {
  args: { items, allowMultiple: true },
};
