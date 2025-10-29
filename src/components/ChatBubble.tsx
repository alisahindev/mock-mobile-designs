import { Globe, Play } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ChatBubbleProps {
  message: string;
  speaker: 'ai' | 'user';
  audioUrl?: string;
  translation?: string;
  className?: string;
}

export function ChatBubble({ message, speaker, audioUrl, translation, className }: ChatBubbleProps) {
  const [showTranslation, setShowTranslation] = useState(false);

  const handlePlayAudio = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play().catch(error => {
        console.error('Ses çalınamadı:', error);
      });
    }
  };

  return (
    <div className={cn('flex', speaker === 'ai' ? 'justify-start' : 'justify-end', className)}>
      <div
        className={cn(
          'max-w-[80%] rounded-2xl px-4 py-3 space-y-2',
          speaker === 'ai' ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-primary-foreground',
        )}
      >
        <p className='text-sm'>{message}</p>
        <div className='flex items-center gap-2'>
          {speaker === 'ai' && translation && (
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setShowTranslation(!showTranslation)}
              className='h-6 w-6 rounded-full'
              aria-label='Çeviriyi göster/gizle'
            >
              <Globe className='size-3' />
            </Button>
          )}
          {audioUrl && (
            <Button
              variant='ghost'
              size='icon'
              onClick={handlePlayAudio}
              className='h-6 w-6 rounded-full'
              aria-label='Sesli mesajı dinle'
            >
              <Play className='size-3' />
            </Button>
          )}
        </div>
        {showTranslation && translation && (
          <div className='mt-2 rounded-md bg-background/50 p-2'>
            <p className='text-xs text-muted-foreground'>{translation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
