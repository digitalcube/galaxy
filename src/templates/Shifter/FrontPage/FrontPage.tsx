import React from 'react';

import {
  Hero,
  Layout,
  Logos,
  Benefits,
  Solutions,
  Features,
  Testimonials,
  Showcase,
  GetStarted,
  Brand,
  Header,
} from '../../../components/index';

type FrontPage = {
  header?: Header;
  getStarted?: GetStarted;
  hero?: Hero;
  logos?: Logos;
  benefits?: Benefits;
  solutions?: Solutions;
  features?: Features;
  showcase?: Showcase;
  testimonials?: Testimonials;
};

export const FrontPage = ({
  header,
  getStarted,
  hero,
  logos,
  benefits,
  solutions,
  features,
  showcase,
  testimonials,
}: FrontPage) => {
  return (
    <Layout header={{ ...header }}>
      <Hero {...hero} />
      <Logos {...logos} />
      <Benefits {...benefits} />
      <Solutions {...solutions} />
      <Benefits {...benefits} />
      <Features {...features} />
      <Testimonials {...testimonials} />
      <Showcase {...showcase} />
      <GetStarted {...getStarted} />
    </Layout>
  );
};

FrontPage.defaultProps = {
  header: {
    brand: <Brand asset="shifter-mark" size="40" />,
    nav: [
      [
        {
          label: `Features`,
          href: `#!`,
        },
        {
          label: `Blog`,
          href: `#!`,
        },
        {
          label: `Solutions`,
          href: `#!`,
        },
        {
          label: `Pricing`,
          href: `#!`,
        },
        {
          label: `Showcase`,
          href: `#!`,
        },
      ],
      [
        {
          label: `Login`,
          href: `#!`,
        },
        {
          label: `Sign Up`,
          href: `#!`,
          kind: `primary`,
        },
      ],
    ],
  },
  getStarted: {
    title: `Ready to take your site to the next level?`,
    subtitle: `Shifter is the solution for fast, maintenance-free WordPress websites.`,
  },
  hero: {
    title: `Jamnstack solutiosn for WordPress`,
    subtitle: `Using Shifter, create or migrate WordPress sites in minutes that are scalable, secure from attacks, and 100% static with no security or caching plugins required.`,
  },
};
