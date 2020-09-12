import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Solutions, Image } from '../index';

export default {
  component: Solutions,
  title: `Containers/Solutions`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Solutions />;
};
