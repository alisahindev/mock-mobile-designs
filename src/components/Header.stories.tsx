import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};

export const WithProgressBadges: Story = {
  args: {
    showProgressBadges: true,
    speakingTime: '2 sa 15 dk',
    completionCount: 12,
    streak: 3,
  },
};

export const WithCompletionOnly: Story = {
  args: {
    showProgressBadges: true,
    completionCount: 5,
  },
};

export const WithStreak: Story = {
  args: {
    showProgressBadges: true,
    speakingTime: '1 sa 30 dk',
    completionCount: 8,
    streak: 5,
  },
};
