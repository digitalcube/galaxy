import React from 'react';
import {
  Spacer,
  ButtonGroup,
  Heading,
  Content,
  Container,
  NodeList,
  Node,
  Button,
} from '../index';

type SolutionsCTA = {
  title?: string;
  subtitle?: string;
  solutionsLinks?: Button[];
  solutionsShowcase?: Node[];
};

export const SolutionsCTA: React.FC<SolutionsCTA> = ({
  title,
  subtitle,
  solutionsLinks = [],
  solutionsShowcase,
}: SolutionsCTA) => {
  return (
    <section>
      <Container>
        <Spacer size="md">
          <Content>
            <Heading as="h2" size="lg">
              {title}
            </Heading>
            <Heading as="h2" size="sm">
              {subtitle}
            </Heading>
          </Content>
          <Spacer size="xs" />
          <ButtonGroup sm="9" buttons={solutionsLinks} />
        </Spacer>
      </Container>
      <Container>
        <NodeList sm="2" nodes={solutionsShowcase} />
      </Container>
    </section>
  );
};
