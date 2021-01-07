import React, { FC } from 'react';
import { TeamMember, TeamMemberProps } from '../TeamMember';
import { Grid, Container } from '@galaxy/core';

export type TeamProps = {
  nodes?: TeamMemberProps[];
  columns?: any;
  sx?: object;
};

export const Team: FC<TeamProps> = ({ nodes, columns = [2, null, null, null, 4], sx }) => {
  if (!nodes) return null;

  const items = nodes.map((node) => {
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
