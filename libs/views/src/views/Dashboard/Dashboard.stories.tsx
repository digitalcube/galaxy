import React from 'react';
import { Dashboard } from '@galaxy/views';
import { fakerHeader } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Dashboard,
  title: `Shifter/Dashboard/Patterns/Dashboard/State`,
};

export const Zero = () => {
  return <Dashboard header={fakerHeader} />;
};
