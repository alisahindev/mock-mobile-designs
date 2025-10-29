import type { Meta, StoryObj } from '@storybook/react';
import { mockAssignments } from '../data/assignments';
import { AssignmentCard } from './AssignmentCard';

const meta: Meta<typeof AssignmentCard> = {
  title: 'Components/AssignmentCard',
  component: AssignmentCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AssignmentCard>;

export const Default: Story = {
  args: {
    assignment: mockAssignments[0],
  },
};

export const InProgress: Story = {
  args: {
    assignment: mockAssignments[1], // doctor-visit-1 is in_progress
  },
};

export const WithSocialProof: Story = {
  args: {
    assignment: mockAssignments[0],
    showSocialProof: true,
  },
};

export const WithoutDueDate: Story = {
  args: {
    assignment: {
      ...mockAssignments[0],
      dueDate: undefined,
    },
  },
};
