import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../lib/utils';
import { Container, Grid, Col, Post, Spacer } from '../index';

type Hero = {
  content: {
    title: string;
    img?: React.ReactNode;
    subtitle?: string;
    href?: string;
  };
};

const StyledHeroContent = styled(Col)`
  @media ${breakpoints({ size: `md` })} {
    transform: scale(1.25);
    transform-origin: right top;
    align-self: flex-end;
  }
`;

export const Hero: React.FC<Hero> = ({
  content: { img, title, subtitle, href },
}: Hero) => (
  <section>
    <Spacer size="md" />
    <Container>
      <Grid md="2">
        <Col>{img}</Col>
        <StyledHeroContent>
          <Post content={{ title, subtitle, img: null, href: href }} />
        </StyledHeroContent>
      </Grid>
    </Container>
    <Spacer size="lg" />
  </section>
);
