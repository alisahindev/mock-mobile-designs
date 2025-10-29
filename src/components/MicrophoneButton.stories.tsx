import type { Meta, StoryObj } from '@storybook/react';
import { MicrophoneButton } from './MicrophoneButton';

const meta: Meta<typeof MicrophoneButton> = {
  title: 'Components/MicrophoneButton',
  component: MicrophoneButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MicrophoneButton>;

export const Idle: Story = {
  args: {
    state: 'idle',
    onToggle: () => alert('Mikrofon açıldı'),
  },
};

export const Active: Story = {
  args: {
    state: 'active',
    onToggle: () => alert('Mikrofon kapatıldı'),
  },
};

export const AutoDisabled: Story = {
  args: {
    state: 'auto-disabled',
    onToggle: () => {},
  },
};
