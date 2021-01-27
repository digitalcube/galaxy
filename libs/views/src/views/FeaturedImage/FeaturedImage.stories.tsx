import React from 'react';

import { FeaturedImage } from './FeaturedImage';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: FeaturedImage,
  title: `Galaxy/Components/FeaturedImage`,
};

export const Default = () => {
  return <FeaturedImage />;
};
