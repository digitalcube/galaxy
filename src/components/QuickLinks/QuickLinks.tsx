import React, { FC, ReactNode } from 'react';
import { NavItem, Nav, Heading, Container, Spacer, Content } from '../index';

const defaultProps = {
  nodes: [
    {
      label: `Resources`,
    },
    {
      label: `Frequently Asked Questions`,
    },
    {
      label: `Contact Us`,
    },
    {
      label: `Glossary`,
    },
  ],
};

export type QuickLinks = {
  title?: string;
  children?: ReactNode;
  nodes?: NavItem[];
};

export const QuickLinks: FC<QuickLinks> = ({
  title = `Quick Links`,
  nodes = defaultProps.nodes,
}: QuickLinks) => {
  return (
    <Spacer size={3}>
      <Container>
        <Content align="center">
          <Heading size="md">{title}</Heading>
          <Nav align="center" nodes={nodes} />
        </Content>
      </Container>
    </Spacer>
  );
};
