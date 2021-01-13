import React from 'react';

import { Grid } from '../index';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Grid,
  title: `Galaxy/Components/Grid`,
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
