// shifter.ts

const avatar = {
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
    body: 'Sofia Pro, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48],
  sizes: {
    container: [540, 768, 1200],
  },
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: null,
  },
  colors: {
    modes: {
      dark: {
        text: '#fff',
        background: '#1A0112',
        primary: '#0cf',
      },
    },
    text: '#25021B',
    primary: '#9C036E',
    secondary: '#451D39',
    black: `#25021B`,
    white: `#FFFFFF`,
    success: `#0B8451`,
    background: `#FAFAFA`,
    status: {
      success: {
        primary: `#0B8451`,
        dark: `#0A6450`,
      },
      warning: {
        primary: `#FFA600`,
        dark: `#D17303`,
      },
      danger: {
        primary: `#CE1616`,
        dark: `#950000`,
      },
    },
    gray: {
      g500: `#797679`,
      g400: `#A29CA1`,
      g300: `#C8C5C7`,
      g200: `#D7D7D7`,
      g100: `#F1F1F1`,
    },
    purple: {
      primary: `#9C036E`,
      p700: `#2D0F24`,
      p600: `#451D39`,
      p500: `#653A58`,
      p400: `#AD8EAB`,
      p300: `#AD8EAB`,
      p200: `#DBCADA`,
      p100: `#EFE9EF`,
    },
    magenta: {
      dark: `#F80A5B`,
      light: `#FEEEF4`,
    },
  },
  images: {
    ...avatar,
  },
  links: {
    nav: {
      fontSize: 3,
      fontWeight: 'body',
      color: 'primary',
      '&:hover': {
        color: 'purple.primary',
      },
    },
    row: {
      variant: 'links.nav',
      '&:not(:first-child)': {
        ml: 4,
      },
    },
    column: {
      variant: 'links.nav',
    },
    primary: {
      variant: 'buttons.primary',
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
      modes: {
        dark: {
          bg: `purple.p600`,
        },
      },
    },
  },
  buttons: {
    primary: {
      fontSize: 1,
      color: 'white',
      px: 4,
      py: 1,
      borderRadius: 0,
      textDecoration: 'none',
      bg: 'purple.primary',
      '&:hover': {
        bg: 'primary',
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
      color: 'purple.primary',
      bg: 'transparent',
      '&:hover': {
        bg: 'gray.g200',
      },
    },
    white: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'white',
      '&:hover': {
        bg: 'gray.g300',
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
      color: 'text',
      fontWeight: 400,
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
