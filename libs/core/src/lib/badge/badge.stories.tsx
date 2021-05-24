import React from 'react';
import { Badge, BadgeProps } from './badge';

export default {
  component: Badge,
  title: `Galaxy/Components/Badge`,
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: BadgeProps = {};

  return <Badge />;
};
