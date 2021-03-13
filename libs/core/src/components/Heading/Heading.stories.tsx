import React from 'react';
import { heading } from './galaxy.config';
import { Heading } from '../index';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Heading,
  title: `Galaxy/Components/Heading`,
};

export const Example = () => {
  return (
    <Heading
      fontSize="8"
      variant="primary"
      variants={heading}
    />
  );
};
