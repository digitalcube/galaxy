// shifter.ts

import { colors } from '../styles/colors';

const images = {
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 99999,
  },
  0: {
    variant: 'images.avatar',
    width: '1rem',
    height: '1rem',
  },
  1: {
    variant: 'images.avatar',
    width: '2.5rem',
    height: '2.5rem',
  },
  2: {
    variant: 'images.avatar',
    width: '5.5rem',
    height: '5.5rem',
  },
  responsive: {
    display: 'flex',
    minWidth: '25%',
    maxWidth: '100%',
    height: 'auto',
    m: '0 auto',
  },
};

export const shifter = {
  breakpoints: [
    '320px',
    '375px',
    '414px',
    '768px',
    '1024px',
    '1440px',
    '2560px',
  ],
  radii: {
    0: `.25rem`,
    1: `.5rem`,
  },
  shadows: {
    0: `0px 1px 8px rgba(69, 29, 57, 0.1)`,
    1: `0px 2px 8px rgba(69, 29, 57, 0.2)`,
    2: `00px 8px 15px rgba(69, 29, 57, 0.2), 0px 8px 20px 4px rgba(69, 29, 57, 0.15)`,
    3: `0px 6px 18px rgba(69, 29, 57, 0.29), 0px 19px 29px rgba(69, 29, 57, 0.35)`,
  },
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64],
  fonts: {
    body: 'sofia-pro, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [10, 12, 14, 16, 18, 22, 30, 38, 50],
  sizes: {
    container: [540, 768, 1200],
  },
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: null,
  },
  colors: {
    ...colors.shifter,
    modes: {
      dark: {
        text: '#fff',
        background: '#1A0112',
        primary: '#0cf',
        white: '#451D39',
      },
    },
    text: colors.shifter.purple.p700,
    heading: colors.shifter.purple.p600,
    primary: colors.shifter.purple.p500,
    secondary: colors.shifter.gray.g500,
    black: colors.shifter.black,
    white: colors.shifter.white,
    success: colors.galaxy.success,
    background: colors.shifter.background.light,
    status: {
      success: {
        primary: colors.galaxy.success,
        dark: colors.galaxy.successDark,
      },
      warning: {
        primary: colors.galaxy.warning,
        dark: colors.galaxy.warningDark,
      },
      danger: {
        primary: colors.galaxy.danger,
        dark: colors.galaxy.dangerDark,
      },
    },
  },
  images: {
    ...images,
  },
  links: {
    a: {
      textDecoration: 'none',
    },
    nav: {
      fontSize: 4,
      fontWeight: 'body',
      color: 'text',
      whiteSpace: 'nowrap',
      '&:hover': {
        color: colors.shifter.purple.primary,
      },
    },
    primary: {
      variant: 'buttons.primary',
    },
    white: {
      variant: 'buttons.white',
    },
  },
  layout: {
    0: {
      maxWidth: 540,
    },
    1: {
      maxWidth: 720,
    },
    2: {
      maxWidth: 960,
    },
    3: {
      maxWidth: 1140,
    },
    4: {
      maxWidth: 1320,
    },
  },
  nav: {
    primary: {
      display: 'inline-flex',
    },
    row: {
      variant: 'nav.primary',
      alignItems: 'center',
      flexDirection: 'row',
      '& > :not(:first-child)': {
        ml: [1, null, null, null, 4],
      },
    },
    column: {
      variant: 'nav.primary',
      flexDirection: 'column',
      '& > :not(:first-child)': {
        mt: 1,
      },
    },
    mobile: {
      variant: 'nav.column',
      '& > :not(:first-child)': {
        mt: 2,
      },
    },
  },
  badges: {
    primary: {
      fontSize: 0,
      color: 'white',
      bg: 'primary',
      px: 2,
      py: 1 / 2,
      borderRadius: 99999,
    },
    success: {
      variant: 'badges.primary',
      color: 'white',
      bg: 'status.success.primary',
    },
    warning: {
      variant: 'badges.primary',
      color: 'white',
      bg: 'status.warning.primary',
    },
    danger: {
      variant: 'badges.primary',
      color: 'white',
      bg: 'status.danger.primary',
    },
  },
  cards: {
    primary: {
      bg: `white`,
      borderRadius: 0,
      boxShadow: 0,
      overflow: 'hidden',
      '& > div': {
        p: 2,
      },
    },
    blog: {
      bg: null,
      borderRadius: null,
      boxShadow: null,
      '& > div': {
        p: 2,
      },
    },
    basic: {
      '& >': {
        p: 0,
        bg: null,
      },
    },
    row: {
      variant: 'cards.blog',
      borderRadius: null,
      boxShadow: null,
      display: 'flex',
      '& > div': {
        py: 0,
        pr: 0,
        flex: 2,
      },
      '& > :first-child': {
        display: 'flex',
        flex: 1,
        p: 0,
      },
    },
  },
  buttons: {
    icon: {
      cursor: 'pointer',
    },
    primary: {
      fontSize: 1,
      color: 'white',
      px: 4,
      py: 1,
      display: 'inline-block',
      borderRadius: 0,
      textDecoration: 'none',
      bg: colors.shifter.purple.primary,
      whiteSpace: 'nowrap',
      '&:hover': {
        bg: colors.shifter.purple.p600,
        color: 'white',
      },
    },
    success: {
      variant: 'buttons.primary',
      color: 'white',
      bg: 'status.success.primary',
      '&:hover': {
        bg: 'status.success.dark',
      },
    },
    ghost: {
      variant: 'buttons.primary',
      color: colors.shifter.purple.primary,
      bg: 'transparent',
      '&:hover': {
        bg: colors.shifter.gray.g200,
      },
    },
    white: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'white',
      '&:hover': {
        bg: colors.shifter.gray.g300,
      },
    },
    danger: {
      variant: 'buttons.primary',
      bg: 'status.danger.primary',
      color: 'white',
      '&:hover': {
        bg: 'status.danger.dark',
      },
    },
  },
  text: {
    heading: {
      color: 'heading',
      fontWeight: 'heading',
      textDecoration: 'none',
    },
    0: {
      variant: 'text.heading',
      fontSize: 0,
      lineHeight: 1,
    },
    1: {
      variant: 'text.heading',
      fontSize: 1,
      lineHeight: 1.375,
    },
    2: {
      variant: 'text.heading',
      fontSize: 2,
      lineHeight: 1.5,
    },
    3: {
      variant: 'text.heading',
      fontSize: 3,
      lineHeight: 1.444,
    },
    4: {
      variant: 'text.heading',
      fontSize: 4,
      lineHeight: 1.6,
    },
    5: {
      variant: 'text.heading',
      fontSize: 5,
      lineHeight: 1.75,
    },
    6: {
      variant: 'text.heading',
      fontSize: 6,
      lineHeight: 1.444,
    },
    7: {
      variant: 'text.heading',
      fontSize: 7,
      lineHeight: 1.333,
    },
    8: {
      variant: 'text.heading',
      fontSize: 8,
      lineHeight: 1.25,
    },
    9: {
      variant: 'text.heading',
      fontSize: 9,
      lineHeight: 1.25,
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 7,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
};
