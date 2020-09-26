import React from 'react';

import {
  Layout,
  PageHeader,
  Header,
  Footer,
  Brand,
  GetStarted,
  Plans,
} from '../../../components/index';

type Pricing = {
  header?: Header;
  title?: string;
  subtitle?: string;
  getStarted?: GetStarted;
  footer?: Footer;
  plans?: Plans;
};

export const Pricing = ({
  header,
  title,
  subtitle,
  plans,
  getStarted,
  footer,
}: Pricing) => {
  return (
    <Layout header={header} footer={footer}>
      <PageHeader title={title} subtitle={subtitle} />
      <Plans {...plans} />
      <GetStarted {...getStarted} />
    </Layout>
  );
};

Pricing.defaultProps = {
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
    title: `Jamstack solutions for WordPress`,
    subtitle: `Using Shifter, create or migrate WordPress sites in minutes that are scalable, secure from attacks, and 100% static with no security or caching plugins required.`,
  },
};
