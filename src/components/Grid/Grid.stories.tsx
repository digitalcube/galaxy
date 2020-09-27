import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Grid, Col } from '../index';

export default {
  component: Grid,
  title: `Components/Grid`,
  decorators: [withKnobs],
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
  <Grid columns={[1, 3, 5, 2, '4fr 8fr']}>
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
  <Grid columns={'1fr 2fr'}>
    <div>Item</div>
    <div>Item</div>
  </Grid>
);
