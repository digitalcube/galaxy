import React from 'react';
import {
  Heading,
  Button,
  Spacer,
  Card,
  Container,
  Content,
  Image,
  Grid,
} from '../index';

type Features = {
  title?: string;
  subtitle?: string;
  href?: string;
  buttonLabel?: string;
  nodes?: Card[];
};

export const Feature = ({ img, title, excerpt }: Card) => {
  return (
    <Card
      align="center"
      img={
        <Image width="20%">
          <Spacer size={2} />
          {img}
        </Image>
      }
      title={title}
      excerpt={excerpt}
    />
  );
};

export const FeaturesNodes = ({ nodes = [] }: Features) => {
  const featureNodes = nodes.map((node: Card, i) => {
    const { title, img, excerpt } = node;
    return <Feature key={i} title={title} img={img} excerpt={excerpt} />;
  });

  return <Grid columns={[2, null, null, null, 4]}>{featureNodes}</Grid>;
};

export const Features = ({
  title = `Features`,
  subtitle = `Deploy secure sites that scale and end downtime with Shifter, the serverless hosting solution and static site generator for WordPress.`,
  nodes = [
    {
      title: `Magic Link Logins`,
      excerpt: `You’ll never forget your WordPress password on Shifter because you’ll never have to.`,
      href: `#`,
      img: (
        <img
          src="https://www.getshifter.io/static/a5fe464c4339cf677b4496a7c7eb757d/9c44f/icon_feature-MagicLinks.png"
          alt=""
        />
      ),
    },
    {
      title: `Security Built-in`,
      excerpt: `Don’t spend another minute configuring security Plugins. We have you covered.`,
      href: `#`,
      img: (
        <img
          src="https://www.getshifter.io/static/a5fe464c4339cf677b4496a7c7eb757d/9c44f/icon_feature-MagicLinks.png"
          alt=""
        />
      ),
    },
    {
      title: `Integrated CDN`,
      excerpt: `Deliver fast static content to site visitors anywhere in the world with low latency.`,
      href: `#`,
      img: (
        <img
          src="https://www.getshifter.io/static/a5fe464c4339cf677b4496a7c7eb757d/9c44f/icon_feature-MagicLinks.png"
          alt=""
        />
      ),
    },
    {
      title: `Maintenance-free`,
      excerpt: `Never worry about security vulnerabilities from WordPress Core, themes, and outdated plugins.`,
      href: `#`,
      img: (
        <img
          src="https://www.getshifter.io/static/a5fe464c4339cf677b4496a7c7eb757d/9c44f/icon_feature-MagicLinks.png"
          alt=""
        />
      ),
    },
  ],
  href = `#`,
  buttonLabel = `See all features`,
}: Features) => {
  return (
    <Spacer size={3}>
      <Container size="md">
        <Content align="center">
          <Heading as="h2" size="6">
            {title}
          </Heading>
          <Heading as="h3" size="3">
            {subtitle}
          </Heading>
        </Content>
      </Container>
      <Spacer size={3} />
      <Container>
        <FeaturesNodes nodes={nodes} />
        <Spacer size={3} />
        <Content align="center">
          <Button outline kind="primary" href={href}>
            {buttonLabel}
          </Button>
        </Content>
      </Container>
    </Spacer>
  );
};
