import React from 'react';
import styled from 'styled-components';

type Link = {
  children?: React.ReactNode;
  link?: string;
};

const StyledLink = styled.a`
  text-decoration: none;
  display: inline-block;
`;

export const Link: React.FC<Link> = ({ children = null, link = `` }: Link) => {
  if (!link) return children;
  return <StyledLink href={link}>{children}</StyledLink>;
};
