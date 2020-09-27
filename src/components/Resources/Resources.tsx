import React, { FC, ReactNode } from 'react';
import { Posts } from '../Posts';
import { Heading } from '../Heading';
import { Container } from '../Container';
import { Content } from '../Content';

export type Resources = {
  title?: string;
  children?: ReactNode;
  nodes?: object;
};

export const Resources: FC<Resources> = ({ title, nodes }: Resources) => {
  if (!nodes) return null;
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
      <Content>
        <Heading as="h3" size="5">
          {title}
        </Heading>
        <Posts nodes={nodes} />
      </Content>
    </Container>
  );
};

Resources.defaultProps = {
  title: `Eu in aliqua do ipsum.`,
  nodes: [
    {
      title: `Duis Adipisicing`,
      href: `#!`,
    },
    {
      title: `Consequat`,
      href: `#!`,
    },
    {
      title: `Et Tempor`,
      href: `#!`,
    },
    {
      title: `Cupidatat`,
      href: `#!`,
    },
  ],
};
