import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { QuickLinks } from './QuickLinks';

export default {
  component: QuickLinks,
  title: `Galaxy/Views/QuickLinks`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <QuickLinks />;
};
