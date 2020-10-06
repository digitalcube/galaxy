import React, { FC } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ThemeProvider } from 'theme-ui';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { Content } from '../../components/Content';
import { Grid } from '../../components/Grid';
import { Image } from '../../components/Image';
import { Card } from '../Card';
import { Link } from '../../components/Link';
import { Text } from '../../components/Text';
import { Box } from '../../components/Box';

export type Solutions = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
  solution?: Solution;
  showcase?: Showcase;
  nodes?: any;
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
        pt: 2,
      }}
      footer={
        <Content align="center">
          <Text>{title}</Text>
          <Link kind="primary" href={href}>
            {buttonLabel}
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
      sx={{
        bg: 'purple.p600',
      }}
      footer={
        <Link kind="white" href={href} sx={{ mt: 'auto' }}>
          {buttonLabel}
        </Link>
      }
    >
      <Content
        sx={{
          color: 'white',
        }}
      >
        <Heading
          as="h2"
          size="5"
          sx={{
            color: 'white',
            display: 'flex',
            flexGrow: 1,
          }}
        >
          {title}
        </Heading>
        <Heading
          as="p"
          size="4"
          sx={{
            color: 'white',
          }}
        >
          {subtitle}
        </Heading>
      </Content>
    </Card>
  );
};

export const Solutions: FC<Solutions> = ({ nodes }: Solutions) => {
  if (!nodes) return null;

  const solutionsNav = nodes.map((node: Solutions) => {
    if (!node) return null;
    const label = node.solution?.title;

    return (
      <Tab>
        <Link kind="ghost">{label}</Link>
      </Tab>
    );
  });

  const solutions = nodes.map((node: Solutions) => {
    const { solution, showcase } = node;
    return (
      <TabPanel>
        <Grid columns={[1, null, null, null, 2]}>
          <ThemeProvider theme={{ colorMode: `dark` }}>
            <Solution {...solution} />
          </ThemeProvider>
          <Showcase {...showcase} />
        </Grid>
      </TabPanel>
    );
  });

  return (
    <Container
      size="4"
      sx={{
        py: 7,
        px: '5%',
      }}
    >
      <Tabs>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            ul: {
              // display: 'block',
              overflow: 'scroll',
              whiteSpace: 'nowrap',
              display: 'flex',
              listStyle: 'none',
              mt: 0,
              mb: 4,
              p: 0,
            },
          }}
        >
          <TabList>{solutionsNav}</TabList>
        </Box>
        {solutions}
      </Tabs>
    </Container>
  );
};

Solutions.defaultProps = {
  nodes: [
    {
      solution: {
        title: `Education`,
        subtitle: `Cupidatat pariatur ea irure ea laborum.`,
        href: `#!`,
        buttonLabel: `Veniam qui`,
      },
      showcase: {
        title: `Eiusmod laborum`,
        buttonLabel: `Culpa amet`,
        href: `#!`,
        img: `logo-howtospeakmachine.webp`,
      },
    },
    {
      solution: {
        title: `Designers`,
        subtitle: `Lorem commodo amet dolor quis aliquip aliqua esse non et Lorem.`,
        href: `#!`,
        buttonLabel: `Veniam qui`,
      },
      showcase: {
        title: `Eiusmod laborum`,
        buttonLabel: `Culpa amet`,
        href: `#!`,
        img: `logo-howtospeakmachine.webp`,
      },
    },
    {
      solution: {
        title: `Designers`,
        subtitle: `Lorem commodo amet dolor quis aliquip aliqua esse non et Lorem.`,
        href: `#!`,
        buttonLabel: `Veniam qui`,
      },
      showcase: {
        title: `Eiusmod laborum`,
        buttonLabel: `Culpa amet`,
        href: `#!`,
        img: `logo-howtospeakmachine.webp`,
      },
    },
    {
      solution: {
        title: `Designers`,
        subtitle: `Lorem commodo amet dolor quis aliquip aliqua esse non et Lorem.`,
        href: `#!`,
        buttonLabel: `Veniam qui`,
      },
      showcase: {
        title: `Eiusmod laborum`,
        buttonLabel: `Culpa amet`,
        href: `#!`,
        img: `logo-howtospeakmachine.webp`,
      },
    },
    {
      solution: {
        title: `Designers`,
        subtitle: `Lorem commodo amet dolor quis aliquip aliqua esse non et Lorem.`,
        href: `#!`,
        buttonLabel: `Veniam qui`,
      },
      showcase: {
        title: `Eiusmod laborum`,
        buttonLabel: `Culpa amet`,
        href: `#!`,
        img: `logo-howtospeakmachine.webp`,
      },
    },
    {
      solution: {
        title: `Designers`,
        subtitle: `Lorem commodo amet dolor quis aliquip aliqua esse non et Lorem.`,
        href: `#!`,
        buttonLabel: `Veniam qui`,
      },
      showcase: {
        title: `Eiusmod laborum`,
        buttonLabel: `Culpa amet`,
        href: `#!`,
        img: `logo-howtospeakmachine.webp`,
      },
    },
    {
      solution: {
        title: `Designers`,
        subtitle: `Lorem commodo amet dolor quis aliquip aliqua esse non et Lorem.`,
        href: `#!`,
        buttonLabel: `Veniam qui`,
      },
      showcase: {
        title: `Eiusmod laborum`,
        buttonLabel: `Culpa amet`,
        href: `#!`,
        img: `logo-howtospeakmachine.webp`,
      },
    },
  ],
};
