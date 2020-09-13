import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Spacer } from './Spacer';

export default {
  component: Spacer,
  title: `Components/Spacer`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const spacerData = {
  title: `“I could calculate your chance of survival, but you won’t like it.” –Marvin`,
};

export const Sizes = () => {
  return <Spacer size={1}>{spacerData.title}</Spacer>;
};
