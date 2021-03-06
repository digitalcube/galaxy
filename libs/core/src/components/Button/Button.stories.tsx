import React from 'react';
import { button } from './galaxy.config';
import { Button } from './Button';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Button,
  title: `Galaxy/Components/Button`,
};

export const Schemas = () => {
  const buttons = Object.entries(button.variants).map(
    (variant) => {
      return <Button variants={button} variant={`${variant[0]}`}>{`${variant[0]}`}</Button>;
    }
  );
  return (
    <div>
      <h2>Schema</h2>
      {buttons}
    </div>
  );
};
