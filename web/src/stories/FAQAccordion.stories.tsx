import type { Meta, StoryObj } from '@storybook/react';
import { FAQAccordion } from '@/components/holiday/FAQAccordion';

const meta: Meta<typeof FAQAccordion> = {
  title: 'Holiday/FAQAccordion',
  component: FAQAccordion,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof FAQAccordion>;

export const FiveQuestions: Story = {
  args: {
    items: [
      { question: 'What is included in the price?', answer: 'Your holiday includes return flights, airport transfers, 7 nights accommodation, and all-inclusive food and drink. Watersports and evening entertainment are also included at no extra cost.' },
      { question: 'Can I book for a group?', answer: 'Absolutely! We specialise in group holidays. You can book for groups of any size and we offer group discounts for parties of 8 or more. Contact our team for a bespoke quote.' },
      { question: 'What is the cancellation policy?', answer: 'We offer free cancellation up to 60 days before departure. Between 30-60 days, a 50% charge applies. Within 30 days, the full balance is non-refundable. We recommend travel insurance for added peace of mind.' },
      { question: 'Are flights included?', answer: 'Yes, return flights from a range of UK airports are included in the price. You can select your preferred departure airport during the booking process. Flight times will be confirmed closer to departure.' },
      { question: 'What is the age range?', answer: 'This holiday is designed for 18-35 year olds. The atmosphere is social and lively, with a mix of activities, nightlife, and relaxation. It is perfect for solo travellers, couples, and friend groups alike.' },
    ],
  },
};
