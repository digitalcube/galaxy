import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
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
  Link,
  Tabs,
} from '../index';

type Solutions = {
  title?: string;
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

const Showcase: FC<Solutions> = ({
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
      footer={
        <Content align="center">
          <Text>{title}</Text>
          <Link href={href}>
            <Heading as="p" size="xs">
              {buttonLabel}
            </Heading>
          </Link>
        </Content>
      }
    >
      {/* <Spacer size={1} /> */}
      <Content align="center">
        <Spacer size={1} />
        <Image width="30%">{img}</Image>
      </Content>
    </Card>
  );
};

const Solution: FC<Solutions> = ({
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
      footer={
        <Content>
          <Heading as="p" size="sm">
            {subtitle}
          </Heading>
          <Button href={href}>{buttonLabel}</Button>
        </Content>
      }
    >
      <Heading as="h2" size="lg">
        {title}
      </Heading>
    </Card>
  );
};

export const Solutions: FC<Solutions> = ({
  title = `Discover how Shifter empowers every type of business and industry`,
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
      <Spacer size={3}>
        <Container>
          <Container size="md">
            <Content align="center">
              <Heading size="6">
                <b>{title}</b>
              </Heading>
            </Content>
          </Container>
          <Tabs align="center" />
          <Spacer size={1.5} />
          <Grid columns={[1, null, null, null, 2]}>
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
