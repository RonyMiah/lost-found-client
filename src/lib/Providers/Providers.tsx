'use client';

import { store } from '@/redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme/theme';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
