import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Spacer } from './Spacer';
import { components } from '../../styles';

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

const spacerSizes = Object.keys(components.spacer.size).map(size => {
  const { title } = spacerData;
  return (
    <Spacer size={size}>
      {size}: {title}
    </Spacer>
  );
});

export const Sizes = () => {
  return spacerSizes;
};
