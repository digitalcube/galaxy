// import { ThemeProvider } from 'styled-components';
import { ThemeProvider } from 'theme-ui';
import { galaxy, amimoto, shifter } from '../src/themes';

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
        },
      },
      {
        name: 'Galaxy',
        props: {
          theme: galaxy,
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
