import { cn } from '@/lib/utils';

interface TimeWarningOverlayProps {
  message: string;
  show: boolean;
  className?: string;
}

export function TimeWarningOverlay({ message, show, className }: TimeWarningOverlayProps) {
  if (!show) return null;

  return (
    <div className={cn('fixed inset-x-0 top-20 z-50 flex items-center justify-center px-4', className)}>
      <div className='animate-in fade-in slide-in-from-top-2 rounded-lg bg-accent px-4 py-2 text-accent-foreground shadow-lg'>
        <p className='text-sm font-medium'>{message}</p>
      </div>
    </div>
  );
}
