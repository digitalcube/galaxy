import React from 'react';
import { Brand } from '@galaxy/core';
import { PageHeader } from '../../../views/PageHeader';
import { GetStarted } from '../../../views/GetStarted';
import { Plans } from '../../../views/Plans';
import { FeatureTable } from '../../../views/FeatureTable';
import { Benefits } from '../../../views/Benefits';

type Pricing = {
  title?: string;
  subtitle?: string;
  getStarted?: GetStarted;
  plans?: Plans;
  featureTable?: FeatureTable;
  benefits?: Benefits;
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
      <Plans {...plans} />
      <FeatureTable {...featureTable} />
      <PageHeader title={title} subtitle={subtitle} />
      <Plans {...plans} />
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
