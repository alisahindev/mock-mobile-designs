import type { Assignment } from '../types/assignment';

export const mockAssignments: Assignment[] = [
  {
    id: 'cafe-order-1',
    title: 'Ordering Coffee at a Cafe',
    category: 'Cafe Order',
    duration: 8,
    learningObjective: 'Practice ordering food and drinks in English',
    status: 'not_started',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=450&fit=crop',
    dueDate: '2024-01-15',
    detail: {
      setting:
        "You're at a cozy neighborhood cafe. It's a Saturday morning, and you want to order a coffee and maybe a snack. The barista is friendly and ready to help you.",
      studentRole: {
        name: 'Customer',
        description: 'You are a customer visiting a local cafe to order drinks and snacks.',
        goals: [
          'Greet the barista politely',
          'Ask about menu options',
          'Order a drink and food item',
          'Pay and say thank you',
        ],
      },
      aiRole: {
        name: 'Barista',
        description:
          'I am a friendly barista working at the cafe. I will help you order and answer any questions about our menu.',
      },
      helpfulPhrases: [
        {
          id: 'phrase-1',
          text: "Hi! I'd like to order a coffee, please.",
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-2',
          text: 'What size options do you have?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-3',
          text: 'Can I have a medium latte with oat milk?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-4',
          text: 'Do you have any pastries or snacks?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-5',
          text: 'How much is that in total?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
      ],
    },
  },
  {
    id: 'doctor-visit-1',
    title: 'Making a Doctor Appointment',
    category: 'Doctor Visit',
    duration: 7,
    learningObjective: 'Learn how to schedule medical appointments and describe symptoms',
    status: 'in_progress',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=450&fit=crop',
    dueDate: '2024-01-12',
    detail: {
      setting:
        "You need to see a doctor because you haven't been feeling well. You're calling the clinic to make an appointment.",
      studentRole: {
        name: 'Patient',
        description: 'You are a patient calling to schedule a doctor appointment.',
        goals: [
          'Explain why you need an appointment',
          'Provide your personal information',
          'Choose an available time slot',
          'Confirm the appointment details',
        ],
      },
      aiRole: {
        name: 'Receptionist',
        description:
          'I am the clinic receptionist. I will help you schedule an appointment and gather necessary information.',
      },
      helpfulPhrases: [
        {
          id: 'phrase-6',
          text: "Hello, I'd like to make an appointment.",
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-7',
          text: "I've been having a headache for two days.",
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-8',
          text: 'What times are available this week?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-9',
          text: 'Tuesday afternoon works well for me.',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-10',
          text: 'Do I need to bring anything to the appointment?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
      ],
    },
  },
  {
    id: 'shopping-1',
    title: 'Shopping for Clothes',
    category: 'Shopping',
    duration: 9,
    learningObjective: 'Practice asking for sizes, colors, and trying on clothes',
    status: 'not_started',
    imageUrl: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=450&fit=crop',
    dueDate: '2024-01-18',
    detail: {
      setting:
        "You're at a clothing store looking for a new jacket. You want to find the right size and color, and you'd like to try it on before buying.",
      studentRole: {
        name: 'Shopper',
        description: 'You are shopping for a jacket and need help from the store assistant.',
        goals: [
          'Ask for help finding a specific item',
          'Inquire about sizes and colors',
          'Request to try on the item',
          'Make a purchase decision',
        ],
      },
      aiRole: {
        name: 'Store Assistant',
        description: 'I am a store assistant ready to help you find the perfect jacket and answer your questions.',
      },
      helpfulPhrases: [
        {
          id: 'phrase-11',
          text: 'Excuse me, do you have this in a medium?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-12',
          text: 'What other colors does this come in?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-13',
          text: 'Where are the fitting rooms?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-14',
          text: "This fits perfectly! I'll take it.",
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-15',
          text: 'Do you accept credit cards?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
      ],
    },
  },
  {
    id: 'restaurant-1',
    title: 'Dining at a Restaurant',
    category: 'Restaurant',
    duration: 8,
    learningObjective: 'Learn restaurant vocabulary and practice ordering meals',
    status: 'completed',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=450&fit=crop',
    dueDate: '2024-01-10',
    detail: {
      setting:
        "You're at a nice restaurant for dinner. You've just been seated and are ready to look at the menu and order your meal.",
      studentRole: {
        name: 'Diner',
        description: 'You are dining at a restaurant and will interact with the waiter.',
        goals: [
          'Ask for menu recommendations',
          'Order an appetizer and main course',
          'Request modifications to your order',
          'Ask for the bill',
        ],
      },
      aiRole: {
        name: 'Waiter',
        description: 'I am your waiter for the evening. I will help you with the menu and take your order.',
      },
      helpfulPhrases: [
        {
          id: 'phrase-16',
          text: 'What do you recommend from the menu?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-17',
          text: "I'd like to start with the soup, please.",
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-18',
          text: 'Can I have the pasta without cheese?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-19',
          text: 'Could we have some water, please?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-20',
          text: 'May I have the check, please?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
      ],
    },
  },
];

export function getAssignmentById(id: string): Assignment | undefined {
  return mockAssignments.find(assignment => assignment.id === id);
}

export function getAssignmentsByStatus(status: Assignment['status']): Assignment[] {
  return mockAssignments.filter(assignment => assignment.status === status);
}
