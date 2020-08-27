import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Features } from './Features';

export default {
  component: Features,
  title: `Components/Features`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

const title = `Features`;
const subtitle = `Deploy secure sites that scale and end downtime with Shifter, the serverless hosting solution and static site generator for WordPress.`;
const buttonLink = `/features`;
const features = [
  {
    content: {
      title: `Magic Link Logins`,
      excerpt: `You’ll never forget your WordPress password on Shifter because you’ll never have to.`,
      href: `#`,
    },
  },
  {
    content: {
      title: `Security Built-in`,
      excerpt: `Don’t spend another minute configuring security Plugins. We have you covered.`,
      href: `#`,
    },
  },
  {
    content: {
      title: `Integrated CDN`,
      excerpt: `Deliver fast static content to site visitors anywhere in the world with low latency.`,
      href: `#`,
    },
  },
  {
    content: {
      title: `Maintenance-free`,
      excerpt: `Never worry about security vulnerabilities from WordPress Core, themes, and outdated plugins.`,
      href: `#`,
    },
  },
];

export const Overview = () => {
  return (
    <Features
      title={title}
      subtitle={subtitle}
      buttonLink={buttonLink}
      items={features}
    />
  );
};
