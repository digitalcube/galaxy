import { colors } from './colors';

export const components = {
  boxShadow: `0px 3px 6px ${colors.system.shadow}`,
  borderRadius: `0.25rem`,
  padding: {
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
  transition: `all 0.25s ease`,
  section: {
    padding: {
      xl: `5rem`,
      lg: `4rem`,
      md: `3rem`,
      sm: `2rem`,
      xs: `1rem`,
    },
  },
  button: {
    fontSize: `1rem`,
    fontFamily: `Sofia Pro, sans-serif`,
    fontWeight: `normal`,
    fontStyle: `normal`,
    lineHeight: `inherit`,
    padding: `0.75rem 1.5rem`,
  },
};
