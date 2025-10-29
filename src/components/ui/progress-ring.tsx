import * as React from 'react';

import { cn } from '@/lib/utils';

interface ProgressRingProps extends React.SVGProps<SVGSVGElement> {
  value?: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export const ProgressRing = React.forwardRef<SVGSVGElement, ProgressRingProps>(
  ({ value = 0, max = 100, size = 40, strokeWidth = 4, className, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <svg ref={ref} width={size} height={size} className={cn('transform -rotate-90', className)} {...props}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke='currentColor'
          strokeWidth={strokeWidth}
          fill='none'
          className='text-secondary'
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke='currentColor'
          strokeWidth={strokeWidth}
          fill='none'
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className='text-primary transition-all duration-300'
          strokeLinecap='round'
        />
      </svg>
    );
  },
);
ProgressRing.displayName = 'ProgressRing';
