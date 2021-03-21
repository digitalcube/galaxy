import React from 'react';
import { Guide } from '@galaxy/shifter-dashboard';
import { fakerGuide } from '@galaxy/core';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Guide,
  title: `Galaxy/Components/Guide`,
};

export const Example = () => {
  return <Guide {...fakerGuide} />;
};
