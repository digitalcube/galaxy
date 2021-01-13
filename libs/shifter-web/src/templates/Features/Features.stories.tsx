import React from 'react';
import { Features, FeaturesProps } from './Features';
import { defaultStorybookConfig } from '../../../.storybook/docs'
export default {
  ...defaultStorybookConfig,
  component: Features,
  title: `Shifter/Templates/Features`,
};

const props: FeaturesProps = {
  getStarted: {
    title: `Fugiat ut ullamco aute nulla?`,
    subtitle: `Qui ut Lorem ex occaecat ea deserunt eserunt in irure ipsum veniam enim quis consequat cillum.`,
    href: `#!`,
    linkLabel: `Nisi veniam laboris`,
    variant: `0`,
  },
  features: {
    title: `Sunt deserunt`,
    subtitle: `Et cillum non cupidatat non dolore nostrud ad nisi.`,
    href: `#!`,
    buttonLabel: `Nostrud nisi`,
    columns: [1, null, null, null, 2, 4],
    nodes: [
      {
        title: `Magic Link Logins`,
        excerpt: `You’ll never forget your WordPress password on Shifter because you’ll never have to.`,
        href: `#`,
        img: `post-featured-image.png`,
      },
      {
        title: `Security Built-in`,
        excerpt: `Don’t spend another minute configuring security Plugins. We have you covered.`,
        href: `#`,
        img: `post-featured-image.png`,
      },
      {
        title: `Integrated CDN`,
        excerpt: `Deliver fast static content to site visitors anywhere in the world with low latency.`,
        href: `#`,
        img: `post-featured-image.png`,
      },
      {
        title: `Maintenance-free`,
        excerpt: `Never worry about security vulnerabilities from WordPress Core, themes, and outdated plugins.`,
        href: `#`,
        img: `post-featured-image.png`,
      },
    ],
  },
};
export const Default = () => <Features {...props} />;
