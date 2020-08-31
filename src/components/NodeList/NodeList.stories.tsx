import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { NodeList, Post, Image } from '../index';

export default {
  component: NodeList,
  title: `Components/Node List`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

const posts = [
  {
    node: <Post content={{ title: `Hello World` }} />,
  },
  {
    node: <Post content={{ title: `Hola Mundo` }} />,
  },
];

const images = [
  {
    node: (
      <Image>
        <img src="//placehold.it/300x200" alt="Placeholder Image" />
      </Image>
    ),
  },
  {
    node: (
      <Image>
        <img src="//placehold.it/300x200" alt="Placeholder Image" />
      </Image>
    ),
  },
  {
    node: (
      <Image>
        <img src="//placehold.it/300x200" alt="Placeholder Image" />
      </Image>
    ),
  },
  {
    node: (
      <Image>
        <img src="//placehold.it/300x200" alt="Placeholder Image" />
      </Image>
    ),
  },
  {
    node: (
      <Image>
        <img src="//placehold.it/300x200" alt="Placeholder Image" />
      </Image>
    ),
  },
  {
    node: (
      <Image>
        <img src="//placehold.it/300x200" alt="Placeholder Image" />
      </Image>
    ),
  },
];

export const WithPosts = () => {
  return <NodeList sm="2" nodes={posts} />;
};

export const WithImages = () => {
  return <NodeList sm="5" nodes={images} />;
};
