import React from 'react';
import { Container, Spacer, Button, ButtonGroup } from '../index';

type SolutionsCTA = {
  buttons: Button[];
};

export const SolutionsCTA: React.FC<SolutionsCTA> = ({
  buttons,
}: SolutionsCTA) => {
  return (
    <section>
      <Spacer size="md">
        <Container>
          <ButtonGroup buttons={buttons} />
        </Container>
      </Spacer>
    </section>
  );
};
