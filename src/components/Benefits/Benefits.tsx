import React, { ReactNode } from 'react';
import { Heading } from '../Heading';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Content } from '../Content';
import { Animation } from '../Animation';
import { Posts } from '../Posts';

export type Benefits = {
  title?: string;
  subtitle?: ReactNode;
  img?: ReactNode;
  nodes?: any;
};

export const Benefits = ({ title, subtitle, img, nodes }: Benefits) => {
  return (
    <Container
      as="section"
      size="4"
      sx={{
        py: 7,
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

Benefits.defaultProps = {
  title: `Id Lorem aliquip`,
  subtitle: `Commodo culpa deserunt id magna esse. Et dolore elit nulla veniam in anim ut est.`,
  img: <Animation animation="singleClick" />,
  nodes: [
    {
      title: `Easy installation`,
      excerpt: `Create a new WordPress site right from the Shifter Dashboard, no uploading required.`,
    },
    {
      title: `Collaborate`,
      excerpt: `Work with others and share access to your Shifter account using our team features.`,
    },
    {
      title: `Maintenance-free`,
      excerpt: `Shifter manages WordPress core so you're always up to date and plugins never vulnerable.`,
    },
    {
      title: `No coding required`,
      excerpt: `Easy for non-developers to get started using WordPress themes or page builders.`,
    },
  ],
};
