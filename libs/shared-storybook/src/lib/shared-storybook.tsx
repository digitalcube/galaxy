import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedStorybookProps {}

const StyledSharedStorybook = styled.div`
  color: pink;
`;

export function SharedStorybook(props: SharedStorybookProps) {
  return (
    <StyledSharedStorybook>
      <h1>Welcome to shared-storybook!</h1>
    </StyledSharedStorybook>
  );
}

export default SharedStorybook;
