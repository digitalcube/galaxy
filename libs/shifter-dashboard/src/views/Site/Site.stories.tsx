import React from 'react';
import { fakerSite } from '@galaxy/core';
import { Site } from '@galaxy/shifter-dashboard';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Site,
  title: `Shifter/Dashboard/Patterns/Sites/Site`,
};

export const Example = () => {
  return <Site {...fakerSite} />;
};
