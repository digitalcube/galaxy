import React from 'react';

import { Tag } from './index';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Tag,
  title: `Galaxy/Components/Tag`,
};

export const Default = () => <Tag />;
