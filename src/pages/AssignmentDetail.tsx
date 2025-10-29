import { BackButton } from '@/components/BackButton';
import { BottomNav } from '@/components/BottomNav';
import { HeroImage } from '@/components/HeroImage';
import { MetadataRow } from '@/components/MetadataRow';
import { ScenarioAccordion } from '@/components/ScenarioAccordion';
import { Button } from '@/components/ui/button';
import { getAssignmentById } from '@/data/assignments';
import { useNavigate, useParams } from 'react-router-dom';

export default function AssignmentDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const assignment = id ? getAssignmentById(id) : null;

  if (!assignment) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <p>Ödev bulunamadı</p>
      </div>
    );
  }

  return (
    <div className='flex min-h-screen flex-col pb-20'>
      <div className='flex items-center gap-2 px-4 py-3'>
        <BackButton />
      </div>

      <HeroImage src={assignment.imageUrl} alt={assignment.title} />

      <div className='px-4 py-4'>
        <h1 className='mb-4 text-2xl font-semibold'>{assignment.title}</h1>
        <MetadataRow
          learningObjective={assignment.learningObjective}
          category={assignment.category}
          duration={assignment.duration}
        />
      </div>

      <ScenarioAccordion detail={assignment.detail} defaultOpen={['helpfulPhrases']} />

      <div className='fixed bottom-16 left-0 right-0 border-t bg-background px-4 py-4'>
        <Button className='w-full rounded-full' onClick={() => navigate(`/conversation/${assignment.id}`)}>
          {assignment.status === 'in_progress' ? 'Devam Et' : 'Başlat'}
        </Button>
      </div>

      <BottomNav />
    </div>
  );
}
