import React, { FC } from 'react';
import { Avatar, fakerTeamMembers, Section, css } from '@galaxy/core';
import { teamTeamMembersTheme } from './TeamMembers.galaxy';
const { teamTeamMembers } = teamTeamMembersTheme;

export const TeamMembers: FC<TeamMembers> = ({
  members,
  classNames,
}: TeamMembers) => {
  const teamTeamMembersCss = css({ variants: teamTeamMembers });

  const allTeamMembers = members.map((member, i) => {
    const { name, img } = member;
    return <Avatar key={i} img={`${img}`} name={`${name}`} />;
  });

  return (
    <Section className={`${teamTeamMembersCss} ${classNames}`}>
      {allTeamMembers}
    </Section>
  );
};

export type TeamMembers = {
  members?: any;
  classNames?: string;
};

TeamMembers.defaultProps = {
  members: fakerTeamMembers,
};
