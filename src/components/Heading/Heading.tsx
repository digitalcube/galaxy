import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { color } from '../../styles/themes';

type Heading = {
  tag?: keyof JSX.IntrinsicElements;
  children?: string;
  color?: string;
};

const StyledHeading = styled.div`
  display: inline-flex;
  margin-bottom: 0;
  color: ${color};
  padding-bottom: 0;
  position: relative;
`;

export const Heading: React.FC<Heading> = ({ children = ``, tag = `h2` }) => {
  const themeContext = useContext(ThemeContext);
  if (!children) return null;
  return (
    <StyledHeading as={tag} schema={themeContext.schema}>
      {children}
    </StyledHeading>
  );
};
