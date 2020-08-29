import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Benefits, Image, Animation } from '../index';

export default {
  component: Benefits,
  title: `Components/Benefits`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

const title = `One Click Setup`;
const subtitle = `Create a new site or migrate an existing WordPress site in minutes.`;
const img = (
  <Image>
    <img
      alt=""
      src="https://www.getshifter.io/static/2902f1abacb62522fbf45bfd5c5babdd/24a5b/blog-feature-statcVheadless.png"
    />
  </Image>
);
const benefits = [
  {
    content: {
      title: `Easy installation`,
      excerpt: `Create a new WordPress site right from the Shifter Dashboard, no uploading required.`,
    },
  },
  {
    content: {
      title: `Collaborate`,
      excerpt: `Work with others and share access to your Shifter account using our team features.`,
    },
  },
  {
    content: {
      title: `Maintenance-free`,
      excerpt: `Shifter manages WordPress core so you're always up to date and plugins never vulnerable.`,
    },
  },
  {
    content: {
      title: `No coding required`,
      excerpt: `Easy for non-developers to get started using WordPress themes or page builders.`,
    },
  },
];

export const Overview = () => {
  return (
    <Benefits
      title={title}
      subtitle={subtitle}
      nodes={benefits}
      img={<Animation />}
    />
  );
};
