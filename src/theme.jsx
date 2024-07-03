import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      primary: {
        light: '#d5d5d5',
        main: '#000000',
        dark: '#1c1b1b',
        contrastText: '#fff',
      },
      secondary:{
        light: '#a65eeb',
        main: '#9044d8',
        dark: '#7228ae',
        contrastText: '#fff',
      }
    },
    shape: {
      borderRadius: 0,
    }
  });