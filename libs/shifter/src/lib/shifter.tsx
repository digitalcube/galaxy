import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ShifterProps {}

const StyledShifter = styled.div`
  color: pink;
`;

export function Shifter(props: ShifterProps) {
  return (
    <StyledShifter>
      <h1>Welcome to shifter!</h1>
    </StyledShifter>
  );
}

export default Shifter;
