import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { PageHeader } from './PageHeader';

export default {
  component: PageHeader,
  title: `Galaxy/Views/PageHeader`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <PageHeader />;
};
