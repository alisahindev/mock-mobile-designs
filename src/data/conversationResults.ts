export interface ConversationStats {
  sessionDuration: number; // seconds
  totalDuration: number; // seconds
  goalsMet: number;
  totalGoals: number;
  goalsDetails: string[];
}

export interface ImprovementCard {
  id: string;
  studentSpeech: string;
  correctedSpeech: string;
  audioUrl: string;
  category: 'grammar' | 'pronunciation' | 'vocabulary' | 'fluency';
  explanation: string;
}

export interface AzureAssessmentResult {
  accuracyScore: number;
  fluencyScore: number;
  completenessScore: number;
  pronunciationScore: number;
  overallScore: number;
  feedback: string;
  color: 'green' | 'yellow' | 'red';
}

export interface ConversationResult {
  id: string;
  assignmentId: string;
  stats: ConversationStats;
  improvements: ImprovementCard[];
  confidenceLevel?: 'low' | 'medium' | 'high';
  completedAt: Date;
}

// Mock conversation results data
export const mockConversationResults: ConversationResult[] = [
  {
    id: 'conv-1',
    assignmentId: 'cafe-order-1',
    stats: {
      sessionDuration: 272, // 4 min 32 sec
      totalDuration: 2880, // 48 min total
      goalsMet: 8,
      totalGoals: 10,
      goalsDetails: [
        'Greeted the barista politely',
        'Asked about menu options',
        'Ordered a drink successfully',
        'Asked about sizes',
        'Ordered food item',
        'Asked about payment options',
        'Completed the transaction',
        'Said thank you',
      ],
    },
    improvements: [
      {
        id: 'improve-1',
        studentSpeech: 'I goed to the park',
        correctedSpeech: 'I went to the park yesterday',
        audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        category: 'grammar',
        explanation: 'Use "went" instead of "goed" for past tense of "go"',
      },
      {
        id: 'improve-2',
        studentSpeech: 'Can I has menu?',
        correctedSpeech: 'Could I have the menu, please?',
        audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        category: 'grammar',
        explanation: 'Use "Could I have" for polite requests',
      },
      {
        id: 'improve-3',
        studentSpeech: 'I want coffee',
        correctedSpeech: 'I would like a coffee, please',
        audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        category: 'fluency',
        explanation: 'Use "I would like" for more polite ordering',
      },
      {
        id: 'improve-4',
        studentSpeech: 'How much?',
        correctedSpeech: 'How much does that cost?',
        audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        category: 'fluency',
        explanation: 'Complete sentences are more professional',
      },
    ],
    completedAt: new Date(),
  },
];

export function getConversationResultById(id: string): ConversationResult | undefined {
  return mockConversationResults.find(result => result.id === id);
}

export function getLatestConversationResult(): ConversationResult {
  return mockConversationResults[0]; // Return the most recent one
}

// Mock Azure Assessment Results
export const mockAzureResults: Record<string, AzureAssessmentResult> = {
  'improve-1': {
    accuracyScore: 85,
    fluencyScore: 78,
    completenessScore: 90,
    pronunciationScore: 82,
    overallScore: 84,
    feedback: 'Great improvement! Keep practicing the past tense.',
    color: 'green',
  },
  'improve-2': {
    accuracyScore: 92,
    fluencyScore: 88,
    completenessScore: 95,
    pronunciationScore: 90,
    overallScore: 91,
    feedback: 'Excellent! Your pronunciation is very clear.',
    color: 'green',
  },
  'improve-3': {
    accuracyScore: 75,
    fluencyScore: 70,
    completenessScore: 80,
    pronunciationScore: 72,
    overallScore: 74,
    feedback: 'Good effort! Try to speak a bit more slowly.',
    color: 'yellow',
  },
  'improve-4': {
    accuracyScore: 60,
    fluencyScore: 55,
    completenessScore: 65,
    pronunciationScore: 58,
    overallScore: 60,
    feedback: 'Keep practicing! Focus on completing your sentences.',
    color: 'red',
  },
};

export function getAzureAssessmentResult(improvementId: string): AzureAssessmentResult | null {
  return mockAzureResults[improvementId] || null;
}

// Mock audio URLs for corrected speech
export const mockAudioUrls: Record<string, string> = {
  'improve-1': 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
  'improve-2': 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
  'improve-3': 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
  'improve-4': 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
};

export function getAudioUrl(improvementId: string): string {
  return mockAudioUrls[improvementId] || '';
}
