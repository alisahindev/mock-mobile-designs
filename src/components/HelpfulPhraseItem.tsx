import { Play } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { type HelpfulPhrase } from '@/types/assignment';

interface HelpfulPhraseItemProps {
  phrase: HelpfulPhrase;
  className?: string;
  showShadowingTip?: boolean;
}

export function HelpfulPhraseItem({ phrase, className, showShadowingTip = false }: HelpfulPhraseItemProps) {
  const handlePlayAudio = () => {
    if (phrase.audioUrl) {
      const audio = new Audio(phrase.audioUrl);
      audio.play().catch(error => {
        console.error('Ses çalınamadı:', error);
      });
    }
  };

  return (
    <div className={cn('flex items-center justify-between py-2', className)}>
      <div className='flex-1'>
        <p className='text-sm'>{phrase.text}</p>
        {showShadowingTip && (
          <p className='mt-1 text-xs text-muted-foreground'>
            💡 İpucu: Bu ifadeyi tekrar ederek telaffuzunuzu geliştirebilirsiniz.
          </p>
        )}
      </div>
      <Button
        variant='ghost'
        size='icon'
        onClick={handlePlayAudio}
        className='ml-2 shrink-0 rounded-full'
        aria-label={`${phrase.text} ifadesini dinle`}
      >
        <Play className='size-4' />
      </Button>
    </div>
  );
}
