import React from 'react';
import styled from 'styled-components';
import { Image } from '../../../galaxy';
import { Link } from '../Link';

export type CardImage = {
  content?: {
    img?: React.ReactNode;
    link?: string;
  };
};

const StyledCardImage = styled.div`
  overflow: hidden;
`;

export const CardImage: React.FC<CardImage> = ({
  content = { img: null, link: `` },
}: CardImage) => {
  const { img, link } = content;
  if (!img) return null;
  return (
    <Link href={link}>
      <StyledCardImage>
        <Image padding="2rem 0 0">{img}</Image>
      </StyledCardImage>
    </Link>
  );
};
