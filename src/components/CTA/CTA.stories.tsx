import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { CTA } from './CTA';

export default {
  component: CTA,
  title: `Components/CTA`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

const title = `Ready to take your site to the next level?`;
const subtitle = `Shifter is the solution for fast, maintenance-free WordPress websites.`;
const href = `https://go.getshifter.io/`;
const buttonLabel = `Get Started`;

export const GetStarted = () => {
  return (
    <CTA
      title={title}
      subtitle={subtitle}
      buttonLabel={buttonLabel}
      href={href}
    />
  );
};
