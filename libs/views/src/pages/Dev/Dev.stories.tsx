import React from 'react';
import { Dev as DevPage } from '@galaxy/views';
import { fakerDev } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: DevPage,
  title: `Shifter/Dashboard/Pages/Sites/Site`,
};

export const Dev = () => {
  return <DevPage {...fakerDev} />;
};
