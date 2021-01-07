import React, { FC, ReactNode } from 'react';
import { useThemeUI } from 'theme-ui';
import { Facebook } from '@styled-icons/fa-brands/Facebook';
import { Instagram } from '@styled-icons/fa-brands/Instagram';
import { Youtube } from '@styled-icons/fa-brands/Youtube';
import { Github } from '@styled-icons/fa-brands/Github';
import { Wordpress } from '@styled-icons/fa-brands/Wordpress';
import { Twitter } from '@styled-icons/fa-brands/Twitter';
import {
  Container,
  Heading,
  Content,
  Grid,
  Nav,
  NavLink,
  Link,
} from '@galaxy/core';
import { Copyright } from '../Copyright';

export type Footer = {
  nav?: Nav[];
};

type FooterNav = {
  title?: ReactNode;
  navItems?: NavLink[];
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
  const context = useThemeUI();
  const { theme } = context;
  const iconSize = theme?.space ? theme?.space[2] : ``;
  return (
    <Container
      size="4"
      as="footer"
      sx={{
        pt: 7,
        px: '5%',
      }}
    >
      <Container as="footer">
        <Grid columns={[1, null, null, null, '4fr 8fr']}>
          <Content>
            <Heading size="4" as="h3">
              Say hello{' '}
              <span role="img" aria-label="Say hello waving hand">
                👋
              </span>
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
                  label: <Twitter size={`${iconSize}`} />,
                  href: `https://twitter.com/getshifter`,
                },
                {
                  label: <Facebook size={`${iconSize}`} />,
                  href: `https://www.facebook.com/getshifter`,
                },
                {
                  label: <Instagram size={`${iconSize}`} />,
                  href: `https://www.instagram.com/getshifter/`,
                },
                {
                  label: <Youtube size={`${iconSize}`} />,
                  href: `https://www.youtube.com/channel/UCkw20zzfSAxD-KNKUEW3bAw`,
                },
                {
                  label: <Github size={`${iconSize}`} />,
                  href: `https://github.com/getshifter`,
                },
                {
                  label: <Wordpress size={`${iconSize}`} />,
                  href: `https://profiles.wordpress.org/getshifter/`,
                },
              ]}
            />
            <Link
              kind="primary"
              href="https://confirmsubscription.com/h/j/B547D3210F66E486"
            >
              Join our newsletter
            </Link>
          </Content>
          <Grid columns={[1, 2, null, null, 4]}>
            <FooterNav
              title="Company"
              navItems={[
                {
                  label: `Blog`,
                  href: `/blog/`,
                },
                {
                  label: `About`,
                  href: `/company/`,
                },
                {
                  label: `DigitalCube`,
                  href: `https://en.digitalcube.jp/`,
                },
              ]}
            />
            <FooterNav
              navItems={[
                {
                  label: `Pricing`,
                  href: `/pricing/`,
                },
                {
                  label: `Features`,
                  href: `/features/`,
                },
                {
                  label: `Showcase`,
                  href: `/showcase/`,
                },
              ]}
              title="Product"
            />
            <FooterNav
              title="Resources"
              navItems={[
                {
                  label: `Documentation`,
                  href: `https://support.getshifter.io/en/`,
                },
                {
                  label: `Getting Started`,
                  href: `https://support.getshifter.io/en/collections/1394546-creating-sites-on-shifter`,
                },
                {
                  label: `Open Source`,
                  href: `https://github.com/getshifter`,
                },
              ]}
            />
            <FooterNav
              title="Legal"
              navItems={[
                {
                  label: `Email Us`,
                  href: `mailto:hello@getshifter.io`,
                },
                {
                  label: `Terms`,
                  href: `/terms-of-service/`,
                },
                {
                  label: `Privacy Policy`,
                  href: `/privacy-policy/`,
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
      <Copyright />
    </Container>
  );
};
