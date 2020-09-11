import React, { ReactNode } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { components, colors } from '../../styles';

type Heading = {
  children?: ReactNode;
  as?: `h1` | `h2` | `h3` | `h4` | `h5` | `h6` | `p`;
  size?: `xl` | `lg` | `md` | `sm` | `xs`;
  schema?: 'amimoto' | 'shifter' | 'galaxy';
};

export const headingFontSize = ({ size = `md` }: Heading) => {
  return components.heading.size[size];
};

export const Heading: React.FC<Heading> = ({
  size = `xs`,
  children,
  as = `h1`,
}: Heading) => {
  if (!children) return null;
  return (
    <StyledHeading as={as} size={size}>
      {children}
    </StyledHeading>
  );
};

const color = ({ schema = `galaxy` }: Heading) => {
  if (schema === `galaxy`)
    return theme('mode', {
      light: colors.galaxy.gray.g500,
      dark: colors.galaxy.gray.g300,
    });
  if (schema === `shifter`)
    return theme('mode', {
      light: colors.shifter.purple.p600,
      dark: colors.shifter.purple.p300,
    });
  if (schema === `amimoto`)
    return theme('mode', {
      light: colors.amimoto.blue.b600,
      dark: colors.amimoto.blue.b400,
    });

  return;
};

const StyledHeading = styled(Heading)<Heading>`
  margin: 0;
  padding: 0;
  font-size: ${headingFontSize};
  color: ${props => {
    const { schema } = props.theme;
    return color({ schema: schema });
  }};
  font-weight: ${components.heading.fontWeight};
  line-height: 1.5;
  position: relative;
`;
