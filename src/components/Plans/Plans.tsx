import React, { FC } from 'react';
import { PlanMeta, Container, Grid, Plan } from '../index';

export type Plans = {
  columns?: any;
  nodes?: Plan[];
  node?: Plan;
  sx?: object;
};

export const Plans: FC<Plans> = ({ nodes, columns, sx }: Plans) => {
  if (!nodes) return null;

  const items = nodes.map((node: Plan) => {
    return <Plan {...node} />;
  });

  return (
    <Container
      size="4"
      sx={{
        py: 7,
      }}
    >
      <Grid sx={{ ...sx }} columns={[1, 2, null, null, 4]}>
        {items}
      </Grid>
    </Container>
  );
};

Plans.defaultProps = {
  nodes: [
    {
      img: 'pricing-plan-icon-1.png',
      title: `Free`,
      href: `#!`,
    },
    {
      img: 'pricing-plan-icon-1.png',
      href: `#!`,
      title: `Tier 1`,
    },
    {
      img: 'pricing-plan-icon-1.png',
      href: `#!`,
      title: `Tier 2`,
    },
    {
      img: 'pricing-plan-icon-1.png',
      href: `#!`,
      title: `Tier 3`,
    },
  ],
};
