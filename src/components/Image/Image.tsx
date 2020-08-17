import React from 'react';
import styled from 'styled-components';

type Image = {
  children?: React.ReactNode;
  padding?: string;
};

const StyledImage = styled.div`
  padding: ${props => props.padding || ``};
  img {
    width: 100%;
    height: auto;
  }
`;

export const Image: React.FC<Image> = ({
  children = null,
  padding = `2rem 0`,
}: Image) => {
  if (!children) return null;
  return <StyledImage padding={padding}>{children}</StyledImage>;
};
