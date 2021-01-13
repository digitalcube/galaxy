import React from 'react';

import { Container } from './Container';

export default {
  component: Container,
  title: `Galaxy/Components/Container`,


};

export const Sizes = () => (
  <>
    <Container align="right" size="0">
      Voluptate nisi dolore exercitation amet mollit.
    </Container>
    <Container size="1">
      Voluptate nisi dolore exercitation amet mollit.
    </Container>
    <Container size="2">
      Voluptate nisi dolore exercitation amet mollit.
    </Container>
    <Container size="3">
      Voluptate nisi dolore exercitation amet mollit.
    </Container>
    <Container size="4">
      Voluptate nisi dolore exercitation amet mollit.
    </Container>
  </>
);
