import { ThemeProvider } from 'styled-components';
import { shifter, amimoto, themes } from './../src/styles/themes';

export const contexts = [
  {
    icon: 'switchalt',
    title: 'Schema',
    components: [ThemeProvider],
    params: [
      {
        name: 'Galaxy',
        props: {
          theme: {
            schema: `galaxy`,
          },
        },
        default: true,
      },
      {
        name: 'Amimoto',
        props: {
          theme: {
            schema: `amimoto`,
          },
        },
      },
      {
        name: 'Shifter',
        props: {
          theme: {
            schema: `shifter`,
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
        default: true,
      },
      {
        name: 'Light',
        props: {
          theme: {
            mode: `light`,
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
