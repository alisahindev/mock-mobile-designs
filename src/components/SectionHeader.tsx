import * as React from 'react';

import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  className?: string;
  action?: React.ReactNode;
}

export function SectionHeader({ title, className, action }: SectionHeaderProps) {
  return (
    <div className={cn('flex items-center justify-between px-4 py-3', className)}>
      <h2 className='text-lg font-semibold'>{title}</h2>
      {action && <div>{action}</div>}
    </div>
  );
}
