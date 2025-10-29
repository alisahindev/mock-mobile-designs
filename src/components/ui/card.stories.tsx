import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content area</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card>
      <CardContent className='pt-6'>
        <p>Simple card with just content</p>
      </CardContent>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card hasImage>
      <div className='relative h-48 w-full overflow-hidden rounded-t-xl'>
        <img
          src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=450&fit=crop'
          alt='Card image'
          className='h-full w-full object-cover'
        />
      </div>
      <CardHeader hasImage>
        <CardTitle>Card with Image</CardTitle>
        <CardDescription>This card includes an image</CardDescription>
      </CardHeader>
      <CardContent hasImage>
        <p>Content goes here</p>
      </CardContent>
    </Card>
  ),
};
