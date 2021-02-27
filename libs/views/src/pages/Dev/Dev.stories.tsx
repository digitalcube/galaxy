import React from 'react';
import { Dev } from '@galaxy/views';
import { fakerDev } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Dev,
  title: `Shifter/Dashboard/Pages/Sites/Site/Dev/State`,
};

export const Zero = () => {
  console.log(fakerDev);
  return <Dev {...fakerDev} />;
};
