import type { Meta, StoryObj } from '@storybook/react';
import { mockAssignments } from '../data/assignments';
import { CompletedScenarioCard } from './CompletedScenarioCard';

const meta: Meta<typeof CompletedScenarioCard> = {
  title: 'Components/CompletedScenarioCard',
  component: CompletedScenarioCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CompletedScenarioCard>;

export const Default: Story = {
  args: {
    assignment: mockAssignments[0],
    speakingTime: '5 dk 23 sn',
  },
};

export const WithoutSpeakingTime: Story = {
  args: {
    assignment: mockAssignments[0],
  },
};

export const LongTitle: Story = {
  args: {
    assignment: {
      ...mockAssignments[0],
      title: 'Ordering Coffee at a Cafe - Advanced Conversation Practice',
    },
    speakingTime: '8 dk 45 sn',
  },
};
