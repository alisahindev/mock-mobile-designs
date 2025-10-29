import type { Meta, StoryObj } from '@storybook/react';
import { ImprovementCard } from './ImprovementCard';

const meta: Meta<typeof ImprovementCard> = {
  title: 'Components/ImprovementCard',
  component: ImprovementCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImprovementCard>;

export const Default: Story = {
  args: {
    improvement: {
      id: 'improvement-1',
      originalText: 'I want coffee.',
      improvedText: "I'd like a coffee, please.",
      audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
    },
  },
};

export const WithPractice: Story = {
  args: {
    improvement: {
      id: 'improvement-2',
      originalText: 'I want coffee.',
      improvedText: "I'd like a coffee, please.",
      audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
      canPractice: true,
    },
  },
};

export const WithoutAudio: Story = {
  args: {
    improvement: {
      id: 'improvement-3',
      originalText: 'I want coffee.',
      improvedText: "I'd like a coffee, please.",
    },
  },
};

export const LongText: Story = {
  args: {
    improvement: {
      id: 'improvement-4',
      originalText: "I'm not feeling good and I need to see doctor.",
      improvedText: "I haven't been feeling well, and I'd like to make an appointment with a doctor.",
      audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
    },
  },
};
