import React from 'react';
import { Guides } from '@galaxy/shifter-dashboard';
import { fakerGuides } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Guides,
  title: `Shifter/Dashboard/Patterns/Guides`,
};

export const Default = () => {
  return <Guides guides={fakerGuides} />;
};
