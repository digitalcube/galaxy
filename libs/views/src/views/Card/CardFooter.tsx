import React, { ReactNode } from 'react';
import { Box } from '@galaxy/core';

export type CardFooter = {
  children?: ReactNode;
  sx?: object;
};

export const CardFooter: React.FC<CardFooter> = ({
  children,
  sx,
}: CardFooter) => {
  if (!children) return null;
  return <Box sx={{ p: 2, ...sx }}>{children}</Box>;
};
