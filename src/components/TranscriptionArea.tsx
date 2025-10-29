import * as React from 'react';

import { cn } from '@/lib/utils';

interface TranscriptionMessage {
  id: string;
  speaker: 'ai' | 'user';
  text: string;
  timestamp: Date;
}

interface TranscriptionAreaProps {
  messages: TranscriptionMessage[];
  className?: string;
}

export function TranscriptionArea({ messages, className }: TranscriptionAreaProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={scrollRef} className={cn('flex-1 overflow-y-auto px-4 py-6 space-y-4', className)}>
      {messages.map(message => (
        <div key={message.id} className={cn('flex', message.speaker === 'ai' ? 'justify-start' : 'justify-end')}>
          <div
            className={cn(
              'max-w-[80%] rounded-2xl px-4 py-3',
              message.speaker === 'ai'
                ? 'bg-secondary text-secondary-foreground text-base'
                : 'bg-primary/20 text-primary-foreground text-sm opacity-70',
            )}
          >
            <p>{message.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
