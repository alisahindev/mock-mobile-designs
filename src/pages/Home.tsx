import { AssignmentCard } from '@/components/AssignmentCard';
import { BottomNav } from '@/components/BottomNav';
import { Drawer } from '@/components/Drawer';
import { EmptyState } from '@/components/EmptyState';
import { Header } from '@/components/Header';
import { SectionHeader } from '@/components/SectionHeader';
import { getAssignmentsByStatus } from '@/data/assignments';
import { useProgressData } from '@/hooks/useProgressData';

export default function HomePage() {
  const activeAssignments = getAssignmentsByStatus('not_started');
  const inProgressAssignments = getAssignmentsByStatus('in_progress');
  const progressData = useProgressData();

  const formatSpeakingTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours} sa ${mins} dk`;
    }
    return `${mins} dk`;
  };

  return (
    <div className='flex min-h-screen flex-col pb-20'>
      <Header
        showProgressBadges
        speakingTime={formatSpeakingTime(progressData.totalSpeakingTime)}
        completionCount={progressData.completedConversations}
        streak={progressData.completedConversations >= 3 ? progressData.completedConversations : undefined}
      />

      <div className='flex-1 space-y-6'>
        {/* Devam Eden Ödevler */}
        {inProgressAssignments.length > 0 && (
          <div>
            <SectionHeader title='Devam Eden Ödevler' />
            <div className='px-4 space-y-4'>
              {inProgressAssignments.map(assignment => (
                <AssignmentCard
                  key={assignment.id}
                  assignment={assignment}
                  showSocialProof={assignment.socialProof?.shouldShow}
                />
              ))}
            </div>
          </div>
        )}

        {/* Aktif Ödevler */}
        {activeAssignments.length > 0 ? (
          <div>
            <SectionHeader title='Aktif Ödevler' />
            <div className='px-4 space-y-4'>
              {activeAssignments.map(assignment => (
                <AssignmentCard
                  key={assignment.id}
                  assignment={assignment}
                  showSocialProof={assignment.socialProof?.shouldShow}
                />
              ))}
            </div>
          </div>
        ) : (
          <EmptyState icon='📝' title='Henüz aktif ödev yok' description='Yeni ödevler yakında eklenecek' />
        )}
      </div>

      <BottomNav />
      <Drawer />
      <div className='p-4'>
        <h2 className='text-lg font-bold mb-2'>Screen Variants</h2>
        <div className='grid grid-cols-3 gap-2'>
          {Array.from({ length: 18 }, (_, i) => i + 1).map(i => (
            <a key={i} href={`/variants/screen${i}`} className='p-2 bg-gray-200 rounded text-center'>
              Screen {i}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
