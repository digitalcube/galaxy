import React, { FC } from 'react';
import { Container, Grid } from '@digitalcube/galaxy-core';
import { Plan } from '../Plan';
import { PlanProps } from '../Plan/Plan';

export type PlansProps = {
  nodes: PlanProps[];
  sx?: object;
};

export const Plans: FC<PlansProps> = ({ nodes, sx }) => {
  if (!nodes) return null;
  return (
    <Container
      size="4"
      sx={{
        px: '5%',
        py: 4,
      }}
    >
      <Grid sx={{ ...sx }} columns={[1, null, null, null, 2, 4]}>
        {nodes.map((node: PlanProps, i: number) => {
          return <Plan key={i} {...node} />;
        })}
      </Grid>
    </Container>
  );
};
