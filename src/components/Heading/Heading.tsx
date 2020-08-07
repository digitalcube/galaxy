import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import theme from 'styled-theming';
import { colors } from './../../styles';

type Heading = {
  children?: string;
  color?: string;
};

const color = theme.variants('mode', 'schema', {
  galaxy: {
    light: colors.galaxy.gray.g700,
    dark: colors.galaxy.white,
  },
  shifter: {
    light: colors.shifter.purple.p500,
    dark: colors.shifter.purple.p100,
  },
  amimoto: {
    light: colors.galaxy.white,
    dark: colors.amimoto.gray.g300,
  },
});

const StyledHeading = styled.h3`
  display: inline-flex;
  margin-bottom: 0;
  color: ${color};
  padding-bottom: 0;
  position: relative;
`;

export const Heading: React.FC<Heading> = ({ children = `` }: Heading) => {
  const themeContext = useContext(ThemeContext);
  return (
    <StyledHeading schema={themeContext.schema} mode={themeContext.mode}>
      {children}
    </StyledHeading>
  );
};
