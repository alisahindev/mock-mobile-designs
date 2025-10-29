import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeader } from './SectionHeader';
import { Button } from './ui/button';

const meta: Meta<typeof SectionHeader> = {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: {
    title: 'Aktif Ödevler',
  },
};

export const WithAction: Story = {
  args: {
    title: 'Aktif Ödevler',
    action: (
      <Button variant='ghost' size='sm'>
        Tümünü Gör
      </Button>
    ),
  },
};

export const LongTitle: Story = {
  args: {
    title: 'Tamamlanmış Senaryolar ve Konuşma Geçmişi',
  },
};
