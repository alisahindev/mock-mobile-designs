import * as React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useAppState } from '@/contexts/AppStateProvider';
import { cn } from '@/lib/utils';
import { Clock, Trophy } from 'lucide-react';

interface ProgressBadgeProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

function ProgressBadge({ icon, label, className }: ProgressBadgeProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1.5 text-xs font-medium shadow-sm',
        className,
      )}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

interface HeaderProps {
  showProgressBadges?: boolean;
  speakingTime?: string;
  completionCount?: number;
  streak?: number;
  className?: string;
}

export function Header({ showProgressBadges = false, speakingTime, completionCount, streak, className }: HeaderProps) {
  const { openDrawer, userProfile } = useAppState();

  return (
    <header className={cn('flex items-center justify-between px-4 py-3', className)}>
      <Button variant='ghost' size='icon' onClick={openDrawer} className='rounded-full' aria-label='Profil menüsünü aç'>
        <Avatar className='size-8'>
          <AvatarImage src={userProfile.avatarUrl} alt={userProfile.name} />
          <AvatarFallback>
            {userProfile.name
              .split(' ')
              .map(n => n[0])
              .join('')
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </Button>

      {showProgressBadges && (
        <div className='flex items-center gap-2'>
          {speakingTime && <ProgressBadge icon={<Clock className='size-3.5' />} label={speakingTime} />}
          {completionCount !== undefined && (
            <ProgressBadge
              icon={
                <div className='flex items-center gap-0.5'>
                  <Trophy className='size-3.5' />
                  {streak && streak > 0 && <span className='text-[10px]'>🔥</span>}
                </div>
              }
              label={completionCount.toString()}
            />
          )}
        </div>
      )}
    </header>
  );
}
