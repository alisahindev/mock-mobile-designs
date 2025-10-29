import * as React from 'react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface MetricRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  cumulativeTotal?: string;
  className?: string;
}

export function MetricRow({ icon, label, value, cumulativeTotal, className }: MetricRowProps) {
  const content = (
    <div
      className={cn(
        'flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer hover:bg-accent/50 transition-colors',
        className,
      )}
    >
      <div className='shrink-0'>{icon}</div>
      <div className='flex-1'>
        <p className='text-sm font-medium'>{value}</p>
        <p className='text-xs text-muted-foreground'>{label}</p>
      </div>
    </div>
  );

  if (cumulativeTotal) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{content}</TooltipTrigger>
          <TooltipContent>
            <p>Toplam: {cumulativeTotal}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return content;
}
