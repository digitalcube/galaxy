import React from 'react';
import { Home } from '@galaxy/views';
import { fakerHome } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Home,
  title: `Shifter/Dashboard/Pages/Sites/Site/Home/State`,
};

export const Zero = () => {
  return <Home {...fakerHome} />;
};
