import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { color } from './../../styles/themes';

type Heading = {
  children?: string;
  color?: string;
};

const StyledHeading = styled.h3`
  display: inline-flex;
  margin-bottom: 0;
  color: ${color};
  padding-bottom: 0;
  position: relative;
`;

export const Heading: React.FC<Heading> = ({ children = `` }: Heading) => {
  const themeContext = useContext(ThemeContext);
  return <StyledHeading schema={themeContext.schema}>{children}</StyledHeading>;
};
