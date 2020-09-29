import React from 'react';
import { Layout } from '../../../components/Layout';
import { PageHeader } from '../../../components/PageHeader';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Brand } from '../../../components/Brand';
import { GetStarted } from '../../../components/GetStarted';
import { Plans } from '../../../components/Plans';
import { Features } from '../../../components/Features';
import { Benefits } from '../../../components/Benefits';

type Pricing = {
  header?: Header;
  title?: string;
  subtitle?: string;
  getStarted?: GetStarted;
  footer?: Footer;
  plans?: Plans;
  features?: Features;
  benefits?: Benefits;
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
  features: {
    buttonLabel: null,
  },
};
