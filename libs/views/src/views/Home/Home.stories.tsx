import React from 'react';
import { Home } from '@galaxy/views';
import { fakerSites, fakerHeader } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Home,
  title: `Galaxy/Dashboard/Views/Home`,
};

export const Default = () => {
  return <Home sites={fakerSites} header={fakerHeader} />;
};
