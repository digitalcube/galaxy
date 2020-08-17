import React from 'react';
import styled from 'styled-components';
import { components } from '../../styles';

type Content = {
  children?: React.ReactNode;
  align?: string;
};

const StyledContent = styled.div`
  text-align: ${props => props.align};
  > :not(:first-child) {
    margin-top: ${components.spacing.sm};
  }
`;

export const Content: React.FC<Content> = ({ children = null, align = `` }) => {
  if (!children) return null;
  return <StyledContent align={align}>{children}</StyledContent>;
};
