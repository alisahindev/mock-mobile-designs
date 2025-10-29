import type { Meta, StoryObj } from '@storybook/react';
import { BottomCTABar } from './BottomCTABar';

const meta: Meta<typeof BottomCTABar> = {
  title: 'Components/BottomCTABar',
  component: BottomCTABar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BottomCTABar>;

export const Default: Story = {
  args: {
    onReplay: () => alert('Tekrar oynatılıyor...'),
    onDone: () => alert('Bitti!'),
  },
};
