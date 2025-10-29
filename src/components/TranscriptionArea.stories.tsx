import type { Meta, StoryObj } from '@storybook/react';
import { TranscriptionArea } from './TranscriptionArea';

const meta: Meta<typeof TranscriptionArea> = {
  title: 'Components/TranscriptionArea',
  component: TranscriptionArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof TranscriptionArea>;

export const Default: Story = {
  args: {
    messages: [
      {
        id: '1',
        speaker: 'ai',
        text: 'Hello! How can I help you today?',
        timestamp: new Date(),
      },
      {
        id: '2',
        speaker: 'user',
        text: "I'd like to order a coffee, please.",
        timestamp: new Date(),
      },
      {
        id: '3',
        speaker: 'ai',
        text: 'Of course! What size would you like?',
        timestamp: new Date(),
      },
    ],
  },
  decorators: [
    Story => (
      <div style={{ height: '400px', display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
};

export const LongConversation: Story = {
  args: {
    messages: [
      {
        id: '1',
        speaker: 'ai',
        text: 'Hello! How can I help you today?',
        timestamp: new Date(),
      },
      {
        id: '2',
        speaker: 'user',
        text: "I'd like to order a coffee, please.",
        timestamp: new Date(),
      },
      {
        id: '3',
        speaker: 'ai',
        text: 'Of course! What size would you like?',
        timestamp: new Date(),
      },
      {
        id: '4',
        speaker: 'user',
        text: 'Medium, please.',
        timestamp: new Date(),
      },
      {
        id: '5',
        speaker: 'ai',
        text: 'Great! Would you like any milk alternatives?',
        timestamp: new Date(),
      },
      {
        id: '6',
        speaker: 'user',
        text: 'Yes, oat milk please.',
        timestamp: new Date(),
      },
      {
        id: '7',
        speaker: 'ai',
        text: 'Perfect! That will be $4.50. Anything else?',
        timestamp: new Date(),
      },
      {
        id: '8',
        speaker: 'user',
        text: "No, that's all. Thank you!",
        timestamp: new Date(),
      },
    ],
  },
  decorators: [
    Story => (
      <div style={{ height: '400px', display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
};

export const Empty: Story = {
  args: {
    messages: [],
  },
  decorators: [
    Story => (
      <div style={{ height: '400px', display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
};
