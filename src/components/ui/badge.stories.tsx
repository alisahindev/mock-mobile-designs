import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from 'lucide-react';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Variants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Badge variant='default'>Default</Badge>
      <Badge variant='secondary'>Secondary</Badge>
      <Badge variant='destructive'>Destructive</Badge>
      <Badge variant='outline'>Outline</Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Badge>
        <Tag className='size-3' />
        Category
      </Badge>
      <Badge variant='outline'>
        <Tag className='size-3' />
        Tag
      </Badge>
    </div>
  ),
};

export const LongText: Story = {
  args: {
    children: 'Very Long Badge Text',
  },
};
