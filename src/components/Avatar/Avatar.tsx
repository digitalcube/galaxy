import React, { FC } from 'react';
import styled from 'styled-components';
import { Image } from '../index';

type Avatar = {
  img?: string;
  width?: string;
};

export const Avatar: FC<Avatar> = ({
  img = `https://www.getshifter.io/static/2d0c850166d901b54e69b68f4b3393cf/df94f/Samky52L_400x400.webp`,
  width,
}: Avatar) => {
  if (!img) return null;
  return (
    <StyledImage width={width}>
      <img src={img} alt="" />
    </StyledImage>
  );
};

const StyledImage = styled(Image)`
  img {
    border-radius: 50%;
    overflow: hidden;
  }
`;
