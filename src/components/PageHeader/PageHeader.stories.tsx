import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { PageHeader } from './PageHeader';

export default {
  component: PageHeader,
  title: `Containers/PageHeader`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <PageHeader />;
};
