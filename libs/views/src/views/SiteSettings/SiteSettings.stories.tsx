import React from 'react';
import { SiteSettings, Control } from '@galaxy/views';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: SiteSettings,
  title: `Shifter/Dashboard/Patterns/SiteSettings`,
};

export const Example = () => {
  return <SiteSettings />;
};
