import React, { FC } from 'react';
import { Heading, css } from '@galaxy/core';
import { siteTeamTheme } from './SiteTeam.galaxy';
const { siteTeam } = siteTeamTheme;

export const SiteTeam: FC<SiteTeam> = ({ team, className }: SiteTeam) => {
  if (!team) return null;
  const siteTeamCss = css({ variants: siteTeam });
  return <Heading fontWeight="regular" fontSize={3} className={`${siteTeamCss} ${className}`} text={team} />;
};

export type SiteTeam = {
  team?: string;
  className?: string;
};
