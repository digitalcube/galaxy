import React, { FC, ReactNode } from 'react';
import { Flex } from 'theme-ui';
import { Container, Nav, Brand, Link } from '@galaxy/core';
import { MobileNav } from '../MobileNav';

export type HeaderProps = {
  brand?: ReactNode;
  href?: String;
  nav?: any;
  length?: number;
  sx?: object;
};

export const Header: FC<HeaderProps> = ({ brand, href, nav, sx }) => {
  return (
    <Container
      sx={{
        pt: 3,
        pb: 6,
        px: '5%',
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
          <Link
            sx={{
              display: 'flex',
              alignSelf: 'center',
            }}
            href={`${href}`}
          >
            {brand}
          </Link>
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
          <MobileNav
            sx={{ display: [null, null, null, null, 'none'] }}
            brand={brand}
            nodes={nav[2]}
          />
        </Flex>
      </Flex>
    </Container>
  );
};
