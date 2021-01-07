import { ShifterThemeProvider, amimoto, shifter } from '../src/themes';

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
        },
      },
      {
        name: 'Amimoto',
        props: {
          theme: amimoto,
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
