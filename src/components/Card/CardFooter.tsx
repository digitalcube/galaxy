import React from 'react';
import styled from 'styled-components';
import { components } from '../../styles';

export type CardFooter = {
  children?: React.ReactChild;
};

const StyledCardFooter = styled.div`
  margin-top: auto;
  padding: 0 ${components.spacing.sm} ${components.spacing.md};
`;

export const CardFooter: React.FC<CardFooter> = ({
  children = ``,
}: CardFooter) => {
  if (!children) return null;
  return <StyledCardFooter>{children}</StyledCardFooter>;
};
