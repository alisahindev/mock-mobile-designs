import type { Meta, StoryObj } from '@storybook/react';
import { SpeakingIndicator } from './SpeakingIndicator';

const meta: Meta<typeof SpeakingIndicator> = {
  title: 'Components/SpeakingIndicator',
  component: SpeakingIndicator,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SpeakingIndicator>;

export const Idle: Story = {
  args: {
    state: 'idle',
  },
};

export const AISpeaking: Story = {
  args: {
    state: 'ai-speaking',
  },
};

export const UserSpeaking: Story = {
  args: {
    state: 'user-speaking',
  },
};

export const Listening: Story = {
  args: {
    state: 'listening',
  },
};
