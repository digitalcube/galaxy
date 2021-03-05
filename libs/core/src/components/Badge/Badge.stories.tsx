import React from 'react';
import { badge } from './galaxy.config';
import { Badge, getVariants } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Badge,
  title: `Galaxy/Components/Badge`,
};

export const Variants = ({ variants = badge }) => {
  if (!variants) return null;
  console.log(variants);
  return getVariants({ variants: variants }).map((v, i) => {
    const { variant, className } = v;
    // return 'foo';
    return (
      <Badge variant={variant} className={`${className}`} key={i}>
        {variant}
      </Badge>
    );
  });
};
