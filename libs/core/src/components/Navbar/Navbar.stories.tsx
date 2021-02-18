import React from 'react';

import { Navbar } from '../index';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Navbar,
  title: `Galaxy/Components/Navbar`,
};

export const Default = () => {
  const items = [
    { title: 'Sites', url: 'sites' },
    { title: 'Teams', url: 'teams' },
    { title: 'Guides', url: 'guides' },
  ];
  return <Navbar items={items}>Hello world</Navbar>;
};
