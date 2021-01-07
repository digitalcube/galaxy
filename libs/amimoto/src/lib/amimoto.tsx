import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AmimotoProps {}

const StyledAmimoto = styled.div`
  color: pink;
`;

export function Amimoto(props: AmimotoProps) {
  return (
    <StyledAmimoto>
      <h1>Welcome to amimoto!</h1>
    </StyledAmimoto>
  );
}

export default Amimoto;
