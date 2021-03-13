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

export const Schemas = () => {
  const buttons = Object.entries(button.variants).map((variant, i) => {
    return (
      <Button
        key={i}
        variants={button}
        variant={`${variant[0]}`}
      >{`${variant[0]}`}</Button>
    );
  });
  return (
    <div>
      <h2>Schema</h2>
      {buttons}
    </div>
  );
};
