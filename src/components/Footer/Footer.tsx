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
} from '../index';
import { components } from '../../styles';

type Footer = {
  navs?: Nav[];
};

type FooterNav = {
  title?: ReactNode;
  navItems?: NavItem[];
};

export const FooterNav: FC<FooterNav> = ({ navItems }: FooterNav) => {
  return (
    <Col width={2}>
      <Heading size="sm" as="h3">
        Company
      </Heading>
      <Nav navItems={navItems} alignment="vertical" />
    </Col>
  );
};

export const Footer: FC<Footer> = ({ navs = [] }: Footer) => {
  return (
    <Spacer as="section" size={3}>
      <Container>
        <Grid sm={12}>
          <Col width={4}>
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
          <FooterNav />
          <FooterNav />
          <FooterNav />
          <FooterNav />
        </Grid>
      </Container>
      <Container>
        <Spacer size={1} />
        <Brand size={components.nav.link.fontSize} asset="dc-logo" />
      </Container>
    </Spacer>
  );
};
