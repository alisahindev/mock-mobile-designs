import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useAppState } from './contexts/AppStateProvider';

const App = () => {
  const { closeDrawer } = useAppState();
  const location = useLocation();

  useEffect(() => {
    closeDrawer();
  }, [location, closeDrawer]);

  return <Outlet />;
};

export default App;
