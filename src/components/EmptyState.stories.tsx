import type { Meta, StoryObj } from '@storybook/react';
import { Inbox } from 'lucide-react';
import { EmptyState } from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: 'Henüz ödev yok',
    description: 'Yeni ödevler geldiğinde burada görünecek.',
  },
};

export const WithIcon: Story = {
  args: {
    icon: <Inbox className='size-12' />,
    title: 'Henüz ödev yok',
    description: 'Yeni ödevler geldiğinde burada görünecek.',
  },
};

export const WithoutDescription: Story = {
  args: {
    icon: <Inbox className='size-12' />,
    title: 'Henüz ödev yok',
  },
};
