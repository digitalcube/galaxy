import { ThemeProvider } from 'styled-components';
import { shifter, amimoto, themes } from './../src/styles/themes';

export const contexts = [
  {
    icon: 'grow', 
    title: 'Themes',
    components: [ThemeProvider],
    params: [
      {
        name: 'Shifter',
        props: {
          theme: {
            shifter,
          },
        },
        default: true,
      },
      {
        name: 'Amimoto',
        props: {
          theme: {
            amimoto,
          },
        },
      },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
];
