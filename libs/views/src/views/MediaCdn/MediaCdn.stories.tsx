import React from 'react';
import { MediaCdn } from '@galaxy/views';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: MediaCdn,
  title: `Shifter/Dashboard/Patterns/MediaCdn`,
};

export const Schemas = () => {
  return <MediaCdn />;
};
