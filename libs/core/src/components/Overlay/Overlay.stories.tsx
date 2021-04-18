import React from 'react';
import { Overlay } from './Overlay';

import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  component: Overlay,
  title: `Galaxy/Components/Overlay`,
};

export const Example = () => {
  return <Overlay />;
};
