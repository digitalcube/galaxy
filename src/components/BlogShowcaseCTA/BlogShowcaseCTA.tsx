import React from 'react';
import {
  Container,
  Grid,
  Col,
  Post,
  Image,
  Spacer,
  Button,
  Node,
  NodeList,
} from '../index';

type BlogShowcaseCTA = {
  nodes: Node[];
};

export const BlogShowcaseCTA: React.FC<BlogShowcaseCTA> = ({
  nodes,
}: BlogShowcaseCTA) => {
  console.log(nodes);
  return (
    <section>
      <Spacer size="md">
        <Container>
          <NodeList md="2" nodes={nodes} />
        </Container>
      </Spacer>
    </section>
  );
};
