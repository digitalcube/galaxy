import React from 'react';
import styled from 'styled-components';
import { type } from '../../styles';

type Galaxy = {
  children?: null;
};

const StyledGalaxy = styled.div`
  font-family: ${type.fontFamily};
  background-color: white;
`;

export const Galaxy: React.FC<Galaxy> = ({ children = null }: Galaxy) => {
  return <StyledGalaxy>{children}</StyledGalaxy>;
};
