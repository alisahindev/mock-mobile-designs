import { Check, RotateCcw } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BottomCTABarProps {
  onReplay: () => void;
  onDone: () => void;
  className?: string;
}

export function BottomCTABar({ onReplay, onDone, className }: BottomCTABarProps) {
  return (
    <div className={cn('fixed bottom-16 left-0 right-0 z-50 border-t bg-background px-4 py-3', className)}>
      <div className='flex items-center gap-3'>
        <Button variant='outline' onClick={onReplay} className='flex-1 rounded-full'>
          <RotateCcw className='mr-2 size-4' />
          Tekrar Oynat
        </Button>
        <Button onClick={onDone} className='flex-1 rounded-full'>
          <Check className='mr-2 size-4' />
          Bitti
        </Button>
      </div>
    </div>
  );
}
