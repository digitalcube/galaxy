import React, { FC } from 'react';
import { Heading, Link, Shape, Container, Content } from '@digitalcube/galaxy-core';
import { Posts, PostsProps } from '../Posts';

export type FeaturesProps = {
  title?: string;
  subtitle?: string;
  href?: string;
  buttonLabel?: string;
  nodes?: PostsProps['nodes'];
  kind?: string;
  columns?: any;
};

export const Features: FC<FeaturesProps> = ({
  title,
  subtitle,
  nodes,
  href,
  buttonLabel,
  kind,
  columns,
}) => {
  return (
    <Container
      as="section"
      size="4"
      sx={{
        py: 7,
        px: '5%',
      }}
    >
      <Container
        size="1"
        sx={{
          mb: 5,
        }}
      >
        <Shape shape="triangle">
          <Content align="center">
            <Heading size="6">
              <b>{title}</b>
            </Heading>
            <Heading as="p" size="3">
              {subtitle}
            </Heading>
          </Content>
        </Shape>
      </Container>
      <Container>
        <Posts
          variant={kind}
          columns={columns}
          sx={{
            textAlign: 'center',
          }}
          nodes={nodes}
        />
        <Content
          align="center"
          sx={{
            mt: 5,
          }}
        >
          <Link kind="primary" href={href}>
            {buttonLabel}
          </Link>
        </Content>
      </Container>
    </Container>
  );
};
