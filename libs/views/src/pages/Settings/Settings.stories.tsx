import React from 'react';
import { Settings } from '@galaxy/views';
import { fakerSettings } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Settings,
  title: `Shifter/Dashboard/Pages/Sites/Site/Settings/State`,
};

export const Zero = () => {
  return <Settings {...fakerSettings} />;
};
