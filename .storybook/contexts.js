import { ThemeProvider } from 'styled-components';
import { dark, light, minimal } from './../src/styles/themes';

export const contexts = [
  {
    icon: 'box', // a icon displayed in the Storybook toolbar to control contextual props
    title: 'Themes', // an unique name of a contextual environment
    components: [ThemeProvider],
    params: [
      {
        name: 'Light Theme',
        props: {
          theme: {
            light,
          },
        },
        default: true,
      },
      {
        name: 'Dark Theme',
        props: {
          theme: {
            dark,
          },
        },
      },
      {
        name: 'Minimal',
        props: {
          theme: {
            minimal,
          },
        },
      },
    ],
    options: {
      deep: true, // pass the `props` deeply into all wrapping components
      disable: false, // disable this contextual environment completely
      cancelable: false, // allow this contextual environment to be opt-out optionally in toolbar
    },
  },
];
