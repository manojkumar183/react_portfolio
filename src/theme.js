import { createTheme } from '@mui/material/styles';

const theme = (mode) =>
  createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#9c27b0',
      },
    },
  });

export default theme;
