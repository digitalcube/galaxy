import React from 'react';
import { SettingsPage } from './SettingsPage';
import { fakerSettings } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: SettingsPage,
  title: `Shifter/Dashboard/Pages/Sites/Site/Settings`,
};

export const Example = () => {
  return <SettingsPage {...fakerSettings} />;
};
