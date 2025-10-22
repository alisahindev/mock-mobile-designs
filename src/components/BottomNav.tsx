import { CheckCircle, Home, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type NavItem = {
  id: 'home' | 'completed' | 'progress';
  icon: typeof Home;
  path: string;
  label: string;
  onClick?: () => void;
};

export default function BottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  const navItems: NavItem[] = [
    {
      id: 'home',
      icon: Home,
      path: '/',
      label: 'Ana sayfa',
    },
    {
      id: 'completed',
      icon: CheckCircle,
      path: '/completed',
      label: 'Tamamlanan',
    },
    {
      id: 'progress',
      icon: TrendingUp,
      path: '/progress',
      label: 'İlerleme',
    },
  ];

  const NavButton = ({ item }: { item: NavItem }) => {
    const Icon = item.icon;
    const active = isActive(item.path);

    const handleClick = () => {
      if (item.path !== '#') {
        navigate(item.path);
      }
    };

    return (
      <motion.button
        onClick={handleClick}
        className='flex flex-col items-center space-y-1 p-3 min-w-11 min-h-11 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 relative'
        aria-label={item.label}
        aria-current={active ? 'page' : undefined}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <motion.div
          animate={{
            color: active ? '#5F33E1' : '#9CA3AF',
            scale: active ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <Icon className='w-7 h-7' />
        </motion.div>
        <div className='w-full h-1 rounded-full overflow-hidden flex justify-center'>
          <motion.div
            className='h-full bg-primary rounded-full w-full'
            initial={{
              scaleX: 0,
              transformOrigin: 'center',
            }}
            animate={{
              scaleX: active ? 1 : 0,
              transformOrigin: 'center',
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
              type: 'tween',
            }}
            style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
            }}
            aria-hidden='true'
          />
        </div>
      </motion.button>
    );
  };

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const height = ref.current.offsetHeight;
      const navbarTopValue = ref.current.getBoundingClientRect().top;
      console.log(navbarTopValue);
      document.documentElement.style.setProperty('--bottom-nav-height', `${height}px`);
      document.documentElement.style.setProperty('--navbar-top-value', `${navbarTopValue}px`);
    }
  }, [ref]);

  return (
    <nav
      className='fixed bottom-0 z-10 left-1/2 -translate-x-1/2 w-full bg-white shadow-[0px_-2px_20px_0px_rgba(0,0,0,0.2)] rounded-t-[44px] px-6 py-4 pb-safe'
      role='navigation'
      aria-label='Ana navigasyon'
      ref={ref}
    >
      <div className='flex items-center justify-around'>
        <NavButton item={navItems[0]} />
        <NavButton item={navItems[1]} />
        <NavButton item={navItems[2]} />
      </div>
    </nav>
  );
}
