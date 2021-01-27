import React from 'react';

import { Table, TableProps } from './Table';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Table,
  title: `Galaxy/Components/Table`,
};
const props: TableProps = {
  columns: [
    {
      Header: '',
      accessor: 'col1',
    },
    {
      Header: 'Free',
      accessor: 'col2',
    },
    {
      Header: 'Tier 1',
      accessor: 'col3',
    },
    {
      Header: 'Tier 2',
      accessor: 'col4',
    },
    {
      Header: 'Tier 3',
      accessor: 'col5',
    },
  ],
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
};

export const Default = () => {
  return <Table {...props} />;
};
