import React, { FC, ReactNode } from 'react';
import { NavLink } from '../NavLink';
import { Nav } from '../Nav';
import { Heading } from '../Heading';
import { Container } from '../Container';
import { Content } from '../Content';

export type QuickLinks = {
  title?: string;
  children?: ReactNode;
  nav?: NavLink[];
};

export const QuickLinks: FC<QuickLinks> = ({ title, nav }: QuickLinks) => {
  return (
    <Container
      as="section"
      size="4"
      sx={{
        py: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Content align="center">
        <Heading as="h3" size="5">
          {title}
        </Heading>
        <Nav navItems={nav} />
      </Content>
    </Container>
  );
};

QuickLinks.defaultProps = {
  title: `Esse excepteur`,
  nav: [
    {
      label: `Duis Adipisicing`,
      href: `#!`,
      kind: `primary`,
    },
    {
      label: `Consequat`,
      href: `#!`,
      kind: `primary`,
    },
    {
      label: `Et Tempor`,
      href: `#!`,
      kind: `primary`,
    },
    {
      label: `Cupidatat`,
      href: `#!`,
      kind: `primary`,
    },
  ],
};
