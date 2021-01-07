import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FeaturedImage } from './FeaturedImage';

export default {
  component: FeaturedImage,
  title: `Galaxy/Components/FeaturedImage`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <FeaturedImage />;
};
