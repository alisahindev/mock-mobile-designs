import { CheckCircle2, Home, Trophy } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { cn } from '@/lib/utils';

interface TabItem {
  id: string;
  label: string;
  icon: React.ElementType;
  path: string;
}

const tabs: TabItem[] = [
  { id: 'home', label: 'Ana Sayfa', icon: Home, path: '/' },
  { id: 'completed', label: 'Tamamlananlar', icon: CheckCircle2, path: '/completed' },
  { id: 'progress', label: 'İlerleme', icon: Trophy, path: '/progress' },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav
      className='fixed bottom-0 left-0 right-0 z-50 border-t bg-background shadow-lg'
      role='navigation'
      aria-label='Ana navigasyon'
    >
      <div className='flex h-16 items-center justify-around'>
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path;

          return (
            <Link
              key={tab.id}
              to={tab.path}
              className={cn(
                'flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors',
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className={cn('size-5', isActive && 'font-bold')} />
              <span className={cn('text-xs', isActive ? 'font-semibold' : 'font-normal')}>{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
