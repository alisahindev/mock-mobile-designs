import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';

const meta: Meta<typeof Dialog> = {
  title: 'UI/Dialog',
  component: Dialog,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Dialog description goes here. This is a modal dialog component.</DialogDescription>
        </DialogHeader>
        <div className='py-4'>
          <p>Dialog content goes here</p>
        </div>
        <DialogFooter>
          <Button variant='outline'>Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithoutFooter: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Without Footer</DialogTitle>
          <DialogDescription>This dialog doesn't have a footer section.</DialogDescription>
        </DialogHeader>
        <div className='py-4'>
          <p>Content</p>
        </div>
      </DialogContent>
    </Dialog>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Long Content Dialog</DialogTitle>
          <DialogDescription>This dialog contains a lot of content to demonstrate scrolling.</DialogDescription>
        </DialogHeader>
        <div className='py-4 space-y-4'>
          <p>This is a paragraph with some content.</p>
          <p>Here's another paragraph.</p>
          <p>And yet another one to make it longer.</p>
          <p>Keep scrolling for more content.</p>
          <p>Almost there...</p>
          <p>Final paragraph!</p>
        </div>
        <DialogFooter>
          <Button variant='outline'>Cancel</Button>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
