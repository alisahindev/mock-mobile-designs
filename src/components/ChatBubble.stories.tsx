import type { Meta, StoryObj } from '@storybook/react';
import { ChatBubble } from './ChatBubble';

const meta: Meta<typeof ChatBubble> = {
  title: 'Components/ChatBubble',
  component: ChatBubble,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChatBubble>;

export const AIMessage: Story = {
  args: {
    message: 'Hello! How can I help you today?',
    speaker: 'ai',
    translation: 'Merhaba! Bugün size nasıl yardımcı olabilirim?',
  },
};

export const UserMessage: Story = {
  args: {
    message: "I'd like to order a coffee, please.",
    speaker: 'user',
  },
};

export const WithAudio: Story = {
  args: {
    message: 'Hello! How can I help you today?',
    speaker: 'ai',
    audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
    translation: 'Merhaba! Bugün size nasıl yardımcı olabilirim?',
  },
};

export const LongMessage: Story = {
  args: {
    message:
      "I've been having a headache for two days now, and I think I should see a doctor. What times are available this week?",
    speaker: 'ai',
    translation:
      'İki gündür baş ağrım var ve bir doktora görünmem gerektiğini düşünüyorum. Bu hafta hangi saatler müsait?',
  },
};
