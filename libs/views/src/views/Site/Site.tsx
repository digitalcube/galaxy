import React, { FC } from 'react';
import {
  SiteState,
  SiteMembers,
  SiteTeam,
  SiteName,
  SitePreview,
  SiteUrl,
  SiteProgress,
  SiteOptions,
} from '@galaxy/views';
import { Button, Section, Card, css } from '@galaxy/core';
import { siteTheme } from './Site.galaxy';
const { site } = siteTheme;
// import { schema } from './galaxy.config.js';

export const Site: FC<Site> = ({
  name,
  url,
  team,
  variant,
  img,
  state,
  progress,
}: Site) => {
  const siteCss = css({ variants: site });
  return (
    <Card variant="primary" className={`${siteCss}`}>
      <SitePreview img={img} />
      <Section className="flex flex-grow">
        <SiteProgress progress={progress} variant={variant} />
        <Section className="flex p-4 space-y-4 relative flex-col flex-grow">
          <Section className="flex justify-between">
            <SiteName name={name} />
            <Section className="flex items-center space-x-2">
              <SiteState state={state} />
              <Button variant="ghost">Manage site</Button>
              <SiteOptions />
            </Section>
          </Section>
          <Section className="flex space-x-4 items-center" as="div">
            <SiteUrl variant={variant} url={`${url}`} />
            <SiteMembers variant={variant} />
            <SiteTeam variant={variant} team={`${team}`} />
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
  variant?: string;
  state: 'running' | 'stopped' | string;
  progress: 0 | 1 | 2 | 3 | 4 | 5 | null;
};

Site.defaultProps = {
  name: 'name',
  url: 'url',
  team: 'team',
  variant: 'primary',
  img: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`,
  state: 'running',
  progress: 1,
};
