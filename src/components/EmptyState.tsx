import * as React from 'react';

import { cn } from '@/lib/utils';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export function EmptyState({ icon, title, description, className }: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-4 py-12 text-center', className)}>
      {icon && <div className='text-muted-foreground'>{icon}</div>}
      <div className='space-y-2'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        {description && <p className='text-sm text-muted-foreground max-w-sm'>{description}</p>}
      </div>
    </div>
  );
}
