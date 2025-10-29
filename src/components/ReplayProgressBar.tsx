import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface ReplayProgressBarProps {
  currentTime: number; // seconds
  totalTime: number; // seconds
  className?: string;
}

export function ReplayProgressBar({ currentTime, totalTime, className }: ReplayProgressBarProps) {
  const progress = (currentTime / totalTime) * 100;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={cn('px-4 py-3 space-y-2', className)}>
      <Progress value={progress} className='h-2' />
      <div className='flex items-center justify-between text-xs text-muted-foreground'>
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(totalTime)}</span>
      </div>
    </div>
  );
}
