export type AssignmentStatus = 'not_started' | 'in_progress' | 'completed';

export type AssignmentCategory =
  | 'Cafe Order'
  | 'Doctor Visit'
  | 'Shopping'
  | 'Restaurant'
  | 'Hotel Check-in'
  | 'Job Interview';

export interface HelpfulPhrase {
  id: string;
  text: string;
  audioUrl: string;
}

export interface AssignmentDetail {
  setting: string;
  studentRole: {
    name: string;
    description: string;
    goals: string[];
  };
  aiRole: {
    name: string;
    description: string;
  };
  helpfulPhrases: HelpfulPhrase[];
}

export interface Assignment {
  id: string;
  title: string;
  category: AssignmentCategory;
  duration: number; // minutes
  learningObjective: string;
  status: AssignmentStatus;
  imageUrl: string;
  dueDate?: string; // ISO date string
  detail: AssignmentDetail;
}
