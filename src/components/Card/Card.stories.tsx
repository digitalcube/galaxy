import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Card } from './Card';

export default {
  component: Card,
  title: `Components/Card`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const cardContentData = {
  image: {
    img: `Image`,
  },
  header: {
    title: `Don't Panic.`,
  },
  footer: {
    title: `42`,
  },
};

export const cardBodyData = `So long and thanks for all the fish. 🐬`;

export const Default = () => (
  <Card content={cardContentData}>{cardBodyData}</Card>
);
