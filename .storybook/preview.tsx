import type { Preview } from '@storybook/react-vite';
import React, { useEffect } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import { AppStateProvider } from '../src/contexts/AppStateProvider';
import '../src/index.css';
import '../src/themes/theme.css';
import { applyTheme, type ThemeName } from '../src/utils/theme';

// Theme uygulama wrapper component
const ThemeWrapper = ({ children, theme }: { children: React.ReactNode; theme: ThemeName }) => {
  useEffect(() => {
    applyTheme(theme || 'default');
  }, [theme]);

  return <>{children}</>;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
  },
  globalTypes: {
    theme: {
      description: 'Renk paleti teması',
      defaultValue: 'default',
      toolbar: {
        title: 'Renk Paleti',
        icon: 'paintbrush',
        items: [
          { value: 'default', title: 'Varsayılan' },
          { value: 'vibrant', title: 'Canlı' },
          { value: 'minimal', title: 'Minimal' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = (context.globals.theme as ThemeName) || 'default';

      return (
        <ThemeWrapper theme={theme}>
          <AppStateProvider>
            <MemoryRouter>
              <div className='p-4'>
                <Story />
              </div>
            </MemoryRouter>
          </AppStateProvider>
        </ThemeWrapper>
      );
    },
  ],
};

export default preview;
