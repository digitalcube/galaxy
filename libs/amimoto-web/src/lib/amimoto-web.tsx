import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AmimotoWebProps {}

const StyledAmimotoWeb = styled.div`
  color: pink;
`;

export function AmimotoWeb(props: AmimotoWebProps) {
  return (
    <StyledAmimotoWeb>
      <h1>Welcome to amimoto-web!</h1>
    </StyledAmimotoWeb>
  );
}

export default AmimotoWeb;
