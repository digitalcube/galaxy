import React from 'react';
import styled from 'styled-components';
import { components, colors } from './../../styles';

type Heading = {
  children?: string;
  color?: string;
};

const StyledHeading = styled.h3`
  display: inline-flex;
  margin-bottom: ${components.padding};
  color: ${props => props.color || colors.shifter.magenta.primary};
  padding-bottom: ${components.padding};
  position: relative;
`;

export const Heading: React.FC<Heading> = ({
  children = ``,
  color = ``,
}: Heading) => <StyledHeading color={color}>{children}</StyledHeading>;
