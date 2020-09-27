import React, { FC, ReactNode } from 'react';
import {
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Wordpress,
} from '@styled-icons/fa-brands';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { Content } from '../Content';
import { Grid } from '../Grid';
import { Nav } from '../Nav';
import { NavItem } from '../NavItem';
import { Link } from '../Link';
import { Copyright } from '../Copyright';
import { components } from '../../styles';

export type Footer = {
  nav?: Nav[];
};

type FooterNav = {
  title?: ReactNode;
  navItems?: NavItem[];
};

export const FooterNav: FC<FooterNav> = ({ title, navItems }: FooterNav) => {
  return (
    <div>
      <Heading
        sx={{
          mb: 2,
        }}
        size="4"
        as="h3"
      >
        <b>{title}</b>
      </Heading>
      <Nav navItems={navItems} kind="column" />
    </div>
  );
};

export const Footer: FC<Footer> = ({ nav }: Footer) => {
  return (
    <Container
      size="4"
      as="footer"
      sx={{
        pt: 7,
      }}
    >
      <Container as="footer">
        <Grid columns={[1, null, null, null, '4fr 8fr']}>
          <Content>
            <Heading size="4" as="h3">
              Say hello 👋
            </Heading>
            <Nav
              kind="row"
              sx={{
                display: 'flex',
                '& > :not(:first-child)': {
                  ml: 2,
                },
              }}
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
            <Link kind="primary" href="#">
              Join our newsletter
            </Link>
          </Content>
          <Grid columns={[1, 2, null, null, 4]}>
            <FooterNav title="Company" />
            <FooterNav title="Product" />
            <FooterNav title="Resources" />
            <FooterNav title="Legal" />
          </Grid>
        </Grid>
      </Container>
      <Copyright />
    </Container>
  );
};
