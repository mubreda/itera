/* eslint-disable linebreak-style */

import typographyVariants from './typographyVariants';

export const colors = {
  background: {
    light: {
      color: '#F8F9FB',
    },
    main: {
      color: '#FFFFFF',
    },
  },
  primary: {
    main: {
      color: '#212428',
      contrastText: '#FFFFFF',
    },
    light: {
      color: '#333840',
      contrastText: '#FFFFFF',
    },
  },
  secondary: {
    main: {
      color: '#F35B0F',
      contrastText: '#FFFFFF',
    },
  },
  tertiary: {
    main: {
      color: '#FFFFFF',
      contrastText: '#212428',
    },
  },
  modes: {
    dark: {},
  },
};

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default {
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '28px',
  transition: '.7s ease',
  fontFamily: '\'Rubik\', sans-serif',
};
