import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Drawer from './components/Drawer';
import { useAppState } from './contexts/AppStateProvider';

const App = () => {
  const { closeDrawer } = useAppState();
  const location = useLocation();

  useEffect(() => {
    // Navigasyonda otomatik kapat
    closeDrawer();
  }, [location, closeDrawer]);

  return (
    <div
      id='main-content'
      className='min-h-svh mx-auto flex flex-col overflow-hidden pb-28 pb-safe'
      role='main'
      aria-label='Görev yönetimi ana sayfa'
    >
      <Outlet />
      <BottomNav />
      <Drawer />
    </div>
  );
};

export default App;
