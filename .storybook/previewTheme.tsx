import React from 'react';
import { addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { contexts } from './contexts';
import { GlobalStyle } from '../src/styles';
import { Galaxy } from '../src/components/Galaxy';

addDecorator(withContexts(contexts));
addDecorator(storyFn => {
  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/rrt0shs.css" />
      <GlobalStyle />
      <Galaxy>{storyFn()}</Galaxy>
    </>
  );
});