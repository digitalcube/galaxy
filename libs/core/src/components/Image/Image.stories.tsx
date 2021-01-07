import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Image } from './Image';

export default {
  component: Image,
  title: `Galaxy/Components/Image`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Image img="./post-featured-image.png" alt="Image" />;
};
