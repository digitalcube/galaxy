import React from 'react';
import { SiteOverview } from '@galaxy/views';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: SiteOverview,
  title: `Shifter/Dashboard/Patterns/SiteOverview`,
};

export const Example = () => {
  <SiteOverview />;
};
