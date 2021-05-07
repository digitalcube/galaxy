import React from 'react';
import { Controls, Control } from '@galaxy/views';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Controls,
  title: `Shifter/Dashboard/Patterns/Controls`,
};

export const Default = () => {
  return (
    <Controls>
        <Control title={'foo'} description={'bar'} />
        <Control title={'foo'} description={'bar'} />
    </Controls>
  );
};
