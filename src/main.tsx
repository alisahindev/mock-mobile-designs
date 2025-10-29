import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import { AppStateProvider } from './contexts/AppStateProvider';
import './index.css';
import AssignmentDetail from './pages/AssignmentDetail.tsx';
import Completed from './pages/Completed.tsx';
import CompletedDetail from './pages/CompletedDetail.tsx';
import Conversation from './pages/Conversation.tsx';
import Feedback from './pages/Feedback.tsx';
import Home from './pages/Home.tsx';
import Progress from './pages/Progress.tsx';
import Replay from './pages/Replay.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'completed', element: <Completed /> },
      { path: 'progress', element: <Progress /> },
      { path: 'assignments/:id', element: <AssignmentDetail /> },
      { path: 'conversation/:id', element: <Conversation /> },
      { path: 'feedback/:id', element: <Feedback /> },
      { path: 'replay/:id', element: <Replay /> },
      { path: 'completed/:id', element: <CompletedDetail /> },
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
    <AppStateProvider>
      <RouterProvider router={router} />
    </AppStateProvider>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithStatusBar />
  </StrictMode>,
);
