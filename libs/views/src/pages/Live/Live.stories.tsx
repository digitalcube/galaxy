import React from 'react';
import { Live } from '@galaxy/views';
import { fakerOverview } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Live,
  title: `Shifter/Dashboard/Pages/Sites/Site/Live/Overview/State`,
};

export const Zero = () => {
  return <Live {...fakerOverview} />;
};
