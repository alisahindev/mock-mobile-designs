import type { Meta, StoryObj } from '@storybook/react';
import { ConfidenceCheck } from './ConfidenceCheck';

const meta: Meta<typeof ConfidenceCheck> = {
  title: 'Components/ConfidenceCheck',
  component: ConfidenceCheck,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ConfidenceCheck>;

export const Default: Story = {
  args: {
    onSelect: level => console.log('Selected confidence level:', level),
  },
};
