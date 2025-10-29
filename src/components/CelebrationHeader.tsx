import { Trophy } from 'lucide-react';

import { cn } from '@/lib/utils';

interface CelebrationHeaderProps {
  message: string;
  className?: string;
}

export function CelebrationHeader({ message, className }: CelebrationHeaderProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-3 px-4 py-6', className)}>
      <Trophy className='size-12 text-accent' />
      <h2 className='text-xl font-semibold text-center'>{message}</h2>
    </div>
  );
}
