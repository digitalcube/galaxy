import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Post } from './Post';
import { Image } from '../Image';

export default {
  component: Post,
  title: `Components/Post`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const postData = {
  title: `The title`,
  subtitle: `The subtitle`,
  excerpt: `The excerpt`,
  category: `Announcement`,
  date: `2020-08-10T12:50:52-04:00`,
  author: `Daniel Olson`,
  img: (
    <Image>
      <img
        alt=""
        src="https://www.getshifter.io/static/40b93d70dfb59d815b49cebb13b97311/79f20/BlogPost-MediaCDNRelease.jpg"
      />
    </Image>
  ),
};

export const Default = () => <Post content={postData} />;
