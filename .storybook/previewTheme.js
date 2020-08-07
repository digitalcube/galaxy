// .storybook/preview.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { GlobalStyle } from './../src/styles/index';
import { contexts } from './contexts';

addDecorator(withContexts(contexts));
addDecorator(storyFn => (
  <>
    <ThemeProvider theme={{ mode: "dark" }}>
      <link rel="stylesheet" href="https://use.typekit.net/rrt0shs.css" />
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  </>
));
