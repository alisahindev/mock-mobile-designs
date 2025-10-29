import type { Meta, StoryObj } from '@storybook/react';
import { HintButton } from './HintButton';

const meta: Meta<typeof HintButton> = {
  title: 'Components/HintButton',
  component: HintButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HintButton>;

export const Default: Story = {
  args: {
    onClick: () => alert('İpucu gösteriliyor...'),
  },
};

export const WithHintText: Story = {
  args: {
    onClick: () => alert('İpucu gösteriliyor...'),
    hintText: 'Try saying "I would like to..."',
  },
};
