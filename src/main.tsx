import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import { AppStateProvider } from './contexts/AppStateProvider';
import './index.css';
import AddProject from './pages/AddProject';
import AssignmentDetail from './pages/AssignmentDetail';
import Completed from './pages/Completed';
import Conversation from './pages/Conversation';
import Feedback from './pages/Feedback';
import Home from './pages/Home';
import Progress from './pages/Progress';
import Replay from './pages/Replay';
import Success from './pages/Success';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'assignment/:id', element: <AssignmentDetail /> },
      { path: 'completed', element: <Completed /> },
      { path: 'progress', element: <Progress /> },
      { path: 'conversation', element: <Conversation /> },
      { path: 'feedback', element: <Feedback /> },
      { path: 'replay', element: <Replay /> },
      { path: 'add-project', element: <AddProject /> },
      { path: 'success', element: <Success /> },
    ],
  },
]);

// Status bar ayarları için platform algılama
const detectPlatform = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isIOS = /iphone|ipad|ipod/.test(userAgent);
  const isAndroid = /android/.test(userAgent);

  return { isIOS, isAndroid };
};

// Status bar rengini ayarla
const setStatusBarColor = () => {
  const { isIOS, isAndroid } = detectPlatform();

  if (isIOS) {
    // iOS için status bar stilini ayarla
    document.documentElement.style.setProperty('--status-bar-bg', 'var(--primary)');
    document.documentElement.style.setProperty('--status-bar-color', 'white');
  } else if (isAndroid) {
    // Android için status bar stilini ayarla
    document.documentElement.style.setProperty('--status-bar-bg', 'var(--primary)');
    document.documentElement.style.setProperty('--status-bar-color', 'white');
  }
};

// Component wrapper for status bar setup
const AppWithStatusBar = () => {
  useEffect(() => {
    setStatusBarColor();
  }, []);

  return (
    <div className='app-radial-bg'>
      <AppStateProvider>
        <RouterProvider router={router} />
      </AppStateProvider>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithStatusBar />
  </StrictMode>,
);
