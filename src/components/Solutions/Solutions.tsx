import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import {
  Container,
  Spacer,
  Heading,
  Content,
  Grid,
  Image,
  Card,
  Button,
  Text,
} from '../index';

type Solutions = {
  solution?: {
    title?: string;
    subtitle?: string;
    buttonLabel?: string;
    href?: string;
  };
  showcase?: {
    title?: string;
    img?: ReactNode;
    buttonLabel?: string;
    href?: string;
  };
};

export const Showcase: FC<Solutions> = ({
  showcase = {
    title: `One of the most exciting contemporary design thinkers calls Shifter home.`,
    buttonLabel: `View showcase`,
    href: `#`,
    img: (
      <img
        src="https://www.getshifter.io/static/3f1aa2e6f5aa25eb64f6ddf4b7e582b9/cd6dd/logo-howtospeakmachine.webp"
        alt="Internet Society"
      />
    ),
  },
}: Solutions) => {
  const { title, buttonLabel, img, href } = showcase;
  return (
    <Card
      content={{
        footer: (
          <Content align="center">
            <Text>{title}</Text>
            <Button href={href}>{buttonLabel}</Button>
          </Content>
        ),
      }}
    >
      <Content align="center">
        <StyledLogo>{img}</StyledLogo>
      </Content>
    </Card>
  );
};

export const Solution: FC<Solutions> = ({
  solution = {
    title: `Designers`,
    subtitle: `Use page builders and themes that will get your site noticed.`,
    buttonLabel: `Solutions for designers`,
    href: `#`,
  },
}: Solutions) => {
  const { title, subtitle, buttonLabel, href } = solution;
  return (
    <Card
      content={{
        footer: (
          <Content>
            <Heading as="p" size="sm">
              {subtitle}
            </Heading>
            <Button href={href}>{buttonLabel}</Button>
          </Content>
        ),
      }}
    >
      <Heading as="h2" size="lg">
        {title}
      </Heading>
    </Card>
  );
};

export const Solutions: FC<Solutions> = ({
  solution = {
    title: `Designers`,
    subtitle: `Use page builders and themes that will get your site noticed.`,
    buttonLabel: `Solutions for designers`,
    href: `#`,
  },
  showcase = {
    title: `One of the most exciting contemporary design thinkers calls Shifter home.`,
    buttonLabel: `View showcase`,
    href: `#`,
    img: (
      <img
        src="https://www.getshifter.io/static/3f1aa2e6f5aa25eb64f6ddf4b7e582b9/cd6dd/logo-howtospeakmachine.webp"
        alt="Internet Society"
      />
    ),
  },
}: Solutions) => {
  return (
    <section>
      <Spacer size="md">
        <Container>
          <Grid md="2">
            <Solution solution={solution} />
            <ThemeProvider theme={{ mode: `dark` }}>
              <Showcase showcase={showcase} />
            </ThemeProvider>
          </Grid>
        </Container>
      </Spacer>
    </section>
  );
};

const StyledLogo = styled(Image)`
  width: 25%;
  margin: 0 auto;
`;
