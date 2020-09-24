/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { ReactNode } from 'react';
import { Box } from '../index';

export type CardBody = {
  children: ReactNode;
  sx?: object;
};

export const CardBody: React.FC<CardBody> = ({ children, sx }: CardBody) => {
  if (!children) return null;
  return <Box sx={{ ...sx }}>{children}</Box>;
};
