import React from 'react';
import { company, internet } from 'faker';
import { Section, fakerProgress } from '@galaxy/core';
import { Deploys } from '@galaxy/views';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Deploys,
  title: `Shifter/Dashboard/Patterns/Deploys`,
};

export const Example = () => {
  return <Deploys />;
};
