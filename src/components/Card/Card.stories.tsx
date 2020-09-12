import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Card, Button, Image } from '../index';

export default {
  component: Card,
  title: `Components/Card`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const cardData = {
  img: (
    <Image>
      <img src="//placehold.it/300x200" alt="" />
    </Image>
  ),
  title: `Velit anim occaecat.`,
  subtitle: `Aute ad magna ullamco minim velit deserunt est nulla veniam.`,
  body: `So long and thanks for all the fish. 🐬`,
  footer: <Button href="#">42</Button>,
};

const { img, title, subtitle, body } = cardData;

export const Default = () => (
  <Card img={img} title={title} subtitle={subtitle}>
    {body}
  </Card>
);

export const Title = () => <Card title="hello world" />;
