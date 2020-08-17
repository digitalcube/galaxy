import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Content } from './Content';

export default {
  component: Content,
  title: `Components/Content`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Content>
    I could calculate your chance of survival, but you won’t like it.” –Marvin
  </Content>
);
