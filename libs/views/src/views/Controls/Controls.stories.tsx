import React from 'react';
import { Controls } from '@galaxy/views';
import { fakerSiteControls } from '@galaxy/core';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Controls,
  title: `Shifter/Dashboard/Patterns/Controls`,
};

export const Default = () => {
  return <Controls controls={fakerSiteControls} />;
};
