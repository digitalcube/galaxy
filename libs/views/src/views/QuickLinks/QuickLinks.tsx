import React, { FC, ReactNode } from 'react';
import { NavLinkProps, Nav, Heading, Container, Content } from '@digitalcube/galaxy-core';

export type QuickLinksProps = {
  title?: string;
  children?: ReactNode;
  nav?: NavLinkProps[];
};

export const QuickLinks: FC<QuickLinksProps> = ({ title, nav }) => {
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
