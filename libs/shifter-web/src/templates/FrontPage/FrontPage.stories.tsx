import React from 'react';
import { Animation } from '@galaxy/core';
import { FrontPage, FrontPageProps } from './FrontPage';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: FrontPage,
  title: `Shifter/Templates/FrontPage`,
};

const props: FrontPageProps = {
  getStarted: {
    title: `Ready to take your site to the next level?`,
    subtitle: `Shifter is the solution for fast, maintenance-free WordPress websites.`,
  },
  benefits: {
    title: `Id Lorem aliquip`,
    subtitle: `Commodo culpa deserunt id magna esse. Et dolore elit nulla veniam in anim ut est.`,
    img: <Animation animation="singleClick" />,
    nodes: [
      {
        title: `Easy installation`,
        excerpt: `Create a new WordPress site right from the Shifter Dashboard, no uploading required.`,
      },
      {
        title: `Collaborate`,
        excerpt: `Work with others and share access to your Shifter account using our team features.`,
      },
      {
        title: `Maintenance-free`,
        excerpt: `Shifter manages WordPress core so you're always up to date and plugins never vulnerable.`,
      },
      {
        title: `No coding required`,
        excerpt: `Easy for non-developers to get started using WordPress themes or page builders.`,
      },
    ],
  },
  hero: {
    title: `Jamstack solutions for WordPress`,
    subtitle: `Using Shifter, create or migrate WordPress sites in minutes that are scalable, secure from attacks, and 100% static with no security or caching plugins required.`,
    img: <Animation animation="dashboard" />,
    href: `#!`,
    buttonLabel: `Dolor aute exercitation`,
  },
  solutions: {
    nodes: [
      {
        solution: {
          title: `Education`,
          subtitle: `Cupidatat pariatur ea irure ea laborum.`,
          href: `#!`,
          buttonLabel: `Veniam qui`,
        },
        showcase: {
          title: `Eiusmod laborum`,
          buttonLabel: `Culpa amet`,
          href: `#!`,
          img: `logo-vu.png`,
        },
      },
    ],
  },
  testimonials: {
    title: `Esse reprehenderit incididunt in deserunt enim nostrud tempor proident exercitation duis dolore ullamco proident.`,
    nodes: [
      {
        img: 'user-avatar.png',
        quote:
          'Amet sint velit aliquip aute ex enim cupidatat ex Nulla nostrud proident minim do labore ipsum mollit eu voluptate. Cillum magna quis culpa in et ea laborum eiusmod reprehenderit tempor ea labore. <a href="https://wptavern.com/digitalcube-launches-shifter-serverless-hosting-for-wordpress">Read more.</a>',
        author: 'FooBarBaz',
        handle: '@ExampleFooBarBaz',
      },
    ],
  },
  showcase: {
    subtitle: `Et ullamco enim Lorem irure consequat commodo officia consequat laboris excepteur culpa.`,
    buttonLabel: `Laboris labore`,
    href: `#`,
    nodes: [
      {
        title: `Soracom`,
        href: `https://example.com`,
        excerpt: `example.com`,
        img: `post-featured-image.png`,
      },
      {
        title: `Vrije Universiteit Amsterdam`,
        excerpt: `example.com`,
        href: `https://example.com`,
        img: `post-featured-image.png`,
      },
    ],
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
export const Default = () => <FrontPage {...props} />;
