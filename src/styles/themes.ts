import theme from 'styled-theming';
import { colors } from './colors';

export const shifter = {
  colors: {
    ...colors[`galaxy`],
    ...colors[`shifter`],
  },
  light: {
    components: {
      card: {
        backgroundColor: colors.galaxy.white,
      },
    },
  },
  dark: {
    components: {
      card: {
        backgroundColor: colors.shifter.purple.p500,
      },
    },
  },
};

export const amimoto = {
  colors: {
    ...colors[`galaxy`],
    ...colors[`amimoto`],
  },
  light: {
    components: {
      card: {
        backgroundColor: colors.galaxy.white,
      },
    },
  },
};

export const themes = {
  shifter: {
    ...shifter,
  },
  amimoto: {
    ...amimoto,
  },
};
