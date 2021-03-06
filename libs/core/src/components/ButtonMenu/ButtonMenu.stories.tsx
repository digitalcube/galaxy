import React from 'react';
import { buttonMenu } from './galaxy.config';
import { ButtonMenu } from './ButtonMenu';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: ButtonMenu,
  title: `Galaxy/Components/Button Menu`,
};

export const Example = () => {
  return <ButtonMenu />;
};
