import React, { FC } from 'react';
import {
  Container,
  Spacer,
  Heading,
  Content,
  Image,
  Node,
  Slider,
} from '../index';

type Logos = {
  nodes?: Node[];
  title?: string;
};

export const Logos: FC<Logos> = ({ title, nodes }: Logos) => {
  return (
    <Spacer as="section" size={3}>
      <Container size="1">
        <Content align="center">
          <Heading size="6">
            <b>{title}</b>
          </Heading>
        </Content>
      </Container>
      <Spacer size={3} />
      <Slider nodes={nodes} />
    </Spacer>
  );
};

Logos.defaultProps = {
  title: `Some of the world's leading businesses, thinkers, and creatives call Shifter home. `,
};
