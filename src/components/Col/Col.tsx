import { ReactChild } from 'react';
import styled from 'styled-components';

type Col = {
  children: ReactChild;
};

export const Col = styled.div<Col>``;
