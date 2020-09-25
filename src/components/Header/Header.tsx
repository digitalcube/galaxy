import React, { FC, ReactNode } from 'react';
import { Flex } from 'theme-ui';
import { Container, Nav, Brand, Link, MobileNav } from '../index';

export type Header = {
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
          <Link href="/">{brand}</Link>
          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'space-around',
              ml: [null, null, null, null, 8],
            }}
          >
            <Nav
              kind="row"
              sx={{ display: ['none', null, null, null, 'flex'] }}
              navItems={nav[0]}
            />
          </Flex>
        </Flex>
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            ml: [null, null, null, null, 8],
          }}
        >
          <Nav
            kind="row"
            sx={{ display: ['none', null, null, null, 'flex'] }}
            navItems={nav[1]}
          />
          <MobileNav nodes={nav[2]} />
        </Flex>
      </Flex>
    </Container>
  );
};

Header.defaultProps = {
  brand: <Brand asset="shifter-mark" size="45" />,
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
