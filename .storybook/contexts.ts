import { ShifterThemeProvider, shifter } from '../libs/shifter/src/themes';
import { amimoto } from '../libs/amimoto/src/themes';

export const contexts = [
  {
    icon: 'switchalt',
    title: 'Schema',
    components: [ShifterThemeProvider],
    params: [
      {
        name: 'Shifter',
        props: {
          theme: shifter,
          linkType: 'a',
        },
      },
      {
        name: 'Amimoto',
        props: {
          theme: amimoto,
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
