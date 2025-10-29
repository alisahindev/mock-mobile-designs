import { BottomNav } from '@/components/BottomNav';
import { Header } from '@/components/Header';
import { ProgressAccordion } from '@/components/ProgressAccordion';
import { ProgressBadge } from '@/components/ProgressBadge';
import { useProgressData } from '@/hooks/useProgressData';

export default function ProgressPage() {
  const progressData = useProgressData();

  const formatSpeakingTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours} sa ${mins} dk`;
    }
    return `${mins} dk`;
  };

  const progressDataForAccordion = {
    speakingTime: {
      total: formatSpeakingTime(progressData.totalSpeakingTime),
      weeklyChange: 'bu hafta 15 dk arttı!',
    },
    confidence: {
      trend: 'Düzenli olarak artıyor',
    },
    taskAchievement: {
      average: `Ort: ${Math.round(progressData.completedConversations / 3)} hedef/oturum`,
      recentAchievements: progressData.recentAchievements.map(a => ({
        scenarioTitle: a.title,
        learningObjective: a.category,
      })),
    },
  };

  return (
    <div className='flex min-h-screen flex-col pb-20'>
      <Header />
      <div className='px-4 py-4'>
        <h1 className='mb-4 text-2xl font-semibold'>İlerlemen</h1>

        {/* Sabit Üst Rozet */}
        <div className='mb-6 rounded-xl border bg-primary/10 p-4 text-center'>
          <div className='flex items-center justify-center gap-2 mb-2'>
            <ProgressBadge
              type='completion'
              value={progressData.completedConversations.toString()}
              streak={progressData.completedConversations >= 3 ? progressData.completedConversations : undefined}
            />
          </div>
          <p className='text-sm text-muted-foreground'>
            {progressData.completedConversations >= 3
              ? 'Harika bir seri yakaladın! 🔥'
              : 'Devam et, harika gidiyorsun!'}
          </p>
        </div>

        <ProgressAccordion data={progressDataForAccordion} />
      </div>

      <BottomNav />
    </div>
  );
}
