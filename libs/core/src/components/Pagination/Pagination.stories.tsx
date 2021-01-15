import React from 'react';

import { Pagination } from './Pagination';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Pagination,
  title: `Galaxy/Components/Pagination`,
};

export const Default = () => {
  return <Pagination />;
};
