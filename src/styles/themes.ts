import theme from 'styled-theming';
import { colors } from './colors';

export const shifter = {
  colors: {
    ...colors[`system`],
    ...colors[`shifter`],
  },
  light: {
    components: {
      card: {
        backgroundColor: colors.system.white,
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
    ...colors[`system`],
    ...colors[`amimoto`],
  },
  light: {
    components: {
      card: {
        backgroundColor: colors.system.white,
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
