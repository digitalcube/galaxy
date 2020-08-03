import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Button } from './Button';

export default {
  component: Button,
  title: `Components/Button`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const buttonContentData = {
  label: `Don't Panic.`,
  href: `https://galaxy.digitalcube.jp`,
  color: 'primary',
};

export const Default = () => <Button content={buttonContentData} />;

export const Amimoto = () => <Button content={buttonContentData} />;
