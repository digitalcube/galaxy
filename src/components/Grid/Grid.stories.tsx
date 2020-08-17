import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Grid } from './Grid';

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
  <Grid xl="4" lg="3" md="2">
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
