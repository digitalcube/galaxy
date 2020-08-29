import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Heading } from './Heading';
import { components } from '../../styles';

export default {
  component: Heading,
  title: `Components/Heading`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const headingData = {
  title: `“I could calculate your chance of survival, but you won’t like it.” –Marvin`,
};

const headingSizes = Object.keys(components.heading.size).map(size => {
  const { title } = headingData;
  return <Heading size={size}>{title}</Heading>;
});

export const Sizes = () => {
  return headingSizes;
};
