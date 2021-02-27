import React from 'react';
import { Staging } from '@galaxy/views';
import { fakerStaging } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Staging,
  title: `Shifter/Dashboard/Pages/Sites/Site/Staging/State`,
};

export const Zero = () => {
  return <Staging {...fakerStaging} />;
};
