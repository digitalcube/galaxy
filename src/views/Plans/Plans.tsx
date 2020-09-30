import React, { FC } from 'react';
import { Container } from '../../components/Container';
import { Grid } from '../../components/Grid';
import { Plan } from '../Plan';

export type Plans = {
  nodes?: Plan[];
  node?: Plan;
  sx?: object;
};

export const Plans: FC<Plans> = ({ nodes, sx }: Plans) => {
  if (!nodes) return null;

  const items = nodes.map((node: Plan) => {
    return <Plan {...node} />;
  });

  return (
    <Container
      size="4"
      sx={{
        py: 4,
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
