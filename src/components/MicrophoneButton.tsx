import { Mic, MicOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type MicrophoneState = 'idle' | 'active' | 'auto-disabled';

interface MicrophoneButtonProps {
  state: MicrophoneState;
  onToggle: () => void;
  className?: string;
}

export function MicrophoneButton({ state, onToggle, className }: MicrophoneButtonProps) {
  const getButtonContent = () => {
    switch (state) {
      case 'active':
        return (
          <>
            <Mic className='size-6' />
            <span className='sr-only'>Mikrofonu kapat</span>
          </>
        );
      case 'auto-disabled':
        return (
          <>
            <MicOff className='size-6 text-muted-foreground' />
            <span className='sr-only'>Mikrofon otomatik olarak kapatıldı</span>
          </>
        );
      default:
        return (
          <>
            <MicOff className='size-6' />
            <span className='sr-only'>Mikrofonu aç</span>
          </>
        );
    }
  };

  return (
    <Button
      size='icon'
      onClick={onToggle}
      disabled={state === 'auto-disabled'}
      className={cn(
        'size-16 rounded-full',
        state === 'active' && 'bg-accent text-accent-foreground',
        state === 'auto-disabled' && 'bg-secondary opacity-50',
        className,
      )}
      aria-label={
        state === 'active'
          ? 'Mikrofonu kapat'
          : state === 'auto-disabled'
          ? 'Mikrofon otomatik olarak kapatıldı'
          : 'Mikrofonu aç'
      }
    >
      {getButtonContent()}
    </Button>
  );
}
