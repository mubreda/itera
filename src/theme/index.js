/* eslint-disable linebreak-style */

import typographyVariants from './typographyVariants';

export const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#F2F2F2',
    },
  },
  borders: {
    main: {
      color: '#51C99E',
    },
  },
  primary: {
    main: {
      color: 'linear-gradient(270deg, rgba(98, 240, 189, 0) 0%, #62F0BD 100%)',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#4D5258',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#62F0BD',
      contrastText: '#fff',
    },
    light: {
      color: '#E5E9EF',
      contrastText: '#fff',
    },
    text: {
      color: '#B5B6B8',
      contrastText: '#fff',
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
  borderRadius: '12px',
  transition: '200ms ease-in-out',
  fontFamily: '\'Rubik\', sans-serif',
};
