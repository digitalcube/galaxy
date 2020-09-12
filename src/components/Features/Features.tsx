import React from 'react';
import {
  Heading,
  Button,
  Spacer,
  NodeList,
  Card,
  Container,
  Content,
  Image,
} from '../index';

type Features = {
  title?: string;
  subtitle?: string;
  href?: string;
  buttonLabel?: string;
  nodes?: Card[];
};

export const FeaturesNodes = ({ nodes = [] }: Features) => {
  const featureNodes = nodes.map((node: Card) => {
    const {
      title,
      excerpt,
      img = <Image width="20%">{node.img}</Image>,
    } = node;
    return {
      node: <Card align="center" img={img} title={title} excerpt={excerpt} />,
    };
  });

  return <NodeList md="2" lg="4" nodes={featureNodes} />;
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
    <section>
      <Spacer size="md">
        <Container>
          <Container size="md" align="left">
            <Content>
              <Heading as="h2" size="lg">
                {title}
              </Heading>
              <Heading as="h2" size="sm">
                {subtitle}
              </Heading>
              <Button outline kind="primary" href={href}>
                {buttonLabel}
              </Button>
            </Content>
          </Container>
        </Container>
        <Container>
          <FeaturesNodes nodes={nodes} />
        </Container>
      </Spacer>
    </section>
  );
};
