import React, { FC, ReactNode } from 'react';
import { Posts } from '../Posts';
import { Heading, Container, Content } from '@digitalcube/galaxy-core';

export type ResourcesProps = {
  title?: string;
  nodes?: object;
};

export const Resources: FC<ResourcesProps> = ({ title, nodes }) => {
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
