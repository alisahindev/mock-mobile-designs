import type { Meta, StoryObj } from '@storybook/react';
import { ProgressRing } from './progress-ring';

const meta: Meta<typeof ProgressRing> = {
  title: 'UI/ProgressRing',
  component: ProgressRing,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressRing>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const Variants: Story = {
  render: () => (
    <div className='flex items-center gap-8'>
      <div className='flex flex-col items-center gap-2'>
        <ProgressRing value={0} />
        <span className='text-xs'>0%</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <ProgressRing value={25} />
        <span className='text-xs'>25%</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <ProgressRing value={50} />
        <span className='text-xs'>50%</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <ProgressRing value={75} />
        <span className='text-xs'>75%</span>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <ProgressRing value={100} />
        <span className='text-xs'>100%</span>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-8'>
      <ProgressRing value={50} size={32} />
      <ProgressRing value={50} size={48} />
      <ProgressRing value={50} size={64} />
      <ProgressRing value={50} size={80} />
    </div>
  ),
};

export const StrokeWidths: Story = {
  render: () => (
    <div className='flex items-center gap-8'>
      <ProgressRing value={50} strokeWidth={2} />
      <ProgressRing value={50} strokeWidth={4} />
      <ProgressRing value={50} strokeWidth={6} />
      <ProgressRing value={50} strokeWidth={8} />
    </div>
  ),
};
