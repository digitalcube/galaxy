import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Image = {
  children: ReactNode;
  width?: string;
};

export const Image: React.FC<Image> = ({ width, children }: Image) => {
  if (!children) return null;
  return <StyledImage width={width}>{children}</StyledImage>;
};

export const StyledImage = styled(Image)`
  img {
    width: ${props => props.width || `100%`};
    height: auto;
    vertical-align: middle;
  }
`;
