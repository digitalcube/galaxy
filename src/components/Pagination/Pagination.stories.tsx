import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Pagination } from './Pagination';

export default {
  component: Pagination,
  title: `Galaxy/Components/Pagination`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Pagination />;
};
