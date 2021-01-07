import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FeatureTable } from './FeatureTable';

export default {
  component: FeatureTable,
  title: `Galaxy/Views/FeatureTable`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <FeatureTable />;
};
