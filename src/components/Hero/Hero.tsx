import React, { ReactNode } from 'react';
import {
  Container,
  Grid,
  Col,
  Spacer,
  Heading,
  Button,
  Content,
  Animation,
} from '../index';

type Hero = {
  content?: {
    title?: string;
    img?: ReactNode;
    subtitle?: string;
    buttonLabel?: string;
    href?: string;
  };
};

export const Hero: React.FC<Hero> = ({
  content = {
    img: <Animation />,
    title: `The static site generator for WordPress`,
    subtitle: `Using Shifter, create or migrate WordPress sites in minutes that are scalable, secure from attacks, and 100% static with no security or caching plugins required.`,
    href: `https://go.getshifter.io/register/`,
    buttonLabel: `Start a free trial`,
  },
}: Hero) => {
  const { title, img, subtitle, href, buttonLabel } = content;
  return (
    <section>
      <Spacer size="md" />
      <Container>
        <Grid md="2">
          <Content>
            <Heading size="xl">{title}</Heading>
            <Heading size="md">{subtitle}</Heading>
            <Spacer size="sm">
              <Button href={href}>{buttonLabel}</Button>
            </Spacer>
          </Content>
          <Col>{img}</Col>
        </Grid>
      </Container>
      <Spacer size="lg" />
    </section>
  );
};
