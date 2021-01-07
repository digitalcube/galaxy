import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Categories } from './Categories';

export default {
  component: Categories,
  title: `Galaxy/Components/Categories`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Categories />;
};
