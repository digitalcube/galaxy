import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Testimonials, TestimonialsProps } from './Testimonials';

export default {
  component: Testimonials,
  title: `Galaxy/Views/Testimonials`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};


const props: TestimonialsProps = {
  title: `Esse reprehenderit incididunt in deserunt enim nostrud tempor proident exercitation duis dolore ullamco proident.`,
  nodes: [
    {
      img: 'user-avatar.png',
      quote:
        'Amet sint velit aliquip aute ex enim cupidatat ex Nulla nostrud proident minim do labore ipsum mollit eu voluptate. Cillum magna quis culpa in et ea laborum eiusmod reprehenderit tempor ea labore. <a href="https://wptavern.com/digitalcube-launches-shifter-serverless-hosting-for-wordpress">Read more.</a>',
      author: 'FooBarBaz',
      handle: '@ExampleFooBarBaz',
    },
    {
      img: 'user-avatar.png',
      quote:
        'Ullamco aute nulla amet commodo magna.. <a href="https://wptavern.com/digitalcube-launches-shifter-serverless-hosting-for-wordpress">Read more.</a>',
      author: 'FooBarBaz',
      handle: '@ExampleFooBarBaz',
    },
    {
      img: 'user-avatar.png',
      quote:
        'Aute ea eiusmod eu consectetur velit cillum dolore quis voluptate eu eiusmod.. <a href="https://wptavern.com/digitalcube-launches-shifter-serverless-hosting-for-wordpress">Read more.</a>',
      author: 'FooBarBaz',
      handle: '@ExampleFooBarBaz',
    },
    {
      img: 'user-avatar.png',
      quote:
        'DigitalCube Launches Shifter, Serverless Hosting for WordPress. <a href="https://wptavern.com/digitalcube-launches-shifter-serverless-hosting-for-wordpress">Read more.</a>',
      author: 'FooBarBaz',
      handle: '@ExampleFooBarBaz',
    },
    {
      img: 'user-avatar.png',
      quote:
        'DigitalCube Launches Shifter, Serverless Hosting for WordPress. <a href="https://wptavern.com/digitalcube-launches-shifter-serverless-hosting-for-wordpress">Read more.</a>',
      author: 'FooBarBaz',
      handle: '@ExampleFooBarBaz',
    },
  ],
};

export const Default = () => {
  return <Testimonials {...props} />;
};
