import React from 'react';
import { buttonTheme } from '@galaxy/core';
import { Button } from './Button';

import { defaultStorybookConfig } from '../../.storybook/docs';

const { button } = buttonTheme;
export default {
  ...defaultStorybookConfig,
  component: Button,
  title: `Galaxy/Components/Button`,
};

export const Example = () => {
  return <Button />;
};
