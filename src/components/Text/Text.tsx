import React, { ReactChild } from 'react';
import styled from 'styled-components';

type Text = {
  children?: ReactChild;
};

export const StyledText = styled.div<Text>``;

export const Text: React.FC<Text> = ({ children }: Text) => {
  if (!children) return null;
  return <StyledText>{children}</StyledText>;
};
