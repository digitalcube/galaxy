import React, { FC } from 'react';
import { Container, Spacer, Heading, Content, Grid, Col, Nav } from '../index';

type Footer = {};

export const Footer: FC<Footer> = ({}: Footer) => {
  return (
    <Spacer as="section" size={3}>
      <Container>
        <Grid sm={12}>
          <Col width={4}>
            <Content>
              <Heading>Say hello</Heading>
            </Content>
          </Col>
          <Col width={2}>
            Company
            <Nav alignment="vertical" />
          </Col>
          <Col width={2}>Product</Col>
          <Col width={2}>Resources</Col>
          <Col width={2}>Legal</Col>
        </Grid>
        hello world
      </Container>
    </Spacer>
  );
};
