import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#121212',
    },
    secondary: {
      main: '#C9E',
    },
    mode: 'dark',
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'secondary',
      },
      styleOverrides: {
        root: {
          padding: '8px 24px',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
    },
  },
  typography: {
    body1: {
      color: '#0B1134CC',
    },
  },
});

theme.shadows[1] = '0px 5px 22px lightgray';
