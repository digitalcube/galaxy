import React from 'react';
import styled from 'styled-components';
import { color } from '../../styles/themes';

type Heading = {
  tag?: keyof JSX.IntrinsicElements;
  children?: string;
  color?: string;
};

const StyledHeading = styled.p`
  margin-bottom: 0;
  color: ${color};
  padding-bottom: 0;
  position: relative;
`;

export const Heading: React.FC<Heading> = ({ children = ``, tag = `h2` }) => {
  if (!children) return null;
  return <StyledHeading as={tag}>{children}</StyledHeading>;
};
