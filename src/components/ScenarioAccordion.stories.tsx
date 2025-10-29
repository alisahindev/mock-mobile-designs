import type { Meta, StoryObj } from '@storybook/react';
import { mockAssignments } from '../data/assignments';
import { ScenarioAccordion } from './ScenarioAccordion';

const meta: Meta<typeof ScenarioAccordion> = {
  title: 'Components/ScenarioAccordion',
  component: ScenarioAccordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScenarioAccordion>;

export const Default: Story = {
  args: {
    detail: mockAssignments[0].detail,
  },
};

export const WithDefaultOpen: Story = {
  args: {
    detail: mockAssignments[0].detail,
    defaultOpen: ['helpfulPhrases'],
  },
};

export const MultipleOpen: Story = {
  args: {
    detail: mockAssignments[0].detail,
    defaultOpen: ['setting', 'helpfulPhrases'],
  },
};
