import React from 'react';
import { Dashboard } from '@galaxy/views';
import { fakerHeader } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Dashboard,
  title: `Shifter/Dashboard/Patterns/Dashboard/State`,
};

export const Zero = () => {
  return <Dashboard {...fakerHeader} />;
};
