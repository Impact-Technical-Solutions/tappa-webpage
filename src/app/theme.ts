import { createTheme } from '@mui/material/styles';
import { Oxanium } from 'next/font/google';
import { Kantumruy_Pro } from 'next/font/google';

const oxanium = Oxanium({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const kantumruy = Kantumruy_Pro({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#4005FF",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#000000",
      paper: "#281639F2",
    },
  },
  typography: {
    fontFamily: oxanium.style.fontFamily,
    body1: {
      fontFamily: kantumruy.style.fontFamily,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 7,
        },
      },
    },
  },
});

export default theme; 