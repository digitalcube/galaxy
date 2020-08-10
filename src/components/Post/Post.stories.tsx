import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Post } from '././Post';
import moment from 'moment';

export default {
  component: Post,
  title: `Components/Post`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const postData = { title: `The title` };

export const Default = () => <Post content={postData} />;
