import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src='https://avatars.githubusercontent.com/u/123456789?v=4' alt='User' />
      <AvatarFallback>LV</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src='https://invalid-url.com/avatar.jpg' alt='User' />
      <AvatarFallback>LV</AvatarFallback>
    </Avatar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Avatar className='size-8'>
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar className='size-12'>
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className='size-16'>
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className='flex items-center gap-2'>
      <Avatar className='size-8'>
        <AvatarImage src='https://avatars.githubusercontent.com/u/1?v=4' alt='User 1' />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className='size-8'>
        <AvatarImage src='https://avatars.githubusercontent.com/u/2?v=4' alt='User 2' />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar className='size-8'>
        <AvatarImage src='https://avatars.githubusercontent.com/u/3?v=4' alt='User 3' />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
    </div>
  ),
};
