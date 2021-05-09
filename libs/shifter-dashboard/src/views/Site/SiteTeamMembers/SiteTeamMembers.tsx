import React, { FC } from 'react';
import { Section, Avatar, AvatarProps, css } from '@galaxy/core';
import { fakerSiteTeamMembers } from '@galaxy/faker';
import { siteTeamMembersTheme } from './SiteTeamMembers.galaxy';
const { siteTeamMembers } = siteTeamMembersTheme;

export type SiteTeamMembers = {
  members?: AvatarProps[];
  className?: string;
};

export const SiteTeamMembers: FC<SiteTeamMembers> = ({
  members,
  className,
}) => {
  const siteTeamMembersCss = css({ variants: siteTeamMembers });
  if (!members) return null;

  const allSiteTeamMembers = members.map((member, i) => {
    return <Avatar className="relative" key={i} {...member} />;
  });

  return (
    <Section className={`${siteTeamMembersCss} ${className}`}>
      {allSiteTeamMembers}
    </Section>
  );
};

SiteTeamMembers.defaultProps = {
  members: fakerSiteTeamMembers,
  className: '',
};
