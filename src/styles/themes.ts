import theme from 'styled-theming';
import { colors, components } from './index';

export const buttonBackgroundColor = theme.variants('mode', 'schema', {
  galaxy: {
    light: colors.galaxy.gray.g700,
    dark: colors.galaxy.white,
  },
  shifter: {
    light: colors.galaxy.gray.g700,
    dark: colors.shifter.purple.p100,
  },
  amimoto: {
    light: colors.galaxy.gray.g700,
    dark: colors.amimoto.gray.g300,
  },
});

export const color = theme.variants('mode', 'schema', {
  galaxy: {
    light: colors.galaxy.gray.g700,
    dark: colors.galaxy.white,
  },
  shifter: {
    light: colors.galaxy.gray.g700,
    dark: colors.shifter.purple.p100,
  },
  amimoto: {
    light: colors.galaxy.gray.g700,
    dark: colors.amimoto.gray.g300,
  },
});

export const borderColor = theme.variants('mode', 'schema', {
  galaxy: {
    light: colors.galaxy.gray.g200,
    dark: colors.galaxy.gray.g600,
  },
  shifter: {
    light: colors.galaxy.transparent,
    dark: colors.galaxy.transparent,
  },
  amimoto: {
    light: colors.galaxy.transparent,
    dark: colors.amimoto.blue.b500,
  },
});

export const boxShadow = theme.variants('mode', 'schema', {
  galaxy: {
    light: `none`,
    dark: `none`,
  },
  shifter: {
    light: components.boxShadow,
    dark: components.boxShadow,
  },
  amimoto: {
    light: components.boxShadow,
    dark: `none`,
  },
});

export const backgroundColor = theme.variants('mode', 'schema', {
  galaxy: {
    light: colors.galaxy.transparent,
    dark: colors.galaxy.transparent,
  },
  shifter: {
    light: colors.galaxy.white,
    dark: colors.shifter.purple.p500,
  },
  amimoto: {
    light: colors.galaxy.white,
    dark: colors.amimoto.blue.b600,
  },
});

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
