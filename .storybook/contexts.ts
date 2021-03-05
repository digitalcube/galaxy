import { shifter } from '../libs/shifter/src/themes';
import { amimoto } from '../libs/amimoto/src/themes';
import { ThemeProvider } from '../libs/core/src/themes';

export const contexts = [
  {
    icon: 'switchalt',
    title: 'Schema',
    components: [ThemeProvider],
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
