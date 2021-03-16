import React from 'react';

import { Search } from './Search';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Search,
  title: `Galaxy/Components/Search`,
};

export const Example = () => {
  return <Search />;
};
