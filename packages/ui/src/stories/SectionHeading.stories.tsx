import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Section } from '@/components/layout/Section';

const meta: Meta<typeof SectionHeading> = {
  title: 'UI/SectionHeading',
  component: SectionHeading,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof SectionHeading>;

export const Default: Story = {
  args: {
    label: 'Why BeyondBeach',
    title: "We're not a package holiday.",
    accentText: 'We never were.',
  },
};

export const Centered: Story = {
  args: {
    label: 'Why BeyondBeach',
    title: "We're not a package holiday.",
    accentText: 'We never were.',
    centered: true,
  },
};

export const WithBody: Story = {
  args: {
    label: 'What You Can Do',
    title: 'Your Active Holiday',
    accentText: 'Your Way.',
    body: 'Beach clubs with free watersports, small-group sailing flotillas and alpine adventures.',
  },
};

export const OnDarkBackground: Story = {
  render: () => (
    <Section bg="ink" className="p-12">
      <SectionHeading
        label="Guest Reviews"
        title="What our guests"
        accentText="say."
      />
    </Section>
  ),
};

export const OnAccentBackground: Story = {
  render: () => (
    <Section bg="accent" className="p-12">
      <SectionHeading
        label="Where We Go"
        title="Real places."
        accentText="Off the beaten track."
      />
    </Section>
  ),
};
