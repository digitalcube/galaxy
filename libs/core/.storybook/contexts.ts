import { galaxy, GalaxyThemeProvider } from '../src/themes';

export const contexts = [
  {
    icon: 'switchalt',
    title: 'Schema',
    components: [GalaxyThemeProvider],
    params: [
      {
        name: 'Galaxy',
        props: {
          theme: galaxy,
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
