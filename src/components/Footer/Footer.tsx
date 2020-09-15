import React, { FC, ReactNode } from 'react';
import {
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Wordpress,
} from '@styled-icons/fa-brands';
import {
  Container,
  Spacer,
  Heading,
  Content,
  Grid,
  Col,
  Nav,
  NavItem,
  Button,
  Brand,
  NodeList,
} from '../index';
import { components } from '../../styles';

type Footer = {
  nav?: Nav[];
};

type FooterNav = {
  title?: ReactNode;
  navItems?: NavItem[];
};

export const FooterNav: FC<FooterNav> = ({ title, navItems }: FooterNav) => {
  return (
    <div>
      <Heading size="sm" as="h3">
        {title}
      </Heading>
      <Nav navItems={navItems} alignment="vertical" />
    </div>
  );
};

export const Footer: FC<Footer> = ({ nav }: Footer) => {
  const footerNavs = [
    {
      node: <FooterNav title="Company" />,
    },
    {
      node: <FooterNav title="Product" />,
    },
    {
      node: <FooterNav title="Resources" />,
    },
    {
      node: <FooterNav title="Legal" />,
    },
  ];

  return (
    <Spacer as="section" size={3}>
      <Container>
        <Grid sm={2} md={12}>
          <Col sm={2} md={4}>
            <Content>
              <Heading size="sm" as="h3">
                Say hello 👋
              </Heading>
              <Nav
                navItems={[
                  {
                    label: <Twitter size={components.nav.link.fontSize} />,
                    href: `#`,
                  },
                  {
                    label: <Facebook size={components.nav.link.fontSize} />,
                    href: `#`,
                  },
                  {
                    label: <Instagram size={components.nav.link.fontSize} />,
                    href: `#`,
                  },
                  {
                    label: <Youtube size={components.nav.link.fontSize} />,
                    href: `#`,
                  },
                  {
                    label: <Github size={components.nav.link.fontSize} />,
                    href: `#`,
                  },
                  {
                    label: <Wordpress size={components.nav.link.fontSize} />,
                    href: `#`,
                  },
                ]}
              />
              <Button href="#">Join our newsletter</Button>
            </Content>
          </Col>
          <Col md={8}>
            <NodeList md={4} nodes={footerNavs} />
          </Col>
        </Grid>
      </Container>
      <Container>
        <Spacer size={1} />
        <Brand size={components.nav.link.fontSize} asset="dc-logo" />
      </Container>
    </Spacer>
  );
};
