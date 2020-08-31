import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Grid, Col } from '../index';

export default {
  component: Grid,
  title: `Components/Grid`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Grid>
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
  </Grid>
);

export const ResponsiveColumns = () => (
  <Grid xl="4" lg="3" md="2">
    <Col>Item</Col>
    <Col>Item</Col>
    <Col>Item</Col>
    <Col>Item</Col>
    <Col>Item</Col>
    <Col>Item</Col>
    <Col>Item</Col>
    <Col>Item</Col>
    <Col>Item</Col>
    <Col>Item</Col>
    <Col>Item</Col>
    <Col>Item</Col>
  </Grid>
);

export const columnSizing = () => (
  <Grid sm="3">
    <Col>Item</Col>
    <Col width={2}>Item</Col>
  </Grid>
);
