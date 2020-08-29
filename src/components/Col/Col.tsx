import { ReactNode } from 'react';
import styled from 'styled-components';

type Col = {
  children: ReactNode;
  width?: string | number;
  height?: string | number;
};

export const Col = styled.div<Col>`
  display: grid;
  align-items: stretch;
  height: 100%;
  min-width: 0;
  grid-column-end: ${({ width = 1 }) => `span ${width}`};
  grid-row-end: ${({ height = 1 }) => `span ${height}`};
`;
