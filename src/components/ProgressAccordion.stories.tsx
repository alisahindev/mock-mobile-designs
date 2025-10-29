import type { Meta, StoryObj } from '@storybook/react';
import { ProgressAccordion } from './ProgressAccordion';

const meta: Meta<typeof ProgressAccordion> = {
  title: 'Components/ProgressAccordion',
  component: ProgressAccordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressAccordion>;

export const Default: Story = {
  args: {
    data: {
      speakingTime: {
        total: '2 sa 15 dk',
        weeklyChange: 'bu hafta 30 dk arttı!',
      },
      confidence: {
        trend: 'Düzenli olarak artıyor',
      },
      taskAchievement: {
        average: 'Ort: 3 hedef/oturum',
        recentAchievements: [
          {
            scenarioTitle: 'Ordering Coffee at a Cafe',
            learningObjective: 'Practice ordering food and drinks in English',
          },
          {
            scenarioTitle: 'Making a Doctor Appointment',
            learningObjective: 'Learn how to schedule medical appointments',
          },
        ],
      },
    },
  },
};

export const WithGraphData: Story = {
  args: {
    data: {
      speakingTime: {
        total: '2 sa 15 dk',
        weeklyChange: 'bu hafta 30 dk arttı!',
        graphData: [
          { date: '2024-01-01', value: 120 },
          { date: '2024-01-02', value: 150 },
          { date: '2024-01-03', value: 145 },
        ],
      },
      confidence: {
        trend: 'Düzenli olarak artıyor',
        graphData: [
          { date: '2024-01-01', value: 2.5 },
          { date: '2024-01-02', value: 2.7 },
          { date: '2024-01-03', value: 2.9 },
        ],
      },
      taskAchievement: {
        average: 'Ort: 3 hedef/oturum',
        recentAchievements: [
          {
            scenarioTitle: 'Ordering Coffee at a Cafe',
            learningObjective: 'Practice ordering food and drinks in English',
          },
        ],
      },
    },
  },
};
