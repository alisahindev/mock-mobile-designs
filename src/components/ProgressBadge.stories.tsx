import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBadge } from './ProgressBadge';

const meta: Meta<typeof ProgressBadge> = {
  title: 'Components/ProgressBadge',
  component: ProgressBadge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressBadge>;

export const SpeakingTime: Story = {
  args: {
    type: 'speaking-time',
    value: '2 sa 15 dk',
  },
};

export const Completion: Story = {
  args: {
    type: 'completion',
    value: '12',
  },
};

export const CompletionWithStreak: Story = {
  args: {
    type: 'completion',
    value: '12',
    streak: 5,
  },
};
