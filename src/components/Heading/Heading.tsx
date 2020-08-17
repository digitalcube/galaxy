import React from 'react';
import styled from 'styled-components';
import { color } from '../../styles/themes';
import { type } from '../../styles';

type Heading = {
  tag?: keyof JSX.IntrinsicElements;
  children?: string;
  color?: string;
  size?: string;
};

export const headingFontSize = ({
  size = type.heading.size[`default`],
}: Heading) => {
  return type.heading.size[size];
};

const StyledHeading = styled.p`
  margin-bottom: 0;
  font-size: ${props => props.size};
  color: ${color};
  padding-bottom: 0;
  position: relative;
`;

export const Heading: React.FC<Heading> = ({
  children = ``,
  tag = `h2`,
  size = type.heading.size[`default`],
}) => {
  if (!children) return null;
  return (
    <StyledHeading size={headingFontSize(size)} as={tag}>
      {children}
    </StyledHeading>
  );
};
