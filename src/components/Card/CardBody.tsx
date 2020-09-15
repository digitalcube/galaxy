import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { components } from '../../styles';

export type CardBody = {
  children: ReactNode;
};

const StyledCardBody = styled.div`
  padding: ${components.spacing.sm} ${components.spacing.sm};
`;

export const CardBody: React.FC<CardBody> = ({ children }: CardBody) => {
  if (!children) return null;
  return <StyledCardBody>{children}</StyledCardBody>;
};
