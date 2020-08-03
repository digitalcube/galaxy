import React from 'react';
import styled from 'styled-components';
import { Image } from './../Image';

export type CardImage = {
  content?: {
    img?: React.ReactNode;
  };
};

const StyledCardImage = styled.div`
  overflow: hidden;
`;

export const CardImage: React.FC<CardImage> = ({
  content = { img: null },
}: CardImage) => {
  const { img } = content;
  return (
    <StyledCardImage>
      <Image>{img}</Image>
    </StyledCardImage>
  );
};
