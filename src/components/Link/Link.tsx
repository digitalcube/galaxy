import React, { FC, ReactNode } from 'react';
import { Link as ThemeUILink } from 'theme-ui';

type Link = {
  href?: string;
  children?: ReactNode;
};

export const Link: FC<Link> = ({ href, children }: Link) => {
  return (
    <ThemeUILink variant="primary" href={href}>
      {children}
    </ThemeUILink>
  );
};

// import React from 'react';
// import styled from 'styled-components';
// import theme from 'styled-theming';
// import { Galaxy } from '../index';
// import { colors } from '../../styles';

// type Link = {
//   children?: React.ReactNode;
//   href?: string;
// };

// const color = ({ schema = `galaxy` }: Galaxy) => {
//   if (schema === `galaxy`)
//     return theme('mode', {
//       light: colors.galaxy.gray.g500,
//       dark: colors.galaxy.gray.g300,
//     });
//   if (schema === `shifter`)
//     return theme('mode', {
//       light: colors.shifter.purple.p600,
//       dark: colors.shifter.purple.p300,
//     });
//   if (schema === `amimoto`)
//     return theme('mode', {
//       light: colors.amimoto.blue.b600,
//       dark: colors.amimoto.blue.b400,
//     });

//   return;
// };

// const StyledLink = styled.a`
//   text-decoration: none;
//   display: inline-block;

//   * {
//     color: ${props => {
//       const { schema } = props.theme;
//       return color({ schema: schema });
//     }};
//   }
// `;

// export const Link: React.FC<Link> = ({ children = null, href = `` }: Link) => {
//   if (!children) return null;
//   return <StyledLink href={href}>{children}</StyledLink>;
// };
