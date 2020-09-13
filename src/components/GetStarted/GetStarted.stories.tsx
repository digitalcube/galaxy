import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { GetStarted } from './GetStarted';

export default {
  component: GetStarted,
  title: `Containers/GetStarted`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Default = ({
  title = `Ready to take your site to the next level?`,
  subtitle = `Shifter is the solution for fast, maintenance-free WordPress websites.`,
  href = `https://go.getshifter.io/`,
  buttonLabel = `Get Started`,
}: GetStarted) => {
  return (
    <GetStarted
      title={title}
      subtitle={subtitle}
      buttonLabel={buttonLabel}
      href={href}
    />
  );
};
