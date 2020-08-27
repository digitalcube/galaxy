import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';
import { withKnobs } from '@storybook/addon-knobs';
import { GetStarted } from './GetStarted';

export default {
  component: GetStarted,
  title: `Components/Get Started`,
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

export const Overview = () => {
  return (
    <GetStarted
      title={title}
      subtitle={subtitle}
      buttonLabel={buttonLabel}
      href={href}
    />
  );
};
