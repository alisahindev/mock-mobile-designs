import type { Meta, StoryObj } from '@storybook/react';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=450&fit=crop',
    alt: 'Cafe scene',
  },
};

export const DifferentImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=450&fit=crop',
    alt: 'Doctor office',
  },
};
