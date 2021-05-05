import React from 'react';
import { Dev as DevPage } from './Dev';
import { fakerDev } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: DevPage,
  title: `Shifter/Dashboard/Pages/Sites/Site/Dev`,
};

export const Example = () => {
  return <DevPage {...fakerDev} />;
};
