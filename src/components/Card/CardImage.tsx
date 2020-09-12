import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

type CardImage = {
  children: ReactNode;
};

export const CardImage: FC<CardImage> = ({ children }: CardImage) => {
  if (!children) return null;
  return <StyledCardImage>{children}</StyledCardImage>;
};

export const StyledCardImage = styled.div`
  overflow: hidden;
`;
