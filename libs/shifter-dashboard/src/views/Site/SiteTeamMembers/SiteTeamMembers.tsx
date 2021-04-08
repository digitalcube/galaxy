import React, { FC } from 'react';
import { Avatar, fakerSiteTeamMembers, Section, css, AvatarProps } from '@galaxy/core';
import { siteTeamMembersTheme } from './SiteTeamMembers.galaxy';
const { siteTeamMembers } = siteTeamMembersTheme;

export const SiteTeamMembers: FC<SiteTeamMembers> = ({
  members,
  classNames,
}: SiteTeamMembers) => {
  const siteTeamMembersCss = css({ variants: siteTeamMembers });

  return (
    <Section className={`${siteTeamMembersCss} ${classNames}`}>
      {members.map((member, i) => {
        return <Avatar key={i} {...member} />;
      })}
    </Section>
  );
};

export type SiteTeamMembers = {
  members: AvatarProps[];
  classNames?: string;
};

SiteTeamMembers.defaultProps = {
  members: fakerSiteTeamMembers,
};
