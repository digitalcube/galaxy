import React, { FC } from 'react';
import { Heading, Link, Container, Content, Grid } from '@digitalcube/galaxy-core';
import { Post } from '../Post';
import { Posts } from '../Posts';

export type ShowcaseProps = {
  title?: string;
  subtitle?: string;
  href?: string;
  buttonLabel?: string;
  nodes?: Post[];
};

export const Showcase: FC<ShowcaseProps> = ({
  title = 'Showcase',
  subtitle,
  buttonLabel,
  href,
  nodes,
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
      <Grid columns={[1, null, null, null, null, '1fr 2fr']}>
        <Content>
          <Heading as="h2" size="6">
            <b>{title}</b>
          </Heading>
          <Heading as="h2" size="4">
            {subtitle}
          </Heading>
          <Link kind="primary" href={href}>
            {buttonLabel}
          </Link>
        </Content>
        <Posts columns={[1, null, null, null, 2]} nodes={nodes} />
      </Grid>
    </Container>
  );
};
