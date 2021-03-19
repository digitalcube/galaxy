import React, { FC } from 'react';
import { Avatar, fakerSiteTeamMembers, Section, css } from '@galaxy/core';
import { siteTeamMembersTheme } from './SiteTeamMembers.galaxy';
const { siteTeamMembers } = siteTeamMembersTheme;

export const SiteTeamMembers: FC<SiteTeamMembers> = ({
  members,
  classNames,
}: SiteTeamMembers) => {
  const siteTeamMembersCss = css({ variants: siteTeamMembers });

  const allSiteTeamMembers = members.map((member, i) => {
    const { name, img } = member;
    return <Avatar key={i} img={`${img}`} name={`${name}`} />;
  });

  return (
    <Section className={`${siteTeamMembersCss} ${classNames}`}>
      {allSiteTeamMembers}
    </Section>
  );
};

export type SiteTeamMembers = {
  members?: any;
  classNames?: string;
};

SiteTeamMembers.defaultProps = {
  members: fakerSiteTeamMembers,
};
