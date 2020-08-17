import React from 'react';
import styled from 'styled-components';

type Col = {
  children?: string;
  width?: number | string;
};

const StyledCol = styled.div`
  /* display: flex; */
`;

export const Col: React.FC<Col> = ({ children = null, width = 12 }) => {
  if (!children) return null;
  return <StyledCol>{children}</StyledCol>;
};
