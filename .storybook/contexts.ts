import { GalaxyThemeProvider } from '../libs/core/src/themes';

export const contexts = [
  {
    icon: 'switchalt',
    title: 'Schema',
    components: [GalaxyThemeProvider],
    params: [
      {
        name: 'Shifter',
        props: {
          linkType: 'a',
        },
      },
      {
        name: 'Amimoto',
        props: {
          linkType: 'a',
        },
      },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: true,
    },
  },
];
