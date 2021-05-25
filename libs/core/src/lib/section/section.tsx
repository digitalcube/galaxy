import React, { ReactNode } from 'react';
import { Tag } from '@galaxy/core';

/* eslint-disable-next-line */
export interface SectionProps {
  children?: ReactNode;
  as?: string;
  className?: string;
}

export function Section(props: SectionProps) {
  const { children, as, className } = props;
  if (!children) return null;
  const classes = className ?? undefined;
  return (
    <Tag as={as} className={classes}>
      {children}
    </Tag>
  );
}

export default Section;
