import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Table } from './Table';

export default {
  component: Table,
  title: `Galaxy/Components/Table`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Table />;
};
