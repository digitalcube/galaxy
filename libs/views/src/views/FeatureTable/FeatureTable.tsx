import React, { FC } from 'react';
import { Container, Table } from '@galaxy/core';

export type FeatureTable = {
  rows?: any;
};

export const FeatureTable: FC<FeatureTable> = ({ rows }: FeatureTable) => {
  return (
    <Container size="4" sx={{ px: '5%' }}>
      <Table nodes={rows} />
    </Container>
  );
};
