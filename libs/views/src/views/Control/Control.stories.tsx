import React from 'react';
import { Control } from '@galaxy/views';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Control,
  title: `Shifter/Dashboard/Patterns/Control`,
};

export const On = ({ title = 'This setting is', state = true }) => {
  return <Control title={title} state={state} />;
};

export const Off = ({ title = 'This setting is', state = false }) => {
  return <Control title={title} state={state} />;
};
