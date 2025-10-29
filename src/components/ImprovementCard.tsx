import { Pencil, Play } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Improvement {
  id: string;
  originalText: string;
  improvedText: string;
  audioUrl?: string;
  canPractice?: boolean; // Only for English
}

interface ImprovementCardProps {
  improvement: Improvement;
  className?: string;
}

export function ImprovementCard({ improvement, className }: ImprovementCardProps) {
  const handlePlayAudio = () => {
    if (improvement.audioUrl) {
      const audio = new Audio(improvement.audioUrl);
      audio.play().catch(error => {
        console.error('Ses çalınamadı:', error);
      });
    }
  };

  return (
    <Card className={cn('', className)}>
      <CardContent className='p-4 space-y-3'>
        <div>
          <p className='text-sm text-muted-foreground mb-1'>Şunu dedin:</p>
          <p className='text-sm'>{improvement.originalText}</p>
        </div>
        <div>
          <p className='text-sm text-muted-foreground mb-1 flex items-center gap-1'>
            <Pencil className='size-3' />
            Şunu dene:
          </p>
          <p className='text-sm font-medium'>{improvement.improvedText}</p>
        </div>
        <div className='flex items-center gap-2'>
          {improvement.audioUrl && (
            <Button
              variant='ghost'
              size='sm'
              onClick={handlePlayAudio}
              className='rounded-full'
              aria-label='Düzeltilmiş ifadeyi dinle'
            >
              <Play className='mr-2 size-3' />
              Dinle
            </Button>
          )}
          {improvement.canPractice && (
            <Button
              variant='outline'
              size='sm'
              onClick={() => {
                // TODO: Azure Telaffuz Değerlendirmesini başlat
                console.log('Pratik başlatılıyor...');
              }}
              className='rounded-full'
            >
              Pratik Yap
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
