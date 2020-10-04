import React, { FC } from 'react';
import { TeamMember } from '../TeamMember';
import { Grid } from '../../components/Grid';

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
    <Grid sx={{ ...sx }} columns={columns}>
      {items}
    </Grid>
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
