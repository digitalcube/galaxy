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
} from '../../../components/index';

type FrontPage = {
  header?: any;
};

export const FrontPage = ({ header }: FrontPage) => {
  return (
    <Layout header={{ ...header }}>
      <Hero />
      <Logos />
      <Benefits />
      <Solutions />
      <Benefits />
      <Features />
      <Testimonials />
      <Showcase />
      <GetStarted />
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
};
