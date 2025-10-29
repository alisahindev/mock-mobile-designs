import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>Content above</div>
      <Separator />
      <div>Content below</div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className='flex items-center gap-4 h-8'>
      <span>Left</span>
      <Separator orientation='vertical' />
      <span>Right</span>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>Section 1</div>
      <Separator />
      <div>Section 2</div>
      <Separator />
      <div>Section 3</div>
    </div>
  ),
};
