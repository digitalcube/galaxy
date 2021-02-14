import React, { FC, ReactNode } from 'react';
import { Tag } from '../Tag';

export type Section = {
  children?: ReactNode;
  as?: string;
  className?: string;
};

export const Section: FC<Section> = ({ children, as, className }: Section) => {
  const classes = className ?? undefined;
  return (
    <Tag as={as} className={classes}>
      {children}
    </Tag>
  );
};
