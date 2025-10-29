import type { Meta, StoryObj } from '@storybook/react';
import { ReplayProgressBar } from './ReplayProgressBar';

const meta: Meta<typeof ReplayProgressBar> = {
  title: 'Components/ReplayProgressBar',
  component: ReplayProgressBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ReplayProgressBar>;

export const Default: Story = {
  args: {
    currentTime: 135, // 2:15
    totalTime: 383, // 6:23
  },
};

export const AtStart: Story = {
  args: {
    currentTime: 0,
    totalTime: 383,
  },
};

export const AtEnd: Story = {
  args: {
    currentTime: 383,
    totalTime: 383,
  },
};

export const ShortConversation: Story = {
  args: {
    currentTime: 45,
    totalTime: 90,
  },
};
