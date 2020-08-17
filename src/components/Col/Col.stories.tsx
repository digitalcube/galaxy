import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Col } from './Col';

export default {
  component: Col,
  title: `Components/Col`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const colData = {
  title: `“I could calculate your chance of survival, but you won’t like it.” –Marvin`,
};

export const Default = () => (
  <Col>
    I could calculate your chance of survival, but you won’t like it.” –Marvin
  </Col>
);
