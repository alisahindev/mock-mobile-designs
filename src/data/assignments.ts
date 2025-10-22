import type { Assignment } from '../types/assignment';

export const mockAssignments: Assignment[] = [
  {
    id: 'cafe-order-1',
    title: 'Ordering Coffee at a Cafe',
    category: 'Cafe Order',
    duration: 8,
    learningObjective: 'Practice ordering food and drinks in English',
    status: 'completed',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=450&fit=crop',
    dueDate: '2024-01-15',
    socialProof: {
      userAvatars: [
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
      ],
      completedCount: 18,
      totalClassSize: 25,
      completionRate: 72, // ≥70% threshold met
      rating: 4.8,
      shouldShow: true, // Only show when ≥70% completion rate
      message: 'Sınıf arkadaşlarının çoğu bu alıştırmayı tamamladı!', // Positive, non-comparative
      recentComment: {
        userName: 'Sarah M.',
        userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
        comment: 'Çok faydalı! Artık kafede rahatça sipariş verebiliyorum.',
      },
    },
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
    socialProof: {
      userAvatars: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
      ],
      completedCount: 20,
      totalClassSize: 25,
      completionRate: 52, // ≥70% threshold met
      rating: 4.9,
      shouldShow: true,
      message: 'Sınıf arkadaşlarının çoğu bu alıştırmayı tamamladı!',
      recentComment: {
        userName: 'Ahmet K.',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
        comment: 'Doktor randevusu almak artık çok kolay!',
      },
    },
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
    status: 'completed',
    imageUrl: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=450&fit=crop',
    dueDate: '2024-01-18',
    socialProof: {
      userAvatars: [
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
      ],
      completedCount: 19,
      totalClassSize: 25,
      completionRate: 25, // ≥70% threshold met
      rating: 4.7,
      shouldShow: true,
      message: 'Sınıf arkadaşlarının çoğu bu alıştırmayı tamamladı!',
      recentComment: {
        userName: 'Zeynep A.',
        userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
        comment: 'Alışveriş yaparken artık kendimi çok daha rahat hissediyorum.',
      },
    },
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
  {
    id: 'hotel-checkin-1',
    title: 'Hotel Check-in Process',
    category: 'Hotel Check-in',
    duration: 6,
    learningObjective: 'Practice hotel check-in procedures and room requests',
    status: 'completed',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=450&fit=crop',
    dueDate: '2024-01-20',
    socialProof: {
      userAvatars: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
      ],
      completedCount: 8,
      totalClassSize: 25,
      completionRate: 32, // <70% threshold - should not show
      rating: 4.5,
      shouldShow: false, // Do not show when completion rate is low
      message: 'Sınıf arkadaşlarının çoğu bu alıştırmayı tamamladı!',
      recentComment: {
        userName: 'Mehmet Y.',
        userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
        comment: 'Otel check-in süreci çok pratik!',
      },
    },
    detail: {
      setting:
        "You've just arrived at a hotel for a business trip. You need to check in and get your room key. The hotel receptionist is ready to help you.",
      studentRole: {
        name: 'Guest',
        description: 'You are a hotel guest checking in for your stay.',
        goals: [
          'Provide your reservation information',
          'Ask about hotel amenities',
          'Request room preferences',
          'Get directions to your room',
        ],
      },
      aiRole: {
        name: 'Receptionist',
        description: 'I am the hotel receptionist. I will help you check in and answer any questions about your stay.',
      },
      helpfulPhrases: [
        {
          id: 'phrase-21',
          text: 'Hi, I have a reservation under the name Smith.',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-22',
          text: 'Do you have a room with a city view?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-23',
          text: 'What time is breakfast served?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-24',
          text: 'Is there free WiFi in the rooms?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-25',
          text: 'Could you help me with my luggage?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
      ],
    },
  },
  {
    id: 'job-interview-1',
    title: 'Job Interview Preparation',
    category: 'Job Interview',
    duration: 10,
    learningObjective: 'Practice common interview questions and professional communication',
    status: 'in_progress',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop',
    dueDate: '2024-01-25',
    detail: {
      setting:
        "You're in a job interview for a marketing position. The interviewer is asking you questions about your experience and skills. You need to present yourself professionally.",
      studentRole: {
        name: 'Job Candidate',
        description: 'You are a job candidate being interviewed for a marketing position.',
        goals: [
          'Introduce yourself professionally',
          'Answer questions about your experience',
          'Ask questions about the company',
          'Express interest in the position',
        ],
      },
      aiRole: {
        name: 'Interviewer',
        description:
          'I am the hiring manager conducting your interview. I will ask you questions about your background and experience.',
      },
      helpfulPhrases: [
        {
          id: 'phrase-26',
          text: "Thank you for having me. I'm excited to learn more about this opportunity.",
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-27',
          text: 'I have three years of experience in digital marketing.',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-28',
          text: 'What does a typical day look like in this role?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-29',
          text: 'I am passionate about creating engaging content for social media.',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-30',
          text: 'When can I expect to hear back about the next steps?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
      ],
    },
  },
  {
    id: 'cafe-order-2',
    title: 'Ordering Breakfast at a Cafe',
    category: 'Cafe Order',
    duration: 7,
    learningObjective: 'Practice ordering breakfast items and dietary preferences',
    status: 'completed',
    imageUrl: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=450&fit=crop',
    dueDate: '2024-01-22',
    detail: {
      setting:
        "You're at a breakfast cafe on a Sunday morning. You want to order a healthy breakfast and have some dietary restrictions. The server is ready to take your order.",
      studentRole: {
        name: 'Customer',
        description: 'You are ordering breakfast at a cafe with specific dietary needs.',
        goals: [
          'Order a healthy breakfast',
          'Ask about dietary options',
          'Request modifications to menu items',
          'Order a drink to go with your meal',
        ],
      },
      aiRole: {
        name: 'Server',
        description:
          'I am your server at the breakfast cafe. I will help you with the menu and accommodate your dietary needs.',
      },
      helpfulPhrases: [
        {
          id: 'phrase-31',
          text: "Good morning! I'd like to see the breakfast menu, please.",
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-32',
          text: 'Do you have any gluten-free options?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-33',
          text: 'Can I have the avocado toast without the bread?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-34',
          text: 'What fresh juices do you have available?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-35',
          text: 'Is the coffee locally roasted?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
      ],
    },
  },
  {
    id: 'doctor-visit-2',
    title: 'Follow-up Doctor Visit',
    category: 'Doctor Visit',
    duration: 8,
    learningObjective: 'Practice discussing test results and treatment plans with a doctor',
    status: 'completed',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1b?w=800&h=450&fit=crop',
    dueDate: '2024-01-08',
    detail: {
      setting:
        "You're back at the doctor's office for a follow-up visit. The doctor has your test results and wants to discuss your treatment plan. You need to understand the medical information and ask questions.",
      studentRole: {
        name: 'Patient',
        description: 'You are a patient discussing test results and treatment options with your doctor.',
        goals: [
          'Understand your test results',
          'Ask questions about your treatment',
          'Discuss medication side effects',
          'Schedule follow-up appointments',
        ],
      },
      aiRole: {
        name: 'Doctor',
        description: 'I am your doctor. I will explain your test results and discuss your treatment plan with you.',
      },
      helpfulPhrases: [
        {
          id: 'phrase-36',
          text: 'Can you explain what these test results mean?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-37',
          text: 'Are there any side effects I should watch for?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-38',
          text: 'How long will I need to take this medication?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-39',
          text: 'Should I make any changes to my diet?',
          audioUrl: 'https://freesound.org/data/previews/316/316847_5123451-lq.mp3',
        },
        {
          id: 'phrase-40',
          text: 'When should I come back for another check-up?',
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
