import React from 'react';
import { Live } from '@galaxy/views';
import { fakerSites, fakerHeader } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Live,
  title: `Galaxy/Dashboard/Views/Live`,
};

export const Default = () => {
  return <Live sites={fakerSites} header={fakerHeader} />;
};
