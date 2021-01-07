import React, { ReactNode } from 'react';
import { Heading, Container, Grid, Content } from '@galaxy/core';
import { Posts } from '../Posts';

export type BenefitsProps = {
  title?: string;
  subtitle?: ReactNode;
  img?: ReactNode;
  nodes?: any;
};

export const Benefits = ({ title, subtitle, img, nodes }: BenefitsProps) => {
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
        align="left"
        sx={{
          mb: 5,
        }}
      >
        <Content>
          <Heading as="h2" size="8">
            <b>{title}</b>
          </Heading>
          <Heading as="h3" size="3">
            {subtitle}
          </Heading>
        </Content>
      </Container>
      <Container>
        <Grid columns={[1, null, null, '2fr 1fr', 2]}>
          <Posts
            variant="basic"
            columns={[1, null, null, null, 2]}
            nodes={nodes}
          />
          {img}
        </Grid>
      </Container>
    </Container>
  );
};
