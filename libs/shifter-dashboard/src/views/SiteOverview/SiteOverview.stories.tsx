import React from 'react';
import { SiteOverview } from '@galaxy/shifter-dashboard';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: SiteOverview,
  title: `Shifter/Dashboard/Patterns/SiteOverview`,
};

export const Example = () => {
  <SiteOverview />;
};
