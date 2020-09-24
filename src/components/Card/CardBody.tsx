import React, { ReactNode } from 'react';
import { Box } from '../index';

export type CardBody = {
  children?: ReactNode;
  variant?: string;
  sx?: object;
};

export const CardBody: React.FC<CardBody> = ({
  children,
  sx,
  variant,
}: CardBody) => {
  if (!children) return null;
  return (
    <Box variant={variant} sx={{ ...sx }}>
      {children}
    </Box>
  );
};

CardBody.defaultProps = {
  variant: `cards.primary`,
};
