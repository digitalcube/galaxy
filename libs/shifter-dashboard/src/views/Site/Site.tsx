import React, { FC } from 'react';
import {
  SiteTeamMembers,
  SiteTeam,
  SiteName,
  SitePreview,
  SiteUrl,
  SiteProgress,
  SiteOptions,
  SiteManage,
} from '@galaxy/shifter-dashboard';
import { SiteState } from '@galaxy/shifter-dashboard';
import { Section, Card, css } from '@galaxy/core';
import { siteTheme } from './Site.galaxy';
const { site } = siteTheme;

export const Site: FC<Site> = ({
  name,
  url,
  team,
  img,
  state,
  progress,
  teamMembers,
  siteId,
}: Site) => {
  const siteCss = css({ variants: site });
  return (
    <Card variant="primary" className={`${siteCss}`}>
      <SitePreview img={img} />
      <Section className="flex flex-grow flex-row">
        <SiteProgress progress={progress} />
        <Section className="flex p-4 space-y-4 relative flex-col flex-grow">
          <Section className="flex justify-between">
            <SiteName name={name} />
            <Section className="flex items-center space-x-2">
              <SiteState state={state} />
              <SiteManage siteId={siteId} />
              <SiteOptions />
            </Section>
          </Section>
          <Section className="flex space-x-4 items-center" as="div">
            <SiteUrl url={`${url}`} />
            {teamMembers ? <SiteTeamMembers {...teamMembers} />: null}
            <SiteTeam team={`${team}`} />
          </Section>
        </Section>
      </Section>
    </Card>
  );
};

export type Site = {
  img?: string;
  name: string;
  team?: string;
  url: string;
  state: 'running' | 'stopped' | string;
  progress: 0 | 1 | 2 | 3 | 4 | 5 | null;
  teamMembers?: SiteTeamMembers;
  siteId: string;
};