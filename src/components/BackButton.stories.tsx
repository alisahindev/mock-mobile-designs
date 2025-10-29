import type { Meta, StoryObj } from '@storybook/react';
import { BackButton } from './BackButton';

const meta: Meta<typeof BackButton> = {
  title: 'Components/BackButton',
  component: BackButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BackButton>;

export const Default: Story = {
  args: {},
};

export const WithCustomClick: Story = {
  args: {
    onClick: () => alert('Custom click handler'),
  },
};
