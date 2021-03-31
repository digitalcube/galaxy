import React, { FC } from 'react';
import { Avatar, AvatarProps, Section, css } from '@galaxy/core';
import { teamTeamMembersTheme } from './TeamMembers.galaxy';
const { teamTeamMembers } = teamTeamMembersTheme;

export const TeamMembers: FC<TeamMembers> = ({
  members,
  classNames,
}: TeamMembers) => {
  const teamTeamMembersCss = css({ variants: teamTeamMembers });
  return (
    <Section className={`${teamTeamMembersCss} ${classNames}`}>
      {members.map((member, i) => {
        return <Avatar key={i} {...member} />;
      })}
    </Section>
  );
};

export type TeamMembers = {
  members: AvatarProps[];
  classNames?: string;
};
