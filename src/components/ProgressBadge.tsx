import { Clock, Trophy } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProgressBadgeProps {
  type: 'speaking-time' | 'completion';
  value: string;
  streak?: number;
  className?: string;
}

export function ProgressBadge({ type, value, streak, className }: ProgressBadgeProps) {
  if (type === 'speaking-time') {
    return (
      <Badge variant='secondary' className={cn('gap-1.5', className)}>
        <Clock className='size-3.5' />
        <span>{value}</span>
      </Badge>
    );
  }

  return (
    <Badge variant='secondary' className={cn('gap-1.5', className)}>
      <div className='flex items-center gap-0.5'>
        <Trophy className='size-3.5' />
        {streak && streak > 0 && <span className='text-[10px]'>🔥</span>}
      </div>
      <span>{value}</span>
    </Badge>
  );
}
