import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SivaProps {}

const StyledSiva = styled.div`
  color: pink;
`;

export function Siva(props: SivaProps) {
  return (
    <StyledSiva>
      <h1>Welcome to siva!</h1>
    </StyledSiva>
  );
}

export default Siva;
