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

export const Hover = () => {
  return <Button />;
};

Hover.parameters = { pseudo: { hover: true } };

export const Focus = () => {
  return <Button />;
};

Focus.parameters = { pseudo: { focus: true } };

export const Disabled = () => {
  return <Button />;
};

Disabled.parameters = { disabled: true };

export const Active = () => {
  return <Button />;
};

Active.parameters = { pseudo: { disabled: true } };
