import React from 'react';
import { SettingsPage } from './SettingsPage';
import { fakerSettings } from '@galaxy/core';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: SettingsPage,
  title: `Shifter/Dashboard/Pages/Sites/Site`,
};

export const Settings = () => {
  return <SettingsPage {...fakerSettings} />;
};
