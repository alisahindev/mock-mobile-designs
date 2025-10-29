import { BackButton } from '@/components/BackButton';
import { BottomNav } from '@/components/BottomNav';
import { CelebrationHeader } from '@/components/CelebrationHeader';
import { HeroImage } from '@/components/HeroImage';
import { MetricRow } from '@/components/MetricRow';
import { ScenarioAccordion } from '@/components/ScenarioAccordion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { getAssignmentById } from '@/data/assignments';
import { CheckCircle2, Clock } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export default function CompletedDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const assignment = id ? getAssignmentById(id) : null;

  if (!assignment) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <p>Senaryo bulunamadı</p>
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
      </div>

      {/* Kutlama Başlığı ve Metrikler */}
      <CelebrationHeader message='Bu senaryoyu tamamladın! 🎉' />
      <div className='space-y-2 px-4'>
        <MetricRow icon={<Clock className='size-4' />} label='Konuşma Süresi' value='5 dk 23 sn' />
        <MetricRow icon={<CheckCircle2 className='size-4' />} label='Ulaşılan Hedefler' value='3 hedef tamamlandı' />
      </div>

      <Separator className='my-4' />

      {/* Senaryo Detayları Akordiyonu */}
      <ScenarioAccordion detail={assignment.detail} />

      {/* Güven Göstergesi */}
      <div className='px-4 py-4'>
        <div className='rounded-lg border bg-primary/10 p-4 text-center'>
          <p className='text-2xl mb-1'>😊</p>
          <p className='font-medium'>Harika! Güvende hissediyorsun</p>
        </div>
      </div>

      {/* Konuşmamı Tekrar Oynat Düğmesi */}
      <div className='fixed bottom-16 left-0 right-0 border-t bg-background px-4 py-4'>
        <Button className='w-full rounded-full' onClick={() => navigate(`/replay/${assignment.id}`)}>
          Konuşmamı Tekrar Oynat
        </Button>
      </div>

      <BottomNav />
    </div>
  );
}
