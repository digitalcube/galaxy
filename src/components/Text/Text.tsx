import React, { ReactChild } from 'react';
import styled from 'styled-components';
import { components } from '../../styles';

type Text = {
  children?: ReactChild;
};

export const StyledText = styled.div<Text>`
  font-size: ${components.text.fontSize};
`;

export const Text: React.FC<Text> = ({ children }: Text) => {
  if (!children) return null;
  return <StyledText>{children}</StyledText>;
};
