import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SviaProps {}

const StyledSvia = styled.div`
  color: pink;
`;

export function Svia(props: SviaProps) {
  return (
    <StyledSvia>
      <h1>Welcome to svia!</h1>
    </StyledSvia>
  );
}

export default Svia;
