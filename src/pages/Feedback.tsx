import { BottomCTABar } from '@/components/BottomCTABar';
import { BottomNav } from '@/components/BottomNav';
import { CelebrationHeader } from '@/components/CelebrationHeader';
import { ConfidenceCheck } from '@/components/ConfidenceCheck';
import { ImprovementCard } from '@/components/ImprovementCard';
import { MetricRow } from '@/components/MetricRow';
import { SectionHeader } from '@/components/SectionHeader';
import { CheckCircle2, Clock } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const mockImprovements = [
  {
    id: '1',
    originalText: 'I want coffee',
    improvedText: 'I would like a coffee, please.',
    audioUrl: '',
    canPractice: true,
  },
  {
    id: '2',
    originalText: 'How much?',
    improvedText: 'How much does it cost?',
    audioUrl: '',
    canPractice: true,
  },
];

export default function FeedbackPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [confidence, setConfidence] = useState<number | null>(null);

  const handleReplay = () => {
    navigate(`/replay/${id}`);
  };

  const handleDone = () => {
    navigate('/');
  };

  return (
    <div className='flex min-h-screen flex-col pb-24'>
      {/* Sabit Kutlama Başlığı */}
      <CelebrationHeader message='Harika iş çıkardın! 🎉' />

      {/* Metrik Satırları */}
      <div className='space-y-2 px-4'>
        <MetricRow
          icon={<Clock className='size-4' />}
          label='Konuşma Süresi'
          value='5 dk 23 sn'
          cumulativeTotal='Toplam: 1 sa 32 dk'
        />
        <MetricRow
          icon={<CheckCircle2 className='size-4' />}
          label='Tamamlanan Hedefler'
          value='3 hedefi tamamladın'
          cumulativeTotal='Toplam: 15 hedef'
        />
      </div>

      {/* Kaydırılabilir İçerik */}
      <div className='flex-1 space-y-4 px-4 py-6'>
        <SectionHeader title='📚 Pratik Yapılacaklar' />
        <div className='space-y-4'>
          {mockImprovements.map(improvement => (
            <ImprovementCard key={improvement.id} improvement={improvement} />
          ))}
        </div>

        <ConfidenceCheck onSelect={setConfidence} />
      </div>

      {/* Alt Eylem Çubuğu */}
      <BottomCTABar onReplay={handleReplay} onDone={handleDone} />
      <BottomNav />
    </div>
  );
}
