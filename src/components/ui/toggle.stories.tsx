import type { Meta, StoryObj } from '@storybook/react';
import { Bold, Italic, Underline } from 'lucide-react';
import { Toggle } from './toggle';

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    children: 'Toggle',
  },
};

export const Variants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Toggle variant='default'>Default</Toggle>
      <Toggle variant='outline'>Outline</Toggle>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className='flex flex-wrap items-center gap-4'>
      <Toggle size='sm'>Small</Toggle>
      <Toggle size='default'>Default</Toggle>
      <Toggle size='lg'>Large</Toggle>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Toggle aria-label='Bold'>
        <Bold />
      </Toggle>
      <Toggle aria-label='Italic'>
        <Italic />
      </Toggle>
      <Toggle aria-label='Underline'>
        <Underline />
      </Toggle>
    </div>
  ),
};

export const Pressed: Story = {
  args: {
    children: 'Pressed',
    pressed: true,
  },
};
