import { mockAssignments } from '../data/assignments';

export interface ProgressData {
  completedConversations: number;
  totalSpeakingTime: number; // minutes
  averageConfidence: number; // 1-5 scale
  totalAssignments: number;
  completionRate: number; // percentage
  speakingRatio: number; // percentage
  weeklyProgress: Array<{
    week: string;
    speakingTime: number;
    confidence: number;
    completed: number;
  }>;
  recentAchievements: Array<{
    title: string;
    date: string;
    category: string;
  }>;
}

export function useProgressData(): ProgressData {
  const completedAssignments = mockAssignments.filter(a => a.status === 'completed');
  const completedCount = completedAssignments.length;
  const totalCount = mockAssignments.length;

  // Gerçekçi progress verileri
  const totalSpeakingTime = completedCount * 12; // 12 dakika ortalama konuşma süresi
  const averageConfidence = Math.min(5, 2.5 + completedCount * 0.4); // 2.5'ten başlayıp artıyor
  const completionRate = Math.round((completedCount / totalCount) * 100);
  const speakingRatio = Math.min(90, 45 + completedCount * 8); // 45%'tan başlayıp artıyor

  // Detaylı haftalık progress (son 6 hafta)
  const weeklyProgress = [
    {
      week: 'Bu Hafta',
      speakingTime: totalSpeakingTime,
      confidence: averageConfidence,
      completed: completedCount,
    },
    {
      week: 'Geçen Hafta',
      speakingTime: Math.max(0, totalSpeakingTime - 8),
      confidence: Math.max(1, averageConfidence - 0.3),
      completed: Math.max(0, completedCount - 1),
    },
    {
      week: '2 Hafta Önce',
      speakingTime: Math.max(0, totalSpeakingTime - 18),
      confidence: Math.max(1, averageConfidence - 0.6),
      completed: Math.max(0, completedCount - 2),
    },
    {
      week: '3 Hafta Önce',
      speakingTime: Math.max(0, totalSpeakingTime - 28),
      confidence: Math.max(1, averageConfidence - 0.9),
      completed: Math.max(0, completedCount - 3),
    },
    {
      week: '4 Hafta Önce',
      speakingTime: Math.max(0, totalSpeakingTime - 38),
      confidence: Math.max(1, averageConfidence - 1.2),
      completed: Math.max(0, completedCount - 4),
    },
    {
      week: '5 Hafta Önce',
      speakingTime: Math.max(0, totalSpeakingTime - 48),
      confidence: Math.max(1, averageConfidence - 1.5),
      completed: Math.max(0, completedCount - 5),
    },
  ];

  // Gerçekçi başarılar
  const achievementCategories = [
    'İlk Konuşma',
    'Güven Artışı',
    'Akıcılık',
    'Kelime Dağarcığı',
    'Telaffuz',
    'Sosyal Etkileşim',
    'İş İngilizcesi',
    'Seyahat',
  ];

  const recentAchievements = completedAssignments.slice(-5).map((assignment, index) => ({
    title: assignment.title,
    date: new Date(Date.now() - (index * 2 + 1) * 24 * 60 * 60 * 1000).toLocaleDateString('tr-TR'),
    category: achievementCategories[index % achievementCategories.length],
  }));

  return {
    completedConversations: completedCount,
    totalSpeakingTime,
    averageConfidence,
    totalAssignments: totalCount,
    completionRate,
    speakingRatio,
    weeklyProgress,
    recentAchievements,
  };
}
