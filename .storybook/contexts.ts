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
      {
        name: 'Shifter',
        props: {
          theme: shifter,
          default: true,
        },
      },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: true,
    },
  },
  {
    icon: 'switchalt',
    title: 'Mode',
    components: [ThemeProvider],
    params: [
      {
        name: 'Dark',
        props: {
          theme: {
            mode: `dark`,
          },
        },
      },
      {
        name: 'Light',
        props: {
          theme: {
            mode: `light`,
          },
          default: true,
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
