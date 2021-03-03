import React from 'react';
import { schema } from './galaxy.config.js';
import { Badge, getVariants } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Badge,
  title: `Galaxy/Components/Badge`,
};

export const Variants = ({ variants = schema.components.badge.variants }) => {
  return getVariants({ variants: variants }).map((v, i) => {
    const { variant, className } = v;
    return (
      <Badge variant={variant} className={`${className}`} key={i}>
        {variant}
      </Badge>
    );
  });
};
