import React from 'react';
import { Button } from './Button';

import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  component: Button,
  title: `Galaxy/Components/Button`,
};

export const Example = () => {
  return <Button label="Example" />;
};

export const Hover = () => {
  return <Button label="Hover" />;
};

Hover.parameters = { pseudo: { hover: true } };

export const Focus = () => {
  return <Button />;
};

Focus.parameters = { pseudo: { focus: true } };
