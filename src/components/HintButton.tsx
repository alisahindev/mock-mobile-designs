import { HelpCircle, Lightbulb } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HintButtonProps {
  onClick: () => void;
  hintText?: string;
  className?: string;
}

export function HintButton({ onClick, hintText, className }: HintButtonProps) {
  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={onClick}
      className={cn('rounded-full', className)}
      aria-label='İpucu göster'
    >
      {hintText ? (
        <>
          <Lightbulb className='size-5' />
          <span className='sr-only'>İpucu: {hintText}</span>
        </>
      ) : (
        <>
          <HelpCircle className='size-5' />
          <span className='sr-only'>İpucu</span>
        </>
      )}
    </Button>
  );
}
