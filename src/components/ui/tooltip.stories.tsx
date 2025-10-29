import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const AllSides: Story = {
  render: () => (
    <div className='flex flex-col items-center gap-8 p-8'>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Top</Button>
          </TooltipTrigger>
          <TooltipContent side='top'>
            <p>Top tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className='flex gap-8'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Left</Button>
            </TooltipTrigger>
            <TooltipContent side='left'>
              <p>Left tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Right</Button>
            </TooltipTrigger>
            <TooltipContent side='right'>
              <p>Right tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side='bottom'>
            <p>Bottom tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Hover for long content</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a very long tooltip message that demonstrates how the tooltip handles longer content.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
