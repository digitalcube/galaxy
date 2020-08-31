import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { BlogShowcaseCTA, Post, Button } from '../index';

export default {
  component: BlogShowcaseCTA,
  title: `Containers/BlogShowcaseCTA`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

const nodes = [
  {
    node: (
      <Post
        content={{
          category: `Showcase`,
          title: `Hello World`,
          excerpt: `Get the news on product updates, events, and the industry.`,
        }}
        footer={<Button href="#">Hola Mundo</Button>}
      />
    ),
  },
  {
    node: (
      <Post
        content={{
          category: `Blog`,
          title: `Hola Mundo`,
          excerpt: `Get the news on product updates, events, and the industry.`,
        }}
        footer={<Button href="#">Hello World</Button>}
      />
    ),
  },
];

export const Default = () => {
  return <BlogShowcaseCTA nodes={nodes} />;
};
