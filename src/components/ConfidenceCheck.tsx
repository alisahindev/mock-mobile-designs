import { useState } from 'react';

import { cn } from '@/lib/utils';

interface ConfidenceCheckProps {
  onSelect: (level: number) => void;
  className?: string;
}

const confidenceLevels = [
  { emoji: '😟', label: 'Az güvenli', value: 1 },
  { emoji: '😐', label: 'Orta', value: 2 },
  { emoji: '😊', label: 'Çok güvenli', value: 3 },
];

export function ConfidenceCheck({ onSelect, className }: ConfidenceCheckProps) {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (value: number) => {
    setSelected(value);
    onSelect(value);
  };

  return (
    <div className={cn('space-y-3 px-4', className)}>
      <p className='text-sm font-medium'>Ne kadar güvende hissediyorsun?</p>
      <div className='flex items-center justify-between gap-2'>
        {confidenceLevels.map(level => (
          <button
            key={level.value}
            onClick={() => handleSelect(level.value)}
            className={cn(
              'flex flex-1 flex-col items-center gap-2 rounded-lg border-2 px-3 py-4 transition-all',
              selected === level.value ? 'border-primary bg-primary/10' : 'border-transparent hover:bg-accent/50',
            )}
            aria-label={level.label}
          >
            <span className='text-2xl'>{level.emoji}</span>
            <span className='text-xs'>{level.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
