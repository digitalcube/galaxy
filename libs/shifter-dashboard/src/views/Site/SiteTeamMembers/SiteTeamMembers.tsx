import React, { FC } from "react";
import { Section, Avatar, AvatarProps } from "@galaxy/core";

export type SiteTeamMembers = {
  members?: AvatarProps[];
  className?: string;
};

export const SiteTeamMembers: FC<SiteTeamMembers> = ({
  members,
  className,
}) => {
  if (!members) return null;

  const allSiteTeamMembers = members.map((member, i) => {
    return <Avatar key={i} {...member} />;
  }); 

  return <Section className={`${className}`}>{allSiteTeamMembers}</Section>;
};
