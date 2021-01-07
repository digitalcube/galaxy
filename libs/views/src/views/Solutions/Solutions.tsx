import React, { FC } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ThemeProvider } from 'theme-ui';
import {
  Container,
  Heading,
  Content,
  Grid,
  Image,
  Link,
  Text,
  Box,
} from '@galaxy/core';
import { Card } from '../Card';

export type SolutionsProps = {
  nodes?: SolutionNodes
}

export type SolutionNodes = Array<SolutionNode>
export type SolutionNode = BaseItem & {
  solution?: BaseItem;
  showcase?: ShowcaseItem;
}
type BaseItem = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
}
type ShowcaseItem = BaseItem & {
  img?: string;
}

const Showcase: FC<ShowcaseItem> = ({
  title,
  img,
}) => {
  return (
    <Card
      variant="primary"
      sx={{
        justifyContent: 'center',
        flexDirection: 'column',
        display: 'flex',
      }}
    >
      <Content align="center">
        <Image
          img={img}
          sx={{
            mt: 2,
            width: ['50%', null, null, 'auto'],
          }}
        />
        <Text>{title}</Text>
      </Content>
    </Card>
  );
};

const Solution: FC<SolutionNode> = ({
  title,
  subtitle,
  buttonLabel,
  href,
}) => {
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

export const Solutions: FC<SolutionsProps> = ({ nodes }) => {
  if (!nodes) return null;

  const solutionsNav = nodes.map((node, i: number) => {
    if (!node) return null;
    const label = node.solution?.title;

    return (
      <Tab key={i}>
        <Link kind="ghost">{label}</Link>
      </Tab>
    );
  });

  const solutions = nodes.map((node, i: number) => {
    const { solution, showcase } = node;
    return (
      <TabPanel key={i}>
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
