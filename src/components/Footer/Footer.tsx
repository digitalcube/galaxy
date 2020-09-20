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
      <Heading size="4" as="h3">
        {title}
      </Heading>
      <Nav navItems={navItems} direction="column" />
    </div>
  );
};

export const Footer: FC<Footer> = ({ nav }: Footer) => {
  return (
    <Spacer as="section" size={3}>
      <Container>
        <Grid columns={[1, null, null, null, '4fr 8fr']}>
          <Content>
            <Heading size="4" as="h3">
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
          <Grid columns={[1, null, null, 2, 4]}>
            <FooterNav title="Company" />
            <FooterNav title="Product" />
            <FooterNav title="Resources" />
            <FooterNav title="Legal" />
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Spacer size={1} />
        <Brand size={components.nav.link.fontSize} asset="dc-logo" />
      </Container>
    </Spacer>
  );
};
