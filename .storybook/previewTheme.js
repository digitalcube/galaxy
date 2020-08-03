// .storybook/preview.js
import React from 'react';
import { addParameters } from "@storybook/react";
import { addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { GlobalStyle } from './../src/styles/index';
import { contexts } from './contexts';

addParameters({
  backgrounds: [
    { name: 'Default theme', value: '#ffffff', default: true },
    { name: 'Dark theme', value: '#050449' },
  ],
});

addDecorator(withContexts(contexts));
addDecorator(storyFn => (
  <>
    <link rel="stylesheet" href="https://use.typekit.net/rrt0shs.css" />
    <GlobalStyle />
    {storyFn()}
  </>
));
