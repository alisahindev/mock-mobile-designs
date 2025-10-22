import { cn } from '../../lib/utils';

export interface EmptyStateProps {
  icon: string; // Unicode emoji (🎤, 💪, 🎯)
  primaryMessage: string;
  benefitText: string;
  className?: string;
}

export default function EmptyState({ icon, primaryMessage, benefitText, className }: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center min-h-[180px] px-6 py-8', className)}>
      {/* Icon */}
      <div className='text-5xl mb-6' role='img' aria-hidden='true'>
        {icon}
      </div>

      {/* Primary Message */}
      <p className='text-base text-foreground text-center max-w-[280px] leading-relaxed'>{primaryMessage}</p>

      {/* Benefit Text */}
      <p className='text-sm text-muted-foreground text-center max-w-[280px] mt-3 leading-relaxed'>{benefitText}</p>
    </div>
  );
}
