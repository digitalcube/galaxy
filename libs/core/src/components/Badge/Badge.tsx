import React, { FC, ReactNode } from 'react';
import { Heading, getVariants } from '@galaxy/core';

export const Badge: FC<Badge> = ({ children, className, variant }: Badge) => {
  if (!children) return null;
  return (
    <Heading fontSize="4" fontWeight="strong" className={`${className}`}>
      {children}
    </Heading>
  );
};

export type Badge = {
  className?: string;
  children?: ReactNode;
  variant?: Heading;
};
