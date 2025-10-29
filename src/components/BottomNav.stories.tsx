import type { Meta, StoryObj } from '@storybook/react';
import { BottomNav } from './BottomNav';

const meta: Meta<typeof BottomNav> = {
  title: 'Components/BottomNav',
  component: BottomNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BottomNav>;

export const Default: Story = {
  decorators: [
    Story => (
      <div style={{ height: '100vh', paddingBottom: '64px' }}>
        <Story />
      </div>
    ),
  ],
};
