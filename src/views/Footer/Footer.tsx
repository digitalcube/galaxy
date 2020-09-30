import React, { FC, ReactNode } from 'react';
import { Facebook } from '@styled-icons/fa-brands/Facebook';
import { Instagram } from '@styled-icons/fa-brands/Instagram';
import { Youtube } from '@styled-icons/fa-brands/Youtube';
import { Github } from '@styled-icons/fa-brands/Github';
import { Wordpress } from '@styled-icons/fa-brands/Wordpress';
import { Twitter } from '@styled-icons/fa-brands/Twitter';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { Content } from '../../components/Content';
import { Grid } from '../../components/Grid';
import { Nav } from '../../components/Nav';
import { NavItem } from '../NavItem';
import { Link } from '../../components/Link';
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
            <FooterNav
              navItems={[
                {
                  label: `Blog`,
                  href: `/blog/`,
                },
                {
                  label: `About`,
                  href: `/about/`,
                },
                {
                  label: `Press`,
                  href: `#!`,
                },
              ]}
              title="Company"
            />
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
