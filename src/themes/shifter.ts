// shifter.ts

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
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64],
  fonts: {
    body: 'Sofia Pro, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48],
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
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111',
      },
      light: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111',
      },
    },
    text: '#000',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f6',
    danger: '#FF0000',
    black: `#25021B`,
    white: `#FFFFFF`,
    background: `#FAFAFA`,
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
  links: {
    nav: {
      fontSize: 3,
      fontWeight: '400',
      color: 'purple.p600',
      '&:hover': {
        color: 'purple.primary',
      },
    },
  },
  text: {
    0: {
      variant: 'text.heading',
      fontSize: 0,
      lineHeight: 1,
      color: 'purple.p600',
    },
    1: {
      variant: 'text.heading',
      fontSize: 1,
      lineHeight: 1.375,
      color: 'purple.p600',
    },
    2: {
      variant: 'text.heading',
      fontSize: 2,
      lineHeight: 1.5,
      color: 'purple.p600',
    },
    3: {
      variant: 'text.heading',
      fontSize: 3,
      lineHeight: 1.444,
      color: 'purple.p600',
    },
    4: {
      variant: 'text.heading',
      fontSize: 4,
      lineHeight: 1.6,
      color: 'purple.p600',
    },
    5: {
      variant: 'text.heading',
      fontSize: 5,
      lineHeight: 1.75,
      color: 'purple.p600',
    },
    6: {
      variant: 'text.heading',
      fontSize: 6,
      lineHeight: 1.444,
      color: 'purple.p600',
    },
    7: {
      variant: 'text.heading',
      fontSize: 7,
      lineHeight: 1.333,
      color: 'purple.p600',
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
