import type { Meta, StoryObj } from '@storybook/react';
import { CheckCircle2, Clock } from 'lucide-react';
import { MetricRow } from './MetricRow';

const meta: Meta<typeof MetricRow> = {
  title: 'Components/MetricRow',
  component: MetricRow,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MetricRow>;

export const Default: Story = {
  args: {
    icon: <Clock className='size-5' />,
    label: 'konuştun',
    value: '5 dk 23 sn',
  },
};

export const WithCumulativeTotal: Story = {
  args: {
    icon: <Clock className='size-5' />,
    label: 'konuştun',
    value: '5 dk 23 sn',
    cumulativeTotal: '2 sa 15 dk',
  },
};

export const CompletionMetric: Story = {
  args: {
    icon: <CheckCircle2 className='size-5' />,
    label: 'hedefi tamamladın',
    value: '3',
    cumulativeTotal: '12',
  },
};
