import { colors } from './colors';

export const components = {
  boxShadow: `0px 3px 6px ${colors.galaxy.shadow}`,
  borderRadius: `0.25rem`,
  spacing: {
    xs: `0.5rem`,
    sm: `1rem`,
    md: `1.5rem`,
    lg: `2rem`,
    xl: `2.5rem`,
    xxl: `3rem`,
  },
  flex: `1 1 auto`,
  borderWidth: `0.0625rem`,
  borderStyle: `solid`,
  transition: {
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
  },
  section: {
    padding: {
      xl: `5rem`,
      lg: `4rem`,
      md: `3rem`,
      sm: `2rem`,
      xs: `1rem`,
    },
  },
  grid: {
    gap: `1.5rem`,
    columns: 1,
    breakpoints: {
      xxs: '320px',
      xs: '375px',
      sm: '414px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '2560px',
    },
  },
  container: {
    maxWidth: {
      sm: `540px`,
      md: `720px`,
      lg: `960px`,
      xl: `1140px`,
      xxl: `1320px`,
    },
  },
  row: {
    gap: `1.5rem`,
    columns: 12,
  },
  button: {
    fontSize: `0.875rem`,
    borderWidth: `0.125rem`,
    fontFamily: `Sofia Pro, sans-serif`,
    fontWeight: `normal`,
    fontStyle: `normal`,
    lineHeight: `inherit`,
    padding: `0 1rem`,
    minWidth: `8rem`,
    minHeight: `3rem`,
  },
};
