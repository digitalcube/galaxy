import React, { FC } from 'react';
import { Container, Table } from '@digitalcube/galaxy-core';

export type FeatureTable = {
  rows?: any;
};

export const FeatureTable: FC<FeatureTable> = ({ rows }) => {
  return (
    <Container size="4" sx={{ px: '5%' }}>
      <Table
        nodes={rows}
        columns={[
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
        ]}
      />
    </Container>
  );
};
