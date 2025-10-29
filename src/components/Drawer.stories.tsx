import type { Meta, StoryObj } from '@storybook/react';
import { useAppState } from '../contexts/AppStateProvider';
import { Drawer } from './Drawer';
import { Button } from './ui/button';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const DrawerWrapper = () => {
  const { openDrawer } = useAppState();
  return (
    <div style={{ padding: '20px' }}>
      <Button onClick={openDrawer}>Drawer'ı Aç</Button>
      <Drawer />
    </div>
  );
};

export const Default: Story = {
  render: () => <DrawerWrapper />,
};
