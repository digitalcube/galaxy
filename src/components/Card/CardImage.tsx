import React from 'react';
import styled from 'styled-components';
import { components } from '../../styles';

export type CardImage = {
  content?: {
    img?: React.ReactNode;
  };
};

const StyledCardImage = styled.div`
  padding: 0 ${components.padding};
`;

export const CardImage: React.FC<CardImage> = ({
  content = { img: `` },
}: CardImage) => {
  const { img } = content;
  return <StyledCardImage>{img}</StyledCardImage>;
};
