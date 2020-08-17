import React from 'react';
import styled from 'styled-components';

type Link = {
  children?: React.ReactNode;
  href?: string;
};

const StyledLink = styled.a`
  text-decoration: none;
  display: inline-block;
`;

export const Link: React.FC<Link> = ({ children = null, href = `` }: Link) => {
  if (!children) return null;
  return <StyledLink href={href}>{children}</StyledLink>;
};
