import { Clock, Tag, Target } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface MetadataRowProps {
  learningObjective: string;
  category: string;
  duration: number; // minutes
  className?: string;
}

export function MetadataRow({ learningObjective, category, duration, className }: MetadataRowProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-3 px-4', className)}>
      <div className='flex items-center gap-2'>
        <Target className='size-4 text-muted-foreground' />
        <span className='text-sm text-muted-foreground'>{learningObjective}</span>
      </div>
      <Badge variant='outline' className='text-xs'>
        <Tag className='mr-1 size-3' />
        {category}
      </Badge>
      <div className='flex items-center gap-2'>
        <Clock className='size-4 text-muted-foreground' />
        <span className='text-sm text-muted-foreground'>{duration} dk</span>
      </div>
    </div>
  );
}
