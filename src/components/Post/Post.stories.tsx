import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Post } from './Post';

export default {
  component: Post,
  title: `Components/Post`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const postData = {
  title: `The title`,
  subtitle: `The subtitle`,
  excerpt: `The excerpt`,
  category: `Announcement`,
  date: `2020-08-10T12:50:52-04:00`,
  author: `Daniel Olson`,
};

export const Default = () => <Post content={postData} />;
