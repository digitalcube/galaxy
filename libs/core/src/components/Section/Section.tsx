import React, { FC, ReactNode } from 'react';
import { Tag } from '@galaxy/core';

export type Section = {
  children?: ReactNode;
  as?: string;
  className?: string;
};

export const Section: FC<Section> = ({ children, as, className }: Section) => {
  if (!children) return null;
  const classes = className ?? undefined;
  return (
    <Tag as={as} className={classes}>
      {children}
    </Tag>
  );
};
