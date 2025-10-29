import type { Meta, StoryObj } from '@storybook/react';
import { TimeWarningOverlay } from './TimeWarningOverlay';

const meta: Meta<typeof TimeWarningOverlay> = {
  title: 'Components/TimeWarningOverlay',
  component: TimeWarningOverlay,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof TimeWarningOverlay>;

export const Hidden: Story = {
  args: {
    message: 'Sohbeti bitiriyoruz...',
    show: false,
  },
};

export const Visible: Story = {
  args: {
    message: 'Sohbeti bitiriyoruz...',
    show: true,
  },
};

export const LongMessage: Story = {
  args: {
    message: 'Konuşma süreniz dolmak üzere. Lütfen son cümlelerinizi tamamlayın.',
    show: true,
  },
};
