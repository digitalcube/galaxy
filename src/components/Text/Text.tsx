import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';
import { components } from '../../styles';

type Text = {
  children?: ReactNode;
};

export const StyledText = styled.div<Text>`
  font-size: ${components.text.fontSize};
`;

export const Text: FC<Text> = ({ children }: Text) => {
  if (!children) return null;
  return <StyledText>{children}</StyledText>;
};
