import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ViewsProps {}

const StyledViews = styled.div`
  color: pink;
`;

export function Views(props: ViewsProps) {
  return (
    <StyledViews>
      <h1>Welcome to views!</h1>
    </StyledViews>
  );
}

export default Views;
