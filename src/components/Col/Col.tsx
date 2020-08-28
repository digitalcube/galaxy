import { ReactNode } from 'react';
import styled from 'styled-components';

type Col = {
  children: ReactNode;
};

export const Col = styled.div<Col>`
  display: grid;
  align-items: stretch;
`;
