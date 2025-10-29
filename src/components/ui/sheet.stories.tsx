import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './sheet';

const meta: Meta<typeof Sheet> = {
  title: 'UI/Sheet',
  component: Sheet,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Sheet description goes here. This is a side sheet component.</SheetDescription>
        </SheetHeader>
        <div className='py-4'>
          <p>Sheet content goes here</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const LeftSide: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>Left Side Sheet</SheetTitle>
          <SheetDescription>This sheet opens from the left side.</SheetDescription>
        </SheetHeader>
        <div className='py-4'>
          <p>Content</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const WithoutTitle: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <div className='py-4'>
          <p>Sheet content without title</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};
