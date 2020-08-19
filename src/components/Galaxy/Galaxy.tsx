import React, { ReactChild } from 'react';
import styled from 'styled-components';
import { type } from '../../styles';

type Galaxy = {
  children: ReactChild;
};

export const Galaxy = styled.div<Galaxy>`
  font-family: ${type.fontFamily};
  background-color: white;
`;
