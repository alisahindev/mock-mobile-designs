import { BottomNav } from '@/components/BottomNav';
import { CompletedScenarioCard } from '@/components/CompletedScenarioCard';
import { Drawer } from '@/components/Drawer';
import { EmptyState } from '@/components/EmptyState';
import { Header } from '@/components/Header';
import { SectionHeader } from '@/components/SectionHeader';
import { getAssignmentsByStatus } from '@/data/assignments';

export default function CompletedPage() {
  const completedAssignments = getAssignmentsByStatus('completed');

  return (
    <div className='flex min-h-screen flex-col pb-20'>
      <Header />
      <SectionHeader title='Tamamlananlar' />

      <div className='flex-1'>
        {completedAssignments.length > 0 ? (
          <div className='px-4 space-y-4'>
            {completedAssignments.map(assignment => (
              <CompletedScenarioCard key={assignment.id} assignment={assignment} speakingTime='5 dk 23 sn' />
            ))}
          </div>
        ) : (
          <EmptyState
            icon='✅'
            title='Henüz tamamlanmış senaryo yok'
            description='Senaryoları tamamladıkça burada görünecek'
          />
        )}
      </div>

      <BottomNav />
      <Drawer />
    </div>
  );
}
