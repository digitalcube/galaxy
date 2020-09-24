import React, { FC, ReactNode } from 'react';
import { Flex } from 'theme-ui';
import { Container, Nav } from '../index';

type Header = {
  brand?: ReactNode;
  nav?: any;
  length?: number;
  sx?: object;
};

export const Header: FC<Header> = ({ brand, nav, sx }: Header) => {
  return (
    <Container
      sx={{
        pt: 3,
        pb: 6,
        ...sx,
      }}
      as="header"
      size="4"
    >
      <Flex
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <Flex>
          {brand}
          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'space-around',
              ml: 8,
            }}
          >
            <Nav kind="row" navItems={nav[0]} />
          </Flex>
        </Flex>
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            ml: 8,
          }}
        >
          <Nav kind="row" navItems={nav[1]} />
        </Flex>
      </Flex>
    </Container>
  );
};

Header.defaultProps = {
  nav: [
    [
      {
        label: `Qui sint`,
        href: `#!`,
      },
      {
        label: `Cupidatat`,
        href: `#!`,
      },
      {
        label: `Excepteur`,
        href: `#!`,
      },
      {
        label: `Laborum`,
        href: `#!`,
      },
      {
        label: `Pariatur`,
        href: `#!`,
      },
    ],
    [
      {
        label: `Login`,
        href: `#!`,
      },
      {
        label: `Sign Up`,
        href: `#!`,
        kind: `primary`,
      },
    ],
  ],
};

// import React, { FC, ReactNode } from 'react';
// import styled from 'styled-components';
// import theme from 'styled-theming';
// import { Container, Spacer, NavItem, Menu, Nav } from '../index';
// import { useToggle } from './useToggle';
// import { breakpoints } from '../../lib/utils';
// import { components, colors } from './../../styles';
// import { useColorMode } from 'theme-ui';

// const ColorMode = () => {
//   const [colorMode, setColorMode] = useColorMode();
//   return (
//     <header>
//       <button
//         onClick={e => {
//           setColorMode(colorMode === 'default' ? 'dark' : 'default');
//         }}
//       >
//         Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
//       </button>
//     </header>
//   );
// };

// type Header = {
//   logo?: ReactNode;
//   navItems?: NavItem[];
//   hover?: boolean;
//   toggle?: boolean;
//   toggleNav?: any;
// };

// const color = ({ schema = `galaxy`, hover = false }: NavItem) => {
//   // Hover
//   if (hover === true) {
//     if (schema === `galaxy`)
//       return theme('mode', {
//         light: colors.galaxy.gray.g100,
//         dark: colors.galaxy.gray.g500,
//       });
//     if (schema === `shifter`)
//       return theme('mode', {
//         light: colors.shifter.purple.primary,
//         dark: colors.amimoto.blue.primary,
//       });
//     if (schema === `amimoto`)
//       return theme('mode', {
//         light: colors.amimoto.blue.b500,
//         dark: colors.amimoto.blue.primary,
//       });
//   }

//   // Solid
//   if (schema === `galaxy`)
//     return theme('mode', {
//       light: colors.galaxy.gray.g600,
//       dark: colors.galaxy.white,
//     });
//   if (schema === `shifter`)
//     return theme('mode', {
//       light: colors.shifter.purple.p500,
//       dark: colors.shifter.purple.p400,
//     });
//   if (schema === `amimoto`)
//     return theme('mode', {
//       light: colors.amimoto.blue.b500,
//       dark: colors.amimoto.blue.primary,
//     });

//   return;
// };

// const backgroundColor = ({ schema = `galaxy` }: NavItem) => {
//   if (schema === `galaxy`)
//     return theme('mode', {
//       light: colors.galaxy.black,
//       dark: colors.galaxy.white,
//     });
//   if (schema === `shifter`)
//     return theme('mode', {
//       light: colors.shifter.background.light,
//       dark: colors.amimoto.blue.primary,
//     });
//   if (schema === `amimoto`)
//     return theme('mode', {
//       light: colors.amimoto.blue.b500,
//       dark: colors.amimoto.blue.primary,
//     });

//   return;
// };

// const StyledContainer = styled(Container)<Header>`
//   position: initial;
// `;

// const StyledBurger = styled.button<Header>`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: ${components.nav.link.fontSize};
//   height: ${components.nav.link.fontSize};
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   margin: ${components.nav.link.padding};

//   @media ${breakpoints({ size: `md` })} {
//     display: none;
//   }

//   &:focus {
//     outline: none;
//   }

//   div {
//     width: ${components.nav.link.fontSize};
//     height: 0.1875rem;
//     background-color: ${props => {
//       const { schema } = props.theme;
//       return ({ toggle }) =>
//         toggle
//           ? color({ schema: schema, hover: true })
//           : color({ schema: schema });
//     }};
//     border-radius: ${components.borderRadius};
//     transition: ${components.transition.ease.fast};
//     position: relative;
//     transform-origin: 1px;

//     :first-child {
//       transform: ${({ toggle }) => (toggle ? 'rotate(45deg)' : 'rotate(0)')};
//     }

//     :nth-child(2) {
//       opacity: ${({ toggle }) => (toggle ? '0' : '1')};
//       transform: ${({ toggle }) =>
//         toggle ? 'translateX(20px)' : 'translateX(0)'};
//     }

//     :nth-child(3) {
//       transform: ${({ toggle }) => (toggle ? 'rotate(-45deg)' : 'rotate(0)')};
//     }
//   }
// `;

// const Burger = ({ toggle, toggleNav }: Header) => {
//   return (
//     <StyledBurger toggle={toggle} onClick={() => toggleNav(!toggle)}>
//       <div />
//       <div />
//       <div />
//     </StyledBurger>
//   );
// };

// export const Header: FC<Header> = ({
//   logo = <Brand asset="shifter-mark" size={`45`} />,
//   navItems = [
//     {
//       label: `Features`,
//       href: `#!`,
//     },
//     {
//       label: `Blog`,
//       href: `#!`,
//     },
//     {
//       label: `Solutions`,
//       href: `#!`,
//     },
//     {
//       label: `Pricing`,
//       href: `#!`,
//     },
//     {
//       label: `Showcase`,
//       href: `#!`,
//     },
//   ],
// }: Header) => {
//   const [toggle, toggleNav] = useToggle();

//   return (
//     <Spacer as="header" size={2}>
//       <StyledContainer>
//         <ColorMode />
//         <h1>
//           <a href="/">{logo}</a>
//         </h1>
//         <Burger toggle={toggle} toggleNav={toggleNav} />
//         <Nav navItems={navItems} />
//       </StyledContainer>
//     </Spacer>
//   );
// };
