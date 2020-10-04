import React, { FC } from 'react';
import { TeamMember } from '../TeamMember';
import { Grid } from '../../components/Grid';
import { Container } from '../../components/Container';

export type Team = {
  nodes?: any;
  columns?: any;
  node?: TeamMember;
  sx?: object;
};

export const Team: FC<Team> = ({ nodes, columns, sx }: Team) => {
  if (!nodes) return null;

  const items = nodes.map((node: TeamMember) => {
    return <TeamMember {...node} />;
  });

  return (
    <Container size="4" sx={{ px: `5%` }}>
      <Grid sx={{ ...sx }} columns={columns}>
        {items}
      </Grid>
    </Container>
  );
};

Team.defaultProps = {
  columns: [2, null, null, null, 4],
  nodes: [
    {
      title: `Magna fugiat`,
      subtitle: `XXX`,
    },
    {
      title: `Magna fugiat`,
      subtitle: `XXX`,
    },
    {
      title: `Magna fugiat`,
      subtitle: `XXX`,
    },
    {
      title: `Magna fugiat`,
      subtitle: `XXX`,
    },
    {
      title: `Magna fugiat`,
      subtitle: `XXX`,
    },
    {
      title: `Magna fugiat`,
      subtitle: `XXX`,
    },
  ],
};
