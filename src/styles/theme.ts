import { createTheme } from '@mui/material';
import { color, font } from './default.ts';

export const theme = createTheme({
  palette: {
    primary: {
      main: color.blue,
    },
    secondary: {
      main: color.lightBlue,
    },
    background: {
      default: color.lightGrey,
    },
  },
  typography: {
    fontFamily: font.primary,
    h1: {
      fontSize: '3.2rem',
      color: color.blue,
    },
    h2: {
      fontSize: '2.4rem',
      color: color.blue,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: color.darkBlue,
        },
      },
    },
  },
});
