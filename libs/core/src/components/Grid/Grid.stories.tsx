import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Grid } from '../index';

export default {
  component: Grid,
  title: `Galaxy/Components/Grid`,
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

export const columnSizing = () => (
  <Grid columns={'1fr 2fr'}>
    <div>Item</div>
    <div>Item</div>
  </Grid>
);
