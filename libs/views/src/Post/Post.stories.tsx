import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Post } from './Post';

export default {
  component: Post,
  title: `Galaxy/Components/Post`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => <Post />;
