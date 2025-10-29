import { Bot, Mic } from 'lucide-react';

import { cn } from '@/lib/utils';

type SpeakingState = 'idle' | 'ai-speaking' | 'user-speaking' | 'listening';

interface SpeakingIndicatorProps {
  state: SpeakingState;
  className?: string;
}

export function SpeakingIndicator({ state, className }: SpeakingIndicatorProps) {
  const getContent = () => {
    switch (state) {
      case 'ai-speaking':
        return (
          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-2'>
              <Bot className='size-5 text-primary' />
              <span className='text-sm font-medium'>AI konuşuyor...</span>
            </div>
            <div className='flex gap-1'>
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className='h-1 w-1 animate-pulse rounded-full bg-primary'
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        );
      case 'user-speaking':
        return (
          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-2'>
              <Mic className='size-5 text-accent' />
              <span className='text-sm font-medium'>Konuşuyorsunuz...</span>
            </div>
            <div className='flex gap-1'>
              {[1, 2, 3, 4].map(i => (
                <div
                  key={i}
                  className='h-1 w-1 animate-pulse rounded-full bg-accent'
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        );
      case 'listening':
        return (
          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-2'>
              <Mic className='size-5 text-muted-foreground' />
              <span className='text-sm text-muted-foreground'>Dinleniyor...</span>
            </div>
          </div>
        );
      default:
        return (
          <div className='flex items-center gap-2'>
            <span className='text-sm text-muted-foreground'>Hazır</span>
          </div>
        );
    }
  };

  return <div className={cn('flex items-center justify-center px-4 py-3', className)}>{getContent()}</div>;
}
