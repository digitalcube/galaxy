import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { QuickLinks } from './QuickLinks';

export default {
  component: QuickLinks,
  title: `Containers/QuickLinks`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <QuickLinks />;
};
