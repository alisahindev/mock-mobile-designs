import { Bell } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useAppState } from '../contexts/AppStateProvider';

type HeaderProps = {
  userName: string;
  avatarUrl?: string;
};

export default function Header({ userName, avatarUrl }: HeaderProps) {
  const { toggleDrawer, postConversation } = useAppState();
  const { pathname } = useLocation();
  const allowed =
    pathname === '/' ||
    pathname === '/completed' ||
    pathname === '/progress' ||
    (pathname === '/feedback' ? postConversation : false);
  const avatarDisabled = !allowed;
  return (
    <header className='flex items-center justify-between px-4 pt-safe-8 pb-4' role='banner' aria-label='Üst bilgi'>
      <div className='flex items-center gap-3 min-w-0'>
        <button
          type='button'
          onClick={() => !avatarDisabled && toggleDrawer()}
          disabled={avatarDisabled}
          className='p-1 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5F33E1] min-w-11 min-h-11'
          aria-label='Profil ve ayarlar çekmecesini aç'
          aria-disabled={avatarDisabled}
        >
          <img
            src={avatarUrl || 'https://via.placeholder.com/46'}
            alt='Kullanıcı avatarı'
            width={46}
            height={46}
            className='w-[46px] h-[46px] rounded-full object-cover'
          />
        </button>
        <div className='leading-tight truncate' aria-live='polite'>
          <p className='text-sm text-foreground'>Hello!</p>
          <p className='text-lg font-semibold text-foreground truncate'>{userName}</p>
        </div>
      </div>
      <button
        type='button'
        className='relative p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5F33E1]'
        aria-label='Bildirimler'
      >
        <Bell className='w-6 h-6 text-foreground fill-foreground' aria-hidden='true' />
        <span
          className='absolute -top-0.5 left-3 w-2 h-2 rounded-full'
          style={{ backgroundColor: 'var(--primary)' }}
          aria-hidden='true'
        />
      </button>
    </header>
  );
}
