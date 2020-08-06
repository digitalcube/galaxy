import React from 'react';
import styled from 'styled-components';
// import { Image as GatsbyImage } from "gatsby-image"
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
    <Link link={link}>
      <StyledCardImage>{img}</StyledCardImage>
    </Link>
  );
};
