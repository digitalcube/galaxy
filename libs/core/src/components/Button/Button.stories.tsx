import React from 'react';
import { Button } from './Button';

import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  component: Button,
  title: `Galaxy/Components/Button`,
};

export const Example = () => {
  return <Button />;
};
