import React from 'react';
import { SiteSettings } from '@galaxy/shifter-dashboard';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: SiteSettings,
  title: `Shifter/Dashboard/Patterns/SiteSettings`,
};

export const Example = () => {
  return <SiteSettings />;
};
