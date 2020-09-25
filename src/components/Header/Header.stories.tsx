import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Header } from '../index';

export default {
  component: Header,
  title: `Containers/Header`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Header />;
};
