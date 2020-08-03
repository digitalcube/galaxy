// .storybook/preview.js
import React from 'react';
import { addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

import { GlobalStyle } from './../src/styles/index';
import { contexts } from './contexts';
import { themes } from '../src/styles';

addDecorator(withContexts(contexts));
addDecorator(storyFn => (
  <>
    <link rel="stylesheet" href="https://use.typekit.net/rrt0shs.css" />
    <ThemeProvider theme={{ mode: 'light' }}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  </>
));
