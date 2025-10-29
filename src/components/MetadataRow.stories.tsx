import type { Meta, StoryObj } from '@storybook/react';
import { MetadataRow } from './MetadataRow';

const meta: Meta<typeof MetadataRow> = {
  title: 'Components/MetadataRow',
  component: MetadataRow,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MetadataRow>;

export const Default: Story = {
  args: {
    learningObjective: 'Practice ordering food and drinks in English',
    category: 'Cafe Order',
    duration: 8,
  },
};

export const LongLearningObjective: Story = {
  args: {
    learningObjective: 'Learn how to schedule medical appointments and describe symptoms in detail',
    category: 'Doctor Visit',
    duration: 10,
  },
};
