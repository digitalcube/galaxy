import React from 'react';
import { Menu } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Menu,
  title: `Galaxy/Components/Menu`,
};

export const Default = () => {
  const items = [
    { title: 'Sites', url: 'sites' },
    { title: 'Teams', url: 'teams' },
    { title: 'Guides', url: 'guides' },
  ];
  return <Menu items={items}>Hello world</Menu>;
};
