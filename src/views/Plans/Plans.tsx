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
        px: '5%',
        py: 4,
      }}
    >
      <Grid sx={{ ...sx }} columns={[1, null, null, null, 2, 4]}>
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
      price: {
        month: `$1`,
        year: `$2`,
      },
      planMeta: [{ label: 'hello world' }],
    },
    {
      img: 'pricing-plan-icon-1.png',
      href: `#!`,
      title: `Tier 1`,
      price: {
        month: `$1`,
        year: `$2`,
      },
    },
    {
      img: 'pricing-plan-icon-1.png',
      href: `#!`,
      title: `Tier 2`,
      price: {
        month: `$1`,
        year: `$2`,
      },
    },
    {
      img: 'pricing-plan-icon-1.png',
      href: `#!`,
      title: `Tier 3`,
      price: {
        month: `$1`,
        year: `$2`,
      },
    },
  ],
};
