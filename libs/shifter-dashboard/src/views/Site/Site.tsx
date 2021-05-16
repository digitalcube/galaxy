import React, { FC, useCallback, useState } from 'react';
import {
  SiteTeamMembers,
  SiteTeam,
  SiteName,
  SitePreview,
  SiteUrl,
  SiteOptions,
  SiteManage,
  WpAdmin,
} from '@galaxy/shifter-dashboard';
import { FaWordpress } from 'react-icons/fa';
import { SiteState } from '@galaxy/shifter-dashboard';
import { Section, Card, Progress, Tooltip, css } from '@galaxy/core';
import { siteTheme } from './Site.galaxy';
const { site } = siteTheme;

/**
 * Provide a several features to run the application for mock.
 * If you want to use it for prod, should replace to redux.
 */
const useMockFeatures = ({ state }: Pick<Site, 'state'>) => {
  const [siteState, setSiteState] = useState(state);
  return {
    siteState,
    setSiteState,
  };
};

export const Site: FC<Site> = ({
  name,
  url,
  team,
  img,
  state,
  progress,
  teamMembers,
  siteId,
  siteOptions,
}: Site) => {
  const siteCss = css({ variants: site });
  const { siteState, setSiteState } = useMockFeatures({ state });

  return (
    <Card variant="primary" className={`${siteCss}`}>
      <SitePreview img={img} siteId={siteId} />
      <Section className="flex flex-grow flex-col">
        <Progress progress={progress} />
        <Section className="flex p-4 space-y-2 relative flex-col flex-grow">
          <Section className="flex justify-between">
            <SiteName name={name} siteId={siteId} />
            <Section className="flex items-center space-x-4">
              <Tooltip main="WordPress Admin">
                <WpAdmin variant="link">
                  <FaWordpress className="text-shifter-purple-primary h-6 w-6" />
                </WpAdmin>
              </Tooltip>
              <SiteState state={siteState} />
              <SiteManage siteId={siteId} />
              <SiteOptions
                state={siteState}
                handleChangeSiteState={setSiteState}
              />
            </Section>
          </Section>
          <Section className="flex space-x-4 items-center" as="div">
            <SiteUrl url={`${url}`} />
            <SiteTeamMembers {...teamMembers} />
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
  siteOptions: any;
};
