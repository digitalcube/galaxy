import React from 'react';
import { Menu } from '@galaxy/core';
import { fakerHeader } from '@galaxy/faker';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Menu,
  title: `Galaxy/Components/Menu`,
};

export const Default = () => {
  return <Menu {...fakerHeader} />;
};

export const Vertical = () => {
  return <Menu alignment="vertical" {...fakerHeader} />;
};
