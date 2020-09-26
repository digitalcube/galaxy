import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Container,
  Heading,
  Content,
  Grid,
  Image,
  Card,
  Link,
  Text,
} from '../index';

export type Solutions = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
  solution?: Solution;
  showcase?: Showcase;
};

type Solution = {
  title?: string;
  subtitle?: string;
  href?: string;
  buttonLabel?: string;
};

type Showcase = {
  title?: string;
  subtitle?: string;
  img?: string;
  buttonLabel?: string;
  href?: string;
};

const Showcase: FC<Showcase> = ({
  title,
  buttonLabel,
  href,
  img,
}: Showcase) => {
  return (
    <Card
      variant="primary"
      sx={{
        bg: 'purple.p600',
        color: 'white',
      }}
      footer={
        <Content align="center">
          <Text>{title}</Text>
          <Link kind="white" href={href}>
            <Heading as="p" size="1">
              {buttonLabel}
            </Heading>
          </Link>
        </Content>
      }
    >
      <Content align="center">
        <Image
          img={img}
          sx={{
            mt: 2,
            width: ['50%', null, null, '25%'],
          }}
        />
      </Content>
    </Card>
  );
};

const Solution: FC<Solution> = ({
  title,
  subtitle,
  buttonLabel,
  href,
}: Solution) => {
  return (
    <Card
      variant="primary"
      footer={
        <Content>
          <Heading as="p" size="4">
            {subtitle}
          </Heading>
          <Link kind="primary" href={href}>
            {buttonLabel}
          </Link>
        </Content>
      }
    >
      <Heading as="h2" size="5">
        {title}
      </Heading>
    </Card>
  );
};

export const Solutions: FC<Solutions> = ({
  title,
  subtitle,
  solution,
  showcase,
}: Solutions) => {
  return (
    <Container
      as="section"
      size="4"
      sx={{
        py: 7,
      }}
    >
      <Container>
        <Container
          size="1"
          sx={{
            mb: 5,
          }}
        >
          <Content align="center">
            <Heading size="6">
              <b>{title}</b>
            </Heading>
            <Heading as="p" size="3">
              {subtitle}
            </Heading>
          </Content>
        </Container>
        <Grid columns={[1, null, null, null, 2]}>
          <Solution {...solution} />
          <ThemeProvider theme={{ colorMode: `dark` }}>
            <Showcase {...showcase} />
          </ThemeProvider>
        </Grid>
      </Container>
    </Container>
  );
};

Solutions.defaultProps = {
  title: `Esse mollit aliquip occaecat`,
  subtitle: `Nostrud nostrud elit cillum id culpa ea ex irure deserunt officia dolore cillum est.`,
};

Solution.defaultProps = {
  title: `Designers`,
  subtitle: `Use page builders and themes that will get your site noticed.`,
  buttonLabel: `Solutions for designers`,
  href: `#`,
};

Showcase.defaultProps = {
  title: `Ea consequat esse non ullamco occaecat.`,
  buttonLabel: `Excepteur adipisicing`,
  href: `#`,
  img: `https://www.getshifter.io/static/3f1aa2e6f5aa25eb64f6ddf4b7e582b9/cd6dd/logo-howtospeakmachine.webp`,
};
