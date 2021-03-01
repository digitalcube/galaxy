import React from 'react';
import { SettingsPage } from '@galaxy/views';
import { fakerSettings } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: SettingsPage,
  title: `Shifter/Dashboard/Pages/Sites/Site/SettingsPage/State`,
};

export const Zero = () => {
  return <SettingsPage {...fakerSettings} />;
};
