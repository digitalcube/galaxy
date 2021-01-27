import React from 'react';

import { RecentPosts, RecentPostsProps } from './RecentPosts';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: RecentPosts,
  title: `Galaxy/Views/RecentPosts`,
};
const props: RecentPostsProps = {
  nodes: [
    {
      author: `Cillum Sunt`,
      date: `Jan 1, 2049`,
      href: `#!`,
      img: `post-featured-image.png`,
      title: `Introducing Pickup Philly, an open-source business directory built on the Jamstack`,
      category: `Events`,
    },
    {
      author: `Cupidatat Proident`,
      date: `Jan 1, 2049`,
      href: `#!`,
      img: `post-featured-image-1.png`,
      title: `Explaining the Difference Between Shifter Static and Shifter Headless`,
      category: `Blog`,
    },
    {
      author: `Reprehenderit Officia`,
      date: `Jan 1, 2049`,
      href: `#!`,
      img: `post-featured-image-2.png`,
      title: `Upgrade your business with a purpose-built form and Shifter Static integration`,
      category: `Announcement`,
    },
    {
      author: `Labore Proident`,
      date: `Jan 1, 2049`,
      href: `#!`,
      img: `post-featured-image.png`,

      category: `Announcement`,
      title: `Upgrade your business with a purpose-built form and Shifter Static integration`,
    },
  ],
};

export const Default = () => {
  return <RecentPosts {...props} />;
};
