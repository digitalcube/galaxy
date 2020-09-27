import React, { FC } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ThemeProvider } from 'styled-components';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { Content } from '../Content';
import { Grid } from '../Grid';
import { Image } from '../Image';
import { Card } from '../Card';
import { Link } from '../Link';
import { Text } from '../Text';
import { Nav } from '../Nav';

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

export const Solutions: FC<Solutions> = ({ nodes }: Solutions) => {
  if (!nodes) return null;

  const solutionsNav = nodes.map((node: Solutions) => {
    if (!node) return;
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
          <Solution {...solution} />
          <ThemeProvider theme={{ colorMode: `dark` }}>
            <Showcase {...showcase} />
          </ThemeProvider>
        </Grid>
      </TabPanel>
    );
  });

  return (
    <Container
      size="4"
      sx={{
        py: 7,
      }}
    >
      <Nav navItems={solutionsNav} />
      <Tabs>
        <TabList>{solutionsNav}</TabList>
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
  ],
};

// export const Solutions: FC<Solutions> = ({
//   title,
//   subtitle,
//   solution,
//   showcase,
// }: Solutions) => {
//   return (
//     <Container
//       as="section"
//       size="4"
//       sx={{
//         py: 7,
//       }}
//     >
//       <Container>
//         <Container
//           size="1"
//           sx={{
//             mb: 5,
//           }}
//         >
//           <Content align="center">
//             <Heading size="6">
//               <b>{title}</b>
//             </Heading>
//             <Heading as="p" size="3">
//               {subtitle}
//             </Heading>
//           </Content>
//         </Container>
//         <Grid columns={[1, null, null, null, 2]}>
//           <Solution {...solution} />
//           <ThemeProvider theme={{ colorMode: `dark` }}>
//             <Showcase {...showcase} />
//           </ThemeProvider>
//         </Grid>
//       </Container>
//     </Container>
//   );
// };

// Solutions.defaultProps = {
//   title: `Esse mollit aliquip occaecat`,
//   subtitle: `Nostrud nostrud elit cillum id culpa ea ex irure deserunt officia dolore cillum est.`,
// };

// Solution.defaultProps = {
//   title: `Designers`,
//   subtitle: `Use page builders and themes that will get your site noticed.`,
//   buttonLabel: `Solutions for designers`,
//   href: `#`,
// };

// Showcase.defaultProps = {
//   title: `Ea consequat esse non ullamco occaecat.`,
//   buttonLabel: `Excepteur adipisicing`,
//   href: `#`,
//   img: `https://www.getshifter.io/static/3f1aa2e6f5aa25eb64f6ddf4b7e582b9/cd6dd/logo-howtospeakmachine.webp`,
// };
