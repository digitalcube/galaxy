import React from 'react';
import { Control } from '@galaxy/views';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Control,
  title: `Shifter/Dashboard/Patterns/Controls/Control`,
};

export const On = ({
  title = 'Automatically publish new deploys',
  description = 'When a new deploy is generated, it will be automatically published as the live site.',
  state = true,
}) => {
  return <Control title={title} description={description} state={state} />;
};

export const Off = ({ title = 'This setting is', state = false }) => {
  return <Control title={title} state={state} />;
};
