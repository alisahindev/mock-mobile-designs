import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './progress';

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Variants: Story = {
  render: () => (
    <div className='space-y-4 w-full'>
      <div className='space-y-2'>
        <p className='text-sm'>0%</p>
        <Progress value={0} />
      </div>
      <div className='space-y-2'>
        <p className='text-sm'>25%</p>
        <Progress value={25} />
      </div>
      <div className='space-y-2'>
        <p className='text-sm'>50%</p>
        <Progress value={50} />
      </div>
      <div className='space-y-2'>
        <p className='text-sm'>75%</p>
        <Progress value={75} />
      </div>
      <div className='space-y-2'>
        <p className='text-sm'>100%</p>
        <Progress value={100} />
      </div>
    </div>
  ),
};

export const CustomHeight: Story = {
  render: () => (
    <div className='space-y-4 w-full'>
      <Progress value={50} className='h-2' />
      <Progress value={50} className='h-4' />
      <Progress value={50} className='h-6' />
    </div>
  ),
};
