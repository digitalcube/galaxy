import React from 'react';
import { AddDomain } from '@galaxy/views';
import { fakerSite } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: AddDomain,
  title: `Shifter/Dashboard/Views/AddDomain/State`,
};

export const Zero = () => {
  return <AddDomain {...fakerSite.addDomain} />;
};
