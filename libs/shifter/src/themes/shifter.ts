// shifter.ts
import { galaxy } from '@galaxy/core';
import { colors } from '@galaxy/views';

const transitions = {
  exit: {
    fast: `all 150ms cubic-bezier(.01,.65,.73,1.01)`,
    medium: `all .5s cubic-bezier(.01,.65,.73,1.01)`,
    slow: `all 1s cubic-bezier(.3,0,.45,1)`,
  },
  entrance: {
    fast: `all 150ms cubic-bezier(.55,0,1,.5)`,
    medium: `all .5s cubic-bezier(.55,0,1,.5)`,
    slow: `all 1s cubic-bezier(.17,0,.8,.15)`,
  },
  ease: {
    fast: `all 150ms cubic-bezier(.85,.05,.15,.8)`,
    medium: `all .5s cubic-bezier(.7,.15,.35,.9)`,
    slow: `all 1s cubic-bezier(.7,.15,.35,.9)`,
  },
};

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
    maxWidth: '100%',
    height: 'auto',
    m: '0 auto',
  },
};

export const shifter = {
  ...galaxy,
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
    heading: colors.shifter.purple.p500,
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
      fontSize: 3,
      fontWeight: 'body',
      color: 'text',
      whiteSpace: 'nowrap',
      '&:hover': {
        color: colors.shifter.purple.primary,
        cursor: 'pointer',
      },
    },
    primary: {
      variant: 'buttons.primary',
    },
    white: {
      variant: 'buttons.white',
    },
    ghost: {
      variant: 'buttons.ghost',
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
      fontSize: 2,
      color: 'white',
      px: 4,
      py: 2,
      cursor: `pointer`,
      display: 'inline-block',
      borderRadius: 0,
      textDecoration: 'none',
      bg: colors.shifter.purple.primary,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      fontWeight: `bold`,
      transition: transitions.ease.fast,
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
    ghostHover: {
      variant: 'buttons.ghost',
      color: colors.shifter.purple.primary,
      bg: colors.shifter.gray.g100,
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
      variant: 'cards.primary',
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      bg: 'white',
      borderRadius: 0,
    },
    tr: {
      ':not(:last-child)': {
        borderBottomColor: colors.shifter.gray.g100,
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
      },
    },
    th: {
      fontWeight: 'body',
      textAlign: 'left',
      color: 'text',
      p: 2,
    },
    td: {
      p: 2,
      textAlign: 'center',
      color: 'secondary',
    },
  },
};
