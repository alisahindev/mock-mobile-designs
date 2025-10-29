import type { Meta, StoryObj } from '@storybook/react';
import { HelpfulPhraseItem } from './HelpfulPhraseItem';

const meta: Meta<typeof HelpfulPhraseItem> = {
  title: 'Components/HelpfulPhraseItem',
  component: HelpfulPhraseItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HelpfulPhraseItem>;

export const Default: Story = {
  args: {
    phrase: {
      id: 'phrase-1',
      text: "Hi! I'd like to order a coffee, please.",
      audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
    },
  },
};

export const WithShadowingTip: Story = {
  args: {
    phrase: {
      id: 'phrase-1',
      text: "Hi! I'd like to order a coffee, please.",
      audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
    },
    showShadowingTip: true,
  },
};

export const WithoutAudio: Story = {
  args: {
    phrase: {
      id: 'phrase-1',
      text: "Hi! I'd like to order a coffee, please.",
      audioUrl: '',
    },
  },
};

export const LongPhrase: Story = {
  args: {
    phrase: {
      id: 'phrase-1',
      text: "Excuse me, I'd like to order a medium latte with oat milk and a croissant, please.",
      audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
    },
  },
};
