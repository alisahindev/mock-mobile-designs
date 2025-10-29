import type { Meta, StoryObj } from '@storybook/react';
import { CelebrationHeader } from './CelebrationHeader';

const meta: Meta<typeof CelebrationHeader> = {
  title: 'Components/CelebrationHeader',
  component: CelebrationHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CelebrationHeader>;

export const Default: Story = {
  args: {
    message: 'Tebrikler! Konuşmanı tamamladın! 🎉',
  },
};

export const LongMessage: Story = {
  args: {
    message: 'Harika iş çıkardın! Bu konuşmayı tamamlayarak öğrenme hedeflerine bir adım daha yaklaştın.',
  },
};
