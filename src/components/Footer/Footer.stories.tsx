import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Footer } from '../index';

export default {
  component: Footer,
  title: `Containers/Footer`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Footer />;
};
