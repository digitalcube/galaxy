import React from 'react';
import { Brand } from '@galaxy/core';
import { PageHeader, GetStarted,Plans, PlansProps,FeatureTable,BenefitsProps, GetStartedProps } from '@galaxy/views';

type Pricing = {
  title?: string;
  subtitle?: string;
  getStarted?: GetStartedProps;
  plans?: PlansProps;
  featureTable?: FeatureTable;
  benefits?: BenefitsProps;
};

export const Pricing = ({
  title,
  subtitle,
  plans,
  getStarted,
  featureTable,
}: Pricing) => {
  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />
      {plans ? <Plans {...plans} />: null}
      <FeatureTable {...featureTable} />
      <PageHeader title={title} subtitle={subtitle} />
      {plans ? <Plans {...plans} />: null}
      <GetStarted {...getStarted} />
    </>
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
