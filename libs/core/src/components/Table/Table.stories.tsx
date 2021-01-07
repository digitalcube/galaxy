import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Table, TableProps } from './Table';


const props: TableProps = {
  nodes: [
    {
      col1: 'Plans',
      col2: 'Free',
      col3: 'Tier 1',
      col4: 'Tier 2',
      col5: 'Tier 3',
    },
    {
      col1: 'Sites',
      col2: '1',
      col3: '1',
      col4: '1',
      col5: '1',
    },
    {
      col1: 'Storage',
      col2: '500 MB',
      col3: '5 GB',
      col4: '50 GB',
      col5: '50 GB',
    },
  ],
}
export default {
  component: Table,
  title: `Galaxy/Components/Table`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Table {...props} />;
};
